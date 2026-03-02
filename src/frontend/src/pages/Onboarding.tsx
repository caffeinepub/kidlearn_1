import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "../App";
import { OWLMascot } from "../components/OWLMascot";
import { CLASS_OPTIONS, MEDIUM_OPTIONS } from "../data/translations";
import { useCreateStudentProfile } from "../hooks/useStudentProfile";

const STEPS = ["name", "class", "medium", "language"] as const;
type Step = (typeof STEPS)[number];

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("name");
  const [form, setForm] = useState({
    name: "",
    classId: "",
    medium: "",
    language: "en",
  });
  const createProfile = useCreateStudentProfile();

  const currentStep = STEPS.indexOf(step);

  const handleNext = () => {
    if (step === "name" && !form.name.trim()) {
      toast.error("Please enter your name!");
      return;
    }
    if (step === "class" && !form.classId) {
      toast.error("Please select your class!");
      return;
    }
    if (step === "medium" && !form.medium) {
      toast.error("Please select your medium!");
      return;
    }

    const nextStep = STEPS[currentStep + 1];
    if (nextStep) {
      setStep(nextStep);
    }
  };

  const handleFinish = async () => {
    try {
      await createProfile.mutateAsync({
        displayName: form.name,
        classId: BigInt(form.classId),
        medium: form.medium,
        languagePref: form.language,
      });
      toast.success("🎉 Welcome to KidLearn! Let's start learning!");
      navigate("/dashboard");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const OWL_MESSAGES: Record<Step, string> = {
    name: "Hi there! 👋 I'm Owly! What's your name? I'll use it to make learning personal for you!",
    class:
      "Great name! 🌟 Which class are you in? This helps me show you the right syllabus!",
    medium:
      "Excellent! 📚 Which medium do you study in? We'll show subjects in your language!",
    language: "Almost there! 🎉 What language do you prefer for app labels?",
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {["⭐", "🌟", "✨", "🎈", "🎉"].map((emoji, i) => (
          <motion.div
            key={`deco-${emoji}`}
            className="absolute text-3xl select-none opacity-30"
            style={{ left: `${20 * (i + 1)}%`, top: `${10 + i * 15}%` }}
            animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-card rounded-3xl shadow-float border border-border overflow-hidden relative z-10"
      >
        {/* Header */}
        <div className="bg-kid-gradient p-6 text-center">
          <OWLMascot size="lg" animate className="mx-auto mb-2" />
          <h1 className="font-display text-2xl font-bold text-white">
            Welcome to KidLearn!
          </h1>
          <p className="text-white/80 text-sm font-body">
            Let's set up your learning profile
          </p>
        </div>

        {/* Progress steps */}
        <div className="px-6 pt-6">
          <div className="flex items-center gap-2 mb-6">
            {STEPS.map((s, i) => (
              <div key={s} className="flex-1 flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: step === s ? 1.2 : 1,
                  }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    i <= currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {i < currentStep ? "✓" : i + 1}
                </motion.div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-1 rounded-full transition-colors ${i < currentStep ? "bg-primary" : "bg-secondary"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Owl message */}
        <div className="px-6 mb-6">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-secondary rounded-2xl p-4 text-sm font-body text-foreground"
          >
            🦉 {OWL_MESSAGES[step]}
          </motion.div>
        </div>

        {/* Step content */}
        <div className="px-6 pb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === "name" && (
                <div className="space-y-4">
                  <Label className="font-display font-bold text-base">
                    Your Name
                  </Label>
                  <Input
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Enter your name..."
                    className="h-14 text-base rounded-2xl font-body border-border focus:ring-2 focus:ring-primary/50"
                    onKeyDown={(e) => e.key === "Enter" && handleNext()}
                    autoFocus
                  />
                </div>
              )}

              {step === "class" && (
                <div className="space-y-3">
                  <Label className="font-display font-bold text-base">
                    Select Your Class
                  </Label>
                  <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto pr-1">
                    {CLASS_OPTIONS.map((cls) => (
                      <motion.button
                        key={cls.value}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() =>
                          setForm((f) => ({ ...f, classId: cls.value }))
                        }
                        className={`p-4 rounded-2xl border-2 text-left transition-all ${
                          form.classId === cls.value
                            ? "border-primary bg-primary/10"
                            : "border-border bg-secondary hover:border-primary/50"
                        }`}
                      >
                        <div className="font-display font-bold text-sm">
                          {cls.label}
                        </div>
                        <div className="text-muted-foreground text-xs font-body">
                          {cls.age}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {step === "medium" && (
                <div className="space-y-3">
                  <Label className="font-display font-bold text-base">
                    Select Medium
                  </Label>
                  {MEDIUM_OPTIONS.map((medium) => (
                    <motion.button
                      key={medium.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() =>
                        setForm((f) => ({ ...f, medium: medium.value }))
                      }
                      className={`w-full p-4 rounded-2xl border-2 flex items-center gap-4 text-left transition-all ${
                        form.medium === medium.value
                          ? "border-primary bg-primary/10"
                          : "border-border bg-secondary hover:border-primary/50"
                      }`}
                    >
                      <span className="text-3xl">{medium.icon}</span>
                      <div>
                        <div className="font-display font-bold text-sm">
                          {medium.label}
                        </div>
                        <div className="text-muted-foreground text-xs font-body">
                          {medium.description}
                        </div>
                      </div>
                      {form.medium === medium.value && (
                        <span className="ml-auto text-primary">✓</span>
                      )}
                    </motion.button>
                  ))}
                </div>
              )}

              {step === "language" && (
                <div className="space-y-3">
                  <Label className="font-display font-bold text-base">
                    App Language (UI labels)
                  </Label>
                  {[
                    {
                      value: "en",
                      label: "English",
                      native: "English",
                      flag: "🇬🇧",
                    },
                    { value: "hi", label: "Hindi", native: "हिंदी", flag: "🇮🇳" },
                    { value: "ur", label: "Urdu", native: "اردو", flag: "🕌" },
                    {
                      value: "te",
                      label: "Telugu",
                      native: "తెలుగు",
                      flag: "🌺",
                    },
                  ].map((lang) => (
                    <motion.button
                      key={lang.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() =>
                        setForm((f) => ({ ...f, language: lang.value }))
                      }
                      className={`w-full p-4 rounded-2xl border-2 flex items-center gap-4 text-left transition-all ${
                        form.language === lang.value
                          ? "border-primary bg-primary/10"
                          : "border-border bg-secondary hover:border-primary/50"
                      }`}
                    >
                      <span className="text-3xl">{lang.flag}</span>
                      <div>
                        <div className="font-display font-bold text-sm">
                          {lang.label}
                        </div>
                        <div className="text-muted-foreground text-sm font-body">
                          {lang.native}
                        </div>
                      </div>
                      {form.language === lang.value && (
                        <span className="ml-auto text-primary">✓</span>
                      )}
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex gap-3 mt-6">
            {currentStep > 0 && (
              <Button
                variant="outline"
                onClick={() => setStep(STEPS[currentStep - 1])}
                className="flex-1 h-12 rounded-2xl font-body font-semibold"
              >
                ← Back
              </Button>
            )}
            {step !== "language" ? (
              <Button
                onClick={handleNext}
                className="flex-1 h-12 rounded-2xl bg-kid-gradient text-white font-display font-bold"
              >
                Next →
              </Button>
            ) : (
              <Button
                onClick={handleFinish}
                disabled={createProfile.isPending}
                className="flex-1 h-12 rounded-2xl bg-kid-gradient text-white font-display font-bold"
              >
                {createProfile.isPending
                  ? "Setting up..."
                  : "🚀 Start Learning!"}
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
