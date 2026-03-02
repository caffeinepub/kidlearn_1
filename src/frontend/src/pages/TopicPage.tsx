import { ChevronLeft } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate, useParams } from "../App";
import { Confetti } from "../components/Confetti";
import { TopicContent } from "../components/TopicContent";
import {
  CLASS_NAMES,
  SUBJECT_META,
  getChaptersForSubject,
  getTopic,
} from "../data/syllabus";
import { useMyProgress } from "../hooks/useProgress";

const BG_GRADIENTS: Record<number, string> = {
  1: "from-blue-500 to-cyan-400",
  2: "from-orange-500 to-amber-400",
  3: "from-emerald-500 to-green-400",
  4: "from-pink-500 to-rose-400",
  5: "from-violet-500 to-purple-400",
  6: "from-fuchsia-500 to-pink-400",
};

export default function TopicPage() {
  const navigate = useNavigate();
  const { classId, subjectId, chapterId, topicId } = useParams();
  const [showConfetti, setShowConfetti] = useState(false);
  const { data: progress = [] } = useMyProgress();

  const classIdNum = Number(classId) || 1;
  const subjectIdNum = Number(subjectId) || 1;
  const chapterIdNum = Number(chapterId) || 1;
  const topicIdNum = Number(topicId) || 1;

  const topic = getTopic(classIdNum, subjectIdNum, chapterIdNum, topicIdNum);
  const subjectMeta = SUBJECT_META[subjectIdNum];
  const gradient =
    BG_GRADIENTS[subjectIdNum] || "from-violet-500 to-purple-400";
  const chapters = getChaptersForSubject(classIdNum, subjectIdNum);
  const chapter = chapters.find((c) => c.id === chapterIdNum);

  const isCompleted = progress.some(
    (p) =>
      Number(p.topicId) === topicIdNum && p.completionStatus === "completed",
  );

  const handleMarkComplete = () => {
    if (isCompleted) return;
    setShowConfetti(true);
    toast.success("🎉 Amazing! Topic completed!", {
      description: "Keep going - you're doing great!",
    });
  };

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground font-body text-xl mb-4">
            Topic not found
          </p>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-primary underline font-body"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      <Confetti
        active={showConfetti}
        onComplete={() => setShowConfetti(false)}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-gradient-to-br ${gradient} px-4 pt-4 pb-6`}
      >
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <div className="flex items-center gap-3 mb-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {/* Breadcrumb */}
            <div className="text-white/70 text-xs font-body flex items-center gap-1 overflow-hidden">
              <span>{CLASS_NAMES[classIdNum]}</span>
              <span>/</span>
              <span>{subjectMeta?.name}</span>
              <span>/</span>
              <span className="truncate">{chapter?.title}</span>
            </div>
          </div>

          {/* Topic title */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">{subjectMeta?.icon || "📚"}</span>
            <div>
              <h1 className="font-display text-2xl font-bold text-white">
                {topic.title}
              </h1>
              {isCompleted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1 text-yellow-300 text-sm font-semibold"
                >
                  ⭐ Completed!
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        <TopicContent
          topic={topic}
          subjectId={subjectIdNum}
          onMarkComplete={handleMarkComplete}
          isCompleted={isCompleted}
        />
      </main>
    </div>
  );
}
