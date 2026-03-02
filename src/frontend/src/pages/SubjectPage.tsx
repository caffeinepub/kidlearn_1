import { Button } from "@/components/ui/button";
import { BookOpen, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useNavigate, useParams } from "../App";
import { CLASS_NAMES, SUBJECT_META } from "../data/syllabus";
import { calculateProgress, useMyProgress } from "../hooks/useProgress";
import { useChapters } from "../hooks/useSyllabus";

const BG_GRADIENTS: Record<number, string> = {
  1: "from-blue-500 to-cyan-400",
  2: "from-orange-500 to-amber-400",
  3: "from-emerald-500 to-green-400",
  4: "from-pink-500 to-rose-400",
  5: "from-violet-500 to-purple-400",
  6: "from-fuchsia-500 to-pink-400",
};

export default function SubjectPage() {
  const navigate = useNavigate();
  const { classId, subjectId } = useParams();
  const [expandedChapter, setExpandedChapter] = useState<number | null>(0);
  const { data: progress = [] } = useMyProgress();

  const classIdNum = Number(classId) || 1;
  const subjectIdNum = Number(subjectId) || 1;
  const chapters = useChapters(classIdNum, subjectIdNum);
  const subjectMeta = SUBJECT_META[subjectIdNum];
  const gradient =
    BG_GRADIENTS[subjectIdNum] || "from-violet-500 to-purple-400";

  const getChapterProgress = (chapterId: number) => {
    const chapter = chapters.find((c) => c.id === chapterId);
    if (!chapter) return 0;
    return calculateProgress(
      chapter.topics.map((t) => t.id),
      progress,
    );
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-gradient-to-br ${gradient} p-6 pt-safe-top`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-white/80 text-sm font-body">
              {CLASS_NAMES[classIdNum]} / {subjectMeta?.name}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="text-6xl"
            >
              {subjectMeta?.icon || "📚"}
            </motion.div>
            <div>
              <h1 className="font-display text-3xl font-bold text-white">
                {subjectMeta?.name || "Subject"}
              </h1>
              <p className="text-white/80 font-body text-sm">
                {chapters.length} chapters • {CLASS_NAMES[classIdNum]}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chapters list */}
      <main className="max-w-3xl mx-auto px-4 py-6 space-y-3">
        <h2 className="font-display font-bold text-xl text-foreground mb-4">
          📋 All Chapters
        </h2>

        {chapters.length === 0 ? (
          <div className="text-center py-12 bg-card rounded-3xl border border-border">
            <BookOpen className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
            <p className="text-muted-foreground font-body">
              No chapters found for this subject.
            </p>
          </div>
        ) : (
          chapters.map((chapter, i) => {
            const isExpanded = expandedChapter === i;
            const chapterProgress = getChapterProgress(chapter.id);

            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Chapter header */}
                <button
                  type="button"
                  onClick={() => setExpandedChapter(isExpanded ? null : i)}
                  className="w-full p-5 flex items-center gap-4 text-left"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl flex-shrink-0 shadow-sm`}
                  >
                    {chapter.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-sm">
                      {chapter.title}
                    </h3>
                    <p className="text-muted-foreground text-xs font-body">
                      {chapter.topics.length} topics
                    </p>
                    {/* Mini progress bar */}
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden mt-1.5 max-w-32">
                      <motion.div
                        className={`h-1.5 rounded-full bg-gradient-to-r ${gradient}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${chapterProgress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {chapterProgress === 100 && (
                      <span className="text-kid-green text-lg">✅</span>
                    )}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </div>
                </button>

                {/* Topics */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border divide-y divide-border">
                        {chapter.topics.map((topic, j) => {
                          const isTopicCompleted = progress.some(
                            (p) =>
                              Number(p.topicId) === topic.id &&
                              p.completionStatus === "completed",
                          );
                          return (
                            <motion.button
                              key={topic.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.05 }}
                              onClick={() =>
                                navigate(
                                  `/topic/${classIdNum}/${subjectIdNum}/${chapter.id}/${topic.id}`,
                                )
                              }
                              className="w-full px-5 py-4 flex items-center gap-3 text-left hover:bg-secondary/50 transition-colors"
                            >
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                                  isTopicCompleted
                                    ? "bg-kid-green text-white"
                                    : "bg-secondary text-muted-foreground"
                                }`}
                              >
                                {isTopicCompleted ? "✓" : j + 1}
                              </div>
                              <div className="flex-1">
                                <p className="font-body font-semibold text-sm">
                                  {topic.title}
                                </p>
                                <p className="text-muted-foreground text-xs font-body">
                                  Video • Notes • Chat
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </main>
    </div>
  );
}
