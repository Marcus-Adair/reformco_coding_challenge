import { getMockCardData } from "../utils";
import { Card } from "./Card";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export function CardScroller() {
  const cardRowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!cardRowRef.current) return;

      const cards = Array.from(cardRowRef.current.children) as HTMLDivElement[];
      const cardWidth = cards[0].offsetWidth;
      const containerWidth = cardRowRef.current.parentElement!.offsetWidth;

      // Start the row centered
      gsap.set(cardRowRef.current, {
        x: (containerWidth - cardWidth) / 2, // centers first card
      });

      const timeline = gsap.timeline({ repeat: -1 });

      for (let i = 0; i < 4; i++) {
        timeline.to(cards[i], {
          scale: 0.9,
          duration: 0.3,
          ease: "power1.inOut",
        });
        timeline.to({}, { duration: 1.5 });
        timeline.to(cards[i], {
          scale: 0.8,
          duration: 0.2,
          ease: "power1.inOut",
        });

        const x = (containerWidth - cardWidth) / 2 - (i + 1) * cardWidth;
        timeline.to(cardRowRef.current, {
          x,
          duration: 2,
          ease: "power2.inOut",
        });
      }
    },
    { scope: cardRowRef }
  );

  return (
    <div className="overflow-hidden w-full">
      <div ref={cardRowRef} className="flex py-9">
        {getMockCardData().map((cardData) => (
          <Card {...cardData} className="scale-80" />
        ))}

        {/* Clone for infinite loop illusion */}
        {getMockCardData().map((cardData) => (
          <Card {...cardData} className="scale-80" />
        ))}
      </div>
    </div>
  );
}
