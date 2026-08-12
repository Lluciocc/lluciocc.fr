import { lazy } from "react";
import { LinkPreview } from "@/components/link-preview";
import type { ProjectItem } from "./projects";

// most of the icon are falling into fallback
export const PROJECT_ITEMS: ProjectItem[] = [
	{
		id: "sspm",
		title: "SSPM Viewver",
		description: "An unofficial map viewer for Rhythia.",
		link: "https://sspm.lluciocc.fr",
		image: "https://github.com/Lluciocc/sspm-viewver/blob/main/assets/logo.png?raw=true",
		component: lazy(() => import("@/components/projects/sspm")),
	},
	{
		id: "shapebound",
		title: "ShapeBound",
		description: "A relaxing polyomino puzzle game for GNOME",
		link: "https://flathub.org/en/apps/io.github.Lluciocc.Shapebound",
		image: "https://imgproxy.flathub.org/insecure/dpr:1/f:webp/q:100/rs:fit:128:128/aHR0cHM6Ly9kbC5mbGF0aHViLm9yZy9tZWRpYS9pby9naXRodWIvTGx1Y2lvY2MuU2hhcGVib3VuZC84N2MyNzE0ODQxOWZiNjAwYWYxZDI5NjAxMTY5MmI4ZS9pY29ucy8xMjh4MTI4L2lvLmdpdGh1Yi5MbHVjaW9jYy5TaGFwZWJvdW5kLnBuZw",
		component: lazy(() => import("@/components/projects/shapebound")),
	},
	{
		id: "groovia",
		title: "Groovia",
		description: "Groovia is a modern GNOME music player for local files",
		link: "https://flathub.org/en/apps/io.github.Lluciocc.Groovia",
		image: "https://raw.githubusercontent.com/Lluciocc/groovia/cc0c330248b52c9f9808868b3e063e9c6810e953/data/icons/hicolor/scalable/apps/io.github.Lluciocc.Groovia.svg",
		component: lazy(() => import("@/components/projects/groovia")),
	},
	{
		id: "vish",
		title: "Vish",
		description: "Vish is a graphical editor for creating and managing Bash scripts using a node-based interface.",
		link: "https://flathub.org/en/apps/io.github.Lluciocc.Vish",
		image: "https://raw.githubusercontent.com/Lluciocc/Vish/0aca8b5a6f776d468d13c64f52a3dc3037d82159/assets/icons/Vish.svg",
		component: lazy(() => import("@/components/projects/vish")),
	},
	{
		id: "connex",
		title: "Connex",
		description: "Connex is a modern and intuitive Wi-Fi manager for Linux, powered by NetworkManager, offering a clean interface, a full CLI mode, seamless desktop integration, VPN and proxy management, hidden network support, QR-code pairing, and even a built-in speedtest for a complete networking experience.",
		link: "https://github.com/Lluciocc/connex",
		image: "/connex.png",
		component: lazy(() => import("@/components/projects/connex")),
	},
	{
		id: "acu",
		title: "AutoCollidersUnity",
		description: "AutoCollidersUnity is a Unity Editor extension that automatically generates colliders for your 3D models, saving you time and effort in the game development process.",
		link: "https://github.com/Lluciocc/AutoCollidersUnity",
		image: "https://styles.redditmedia.com/t5_2qtuh/styles/communityIcon_5xhbhiz1ukbb1.jpg?width=128&frame=1&auto=webp&s=485ca89016cd2e3a41f58713b8047708cd9600f6",
		component: lazy(() => import("@/components/projects/acu")),
	},
	{
		id: "lodify",
		title: "LODIFY",
		description: "LODIFY is a Unity Editor extension that automatically generates level of detail (LOD) meshes for your 3D models, saving you time and effort in the game development process.",
		link: "https://assetstore.unity.com/packages/3d/props/tools/lodify-auto-lod-generator-mesh-optimizer-simplifier-scene-analys-325106",
		image: "https://styles.redditmedia.com/t5_2qtuh/styles/communityIcon_5xhbhiz1ukbb1.jpg?width=128&frame=1&auto=webp&s=485ca89016cd2e3a41f58713b8047708cd9600f6",
		component: lazy(() => import("@/components/projects/lodify")),
	},
	{
		id: "repo",
		title: "Gambling Machine",
		description: "Gambling Machine is a mod to gamble in R.E.P.O.",
		link: "https://thunderstore.io/c/repo/p/Lluciocc/GamblingMachine/",
		image: "",
		component: lazy(() => import("@/components/projects/repo")),
	},
	{
		id: "spc",
		title: "spc.to",
		description: "spc.to is a website that allows to see your grade from EcoleDirecte",
		link: "https://github.com/Lluciocc/SPC.to",
		image: "",
		component: lazy(() => import("@/components/projects/spc")),
	},
	{
		id: "bos",
		title: "BoredOS",
		description: "BoredOS is a free and open source hobbyist operating system",
		link: "https://github.com/BoredOS",
		image: "https://github.com/BoredOS/BoredOS/raw/main/base/Library/Images/branding/bos.png?raw=true",
		component: lazy(() => import("@/components/projects/bos")),
	}
];

export const WORK_ITEMS = [
	{
		logo: "https://www.epitech.eu/wp-content/uploads/Favicon-512-300x300.png",
		alt: "Epitech",
		link: "https://www.epitech.eu/",
		content: (
			<>
				I'm a Student in first year at{" "}
				<LinkPreview url="https://www.epitech.eu/">Epitech</LinkPreview>, working across
				&nbsp;multiple projects and technologies. I have a strong interest in backend development, but I also enjoy working on frontend and design. 
				I'm always looking for new challenges and opportunities to learn and grow.
			</>
		),
	},
	{
		logo: "https://boredos.dev/branding/bOS14.png",
		alt: "Open Source Contributor & Maintainer",
		link: "https://github.com/lluciocc",
		content: (
			<>
				I'm an open source contributor and maintainer, mainly on{" "}
				<LinkPreview url="https://github.com/BoredOS">BoredOS</LinkPreview>. 
				I'm proving my skills in open source development and contributing to the community is something I really enjoy.
			</>
		),
	},
	{
		logo: "/logo.png",
		alt: "Freelance",
		link: "https://lluciocc.fr?tab=contact",
		content: (
			<>
				I'm always open to freelance work. If you're interested, feel free to{" "}
				<a
					href="mailto:lucas.cialdella57@gmail.com?subject=Hi Lluciocc!&body=Heard you're available for freelancing, are you up for a chat?"
					target="_blank"
					rel="noreferrer"
					className="text-[var(--color-fg)] font-semibold hover:no-underline"
				>
					email me
				</a>
			</>
		),
	},
];
