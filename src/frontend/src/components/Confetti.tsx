import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  shape: "circle" | "square" | "star";
}

const COLORS = [
  "oklch(0.72 0.20 55)", // orange
  "oklch(0.52 0.26 290)", // purple
  "oklch(0.65 0.22 145)", // green
  "oklch(0.68 0.22 340)", // pink
  "oklch(0.88 0.18 90)", // yellow
  "oklch(0.62 0.18 250)", // blue
];

function generateConfetti(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: 8 + Math.random() * 12,
    delay: Math.random() * 0.5,
    duration: 1.5 + Math.random() * 1,
    shape: (["circle", "square", "star"] as const)[
      Math.floor(Math.random() * 3)
    ],
  }));
}

interface ConfettiProps {
  active: boolean;
  count?: number;
  onComplete?: () => void;
}

export function Confetti({ active, count = 40, onComplete }: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (active) {
      setPieces(generateConfetti(count));
      const timer = setTimeout(() => {
        setPieces([]);
        onComplete?.();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [active, count, onComplete]);

  return (
    <AnimatePresence>
      {pieces.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {pieces.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{
                x: `${piece.x}vw`,
                y: -20,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                y: "110vh",
                rotate: 720,
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: piece.duration,
                delay: piece.delay,
                ease: "easeIn",
              }}
              style={{
                position: "absolute",
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
                borderRadius:
                  piece.shape === "circle"
                    ? "50%"
                    : piece.shape === "star"
                      ? "20%"
                      : "0",
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
