import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, ChevronRight, LogOut, Settings, Trophy } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useState } from "react";
import { useNavigate } from "../App";
import { Confetti } from "../components/Confetti";
import { LanguageToggle } from "../components/LanguageToggle";
import { OWLMascot } from "../components/OWLMascot";
import { SubjectCard } from "../components/SubjectCard";
import { CLASS_NAMES, type Medium } from "../data/syllabus";
import { type Language, useTranslation } from "../data/translations";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { calculateProgress, useMyProgress } from "../hooks/useProgress";
import { useStudentProfile } from "../hooks/useStudentProfile";
import { useSubjectsForClass } from "../hooks/useSyllabus";

export default function Dashboard() {
  const navigate = useNavigate();
  const { clear } = useInternetIdentity();
  const { data: profile, isLoading: profileLoading } = useStudentProfile();
  const { data: progress = [] } = useMyProgress();
  const [language, setLanguage] = useState<Language>(
    (profile?.languagePref as Language) || "en",
  );
  const [showConfetti, setShowConfetti] = useState(false);
  const t = useTranslation(language);

  const medium = (profile?.medium as Medium) || "english";
  const classId = Number(profile?.classId) || 1;
  const subjects = useSubjectsForClass(classId, medium);

  const getSubjectProgress = useCallback(
    (subjectId: number) => {
      const allTopicIds =
        subjects
          .find((s) => s.id === subjectId)
          ?.chapters.flatMap((ch) => ch.topics.map((t) => t.id)) || [];
      return calculateProgress(allTopicIds, progress);
    },
    [subjects, progress],
  );

  const totalProgress =
    subjects.length > 0
      ? Math.round(
          subjects.reduce((sum, s) => sum + getSubjectProgress(s.id), 0) /
            subjects.length,
        )
      : 0;

  if (profileLoading) {
    return (
      <div className="min-h-screen p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <Skeleton className="h-24 rounded-3xl" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-48 rounded-3xl" />
            ))}
          </div>
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
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-20 bg-card/80 backdrop-blur-md border-b border-border px-4 py-3"
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          {/* Logo & title */}
          <div className="flex items-center gap-2">
            <img
              src="/assets/generated/kidlearn-logo-transparent.dim_300x300.png"
              alt="KidLearn"
              className="w-8 h-8"
            />
            <span className="font-display font-bold text-gradient text-lg hidden sm:block">
              KidLearn
            </span>
          </div>

          {/* Language toggle */}
          <LanguageToggle current={language} onChange={setLanguage} compact />

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/profile")}
              className="rounded-full gap-1 text-xs font-body"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:block">{t.profile}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={clear}
              className="rounded-full gap-1 text-xs text-destructive hover:text-destructive font-body"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:block">{t.logout}</span>
            </Button>
          </div>
        </div>
      </motion.header>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        {/* Welcome card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden bg-kid-gradient rounded-3xl p-6 text-white shadow-float"
        >
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/10" />
          <div className="absolute -bottom-8 -left-6 w-32 h-32 rounded-full bg-white/10" />

          <div className="relative flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-white/80 text-sm font-body mb-1">
                {t.welcome} back! 👋
              </p>
              <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
                {profile?.displayName || "Student"}!
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold">
                  📚 {CLASS_NAMES[classId]}
                </span>
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold capitalize">
                  🎓 {medium} Medium
                </span>
              </div>
              {/* Overall progress */}
              <div className="bg-white/20 rounded-full h-3 overflow-hidden max-w-xs">
                <motion.div
                  className="h-3 rounded-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${totalProgress}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
              <p className="text-white/80 text-xs mt-1">
                {totalProgress}% overall progress
              </p>
            </div>

            <div className="hidden md:block">
              <OWLMascot size="lg" animate />
            </div>
          </div>
        </motion.div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              icon: "📚",
              label: "Subjects",
              value: subjects.length,
              color: "from-blue-500 to-cyan-400",
            },
            {
              icon: "⭐",
              label: "Progress",
              value: `${totalProgress}%`,
              color: "from-orange-500 to-amber-400",
            },
            {
              icon: "🏆",
              label: "Rank",
              value: "Star",
              color: "from-violet-500 to-purple-400",
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`bg-gradient-to-br ${stat.color} rounded-2xl p-4 text-white text-center shadow-md`}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="font-display text-xl font-bold">{stat.value}</div>
              <div className="text-white/80 text-xs font-body">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subjects grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-bold text-foreground">
              📖 {t.subjects}
            </h2>
            <span className="text-muted-foreground text-sm font-body">
              {subjects.length} subjects
            </span>
          </div>

          {subjects.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-3xl border border-border">
              <BookOpen className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
              <p className="text-muted-foreground font-body">
                No subjects found for your class and medium.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {subjects.map((subject, i) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  progressPercent={getSubjectProgress(subject.id)}
                  onClick={() => navigate(`/subject/${classId}/${subject.id}`)}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>

        {/* Continue learning */}
        <div>
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            🚀 {t.continue} Learning
          </h2>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-card rounded-3xl border border-border p-5 flex items-center gap-4 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            onClick={() =>
              subjects[0] && navigate(`/subject/${classId}/${subjects[0].id}`)
            }
          >
            <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-400 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-kid">
              {subjects[0]?.icon || "📚"}
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground text-xs font-body mb-0.5">
                Pick up where you left off
              </p>
              <h3 className="font-display font-bold text-base">
                {subjects[0]?.name || "Start a subject"}
              </h3>
              <p className="text-muted-foreground text-xs font-body">
                {subjects[0]?.chapters.length || 0} chapters available
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          </motion.div>
        </div>

        {/* Progress milestone celebration */}
        {totalProgress > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-3xl border border-border p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <Trophy className="w-6 h-6 text-kid-orange" />
              <h3 className="font-display font-bold">Your Progress</h3>
            </div>
            <div className="space-y-3">
              {subjects.map((subject) => {
                const pct = getSubjectProgress(subject.id);
                return (
                  <div key={subject.id} className="flex items-center gap-3">
                    <span className="text-lg w-8 flex-shrink-0">
                      {subject.icon}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold font-body">
                          {subject.name}
                        </span>
                        <span className="text-xs text-muted-foreground font-body">
                          {pct}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-400"
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
