import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AnimatedHeader() {
  const shrinkDivRef = useRef<HTMLDivElement>(null);
  const changeColorSpanRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!shrinkDivRef.current || !changeColorSpanRef.current) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 3 });

    // Shrink
    tl.to(shrinkDivRef.current, {
      width: 0,
      height: 0,
      duration: 3,
      ease: "power1.inOut",
    });
    tl.to(shrinkDivRef.current, { opacity: 0, duration: 0 });
    tl.to(changeColorSpanRef.current, {
      color: "#00B684",
      duration: 0.3,
    });

    tl.to({}, { duration: 4 }); // Pause

    // Reverse
    tl.to(changeColorSpanRef.current, {
      color: "#153E2A",
      duration: 0.3,
    });
    tl.to(shrinkDivRef.current, { opacity: 1, duration: 0 });
    tl.to(shrinkDivRef.current, {
      width: "550px",
      height: "65px",
      duration: 3,
      ease: "power1.inOut",
    });
  }, {});

  return (
    <h1 className="text-5xl sm:text-6xl md:text-8xl text-center tracking-tight">
      Health insurance that{" "}
      <span ref={changeColorSpanRef}>
        doesn't get in
        <div
          className="inline-flex items-center border border-[#6E9E8F4D] w-[550px] h-[65px] mx-1.5 rounded-2xl overflow-hidden -translate-y-6"
          ref={shrinkDivRef}
        >
          <div className="animate-infinite-scroll flex items-center gap-4 text-[#30715D] text-[11px] tracking-[1px] whitespace-nowrap">
            <span>UNPREDICTABLE RATE INCREASES</span>
            <span>---</span>
            <span>LACK OF TRANSPARENCY</span>
            <span>---</span>
            <span>IMPLEMENTATION HEADACHES</span>

            {/* dup for infinite scroll effect */}
            <span>UNPREDICTABLE RATE INCREASES</span>
            <span>---</span>
            <span>LACK OF TRANSPARENCY</span>
            <span>---</span>
            <span>IMPLEMENTATION HEADACHES</span>
          </div>
        </div>
        the way.
      </span>
    </h1>
  );
}
