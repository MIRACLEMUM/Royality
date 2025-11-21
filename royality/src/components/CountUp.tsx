import { useEffect, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
}

export const CountUp = ({ end, duration = 2 }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 150); // 60 frames per second

    const step = () => {
      start += increment;

      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
};
