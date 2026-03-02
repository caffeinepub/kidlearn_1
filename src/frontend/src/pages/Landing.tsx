import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Brain,
  Sparkles,
  Star,
  TrendingUp,
  Video,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useNavigate } from "../App";
import { OWLMascot } from "../components/OWLMascot";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

const FLOATING_ELEMENTS = [
  { icon: "📚", x: "5%", y: "15%", delay: 0 },
  { icon: "✏️", x: "90%", y: "20%", delay: 0.5 },
  { icon: "🔢", x: "8%", y: "60%", delay: 1 },
  { icon: "🔬", x: "88%", y: "55%", delay: 1.5 },
  { icon: "⭐", x: "15%", y: "35%", delay: 0.3 },
  { icon: "🌟", x: "80%", y: "35%", delay: 0.8 },
  { icon: "🎨", x: "3%", y: "80%", delay: 1.2 },
  { icon: "🌍", x: "92%", y: "75%", delay: 0.7 },
  { icon: "🏆", x: "50%", y: "5%", delay: 0.4 },
  { icon: "🎓", x: "45%", y: "90%", delay: 1.1 },
];

const FEATURES = [
  {
    icon: <Video className="w-8 h-8" />,
    title: "Animated Video Lessons",
    desc: "Colorful, engaging video content that makes learning fun and memorable",
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "PDF Notes & Downloads",
    desc: "Download detailed notes for offline study, practice, and revision",
    color: "from-orange-500 to-amber-400",
    bg: "bg-orange-50",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Tutor - Owly",
    desc: "Ask Owly anything about your subjects - available 24/7 to help",
    color: "from-violet-500 to-purple-400",
    bg: "bg-violet-50",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Progress Tracking",
    desc: "Track your learning journey and celebrate achievements with stars",
    color: "from-emerald-500 to-green-400",
    bg: "bg-emerald-50",
  },
];

const MEDIUMS = [
  {
    flag: "🇬🇧",
    name: "English Medium",
    desc: "English, Mathematics, Science, Social Studies",
    color: "from-blue-500 to-cyan-400",
  },
  {
    flag: "🕌",
    name: "Urdu Medium",
    desc: "All subjects + Urdu language",
    color: "from-violet-500 to-purple-400",
  },
  {
    flag: "🌺",
    name: "Telugu Medium",
    desc: "All subjects + Telugu language",
    color: "from-emerald-500 to-teal-400",
  },
];

export default function Landing() {
  const navigate = useNavigate();
  const { login, isLoggingIn, identity } = useInternetIdentity();

  const handleStartLearning = () => {
    if (identity) {
      navigate("/dashboard");
    } else {
      login();
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {FLOATING_ELEMENTS.map((el, i) => (
          <motion.div
            key={`float-${el.icon}-${i}`}
            className="absolute text-3xl select-none"
            style={{ left: el.x, top: el.y }}
            animate={{
              y: [0, -15, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              delay: el.delay,
              ease: "easeInOut",
            }}
          >
            {el.icon}
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 py-4 px-6"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/generated/kidlearn-logo-transparent.dim_300x300.png"
              alt="KidLearn"
              className="w-10 h-10 object-contain"
            />
            <span className="font-display text-2xl font-bold text-gradient">
              KidLearn
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => navigate("/admin")}
              className="text-muted-foreground hover:text-foreground text-sm font-body"
            >
              Teacher/Admin
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleStartLearning}
                disabled={isLoggingIn}
                className="bg-kid-gradient text-white rounded-full px-6 font-body font-semibold shadow-kid"
              >
                {isLoggingIn
                  ? "Logging in..."
                  : identity
                    ? "My Dashboard"
                    : "Login to Learn"}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative z-10 pt-8 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden mb-12 shadow-float"
          >
            <img
              src="/assets/generated/hero-banner.dim_1200x400.jpg"
              alt="KidLearn - Fun Learning"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-900/70 via-purple-800/50 to-transparent flex items-center">
              <div className="p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                    <span className="text-yellow-300 text-sm font-semibold">
                      LKG to Class 6 • Indian Curriculum
                    </span>
                  </div>
                  <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3 leading-tight">
                    KidLearn
                  </h1>
                  <p className="text-xl text-white/90 font-body mb-6">
                    Learning Made Fun! 🎉
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleStartLearning}
                      size="lg"
                      className="bg-kid-orange text-white rounded-full px-8 py-4 text-lg font-display font-bold shadow-float hover:shadow-kid-orange transition-all"
                    >
                      {isLoggingIn ? "✨ Starting..." : "🚀 Start Learning!"}
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Owl mascot */}
            <div className="absolute right-8 bottom-0 hidden md:block">
              <OWLMascot size="xl" animate />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything Your Child Needs to{" "}
              <span className="text-gradient">Excel in School!</span>
            </h2>
            <p className="text-muted-foreground text-lg font-body max-w-2xl mx-auto">
              Complete syllabus from LKG to Class 6 with video lessons,
              downloadable notes, interactive chats, and AI tutor support.
            </p>
          </motion.div>

          {/* 3 Mediums */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="font-display text-2xl font-bold text-center mb-8 text-foreground">
              Choose Your Learning Medium 📖
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MEDIUMS.map((medium) => (
                <motion.div
                  key={medium.name}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleStartLearning}
                  className={`bg-gradient-to-br ${medium.color} rounded-3xl p-6 text-white shadow-lg cursor-pointer transition-shadow hover:shadow-float`}
                >
                  <div className="text-5xl mb-3">{medium.flag}</div>
                  <h3 className="font-display text-xl font-bold mb-2">
                    {medium.name}
                  </h3>
                  <p className="text-white/80 text-sm font-body">
                    {medium.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold">
                    <span>Select Medium</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      →
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="font-display text-2xl font-bold text-center mb-8 text-foreground">
              Why Kids Love KidLearn 💜
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-card rounded-3xl p-6 shadow-md border border-border hover:shadow-float transition-all"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 shadow-md`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-base font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-20 py-16 bg-kid-gradient rounded-3xl relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 20 }, (_, i) => `star-${i}`).map(
                (starId) => (
                  <motion.div
                    key={starId}
                    className="absolute text-2xl"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                  >
                    ⭐
                  </motion.div>
                ),
              )}
            </div>
            <div className="relative z-10">
              <OWLMascot size="lg" animate className="mx-auto mb-4" />
              <h2 className="font-display text-3xl font-bold text-white mb-3">
                Ready to Start Learning? 🚀
              </h2>
              <p className="text-white/80 font-body mb-6 text-lg">
                Join thousands of students learning with KidLearn!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button
                  onClick={handleStartLearning}
                  size="lg"
                  className="bg-white text-primary rounded-full px-10 py-4 text-lg font-display font-bold shadow-float hover:bg-white/90"
                >
                  {isLoggingIn ? "✨ Loading..." : "🎓 Login & Start Learning!"}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
          <div className="flex items-center gap-2">
            <img
              src="/assets/generated/kidlearn-logo-transparent.dim_300x300.png"
              alt="KidLearn"
              className="w-6 h-6 object-contain"
            />
            <span>KidLearn — Empowering Young Minds</span>
          </div>
          <p>
            © {new Date().getFullYear()}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
