"use client";

import { useRef, useEffect } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "motion/react";

export default function CurlAnimation() {
  const pathRef = useRef<SVGPathElement>(null);
  const lengthRef = useRef(0);

  const { scrollYProgress } = useScroll();
  const dashOffset = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    if (pathRef.current) {
      lengthRef.current = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${lengthRef.current}`;
      pathRef.current.style.strokeDashoffset = `${lengthRef.current}`;
    }
  }, []);

  useMotionValueEvent(dashOffset, "change", (v) => {
    if (pathRef.current && lengthRef.current) {
      pathRef.current.style.strokeDashoffset = `${lengthRef.current * v}`;
    }
  });

  return (
    <svg
      className="w-[1440px] h-[5637.81px] left-0 top-[705px] absolute"
      viewBox="0 0 1440 5838"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="curl-gradient"
          x1="864"
          y1="174.004"
          x2="898"
          y2="5870"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.11605" stopColor="#D0A5F9" />
          <stop offset="0.558025" stopColor="#E7C8FC" />
          <stop offset="1" stopColor="#FDEBFF" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d="M752 100.004C964.166 266.671 1406.9 499.704 1346.5 1130.5C1271 1919 559.5 1706 161 2449.5C-193.549 3111 499.531 3813.09 872.5 3745.5C1245 3678 1270 3034.5 796 3034.5C472.35 3034.5 47.3183 3484.23 322.5 4059C553.266 4541 1061.18 4541 1245 4990C1449.29 5489 1041.5 5921 610 5658.5"
        stroke="url(#curl-gradient)"
        strokeWidth="200"
        strokeLinecap="round"
        style={{ willChange: "stroke-dashoffset" }}
      />
    </svg>
  );
}
