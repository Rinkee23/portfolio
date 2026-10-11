import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useTheme } from "../../context/useTheme";

export function CursorFollower() {
  const { reducedMotion } = useTheme();
  const prefersReduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState(20);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  // Keep stable references to the motion values so the mount-only effect
  // doesn't need them in its dependency array.
  const xRef = useRef(x);
  const yRef = useRef(y);
  xRef.current = x;
  yRef.current = y;

  useEffect(() => {
    if (reducedMotion || prefersReduced) return;

    const onMouseMove = (e: MouseEvent) => {
      xRef.current.set(e.clientX);
      yRef.current.set(e.clientY);
    };
    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);
    const onEnterInteractive = () => setSize(40);
    const onLeaveInteractive = () => setSize(20);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, [role='button'], .interactive"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseleave", onMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion, prefersReduced]);

  if (reducedMotion || prefersReduced) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] translate-x-[-50%] translate-y-[-50%]"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="rounded-full border border-accent/50 bg-accent/10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: size, height: size }}
      />
      <motion.div
        className="rounded-full border border-accent/30 bg-transparent"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: size * 1.5, height: size * 1.5 }}
      />
    </motion.div>
  );
}

export default CursorFollower;