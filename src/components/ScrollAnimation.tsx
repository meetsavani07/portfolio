import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  from?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotate?: number;
  };
  to?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotate?: number;
  };
  className?: string;
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
  threshold?: [number, number];
}

const ScrollAnimation = ({
  children,
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  className = '',
  springConfig = { stiffness: 80, damping: 15, mass: 1 },
  threshold = [0.1, 1],
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const springScrollProgress = useSpring(scrollYProgress, springConfig);

  const opacity = useTransform(springScrollProgress, threshold, [
    from.opacity ?? 0,
    to.opacity ?? 1,
  ]);
  const y = useTransform(springScrollProgress, threshold, [
    from.y ?? 0,
    to.y ?? 0,
  ]);
  const x = useTransform(springScrollProgress, threshold, [
    from.x ?? 0,
    to.x ?? 0,
  ]);
  const scale = useTransform(springScrollProgress, threshold, [
    from.scale ?? 1,
    to.scale ?? 1,
  ]);
  const rotate = useTransform(springScrollProgress, threshold, [
    from.rotate ?? 0,
    to.rotate ?? 0,
  ]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
        x,
        scale,
        rotate,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;