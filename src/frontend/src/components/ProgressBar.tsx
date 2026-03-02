import { motion } from "motion/react";

interface ProgressBarProps {
  value: number; // 0-100
  color?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const HEIGHTS = {
  sm: "h-1.5",
  md: "h-3",
  lg: "h-4",
};

export function ProgressBar({
  value,
  color = "bg-primary",
  showLabel = true,
  size = "md",
  className = "",
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`w-full bg-secondary rounded-full overflow-hidden ${HEIGHTS[size]}`}
      >
        <motion.div
          className={`${HEIGHTS[size]} rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${clamped}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      {showLabel && (
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-muted-foreground font-body">
            {clamped}% completed
          </span>
          {clamped === 100 && (
            <span className="text-xs text-kid-green font-bold">✅ Done!</span>
          )}
        </div>
      )}
    </div>
  );
}
