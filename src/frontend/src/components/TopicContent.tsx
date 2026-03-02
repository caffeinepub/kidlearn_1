import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  Download,
  FileText,
  MessageCircle,
  Play,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import type { SyllabusTopic } from "../data/syllabus";
import { OWLMascot } from "./OWLMascot";

const SUBJECT_COLORS: Record<number, string> = {
  1: "from-blue-500 to-cyan-400",
  2: "from-orange-500 to-amber-400",
  3: "from-emerald-500 to-green-400",
  4: "from-pink-500 to-rose-400",
  5: "from-violet-500 to-purple-400",
  6: "from-fuchsia-500 to-pink-400",
};

const SUBJECT_ICONS: Record<number, string> = {
  1: "📚",
  2: "🔢",
  3: "🔬",
  4: "🌍",
  5: "✏️",
  6: "🌺",
};

interface TopicContentProps {
  topic: SyllabusTopic;
  subjectId: number;
  onMarkComplete?: () => void;
  isCompleted?: boolean;
}

export function TopicContent({
  topic,
  subjectId,
  onMarkComplete,
  isCompleted = false,
}: TopicContentProps) {
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<
    { role: "student" | "owl"; message: string }[]
  >([...topic.chatExplanation]);
  const gradient = SUBJECT_COLORS[subjectId] || "from-violet-500 to-purple-400";
  const icon = SUBJECT_ICONS[subjectId] || "📖";

  const handleDownloadPDF = () => {
    toast.info("📥 PDF download coming soon!", {
      description: "Your notes will be available for download very soon!",
    });
  };

  const handleStudentMessage = () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();
    setChatInput("");
    setChatMessages((prev) => [...prev, { role: "student", message: userMsg }]);

    setTimeout(() => {
      const responses = [
        `Great question! 🌟 ${userMsg.includes("?") ? "Let me explain that further..." : "I'm so glad you're curious!"} Keep asking questions - that's how we learn!`,
        `Excellent thinking! 🦉 The answer relates to what we learned about ${topic.title}. Practice makes perfect!`,
        `That's a wonderful question! Remember what we learned: ${topic.chatExplanation[0]?.message?.slice(0, 100) || "keep exploring"}...`,
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages((prev) => [...prev, { role: "owl", message: response }]);
    }, 800);
  };

  return (
    <div className="space-y-4">
      <Tabs defaultValue="video" className="w-full">
        <TabsList className="w-full grid grid-cols-3 bg-secondary rounded-2xl h-12">
          <TabsTrigger
            value="video"
            className="rounded-xl flex items-center gap-2 font-body font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Play className="w-4 h-4" />
            <span>Video</span>
          </TabsTrigger>
          <TabsTrigger
            value="notes"
            className="rounded-xl flex items-center gap-2 font-body font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <FileText className="w-4 h-4" />
            <span>Notes</span>
          </TabsTrigger>
          <TabsTrigger
            value="chat"
            className="rounded-xl flex items-center gap-2 font-body font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat</span>
          </TabsTrigger>
        </TabsList>

        {/* Video Tab */}
        <TabsContent value="video" className="mt-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-8 text-white`}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-8 translate-x-8" />
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 translate-y-6 -translate-x-6" />

            <div className="relative text-center mb-6">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-7xl mb-4"
              >
                {icon}
              </motion.div>
              <h3 className="text-2xl font-display font-bold mb-2">
                {topic.title}
              </h3>
              <p className="text-white/80 text-sm">{topic.videoContent}</p>
            </div>

            {/* Play button */}
            <div className="flex justify-center mb-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  toast.info("🎬 Video lesson loading soon!", {
                    description: "Animated video content is coming!",
                  })
                }
                className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center shadow-float hover:bg-white/40 transition-all"
              >
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </motion.button>
            </div>

            {/* Key concepts */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <h4 className="font-display font-bold mb-3 flex items-center gap-2">
                <span>⭐</span> Key Concepts
              </h4>
              <ul className="space-y-2">
                {(
                  topic.keyConcepts || [
                    "Core concepts and definitions",
                    "Real-world examples",
                    "Practice exercises",
                    "Summary and review",
                  ]
                ).map((concept, i) => (
                  <motion.li
                    key={concept}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    {concept}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </TabsContent>

        {/* Notes Tab */}
        <TabsContent value="notes" className="mt-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-3xl border border-border overflow-hidden"
          >
            {/* Notes header */}
            <div className={`bg-gradient-to-r ${gradient} p-4 text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <h3 className="font-display font-bold">{topic.title}</h3>
                </div>
                <Button
                  onClick={handleDownloadPDF}
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-xl gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>
            </div>

            {/* Notes content */}
            <div className="p-6 space-y-4">
              <div className="prose prose-sm max-w-none font-body text-foreground">
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {topic.title}
                </h2>

                <div className="bg-secondary rounded-2xl p-4 mb-4">
                  <h3 className="font-display font-bold text-primary mb-2">
                    📌 What You Will Learn
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>✅ Understanding the basics of {topic.title}</li>
                    <li>✅ Key concepts and important points</li>
                    <li>✅ Fun facts and real-world examples</li>
                    <li>✅ Practice exercises to test your knowledge</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  {topic.notes.split("\n\n").map((para, i) => {
                    const paraKey = `para-${i}`;
                    if (para.startsWith("## ")) {
                      return (
                        <h3
                          key={paraKey}
                          className="font-display text-lg font-bold text-foreground mt-4 mb-2"
                        >
                          {para.replace("## ", "")}
                        </h3>
                      );
                    }
                    if (para.startsWith("# ")) {
                      return null;
                    }
                    if (para.startsWith("- ") || para.match(/^\d+\. /)) {
                      const items = para.split("\n").filter(Boolean);
                      return (
                        <ul key={paraKey} className="space-y-1">
                          {items.map((item) => (
                            <li
                              key={item}
                              className="text-sm flex items-start gap-2"
                            >
                              <span className="text-primary mt-0.5 flex-shrink-0">
                                •
                              </span>
                              <span>
                                {item
                                  .replace(/^[-\d.]+\s/, "")
                                  .replace(/\*\*(.*?)\*\*/g, "$1")}
                              </span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={paraKey} className="text-sm text-foreground/80">
                        {para}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        {/* Chat Tab */}
        <TabsContent value="chat" className="mt-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-3xl border border-border overflow-hidden flex flex-col"
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-4 text-white flex items-center gap-3">
              <OWLMascot size="sm" animate />
              <div>
                <h3 className="font-display font-bold">Owly's Explanation</h3>
                <p className="text-white/80 text-xs">
                  Ask me anything about {topic.title}!
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 max-h-80 overflow-y-auto">
              {chatMessages.map((msg, i) => (
                <motion.div
                  key={`chat-msg-${i}-${msg.role}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-start gap-3 ${msg.role === "student" ? "flex-row-reverse" : ""}`}
                >
                  {msg.role === "owl" && (
                    <div className="w-8 h-8 flex-shrink-0">
                      <OWLMascot size="sm" animate={false} />
                    </div>
                  )}
                  {msg.role === "student" && (
                    <div className="w-8 h-8 rounded-full bg-kid-orange flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      S
                    </div>
                  )}
                  <div
                    className={`px-4 py-2 text-sm max-w-[75%] leading-relaxed ${
                      msg.role === "owl"
                        ? "chat-bubble-owl text-white"
                        : "chat-bubble-student text-foreground"
                    }`}
                  >
                    {msg.message}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleStudentMessage()}
                  placeholder="Ask Owly a question..."
                  className="flex-1 px-4 py-2.5 rounded-2xl border border-border bg-secondary text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStudentMessage}
                  className="px-4 py-2.5 bg-kid-gradient rounded-2xl text-white font-semibold text-sm"
                >
                  Send 🦉
                </motion.button>
              </div>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Mark Complete */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Button
          onClick={onMarkComplete}
          disabled={isCompleted}
          className={`w-full h-14 rounded-2xl text-base font-display font-bold gap-2 ${
            isCompleted
              ? "bg-kid-green text-white cursor-not-allowed"
              : "bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-kid"
          }`}
        >
          {isCompleted ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Completed! ⭐
            </>
          ) : (
            <>✅ Mark as Complete</>
          )}
        </Button>
      </motion.div>
    </div>
  );
}
