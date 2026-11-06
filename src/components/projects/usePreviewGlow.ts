import { useEffect, useRef, useState } from "react";

export function usePreviewGlow(active: boolean) {
	const previewRef = useRef<HTMLDivElement>(null);
	const [glowImage, setGlowImage] = useState<string>();

	useEffect(() => {
		if (!active) return;

		const snapshot = document.createElement("canvas");
		const context = snapshot.getContext("2d");
		const updateGlow = () => {
			const media = previewRef.current?.querySelector("img, video, canvas");
			if (media instanceof HTMLImageElement) {
				// Reuse the image directly, including remote images without CORS.
				if (media.complete && media.naturalWidth) {
					setGlowImage(media.currentSrc || media.src);
				}
				return;
			}
			if (!context || !(media instanceof HTMLVideoElement || media instanceof HTMLCanvasElement)) return;
			let width = 0;
			let height = 0;
			if (media instanceof HTMLVideoElement && media.readyState >= 2) {
				width = media.videoWidth;
				height = media.videoHeight;
			} else if (media instanceof HTMLCanvasElement) {
				width = media.width;
				height = media.height;
			}
			if (!media || !width || !height) return;

			// A small frame keeps the halo in sync without decoding a second video.
			snapshot.width = 64;
			snapshot.height = Math.max(1, Math.round((64 * height) / width));
			try {
				context.drawImage(media, 0, 0, snapshot.width, snapshot.height);
				setGlowImage(snapshot.toDataURL());
			} catch {
				// A future cross-origin video may disallow canvas snapshots.
				setGlowImage(undefined);
			}
		};

		updateGlow();
		const interval = window.setInterval(updateGlow, 700);
		return () => window.clearInterval(interval);
	}, [active]);

	return { previewRef, glowImage };
}
