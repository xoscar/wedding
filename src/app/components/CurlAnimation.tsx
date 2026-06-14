"use client";

import { useRef, useEffect } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "motion/react";

const SVG_TOP = 705;
const SVG_HEIGHT = 5637.81;
const VIEWBOX_HEIGHT = 5838;
const PAGE_HEIGHT = 6770;

type CurlAnimationProps = {
  /** Page Y where the curl should finish (top of grass / green section). */
  endPageY?: number;
};

function pageYToViewBoxY(pageY: number) {
  return ((pageY - SVG_TOP) / SVG_HEIGHT) * VIEWBOX_HEIGHT;
}

function findLengthAtY(path: SVGPathElement, targetY: number) {
  const total = path.getTotalLength();
  const start = total * 0.55;
  let best = start;
  let bestDist = Infinity;

  for (let i = 0; i <= 300; i++) {
    const len = start + (i / 300) * (total - start);
    const dist = Math.abs(path.getPointAtLength(len).y - targetY);
    if (dist < bestDist) {
      bestDist = dist;
      best = len;
    }
  }

  return best;
}

export default function CurlAnimation({ endPageY = 4537 }: CurlAnimationProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const lengthRef = useRef(0);
  const stopLengthRef = useRef(0);

  const finishProgress = endPageY / PAGE_HEIGHT;
  const { scrollYProgress } = useScroll();
  const progress = useTransform(
    scrollYProgress,
    [0, finishProgress],
    [0, 1],
    { clamp: true },
  );

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const total = path.getTotalLength();
    lengthRef.current = total;
    stopLengthRef.current = findLengthAtY(path, pageYToViewBoxY(endPageY));

    const updateOffset = (t: number) => {
      const stop = stopLengthRef.current;
      path.style.strokeDasharray = `${total}`;
      path.style.strokeDashoffset = `${total - stop * t}`;
    };

    updateOffset(progress.get());
    return progress.on("change", updateOffset);
  }, [endPageY, progress]);

  return (
    <svg
      className="absolute left-0 top-[705px] w-[1440px] h-[5637.81px]"
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
