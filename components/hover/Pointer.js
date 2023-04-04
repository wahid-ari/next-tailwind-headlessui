import { useEffect, useRef, useState } from 'react';
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  useVelocity
} from 'framer-motion';

function Cell({ mouseX, mouseY }) {
  const [position, setPosition] = useState([0, 0]);
  const ref = useRef(null);
  const direction = useTransform(
    [mouseX, mouseY],
    ([newX, newY]) => {
      const diffY = newY - position[1];
      const diffX = newX - position[0];
      const angleRadians = Math.atan2(diffY, diffX);
      const angleDegrees = Math.floor(angleRadians * (180 / Math.PI));
      return angleDegrees;
    }
  );
  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // center x coordinate
    const x = rect.left + CELL_SIZE / 2;
    // center y coordinate
    const y = rect.top + CELL_SIZE / 2;
    setPosition([x, y]);
  }, [ref.current]);
  return (
    <div ref={ref} className="cells w-[60px] h-[60px] border dark:border-neutral-700 flex items-center justify-center select-none">
      <motion.div style={{ zIndex: 0, rotate: direction }}>→</motion.div>
    </div>
  )
}

function Container({ columns, children }) {
  return (
    <motion.div style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      className="container-pointer w-full h-full overflow-hidden grid">
      {children}
    </motion.div>
  )
}

const CELL_SIZE = 60;

export default function Pointer() {
  const wrapperRef = useRef(null);
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  // mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // mouse position from center
  const centerMouseX = useTransform(mouseX, (newX) => {
    if (typeof window !== "undefined") {
      return newX - window.innerWidth / 2;
    }
  });
  const centerMouseY = useTransform(mouseY, (newY) => {
    if (typeof window !== "undefined") {
      return newY - window.innerHeight / 2;
    }
  });
  // eased mouse position
  const mouseXEased = useMotionValue(0);
  const mouseYEased = useMotionValue(0);
  // mouse velocity
  const mouseXVelocity = useVelocity(mouseXEased);
  const mouseYVelocity = useVelocity(mouseYEased);
  const mouseVelocity = useTransform(
    [mouseXVelocity, mouseYVelocity],
    ([latestX, latestY]) => Math.abs(latestX) + Math.abs(latestY)
  );
  // determine rows and columns
  useEffect(() => {
    // possibly use a resize observer here instead
    if (typeof window === 'undefined') return;
    const calculateGrid = () => {
      const columnCount = Math.ceil(window.innerWidth / CELL_SIZE);
      setColumns(columnCount);
      const rowCount = Math.ceil(window.innerHeight / CELL_SIZE);
      setRows(rowCount);
    };
    // calculate the grid on load
    calculateGrid();
    // recalculate grid on resize
    window.addEventListener('resize', calculateGrid);
    // cleanup
    return () => {
      window.removeEventListener('resize', calculateGrid);
    };
  }, []);

  function mouseLeaveEvent(e) {
  }

  // handle mouse move on document
  useEffect(() => {
    const handleMouseMove = (e) => {
      // animate mouse x and y
      animate(mouseX, e.clientX);
      animate(mouseY, e.clientY);
      // animate eased mouse x and y
      const transition = {
        ease: 'easeOut',
        duration: 1,
      };
      animate(mouseXEased, e.clientX, transition);
      animate(mouseYEased, e.clientY, transition);
    };
    if (typeof window === 'undefined') return;
    if (wrapperRef) {
      wrapperRef.current.addEventListener('mousemove', handleMouseMove)
      wrapperRef.current.addEventListener('mouseleave', mouseLeaveEvent)
    }
    // cleanup
    return () => {
      wrapperRef.current?.removeEventListener('mousemove', handleMouseMove)
      wrapperRef.current?.removeEventListener('mouseleave', mouseLeaveEvent)
    };
  }, []);

  const opacity = useTransform(mouseVelocity, [0, 1000], [0, 1]);
  const WebkitMaskPosition = useMotionTemplate`${centerMouseX}px ${centerMouseY}px`;
  return (
    <div ref={wrapperRef} className="relative">
      <Container columns={columns} style={{
        opacity,
        WebkitMaskPosition,
      }}>
        {Array.from({ length: columns * rows }).map((_, i) => (
          <Cell key={i} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </Container>
    </div>
  )
}