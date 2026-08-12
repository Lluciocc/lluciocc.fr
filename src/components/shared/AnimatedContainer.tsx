import { type HTMLMotionProps, motion, type Variants } from "motion/react";
import { staggerContainerVariants } from "@/utils/animations";

interface AnimatedContainerProps extends Omit<HTMLMotionProps<"div">, "as"> {
  variants?: Variants;
  as?: keyof JSX.IntrinsicElements;
}

export const AnimatedContainer = ({
  children,
  variants = staggerContainerVariants,
  as = "div",
  ...props
}: AnimatedContainerProps) => {
  const MotionComponent = motion[
    as as keyof typeof motion
  ] as React.ComponentType<
    HTMLMotionProps<"div" | "ol" | "ul" | "section" | "article">
  >;

  return (
    <MotionComponent
      variants={variants}
      initial="initial"
      animate="animate"
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
