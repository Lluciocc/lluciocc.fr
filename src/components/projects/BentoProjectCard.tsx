import { AnimatePresence, motion } from "motion/react";
import React, { Suspense } from "react";
import { FallbackIcon } from "@/components/shared";
import { hoverVariants, slideUpItemVariants } from "@/utils/animations";
import type { BentoSize } from "@/utils/bento-config";
import { buildClassName } from "@/utils/functions";
import type { ProjectItem } from "@/utils/projects";
import { usePreviewGlow } from "./usePreviewGlow";

interface BentoProjectCardProps extends Omit<ProjectItem, "component"> {
  PreviewComponent?: React.ComponentType;
  size?: BentoSize;
  className?: string;
}

const sizeClasses = {
  small: "sm:col-span-1 row-span-1 ",
  medium: "sm:col-span-2 row-span-2",
  large: "sm:col-span-4 row-span-2",
  smallWide: "sm:col-span-2 row-span-1",
};

const BentoProjectCardComponent = ({
  title,
  description,
  link,
	image,
	interactive = false,
	PreviewComponent,
  size = "small",
  className = "",
}: BentoProjectCardProps) => {
  const [imageError, setImageError] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const { previewRef, glowImage } = usePreviewGlow(hovered);

  const styles = React.useMemo(
    () =>
      buildClassName([
        sizeClasses[size],
        className,
        "bento-project-card relative rounded-2xl",
        "group cursor-pointer min-h-[128px]",
      ]),
    [size, className],
  );

  return (
    <motion.div
      variants={slideUpItemVariants}
      className={styles}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onPointerCancel={() => setHovered(false)}
    >
      <div className="bento-project-glow" aria-hidden="true">
        <div
          className="bento-project-glow-image"
          style={{ backgroundImage: glowImage ? `url(${JSON.stringify(glowImage)})` : undefined }}
        />
      </div>
      <div className="absolute inset-0 overflow-hidden rounded-2xl border border-zinc-500/15 bg-zinc-950">
		{!interactive && (
			<a
				href={link}
				target="_blank"
				rel="noreferrer"
				className="absolute inset-0 z-10 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
			>
				<span className="sr-only">{title}</span>
			</a>
		)}

      {PreviewComponent && (
        <div ref={previewRef} className="absolute inset-0 overflow-hidden">
          <Suspense fallback={null}>
            <PreviewComponent />
          </Suspense>
        </div>
      )}

      <div
        className={`absolute inset-0 overflow-hidden bento-content-mask ${
          interactive ? "pointer-events-none" : ""
        }`}
      />

      <div
        className={`absolute bottom-0 left-0 right-0 z-20 p-4 pb-2 overflow-hidden ${
          interactive ? "pointer-events-none" : ""
        }`}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={hoverVariants}
          >
            <div className="flex items-center gap-2 mb-2">
              {imageError ? (
                <FallbackIcon />
              ) : (
                <img
                  className="flex-shrink-0 w-5 h-5 rounded-sm"
                  src={image}
                  alt={title}
                  onError={() => setImageError(true)}
                />
              )}
              <h4 className="text-sm font-medium truncate text-white/90">
                {title}
              </h4>
            </div>

            {(size === "medium" || size === "large") && (
              <p className="text-xs leading-relaxed text-white/70 line-clamp-2">
                {description}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      </div>
    </motion.div>
  );
};

export const BentoProjectCard = React.memo(BentoProjectCardComponent);
