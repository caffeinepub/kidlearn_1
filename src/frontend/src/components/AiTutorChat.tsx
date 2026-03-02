import { Bot, Send, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { OWLMascot } from "./OWLMascot";

interface Message {
  id: number;
  role: "user" | "owl";
  text: string;
  timestamp: Date;
}

const EDUCATION_KEYWORDS = [
  "math",
  "maths",
  "science",
  "english",
  "history",
  "geography",
  "social",
  "urdu",
  "telugu",
  "add",
  "subtract",
  "multiply",
  "divide",
  "number",
  "plant",
  "animal",
  "body",
  "water",
  "air",
  "earth",
  "sun",
  "moon",
  "read",
  "write",
  "word",
  "sentence",
  "grammar",
  "story",
  "poem",
  "how",
  "what",
  "why",
  "when",
  "where",
  "explain",
  "define",
  "help",
  "class",
  "school",
  "learn",
  "study",
  "homework",
  "question",
  "fraction",
  "triangle",
  "circle",
  "square",
  "geometry",
  "algebra",
  "photosynthesis",
  "digestion",
  "force",
  "energy",
  "electricity",
];

const QUICK_CHIPS = [
  "Explain addition ➕",
  "What is photosynthesis? 🌿",
  "Help with English grammar 📝",
  "Tell me about India 🇮🇳",
  "What are fractions? ½",
  "Explain evaporation 💧",
];

const PREDEFINED_RESPONSES: Record<string, string> = {
  addition:
    "Addition means adding two or more numbers together! 🎉 For example: 3 + 4 = 7. Think of it as combining groups of objects. If you have 3 apples and get 4 more, you have 7 apples! Practice counting on your fingers to start!",
  subtract:
    "Subtraction means taking away! ➖ For example: 8 - 3 = 5. If you have 8 chocolates and eat 3, you have 5 left. It's the opposite of addition!",
  multiply:
    "Multiplication is fast addition! ✖️ For example: 3 × 4 means 3 groups of 4, which equals 12. Learn your times tables and you'll be a maths superstar! ⭐",
  divide:
    "Division means sharing equally! ÷ For example: 12 ÷ 3 means sharing 12 things into 3 equal groups. Each group gets 4! Think of sharing cookies with friends.",
  photosynthesis:
    "Photosynthesis is how plants make their own food! 🌱 Plants use sunlight + water + carbon dioxide (CO2) from air → they make glucose (sugar) + oxygen. That's why plants are so important - they give us fresh air too! 🌿☀️",
  plant:
    "Plants are amazing living things! 🌱 They have roots (to absorb water), stem (to carry water up), leaves (to make food using sunlight), flowers (for reproduction), and fruits (with seeds). Plants make their own food through photosynthesis!",
  animal:
    "Animals are living beings that move and eat food! 🦁 They can be vertebrates (have backbone - like fish, birds, mammals) or invertebrates (no backbone - like insects, worms). Animals depend on plants or other animals for food!",
  water:
    "Water is very important for life! 💧 It has no color, taste, or smell. Water exists as liquid (water), solid (ice), and gas (steam). The water cycle - evaporation → cloud formation → rain → rivers → ocean keeps water moving!",
  grammar:
    "English grammar helps us speak and write correctly! 📝 Important parts: Nouns (names of people/places/things), Verbs (action words), Adjectives (describing words), Adverbs (how/when/where actions happen), Pronouns (replace nouns like he/she/it)!",
  fraction:
    "A fraction shows part of a whole! 🍕 Like 1/2 means 1 part out of 2 equal parts. The top number is the numerator, the bottom is the denominator. 1/2 of a pizza = half the pizza! Easy!",
  india:
    "India is our amazing country! 🇮🇳 It's the 7th largest country in the world. The national capital is New Delhi. India has 28 states and 8 Union Territories. National bird is Peacock, National animal is Tiger. India has diverse cultures, languages, and religions!",
  evaporation:
    "Evaporation is when liquid water turns into water vapour (gas)! 💧→💨 It happens when water is heated by the sun. This is how puddles disappear! Evaporation is part of the water cycle that makes rain clouds!",
  triangle:
    "A triangle is a shape with 3 sides and 3 angles! 🔺 Types: Equilateral (all sides equal), Isosceles (two sides equal), Scalene (no sides equal). The three angles of a triangle always add up to 180°!",
  electricity:
    "Electricity is the flow of electrons! ⚡ It flows through conductors like copper wire. A circuit needs: battery (energy source), wire (path), and bulb/device. Always be careful with electricity - never touch live wires!",
};

function getOwlResponse(message: string): string {
  const lower = message.toLowerCase();

  // Check if education-related
  const isEducation = EDUCATION_KEYWORDS.some((kw) => lower.includes(kw));

  if (!isEducation) {
    return "🦉 I only help with school subjects! Ask me about Maths ➕, Science 🔬, English 📚, Social Studies 🌍, or any school topic. I'm here to make learning fun!";
  }

  // Check predefined responses
  for (const [key, response] of Object.entries(PREDEFINED_RESPONSES)) {
    if (lower.includes(key)) {
      return response;
    }
  }

  // Generic helpful response
  return `Great question! 🌟 That's an important topic in your studies! Remember to:\n\n📚 Read your textbook chapters carefully\n✏️ Take notes of key points\n🔁 Practice regularly\n❓ Ask your teacher if confused\n\nKeep up the great work! Learning every day makes you smarter! 💪⭐`;
}

export function AiTutorChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "owl",
      text: "Hello! I'm Owly, your AI learning buddy! 🦉✨ I can help you with Maths, Science, English, Social Studies, and more! What would you like to learn today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally scroll on messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const owlResponse: Message = {
        id: Date.now() + 1,
        role: "owl",
        text: getOwlResponse(messageText),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, owlResponse]);
    }, 600);
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-kid-gradient rounded-full shadow-float flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <OWLMascot size="sm" animate={false} />
            </motion.div>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-kid-orange rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-3 h-3 text-white" />
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] max-w-[calc(100vw-2rem)] bg-card rounded-3xl shadow-float border border-border overflow-hidden flex flex-col"
            style={{ height: "500px" }}
          >
            {/* Header */}
            <div className="bg-kid-gradient p-4 flex items-center gap-3">
              <OWLMascot size="sm" animate />
              <div className="flex-1">
                <h3 className="font-display font-bold text-white text-sm">
                  Owly - AI Tutor
                </h3>
                <p className="text-white/80 text-xs">
                  Education helper for school subjects
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  {msg.role === "owl" && (
                    <div className="w-7 h-7 flex-shrink-0">
                      <OWLMascot size="sm" animate={false} />
                    </div>
                  )}
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-kid-orange flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      S
                    </div>
                  )}
                  <div
                    className={`px-3 py-2 text-xs max-w-[80%] leading-relaxed whitespace-pre-line ${
                      msg.role === "owl"
                        ? "chat-bubble-owl text-white"
                        : "chat-bubble-student text-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick chips */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto">
              {QUICK_CHIPS.slice(0, 3).map((chip) => (
                <button
                  type="button"
                  key={chip}
                  onClick={() => sendMessage(chip)}
                  className="flex-shrink-0 text-xs bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full px-3 py-1.5 font-body"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 pt-2 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask about school topics..."
                  className="flex-1 px-3 py-2 rounded-2xl border border-border bg-secondary text-xs font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => sendMessage()}
                  className="w-9 h-9 bg-kid-gradient rounded-full flex items-center justify-center"
                >
                  <Send className="w-4 h-4 text-white" />
                </motion.button>
              </div>
              <p className="text-[10px] text-muted-foreground mt-1 text-center">
                🦉 Owly only answers education-related questions
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
