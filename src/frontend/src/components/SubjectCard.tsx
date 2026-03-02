import { motion } from "motion/react";
import type { SubjectWithId } from "../hooks/useSyllabus";
import { ProgressBar } from "./ProgressBar";

interface SubjectCardProps {
  subject: SubjectWithId;
  progressPercent: number;
  onClick: () => void;
  index?: number;
}

const BG_COLORS: Record<number, string> = {
  1: "from-blue-500 to-cyan-400",
  2: "from-orange-500 to-amber-400",
  3: "from-emerald-500 to-green-400",
  4: "from-pink-500 to-rose-400",
  5: "from-violet-500 to-purple-400",
  6: "from-fuchsia-500 to-pink-400",
};

export function SubjectCard({
  subject,
  progressPercent,
  onClick,
  index = 0,
}: SubjectCardProps) {
  const gradientClass =
    BG_COLORS[subject.id] || "from-violet-500 to-purple-400";
  const totalTopics = subject.chapters.reduce(
    (sum, ch) => sum + ch.topics.length,
    0,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="relative overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-float transition-shadow duration-300"
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-90`}
      />

      {/* Decorative circles */}
      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/20" />
      <div className="absolute -bottom-6 -left-4 w-24 h-24 rounded-full bg-white/10" />

      <div className="relative p-5">
        {/* Subject icon & name */}
        <div className="flex items-center justify-between mb-4">
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
            className="text-5xl drop-shadow-sm"
          >
            {subject.icon}
          </motion.div>
          <div className="bg-white/30 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-bold">
            {subject.chapters.length} chapters
          </div>
        </div>

        <h3 className="text-xl font-display font-bold text-white mb-1">
          {subject.name}
        </h3>
        <p className="text-white/80 text-xs font-body mb-3">
          {totalTopics} topics to explore
        </p>

        {/* Progress */}
        <div className="bg-white/20 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-2 rounded-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.5 + index * 0.1,
            }}
          />
        </div>
        <p className="text-white/90 text-xs font-body mt-1.5">
          {progressPercent}% complete
        </p>

        {/* CTA */}
        <div className="mt-3 flex items-center gap-1 text-white font-semibold text-sm">
          <span>Start Learning</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
