import { useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export function AnimatedButtons() {
  const [reverseToggled, setReverseToggled] = useState(false);

  const arrowRef = useRef<SVGSVGElement>(null);
  const arrowRef2 = useRef<SVGSVGElement>(null);

  function animateArrow() {
    const arrows = [arrowRef.current, arrowRef2.current];
    if (!arrows.length) return;

    arrows.forEach((arrow) => {
      gsap.to(arrow, {
        x: `+=26`,
        duration: 0.6,
        ease: "power2.out",
        modifiers: {
          x: (x) => `${parseFloat(x) % 26}px`, // reset x pos
        },
      });
    });
  }

  return (
    <div className="flex justify-start">
      <motion.div
        layout
        animate={{ color: reverseToggled ? "#00B684" : "#30715D" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`flex items-center gap-2 ${
          reverseToggled ? "flex-row-reverse" : ""
        }`}
      >
        <motion.button
          key="text"
          layout
          onClick={() => setReverseToggled(!reverseToggled)}
          className="border rounded-full h-8 px-6.5 bg-[#fbfaf6] z-40 cursor-pointer tracking-tight whitespace-nowrap"
        >
          Get a Quote Started Today
        </motion.button>

        {/* Circle/Arrow button */}
        <motion.button
          onClick={animateArrow}
          key="arrow"
          layout
          className="relative cursor-pointer "
        >
          {/* Circle */}
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.17055 3.5C9.79683 1.61192 13.0186 0.5 16.5 0.5C25.3366 0.5 32.5 7.66344 32.5 16.5C32.5 25.3366 25.3366 32.5 16.5 32.5C7.66344 32.5 0.5 25.3366 0.5 16.5C0.5 15.1188 0.675012 13.7785 1.00407 12.5"
              stroke="currentColor"
              stroke-linecap="round"
            />
          </svg>

          {/* Arrow (2 for wrap around effect) */}
          <div className="absolute top-1/4 left-1/4 size-4 overflow-hidden">
            <div className="relative right-1 top-1 flex gap-4 -translate-x-4.5">
              <svg
                ref={arrowRef}
                className="shrink-0"
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.49909 8.5L8.49909 4.5M8.49909 4.5L4.49909 0.5M8.49909 4.5H0.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                />
              </svg>
              <svg
                ref={arrowRef2}
                className="shrink-0"
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.49909 8.5L8.49909 4.5M8.49909 4.5L4.49909 0.5M8.49909 4.5H0.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
}
