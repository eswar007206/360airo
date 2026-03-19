import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 5000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 5000], [0, 800]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; radius: number; vx: number; alpha: number; decrease: boolean }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = window.innerWidth < 768 ? 100 : 300;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          vx: Math.floor(Math.random() * 50) - 25,
          alpha: Math.random(),
          decrease: Math.random() > 0.5,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.2, 0,
        canvas.width * 0.2, canvas.height * 0.2, canvas.width * 0.6
      );
      gradient.addColorStop(0, 'rgba(99, 102, 241, 0.08)');
      gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.03)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#fff';
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        if (s.decrease) {
          s.alpha -= 0.005;
          if (s.alpha <= 0.1) s.decrease = false;
        } else {
          s.alpha += 0.005;
          if (s.alpha >= 1) s.decrease = true;
        }

        s.y -= 0.1;
        if (s.y < 0) s.y = canvas.height;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#05050A]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-blue-600/10 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] bg-slate-400/10 rounded-full blur-[120px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05050A]/50 to-[#05050A] pointer-events-none" />
    </div>
  );
};