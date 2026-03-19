import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

/**
 * Scroll progress bar at top of page
 */
export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, hsl(211 100% 50%), hsl(199 94% 67%))",
      }}
    />
  );
};

/**
 * High-impact hero scroll masking. 
 * Video remains full screen and fixed, content crossfades as the next section slides over it.
 */
export const HeroScrollMask = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`origin-top overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

/**
 * Apple-style Sticky Stacked Card Effect
 * The container must be tall (e.g., h-[300vh]) to allow scroll progress to calculate.
 */
export const StackedCardElement = ({
  children,
  index,
  total,
  className = "",
}: {
  children: React.ReactNode;
  index: number;
  total: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Calculate when this specific card should start its exit transition
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 50px"], 
  });

  // Calculate global exit when scrolling past the sticky container
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - index) * 0.05]);
  const y = useTransform(scrollYProgress, [0, 1], [0, (total - index) * -20]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - index) * 0.2]);

  return (
    <div ref={ref} className="sticky top-24 w-full h-auto flex justify-center mb-10">
      <motion.div
        style={{ scale, y, opacity }}
        className={`w-full origin-top ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

/**
 * Section that scales up and fades in on scroll — Apple-style
 */
export const ScrollRevealSection = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ type: "spring", bounce: 0.2, duration: 1.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * iOS Apple style peeking scroll effect with 3D rotation and smooth spring
 */
export const PeakScrollReveal = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const scale = useTransform(smoothProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.4, 1], [0, 0.5, 1]);      
  const rotateX = useTransform(smoothProgress, [0, 1], [35, 0]);
  const y = useTransform(smoothProgress, [0, 1], [150, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        rotateX,
        y,
        transformPerspective: 1500,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Parallax wrapper
 */
export const Parallax = ({
  children,
  speed = 0.5,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 40, restDelta: 0.001 });
  const y = useTransform(smoothProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

/**
 * Scale-on-scroll — element grows as it enters viewport
 */
export const ScrollScale = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const scale = useTransform(smoothProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
};

/**
 * Horizontal scroll-linked text reveal — words light up as you scroll
 */
export const TextReveal = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`} style={{ gap: "0.3em" }}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
      })}
    </div>
  );
};

const Word = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: any;
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
    </motion.span>
  );
};

