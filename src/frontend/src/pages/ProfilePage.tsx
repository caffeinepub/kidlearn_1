import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, Save, User } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "../App";
import { LanguageToggle } from "../components/LanguageToggle";
import { OWLMascot } from "../components/OWLMascot";
import { ProgressBar } from "../components/ProgressBar";
import { CLASS_NAMES, type Medium } from "../data/syllabus";
import {
  CLASS_OPTIONS,
  LANGUAGE_OPTIONS,
  MEDIUM_OPTIONS,
} from "../data/translations";
import type { Language } from "../data/translations";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { calculateProgress, useMyProgress } from "../hooks/useProgress";
import {
  useStudentProfile,
  useUpdateStudentProfile,
} from "../hooks/useStudentProfile";
import { useSubjectsForClass } from "../hooks/useSyllabus";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { identity } = useInternetIdentity();
  const { data: profile, isLoading } = useStudentProfile();
  const updateProfile = useUpdateStudentProfile();
  const { data: progress = [] } = useMyProgress();

  const [form, setForm] = useState({
    name: "",
    classId: "1",
    medium: "english",
    language: "en",
  });

  useEffect(() => {
    if (profile) {
      setForm({
        name: profile.displayName,
        classId: String(profile.classId),
        medium: profile.medium,
        language: profile.languagePref || "en",
      });
    }
  }, [profile]);

  const medium = (form.medium as Medium) || "english";
  const classIdNum = Number(form.classId) || 1;
  const subjects = useSubjectsForClass(classIdNum, medium);

  const getSubjectProgress = (subjectId: number) => {
    const allTopicIds =
      subjects
        .find((s) => s.id === subjectId)
        ?.chapters.flatMap((ch) => ch.topics.map((t) => t.id)) || [];
    return calculateProgress(allTopicIds, progress);
  };

  const handleSave = async () => {
    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    try {
      await updateProfile.mutateAsync({
        displayName: form.name,
        classId: BigInt(form.classId),
        medium: form.medium,
        languagePref: form.language,
      });
      toast.success("✅ Profile updated successfully!");
    } catch {
      toast.error("Failed to update profile. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen p-6">
        <Skeleton className="h-48 rounded-3xl mb-6" />
        <Skeleton className="h-64 rounded-3xl" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-kid-gradient px-4 pt-4 pb-8"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="font-display text-2xl font-bold text-white">
              My Profile
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center">
              <OWLMascot size="md" animate />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-white">
                {profile?.displayName || "Student"}
              </h2>
              <p className="text-white/80 text-sm font-body">
                {CLASS_NAMES[classIdNum]} • {medium} Medium
              </p>
              {identity && (
                <p className="text-white/60 text-xs font-mono mt-1">
                  {identity.getPrincipal().toString().slice(0, 16)}...
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* Edit form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-3xl border border-border p-6 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-5">
            <User className="w-5 h-5 text-primary" />
            <h2 className="font-display font-bold text-lg">Edit Profile</h2>
          </div>

          <div className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <Label className="font-body font-semibold text-sm">
                Display Name
              </Label>
              <Input
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                placeholder="Your name"
                className="h-12 rounded-2xl font-body"
              />
            </div>

            {/* Class */}
            <div className="space-y-2">
              <Label className="font-body font-semibold text-sm">Class</Label>
              <div className="grid grid-cols-4 gap-2">
                {CLASS_OPTIONS.map((cls) => (
                  <motion.button
                    key={cls.value}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      setForm((f) => ({ ...f, classId: cls.value }))
                    }
                    className={`py-2.5 rounded-2xl text-sm font-display font-bold transition-all border-2 ${
                      form.classId === cls.value
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary text-foreground border-transparent hover:border-primary/40"
                    }`}
                  >
                    {cls.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Medium */}
            <div className="space-y-2">
              <Label className="font-body font-semibold text-sm">Medium</Label>
              <div className="space-y-2">
                {MEDIUM_OPTIONS.map((opt) => (
                  <motion.button
                    key={opt.value}
                    whileTap={{ scale: 0.97 }}
                    onClick={() =>
                      setForm((f) => ({ ...f, medium: opt.value }))
                    }
                    className={`w-full flex items-center gap-3 p-3 rounded-2xl border-2 text-left transition-all ${
                      form.medium === opt.value
                        ? "border-primary bg-primary/10"
                        : "border-border bg-secondary hover:border-primary/40"
                    }`}
                  >
                    <span className="text-xl">{opt.icon}</span>
                    <div>
                      <div className="font-body font-semibold text-sm">
                        {opt.label}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {opt.description}
                      </div>
                    </div>
                    {form.medium === opt.value && (
                      <span className="ml-auto text-primary">✓</span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Language */}
            <div className="space-y-2">
              <Label className="font-body font-semibold text-sm">
                App Language
              </Label>
              <LanguageToggle
                current={form.language as Language}
                onChange={(lang) => setForm((f) => ({ ...f, language: lang }))}
              />
            </div>

            <Button
              onClick={handleSave}
              disabled={updateProfile.isPending}
              className="w-full h-12 rounded-2xl bg-kid-gradient text-white font-display font-bold gap-2"
            >
              <Save className="w-4 h-4" />
              {updateProfile.isPending ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </motion.div>

        {/* Progress overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-3xl border border-border p-6 shadow-sm"
        >
          <h2 className="font-display font-bold text-lg mb-5">
            📊 Progress Overview
          </h2>
          <div className="space-y-4">
            {subjects.map((subject) => {
              const pct = getSubjectProgress(subject.id);
              return (
                <div key={subject.id}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{subject.icon}</span>
                      <span className="font-body font-semibold text-sm">
                        {subject.name}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {pct}%
                    </span>
                  </div>
                  <ProgressBar value={pct} showLabel={false} size="md" />
                </div>
              );
            })}
            {subjects.length === 0 && (
              <p className="text-muted-foreground text-sm text-center py-4 font-body">
                No progress data yet. Start learning!
              </p>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
