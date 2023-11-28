import { useEffect, useRef } from 'react';
import { animate, motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';

export default function Dotgrid() {
  // a reference for our animated card element
  const wrapperRef = useRef(null);
  const cardRef = useRef(null);
  // mouse position
  let mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  let mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);
  // rotation
  const dampen = 70;
  let rotateX = useTransform(mouseY, (newMouseY) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateX = newMouseY - rect.top - rect.height / 2;
    return -newRotateX / dampen;
  });
  let rotateY = useTransform(mouseX, (newMouseX) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateY = newMouseX - rect.left - rect.width / 2;
    return newRotateY / dampen;
  });
  // sheen
  const diagonalMovement = useTransform([rotateX, rotateY], ([newRotateX, newRotateY]) => {
    const position = newRotateX + newRotateY;
    return position;
  });
  const sheenPosition = useTransform(diagonalMovement, [-5, 5], [-100, 200]);
  const sheenOpacity = useTransform(sheenPosition, [-250, 50, 250], [0, 0.1, 0]);
  const sheenGradient = useMotionTemplate`linear-gradient(
    55deg,
    transparent,
    rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%,
    transparent)`;

  function mouseLeaveEvent(e) {}

  // handle mouse move on document
  useEffect(() => {
    const handleMouseMove = (e) => {
      // animate mouse x and y
      animate(mouseX, e.clientX);
      animate(mouseY, e.clientY);
    };
    if (typeof window === 'undefined') return;
    // recalculate grid on resize
    if (wrapperRef) {
      wrapperRef.current.addEventListener('mousemove', handleMouseMove);
      wrapperRef.current.addEventListener('mouseleave', mouseLeaveEvent);
    }
    // cleanup
    return () => {
      wrapperRef.current?.removeEventListener('mousemove', handleMouseMove);
      wrapperRef.current?.removeEventListener('mouseleave', mouseLeaveEvent);
    };
  }, []);

  return (
    <div ref={wrapperRef} className='container-wrapper relative my-8 h-screen w-full border border-red-500'>
      <motion.div className='rotation-wrapper h-full w-full' style={{ rotateX, rotateY }}>
        <div className='dot-grid flex items-center justify-center'>
          <motion.div
            ref={cardRef}
            style={{ backgroundImage: sheenGradient }}
            className='w-[300px] rounded-xl bg-neutral-500/20 brightness-150 backdrop-blur-lg dark:bg-neutral-800/30'
          >
            <div className='h-[400px] w-[300px] rounded-xl border dark:border-neutral-800'></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
