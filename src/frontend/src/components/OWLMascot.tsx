import { motion } from "motion/react";

interface OwlMascotProps {
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
  className?: string;
}

const SIZES = {
  sm: "w-12 h-12",
  md: "w-20 h-20",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

export function OWLMascot({
  size = "md",
  animate: shouldAnimate = true,
  className = "",
}: OwlMascotProps) {
  return (
    <motion.div
      className={`${SIZES[size]} ${className} inline-block`}
      animate={
        shouldAnimate
          ? {
              y: [0, -12, 0],
            }
          : {}
      }
      transition={
        shouldAnimate
          ? {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }
          : {}
      }
    >
      <img
        src="/assets/generated/owl-mascot-transparent.dim_400x400.png"
        alt="Owly - Learning Mascot"
        className="w-full h-full object-contain drop-shadow-lg"
      />
    </motion.div>
  );
}

export function OWLSpeaking({
  message,
  className = "",
}: { message: string; className?: string }) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <OWLMascot size="sm" animate />
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="chat-bubble-owl text-white px-4 py-3 text-sm font-body max-w-xs rounded-2xl rounded-tl-sm shadow-md"
      >
        {message}
      </motion.div>
    </div>
  );
}
