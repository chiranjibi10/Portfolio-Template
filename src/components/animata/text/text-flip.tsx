import { useEffect, useMemo, useRef } from "react";

export default function TextFlip() {
  const words = useMemo(
    () => ["designer", "developer", "programmer", "writer", "designer"],
    []
  );

  const tallestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tallestRef.current) {
      let maxHeight = 0;

      words.forEach((word) => {
        const span = document.createElement("span");
        span.className = "absolute opacity-0";
        span.textContent = word;
        tallestRef.current?.appendChild(span);
        const height = span.offsetHeight;
        tallestRef.current?.removeChild(span);

        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      tallestRef.current.style.height = `${maxHeight}px`;
    }
  }, [words]);

  return (
    <div className="box-content flex gap-4 text-3xl font-semibold">
      <p className="text-foreground">I am a</p>
      <div
        ref={tallestRef}
        className="flex flex-col overflow-hidden text-secondaryColor min-w-fit"
      >
        {words.map((word, index) => (
          <span key={index} className="animate-flip-Words">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
