export interface SyllabusChapter {
  id: number;
  title: string;
  icon: string;
  topics: SyllabusTopic[];
}

export interface SyllabusTopic {
  id: number;
  title: string;
  videoContent: string;
  notes: string;
  chatExplanation: ChatMessage[];
  keyConcepts: string[];
}

export interface ChatMessage {
  role: "owl" | "student";
  message: string;
}

export interface SubjectData {
  name: string;
  icon: string;
  color: string;
  gradientClass: string;
  chapters: SyllabusChapter[];
}

export interface ClassData {
  id: number;
  name: string;
  label: string;
  subjects: Record<string, SubjectData>;
}

// Subject IDs
export const SUBJECT_IDS = {
  ENGLISH: 1,
  MATHEMATICS: 2,
  SCIENCE: 3,
  SOCIAL_STUDIES: 4,
  URDU: 5,
  TELUGU: 6,
} as const;

// Mediums
export type Medium = "english" | "urdu" | "telugu";

export const MEDIUMS: Record<Medium, { label: string; subjects: number[] }> = {
  english: {
    label: "English Medium",
    subjects: [1, 2, 3, 4],
  },
  urdu: {
    label: "Urdu Medium",
    subjects: [1, 2, 3, 4, 5],
  },
  telugu: {
    label: "Telugu Medium",
    subjects: [1, 2, 3, 4, 6],
  },
};

export const SUBJECT_META: Record<
  number,
  { name: string; icon: string; color: string; gradientClass: string }
> = {
  1: {
    name: "English",
    icon: "📚",
    color: "oklch(0.62 0.22 250)",
    gradientClass: "bg-blue-gradient",
  },
  2: {
    name: "Mathematics",
    icon: "🔢",
    color: "oklch(0.68 0.20 40)",
    gradientClass: "bg-orange-gradient",
  },
  3: {
    name: "Science",
    icon: "🔬",
    color: "oklch(0.55 0.22 145)",
    gradientClass: "bg-green-gradient",
  },
  4: {
    name: "Social Studies",
    icon: "🌍",
    color: "oklch(0.60 0.22 25)",
    gradientClass: "bg-pink-gradient",
  },
  5: {
    name: "Urdu",
    icon: "✏️",
    color: "oklch(0.55 0.22 310)",
    gradientClass: "bg-kid-gradient",
  },
  6: {
    name: "Telugu",
    icon: "🌺",
    color: "oklch(0.55 0.22 310)",
    gradientClass: "bg-kid-gradient",
  },
};

export const CLASS_NAMES: Record<number, string> = {
  1: "LKG",
  2: "UKG",
  3: "Class 1",
  4: "Class 2",
  5: "Class 3",
  6: "Class 4",
  7: "Class 5",
  8: "Class 6",
};

// Topic content map: specific, real educational content for key topics
type TopicContentData = {
  videoContent: string;
  notes: string;
  chatExplanation: ChatMessage[];
  keyConcepts: string[];
};

const TOPIC_CONTENT_MAP: Record<string, TopicContentData> = {
  "alphabet a to m": {
    keyConcepts: [
      "Letters A, B, C to M",
      "Each letter has a sound",
      "Capital and small letters",
      "Words starting with each letter",
    ],
    videoContent:
      "Watch as the letters A to M come alive with colorful animations! Each letter dances on screen with its sound and a picture of a word that starts with it -- Apple for A, Ball for B, Cat for C!",
    notes: `# Alphabet A to M

## What You Will Learn
- The first 13 letters of the English alphabet
- The sound each letter makes
- A word that starts with each letter
- How to write each letter

## The Letters A to M

| Letter | Sound | Example Word |
|--------|-------|-------------|
| **A** | "ay" | Apple 🍎 |
| **B** | "bee" | Ball 🏀 |
| **C** | "see" | Cat 🐱 |
| **D** | "dee" | Dog 🐶 |
| **E** | "ee" | Egg 🥚 |
| **F** | "ef" | Fish 🐟 |
| **G** | "jee" | Goat 🐐 |
| **H** | "aitch" | Hat 🎩 |
| **I** | "eye" | Ink ✒️ |
| **J** | "jay" | Jar 🫙 |
| **K** | "kay" | Kite 🪁 |
| **L** | "el" | Lion 🦁 |
| **M** | "em" | Mango 🥭 |

## Fun Fact
The word "alphabet" comes from the first two Greek letters: **Alpha** (α) and **Beta** (β)!

## Practice
1. Name 3 things that start with the letter B.
2. Write the letter that comes after D.
3. Which letter does "elephant" start with?

## Summary
Letters A to M are the first half of our alphabet. Each letter has a special sound. Learning these letters helps us read and write words! ⭐`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Hello! 🦉 I'm Owly! Today we learn the first letters of the alphabet -- A to M! There are 13 letters. Ready?",
      },
      { role: "student", message: "Yes Owly! What is the first letter?" },
      {
        role: "owl",
        message:
          "The first letter is **A**! 🍎 A is for Apple! It makes the 'ay' sound. Can you say 'A for Apple'?",
      },
      { role: "student", message: "A for Apple! What comes next?" },
      {
        role: "owl",
        message:
          "Next is **B** for Ball! 🏀 Then **C** for Cat! 🐱 Each letter has its own sound. D is for Dog, E is for Egg, F is for Fish!",
      },
      { role: "student", message: "I know G! G is for... Goat?" },
      {
        role: "owl",
        message:
          "YES! 🎉 G is for Goat! Amazing! Then H for Hat, I for Ink, J for Jar, K for Kite, L for Lion, and M for Mango! 🥭 You're doing so well!",
      },
    ],
  },
  "alphabet n to z": {
    keyConcepts: [
      "Letters N, O, P to Z",
      "Each letter has its own sound",
      "Fun words for each letter",
      "Complete the alphabet",
    ],
    videoContent:
      "The second half of the alphabet comes alive! From N for Nest to Z for Zebra, watch colorful animations show each letter's sound and a matching picture that helps you remember each letter easily.",
    notes: `# Alphabet N to Z

## What You Will Learn
- The last 13 letters of the English alphabet
- The sound each letter makes
- Example words for each letter
- How to complete the full alphabet A-Z

## The Letters N to Z

| Letter | Sound | Example Word |
|--------|-------|-------------|
| **N** | "en" | Nest 🪺 |
| **O** | "oh" | Orange 🍊 |
| **P** | "pee" | Parrot 🦜 |
| **Q** | "kyoo" | Queen 👑 |
| **R** | "ar" | Rain 🌧️ |
| **S** | "es" | Sun ☀️ |
| **T** | "tee" | Tiger 🐯 |
| **U** | "yoo" | Umbrella ☂️ |
| **V** | "vee" | Van 🚐 |
| **W** | "double-you" | Water 💧 |
| **X** | "ex" | X-ray 🩻 |
| **Y** | "why" | Yak 🐃 |
| **Z** | "zee" | Zebra 🦓 |

## Fun Fact
The letter **Z** is called "Zee" in American English and "Zed" in British English and India!

## Practice
1. What animal starts with Z?
2. Name something at home that starts with W.
3. Which letter comes after S?

## Summary
Now you know all 26 letters of the alphabet from A to Z! Together, A to M and N to Z make the complete English alphabet. 🌟`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Welcome back! 🦉 Today we finish the alphabet -- letters N to Z! These are the last 13 letters. Ready to complete the alphabet?",
      },
      { role: "student", message: "Yes! What is N for?" },
      {
        role: "owl",
        message:
          "**N** is for Nest! 🪺 A nest is where birds live! Then O is for Orange 🍊, P is for Parrot 🦜, Q is for Queen 👑!",
      },
      { role: "student", message: "What about R, S, T?" },
      {
        role: "owl",
        message:
          "R is for Rain 🌧️, **S is for Sun ☀️** -- very important! And T is for Tiger 🐯! In India we have real tigers -- they're the national animal!",
      },
      { role: "student", message: "Wow! What are the last letters?" },
      {
        role: "owl",
        message:
          "U for Umbrella ☂️, V for Van 🚐, W for Water 💧, X for X-ray 🩻, Y for Yak 🐃, and the last letter is **Z for Zebra** 🦓! Now you know ALL 26 letters! ⭐⭐⭐",
      },
    ],
  },
  "vowels: a, e, i, o, u": {
    keyConcepts: [
      "5 vowels: A E I O U",
      "Vowels make special sounds",
      "Short vowel sounds",
      "Every word has a vowel",
    ],
    videoContent:
      "Discover the 5 special letters called vowels! Watch A, E, I, O, and U light up and hear their sounds with animated words. See how every English word needs at least one vowel to work!",
    notes: `# Vowels: A, E, I, O, U

## What You Will Learn
- What a vowel is
- The 5 vowels: A, E, I, O, U
- The sounds vowels make
- Why vowels are special

## What is a Vowel?
A **vowel** is a special letter that makes an open sound. Your mouth stays open when you say a vowel. The 5 vowels are:

🔴 **A** -- as in **A**pple, **A**nt
🟠 **E** -- as in **E**gg, **E**lephant  
🟡 **I** -- as in **I**nsect, **I**nk
🟢 **O** -- as in **O**range, **O**x
🔵 **U** -- as in **U**mbrella, **U**p

## Why Are Vowels Special?
Every English word has at least **one vowel**! Without vowels, we cannot make words. Try reading: "ct" -- it's impossible! But add a vowel: "cat" ✅

## Fun Fact
The word "queue" has 4 vowels in a row: Q-U-E-U-E! That's a record!

## Practice
1. Circle the vowels: b, a, t, e, r, i, o, n, u
2. How many vowels are in the word "elephant"?
3. Name a fruit that starts with each vowel.

## Summary
The 5 vowels A, E, I, O, U are the most important letters in English. Every word needs at least one vowel! 🌟`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Hello! 🦉 Today we learn about **vowels** -- the most special letters in the alphabet! Do you know what a vowel is?",
      },
      { role: "student", message: "No, what is a vowel?" },
      {
        role: "owl",
        message:
          "A vowel is a letter where your mouth stays open when you say it! There are only **5 vowels**: A, E, I, O, U. Say them with me!",
      },
      {
        role: "student",
        message:
          "A... E... I... O... U! Like Apple, Egg, Ink, Orange, Umbrella?",
      },
      {
        role: "owl",
        message:
          "PERFECT! 🎉 Exactly right! A for Apple 🍎, E for Egg 🥚, I for Ink ✒️, O for Orange 🍊, U for Umbrella ☂️!",
      },
      { role: "student", message: "Why are vowels special?" },
      {
        role: "owl",
        message:
          "Because **every word needs at least one vowel**! Try saying 'ct' -- impossible! Add 'a' and you get 'cat' 🐱. Add 'u' and you get 'cut'. Vowels make words possible! ⭐⭐⭐",
      },
    ],
  },
  "numbers 1, 2, 3": {
    keyConcepts: [
      "Count 1, 2, 3 objects",
      "Write the numerals 1, 2, 3",
      "One, Two, Three",
      "Match numbers to objects",
    ],
    videoContent:
      "Watch the numbers 1, 2, and 3 jump and play! One ball bounces, two stars twinkle, three flowers bloom -- see numbers and objects together with fun counting animations perfect for little learners.",
    notes: `# Numbers 1, 2, 3

## What You Will Learn
- What the numbers 1, 2, and 3 look like
- How to count 1, 2, 3 objects
- The words: One, Two, Three
- How to write 1, 2, 3

## The Numbers

**1 - ONE** 🌟
- One sun in the sky
- One nose on your face
- Write: Start at the top, draw a straight line down

**2 - TWO** 🌟🌟
- Two eyes on your face
- Two hands
- Two wheels on a bicycle
- Write: Start with a curve, then a flat line

**3 - THREE** 🌟🌟🌟
- Three meals a day (breakfast, lunch, dinner)
- Three wheels on a tricycle
- Write: Two bumps facing right

## Fun Fact
In cricket 🏏, when a batsman scores **3 runs** from one ball, it's called a "three"!

## Practice
1. Draw 2 apples 🍎🍎
2. Count: How many fingers on one hand? ✋
3. Which number comes after 2?

## Summary
1 means ONE thing, 2 means TWO things, 3 means THREE things. Count carefully and you'll be a maths star! ⭐`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Hello little learner! 🦉 Today we meet the first numbers: **1, 2, and 3**! These are our first counting friends. Ready?",
      },
      { role: "student", message: "Yes! Show me the numbers!" },
      {
        role: "owl",
        message:
          "**1 is ONE!** 1️⃣ One sun ☀️, one moon 🌙, one nose on your face 👃! Can you show me ONE finger?",
      },
      { role: "student", message: "Like this! *holds up one finger*" },
      {
        role: "owl",
        message:
          "Perfect! 🌟 Now **2 is TWO!** 2️⃣ Two eyes 👀, two hands 🙌, two shoes 👟👟! Show me TWO fingers!",
      },
      { role: "student", message: "Two fingers! Now what is 3?" },
      {
        role: "owl",
        message:
          "**3 is THREE!** 3️⃣ Three meals a day -- breakfast, lunch, dinner! Three wheels on a tricycle! Show me THREE fingers! You're a counting champion! 🎉⭐⭐⭐",
      },
    ],
  },
  "adding single digits": {
    keyConcepts: [
      "Addition means putting together",
      "Use + and = signs",
      "Adding numbers 1 to 9",
      "Find the sum",
    ],
    videoContent:
      "Watch as colorful objects group together on screen -- 3 apples plus 2 apples makes 5 apples! Animated number blocks and fingers show single-digit addition sums from 1+1 to 9+9 in a fun, step-by-step way.",
    notes: `# Adding Single Digits

## What You Will Learn
- What addition means
- How to add two single-digit numbers
- How to use the + and = signs
- How to solve simple word problems

## What is Addition?
**Addition** means putting two groups together to find the total.

- The **+ sign** means "plus" or "add"
- The **= sign** means "equals" or "gives"
- The answer to addition is called the **sum**

## Examples

🍎🍎🍎 + 🍎🍎 = 🍎🍎🍎🍎🍎

**3 + 2 = 5**

More examples:
- 1 + 1 = 2
- 4 + 3 = 7
- 5 + 5 = 10
- 6 + 2 = 8
- 9 + 1 = 10

## Tips for Adding
1. **Count on your fingers** -- hold up 4 fingers, then count 3 more
2. **Draw dots** -- draw 5 dots, then 3 more, count all dots
3. **Start from the bigger number** -- for 2+7, start at 7 and count 2 more

## Fun Fact
Addition doesn't care about order! **3 + 5 = 5 + 3 = 8**. This is called the **Commutative Property**!

## Practice
1. What is 4 + 3 = ?
2. There are 2 cats and 3 dogs. How many animals are there?
3. Fill in the blank: 6 + ___ = 9

## Summary
Addition is putting two numbers together to get a bigger number called the **sum**. Practice adding every day and you'll become a Maths champion! 🏆`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Hello! 🦉 Today we learn **addition** -- putting numbers together! Imagine you have 3 mangoes 🥭🥭🥭 and your friend gives you 2 more 🥭🥭. How many do you have now?",
      },
      {
        role: "student",
        message: "Umm... I'll count... 1, 2, 3, 4, 5! Five mangoes!",
      },
      {
        role: "owl",
        message:
          "EXCELLENT! 🌟 That's 3 + 2 = **5**! We use the **+ sign** to show addition. The answer is called the **sum**. So 3 + 2 = 5 means 3 plus 2 equals 5!",
      },
      { role: "student", message: "What is 4 + 3?" },
      {
        role: "owl",
        message:
          "Let's count! Start at 4 🖐️ and count 3 more: 5, 6, **7**! So 4 + 3 = **7**! A helpful trick: always start with the bigger number!",
      },
      {
        role: "student",
        message: "Oh! So for 2 + 8, I start at 8 and count 2 more?",
      },
      {
        role: "owl",
        message:
          "PERFECT thinking! 🎉 8... 9... **10**! So 2 + 8 = 10! Amazing! Remember: addition always gives a bigger answer. You're a Maths STAR! ⭐⭐⭐",
      },
    ],
  },
  "subtracting single digits": {
    keyConcepts: [
      "Subtraction means taking away",
      "Use - and = signs",
      "Find what is left over",
      "Count backwards",
    ],
    videoContent:
      "See subtraction in action as objects disappear one by one! Start with 8 stars, take away 3, and count what's left. Animated visuals make taking away easy and fun for Class 1 students.",
    notes: `# Subtracting Single Digits

## What You Will Learn
- What subtraction means
- How to use the − sign
- How to find what is left after taking away
- How to subtract single-digit numbers

## What is Subtraction?
**Subtraction** means taking away from a group to find what is left.

- The **− sign** (minus) means "take away" or "subtract"
- The answer to subtraction is called the **difference**

## Examples

🍎🍎🍎🍎🍎 take away 🍎🍎 = 🍎🍎🍎

**5 − 2 = 3**

More examples:
- 8 − 3 = 5
- 10 − 4 = 6
- 7 − 7 = 0
- 9 − 5 = 4

## Tips for Subtracting
1. **Count backwards** -- for 8 − 3, start at 8 and count back 3: 7, 6, **5**
2. **Cross out objects** -- draw 7 circles, cross out 2, count what's left
3. **Use addition to check** -- if 9 − 4 = 5, check: 5 + 4 = 9 ✅

## Fun Fact
If you subtract a number from itself, you always get **zero**! 5 − 5 = 0, 10 − 10 = 0!

## Practice
1. What is 9 − 4 = ?
2. You have 7 biscuits and eat 3. How many are left?
3. Fill in the blank: 8 − ___ = 5

## Summary
Subtraction is taking away from a group to find what remains. The answer is the **difference**. Addition and subtraction are opposites -- they undo each other! ⭐`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Hello! 🦉 Today we learn **subtraction** -- taking things away! Imagine you have 5 sweets 🍬🍬🍬🍬🍬 and you eat 2. How many are left?",
      },
      {
        role: "student",
        message: "I'll count what's left... 1, 2, 3! Three sweets!",
      },
      {
        role: "owl",
        message:
          "Perfect! 🌟 We write this as 5 − 2 = **3**. The **− sign** means 'minus' or 'take away'. The answer is called the **difference**!",
      },
      { role: "student", message: "How do I subtract bigger numbers?" },
      {
        role: "owl",
        message:
          "Count backwards! For 8 − 3, start at 8 and count back 3 steps: 7... 6... **5**! So 8 − 3 = 5. Try it on your fingers!",
      },
      { role: "student", message: "8... 7... 6... 5! Yes! 8 minus 3 is 5!" },
      {
        role: "owl",
        message:
          "AMAZING! 🎉 You've got it! Remember: subtraction and addition are friends. If 5 − 2 = 3, then 3 + 2 = 5 ✅. Check your work this way! You're brilliant! ⭐⭐⭐",
      },
    ],
  },
  "what is water?": {
    keyConcepts: [
      "Water is H₂O: hydrogen + oxygen",
      "3 states: solid, liquid, gas",
      "Water covers 71% of Earth",
      "We need water to survive",
    ],
    videoContent:
      "Dive into the world of water! Discover why water is the most important substance on Earth. See animated molecules of H₂O, watch water change from ice to liquid to steam, and find out where our drinking water comes from.",
    notes: `# What is Water?

## What You Will Learn
- What water is made of
- The three states of water
- Why water is important for life
- Where we find water

## What is Water?
Water is a **liquid** that is essential for all living things. It has no colour, no smell, and no taste.

**Chemical formula: H₂O**
- H₂ = 2 atoms of **Hydrogen**
- O = 1 atom of **Oxygen**

## The Three States of Water

| State | Form | Example |
|-------|------|---------|
| **Solid** | Ice | Ice cubes ❄️ |
| **Liquid** | Water | Drinking water 💧 |
| **Gas** | Steam | Boiling water ♨️ |

Water changes state with temperature:
- Heat water → it becomes **steam** (gas)
- Cool steam → it becomes **water** (liquid)
- Freeze water → it becomes **ice** (solid)

## Why is Water Important?
- Our body is about **70% water**
- Plants need water to make food (photosynthesis)
- Water carries nutrients in our blood
- We use it for drinking, cooking, bathing

## Fun Fact
Water is the **only substance on Earth** that naturally exists in all three states -- solid, liquid, and gas!

## Practice
1. What is the chemical formula of water?
2. What happens to water when we heat it?
3. Name 3 uses of water at home.

## Summary
Water (H₂O) is made of hydrogen and oxygen. It exists as ice (solid), water (liquid), and steam (gas). Water is essential for all life on Earth! 💧`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Hello! 🦉 Today we explore **water** -- the most important liquid on Earth! Do you know what water is made of?",
      },
      { role: "student", message: "It's just water? Like from the tap?" },
      {
        role: "owl",
        message:
          "Water is actually a **chemical compound** called **H₂O**! That means 2 atoms of hydrogen and 1 atom of oxygen joined together. Isn't that amazing for something so simple?",
      },
      { role: "student", message: "Can water change its shape?" },
      {
        role: "owl",
        message:
          "Yes! Water exists in **3 states**: When cold (0°C), water becomes **ice** ❄️ -- a solid. Normally it's liquid 💧. When heated (100°C), it becomes **steam** ♨️ -- a gas!",
      },
      { role: "student", message: "Why do we need so much water?" },
      {
        role: "owl",
        message:
          "Because **your body is 70% water**! 💧 Water carries food and oxygen in your blood, keeps you cool when you sweat, and helps your brain think! Without water, we cannot survive even 3 days. That's why we must never waste it! 🌍",
      },
    ],
  },
  "parts of a plant": {
    keyConcepts: [
      "6 main parts: roots, stem, leaves, flower, fruit, seed",
      "Each part has a special job",
      "Roots absorb water and minerals",
      "Leaves make food by photosynthesis",
    ],
    videoContent:
      "Watch a plant grow from seed to flower in animated time-lapse! Discover each part of a plant -- roots underground, the stem standing tall, green leaves catching sunlight, and beautiful flowers that make fruits and seeds.",
    notes: `# Parts of a Plant

## What You Will Learn
- The 6 main parts of a plant
- The function (job) of each part
- How parts work together to keep the plant alive
- Examples of each part

## The 6 Main Parts of a Plant 🌿

### 1. Roots 🌱 (underground)
- **Job**: Absorb water and minerals from the soil
- **Also**: Hold the plant firmly in the ground
- **Examples**: Carrot, radish, turnip (we eat the root!)

### 2. Stem 🌴
- **Job**: Carries water and minerals from roots to leaves
- **Also**: Supports the plant and holds it upright
- **Examples**: Tree trunk, rose stem, sugarcane (we eat the stem!)

### 3. Leaves 🍃
- **Job**: Make food for the plant using sunlight (photosynthesis)
- **Also**: Release water vapour through tiny holes (stomata)
- **Examples**: Spinach, lettuce, curry leaves (we eat the leaf!)

### 4. Flower 🌸
- **Job**: Help the plant reproduce (make new plants)
- **Also**: Attract bees and butterflies for pollination
- **Examples**: Rose, sunflower, jasmine

### 5. Fruit 🍎
- **Job**: Protects the seed; provides food for animals and humans
- **Examples**: Mango, apple, tomato, banana

### 6. Seed 🌰
- **Job**: Grows into a new plant
- **Examples**: Pea, sunflower seed, bean

## Fun Fact
The **tallest plant** in the world is the Coastal Redwood tree in California, which grows up to 115 metres -- as tall as a 38-storey building!

## Practice
1. Which part of the plant absorbs water?
2. Name a vegetable where we eat the root.
3. What is the job of a flower?

## Summary
A plant has 6 main parts: roots, stem, leaves, flower, fruit, and seed. Each part has a special job to keep the plant alive and help it make new plants! 🌿`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Hello! 🦉 Today we learn about **parts of a plant**! Plants are amazing -- they make their own food! Do you know any parts of a plant?",
      },
      { role: "student", message: "Leaves and flowers!" },
      {
        role: "owl",
        message:
          "Great! 🌟 There are actually **6 main parts**: Roots 🌱, Stem, Leaves 🍃, Flower 🌸, Fruit 🍎, and Seed. Each part has a special job!",
      },
      { role: "student", message: "What do roots do?" },
      {
        role: "owl",
        message:
          "**Roots** grow underground and have two big jobs: they **absorb water and minerals** from the soil, and they **hold the plant** firmly so wind doesn't blow it away! We eat roots like carrots 🥕 and radishes!",
      },
      { role: "student", message: "And what do leaves do?" },
      {
        role: "owl",
        message:
          "Leaves do the most amazing job -- they make **food for the plant**! They use sunlight, water, and air to make food in a process called **photosynthesis**. That's why leaves are green and face the sun! 🌞",
      },
    ],
  },
  "multiplication tables": {
    keyConcepts: [
      "Tables of 2, 3, 4, 5",
      "Multiplication is repeated addition",
      "Learn patterns in tables",
      "Times tables speed up maths",
    ],
    videoContent:
      "Multiplication tables come alive with music and rhythm! Watch the 2-times, 3-times, 4-times, and 5-times tables displayed with colorful animations, patterns, and songs that make memorizing fun and easy.",
    notes: `# Multiplication Tables (2 to 5)

## What You Will Learn
- What multiplication means
- Tables of 2, 3, 4, and 5
- Tricks to remember tables
- How multiplication is useful in daily life

## What is Multiplication?
**Multiplication** is a fast way of doing repeated addition.

**3 × 4** means adding 3 four times: 3 + 3 + 3 + 3 = **12**

The × sign means "times" or "multiplied by".

## Table of 2
| | | | | | | | | | |
|---|---|---|---|---|---|---|---|---|---|
| 2×1=2 | 2×2=4 | 2×3=6 | 2×4=8 | 2×5=10 | 2×6=12 | 2×7=14 | 2×8=16 | 2×9=18 | 2×10=20 |

**Trick**: All answers in the 2-times table are **even numbers**!

## Table of 3
| 3×1=3 | 3×2=6 | 3×3=9 | 3×4=12 | 3×5=15 | 3×6=18 | 3×7=21 | 3×8=24 | 3×9=27 | 3×10=30 |

**Trick**: The digit sum of each answer is always 3, 6, or 9! (e.g. 3×4=12, 1+2=3 ✅)

## Table of 4
| 4×1=4 | 4×2=8 | 4×3=12 | 4×4=16 | 4×5=20 | 4×6=24 | 4×7=28 | 4×8=32 | 4×9=36 | 4×10=40 |

## Table of 5
| 5×1=5 | 5×2=10 | 5×3=15 | 5×4=20 | 5×5=25 | 5×6=30 | 5×7=35 | 5×8=40 | 5×9=45 | 5×10=50 |

**Trick**: Every answer in the 5-times table ends in 0 or 5!

## Fun Fact
The 9-times table has a special trick! The digits always add up to 9: 9×2=18 (1+8=9), 9×3=27 (2+7=9)!

## Practice
1. What is 3 × 7?
2. A box has 4 rows with 5 apples each. How many apples?
3. What is 5 × 8?

## Summary
Multiplication is fast addition! Learn your tables by heart and maths will become much easier. Practise a little every day! 🏆`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Hello! 🦉 Today we learn **multiplication tables**! Multiplication is like super-fast addition. Instead of 4+4+4, we say 3×4 = 12! Ready?",
      },
      { role: "student", message: "What is the 2-times table?" },
      {
        role: "owl",
        message:
          "The **2-times table** is easy! Just count in 2s: 2, 4, 6, 8, 10... All answers are **even numbers**! 2×1=2, 2×2=4, 2×3=6... Notice the pattern?",
      },
      { role: "student", message: "Yes! They go up by 2 each time!" },
      {
        role: "owl",
        message:
          "Exactly! 🌟 Now the **5-times table** -- even easier! Every answer ends in 0 or 5: 5, 10, 15, 20, 25, 30... Count on your fingers! One hand = 5, two hands = 10!",
      },
      { role: "student", message: "What about 3 and 4 times tables?" },
      {
        role: "owl",
        message:
          "For **3-times table**, check the digits always add up to 3, 6, or 9: 3×4=12, 1+2=3 ✅! For **4-times table**, just double the 2-times table! 2×3=6, so 4×3=12! Smart trick! 🎉⭐⭐⭐",
      },
    ],
  },
  "five sense organs": {
    keyConcepts: [
      "5 senses: sight, hearing, smell, taste, touch",
      "Each sense has an organ",
      "Senses help us understand the world",
      "Brain processes all senses",
    ],
    videoContent:
      "Explore the amazing world of senses! Watch animated scenes showing all 5 sense organs in action -- eyes seeing colors, ears hearing music, nose smelling flowers, tongue tasting food, and skin feeling textures.",
    notes: `# Five Sense Organs

## What You Will Learn
- What the 5 senses are
- Which organ is responsible for each sense
- How sense organs help us
- Taking care of our sense organs

## The Five Senses

### 👁️ 1. Sight
- **Organ**: Eyes
- **What we detect**: Light, colour, shapes, movement
- **How it works**: Light enters the eye through the pupil, hits the retina, and the brain creates an image
- **Take care**: Don't read in dim light; don't stare at screens too long

### 👂 2. Hearing
- **Organ**: Ears
- **What we detect**: Sound (vibrations in the air)
- **How it works**: Sound waves enter the ear canal and vibrate the eardrum
- **Take care**: Don't put objects in ears; avoid very loud sounds

### 👃 3. Smell (Olfaction)
- **Organ**: Nose
- **What we detect**: Different smells (odours)
- **How it works**: Smell particles enter the nose and are detected by nerve cells
- **Note**: Smell and taste are closely connected!

### 👅 4. Taste (Gustation)
- **Organ**: Tongue
- **What we detect**: 5 tastes -- sweet, sour, salty, bitter, umami
- **How it works**: Tiny taste buds on the tongue detect different chemicals in food

### ✋ 5. Touch (Tactile)
- **Organ**: Skin
- **What we detect**: Pressure, temperature, pain, texture
- **The skin is the largest organ** in the human body!

## Fun Fact
You have about **10,000 taste buds** on your tongue! But they only last about 10 days before they are replaced with new ones!

## Practice
1. Which sense organ helps us see?
2. Name the 5 basic tastes.
3. Which is the largest sense organ?

## Summary
Our 5 sense organs -- eyes, ears, nose, tongue, and skin -- help us understand the world around us. All information from our senses goes to the brain, which helps us respond! 🧠`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Hello! 🦉 Today we learn about our **5 sense organs**! These are the special body parts that help us understand the world. Can you name any senses?",
      },
      { role: "student", message: "Eyes for seeing! And ears for hearing!" },
      {
        role: "owl",
        message:
          "Excellent! 🌟 Yes! **Eyes** give us the sense of **sight**, and **Ears** give us the sense of **hearing**. Can you name 3 more?",
      },
      { role: "student", message: "Hmm... nose for smelling?" },
      {
        role: "owl",
        message:
          "Perfect! **Nose** for **smell** 👃! And two more: **Tongue** for **taste** 👅 -- it has 10,000 tiny taste buds! And **Skin** for **touch** ✋ -- it can feel hot, cold, soft, and rough!",
      },
      { role: "student", message: "Which sense is most important?" },
      {
        role: "owl",
        message:
          "All senses are important! But did you know **smell and taste are connected**? When you have a cold and can't smell, food tastes different! All sense information goes to your **brain**, which is the command centre! 🧠✨",
      },
    ],
  },
  photosynthesis: {
    keyConcepts: [
      "Plants make food using sunlight",
      "Chlorophyll makes leaves green",
      "CO₂ + H₂O + Sunlight → Glucose + O₂",
      "Oxygen is released for us to breathe",
    ],
    videoContent:
      "See inside a leaf! Watch animated chloroplasts capture sunlight, absorb carbon dioxide, and combine with water to produce glucose and oxygen. Discover why plants are the chefs of the natural world!",
    notes: `# Photosynthesis

## What You Will Learn
- What photosynthesis is
- What plants need to make food
- The products of photosynthesis
- Why photosynthesis is important for all life

## What is Photosynthesis?
**Photosynthesis** is the process by which plants make their own food using sunlight.

The word comes from Greek: *photo* = light, *synthesis* = making

## The Photosynthesis Equation

**6CO₂ + 6H₂O + Sunlight → C₆H₁₂O₆ + 6O₂**

In simple words:
**Carbon Dioxide + Water + Sunlight → Glucose (sugar) + Oxygen**

## Ingredients Plants Need
1. **Sunlight** ☀️ -- from the sun (the energy source)
2. **Water** 💧 -- absorbed by roots from the soil
3. **Carbon Dioxide (CO₂)** -- absorbed from the air through stomata (tiny holes in leaves)

## What is Produced?
1. **Glucose (sugar)** 🍬 -- food for the plant, stored as starch
2. **Oxygen (O₂)** -- released into the air (this is what we breathe!)

## The Role of Chlorophyll
- **Chlorophyll** is the green pigment in leaves
- It **absorbs sunlight** and uses its energy
- This is why leaves are **green!**
- Photosynthesis happens in **chloroplasts** (parts of leaf cells)

## Why is Photosynthesis Important?
- All food on Earth traces back to photosynthesis
- Plants release the **oxygen we breathe**
- Reduces carbon dioxide (greenhouse gas) in the atmosphere
- Basis of all food chains

## Fun Fact
Plants release **oxygen** as a waste product of photosynthesis -- and this oxygen is exactly what animals and humans need to breathe! We have a perfect partnership with plants! 🤝

## Practice
1. What three things does a plant need for photosynthesis?
2. What gas do plants release during photosynthesis?
3. Why are leaves green?

## Summary
Photosynthesis is how plants make food. They use sunlight, water, and CO₂ to produce glucose and oxygen. Chlorophyll in leaves captures sunlight. This process is the foundation of all life on Earth! 🌿☀️`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Hello! 🦉 Today we learn one of nature's most amazing processes -- **Photosynthesis**! This is how plants make their own food. Isn't that incredible?",
      },
      { role: "student", message: "Plants make food? How?" },
      {
        role: "owl",
        message:
          "Plants are the chefs of nature! 🌿 They use 3 ingredients: **Sunlight ☀️** from the sky, **Water 💧** from the soil through roots, and **Carbon Dioxide** from the air through tiny holes in leaves!",
      },
      { role: "student", message: "What do they make?" },
      {
        role: "owl",
        message:
          "They make **Glucose** (a sweet food/sugar) 🍬 and **Oxygen** 🌬️! The glucose feeds the plant. The oxygen is released into the air -- and that's the oxygen **we breathe**! Plants literally keep us alive!",
      },
      { role: "student", message: "Why are leaves green?" },
      {
        role: "owl",
        message:
          "Because of **Chlorophyll** -- a green pigment that captures sunlight. It's like a solar panel! The equation is: CO₂ + Water + Sunlight = Glucose + Oxygen. Trees are our best friends! 🌳💚⭐⭐⭐",
      },
    ],
  },
  "the water cycle": {
    keyConcepts: [
      "Evaporation, Condensation, Precipitation",
      "Water is recycled naturally",
      "Sun drives the water cycle",
      "Same water has existed for billions of years",
    ],
    videoContent:
      "Follow a water droplet on its incredible journey! Watch evaporation from the ocean, condensation forming clouds, precipitation as rain and snow, and collection back into rivers and seas. The never-ending cycle of water on Earth!",
    notes: `# The Water Cycle

## What You Will Learn
- The 4 stages of the water cycle
- How the sun drives the water cycle
- Why the water cycle is important
- Key terms: evaporation, condensation, precipitation

## What is the Water Cycle?
The **water cycle** (also called the hydrological cycle) is the continuous movement of water on, above, and below Earth's surface. The same water has been cycling for **billions of years**!

## The 4 Stages

### Stage 1: Evaporation ☀️→💧→🌫️
- Heat from the sun turns liquid water into **water vapour** (gas)
- Water evaporates from oceans, rivers, lakes, and even puddles
- **Transpiration**: Plants also release water vapour through their leaves

### Stage 2: Condensation 🌫️→☁️
- As water vapour rises, the air gets **cooler**
- Cool air cannot hold as much water vapour
- Water vapour **condenses** into tiny water droplets
- These droplets form **clouds and fog**

### Stage 3: Precipitation ☁️→🌧️
- When clouds collect enough water droplets, they become heavy
- Water falls back to Earth as **precipitation**
- Forms: Rain 🌧️, Snow ❄️, Hail, Sleet

### Stage 4: Collection/Run-off 🌊
- Water collects in oceans, rivers, lakes, and groundwater
- Some soaks into the ground (groundwater)
- The cycle begins again!

## Why is the Water Cycle Important?
- Provides fresh water to land and living things
- Regulates Earth's temperature
- Supports plant and animal life
- Replenishes rivers and groundwater

## Fun Fact
Earth has the same amount of water as when it was formed 4.5 billion years ago! The water you drink today may have once been drunk by a dinosaur! 🦕

## Practice
1. What is evaporation?
2. What causes precipitation?
3. Name 3 forms of precipitation.

## Summary
The water cycle has 4 stages: Evaporation → Condensation → Precipitation → Collection. The sun provides the energy to drive this cycle. Water is recycled continuously -- it never gets "used up"! 💧`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Hello! 🦉 Today we learn about the **Water Cycle** -- how water travels around Earth! The same water has existed for billions of years. Ready for a water adventure?",
      },
      { role: "student", message: "How does water travel?" },
      {
        role: "owl",
        message:
          "It's like a big circle! ☀️ First, the sun heats water in oceans and rivers. The water turns into invisible **water vapour** and rises up. This is called **Evaporation**!",
      },
      { role: "student", message: "Then what happens?" },
      {
        role: "owl",
        message:
          "The water vapour rises high where the air is cold 🌫️. Cold air turns vapour back into tiny water drops. They bunch together to form **Clouds**! ☁️ This is **Condensation**.",
      },
      { role: "student", message: "And then it rains!" },
      {
        role: "owl",
        message:
          "Exactly! 🌧️ When clouds get heavy, water falls as **Rain, Snow, or Hail** -- called **Precipitation**! Then water collects in rivers and oceans, and the cycle starts again! Fun fact: the water you drink today might have once been drunk by a DINOSAUR! 🦕⭐⭐⭐",
      },
    ],
  },
  "national flag": {
    keyConcepts: [
      "3 colours: saffron, white, green",
      "Ashoka Chakra has 24 spokes",
      "Saffron = courage, White = peace, Green = prosperity",
      "Adopted on 22 July 1947",
    ],
    videoContent:
      "Learn about India's beautiful national flag! Watch the tricolour unfurl as the meaning of each colour is explained with animations. Discover the story of the Ashoka Chakra and why India's flag is a symbol of pride for 140 crore Indians.",
    notes: `# The National Flag of India

## What You Will Learn
- The colours of India's national flag
- What each colour represents
- About the Ashoka Chakra
- When the flag was adopted

## India's National Flag -- Tiranga 🇮🇳

The national flag of India is called the **Tiranga** (meaning "tricolour") because it has three colours arranged in horizontal stripes.

## The Three Colours

| Colour | Position | Meaning |
|--------|----------|---------|
| **Saffron (Kesari)** | Top | Courage, strength, and sacrifice |
| **White** | Middle | Peace, truth, and honesty |
| **Green** | Bottom | Prosperity, faith, and fertility |

## The Ashoka Chakra ⊙
- In the **centre** of the white strip is the **Ashoka Chakra** (wheel)
- It is **navy blue** in colour
- It has **24 spokes** (representing 24 hours in a day)
- It comes from the **Lion Capital of Ashoka** at Sarnath
- It represents **dharma** (righteousness) and progress

## Important Facts
- **Adopted on**: 22 July 1947 (before Independence on 15 August 1947)
- **Designed by**: Pingali Venkayya
- **Flag Code of India**: Rules for how to use the flag respectfully
- **Materials**: The flag must be made of **Khadi** (hand-spun cotton)

## Respect for the Flag
- Never let the flag touch the ground
- Never use the flag as decoration for clothing
- The flag can be flown by all citizens on national days
- Salute the flag with pride!

## Fun Fact
The original design was proposed by **Pingali Venkayya**, a freedom fighter from Andhra Pradesh! The design was based on the Indian National Congress flag.

## Practice
1. How many colours are in the Indian flag?
2. What does the Ashoka Chakra represent?
3. How many spokes does the Ashoka Chakra have?

## Summary
India's national flag has three colours: saffron (courage), white (peace), and green (prosperity), with the Ashoka Chakra in the centre. It was adopted on 22 July 1947. We must always respect our flag! 🇮🇳`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Jai Hind! 🦉🇮🇳 Today we learn about **India's National Flag** -- the Tiranga! Have you seen our flag flying on Independence Day?",
      },
      {
        role: "student",
        message: "Yes! It has orange, white and green colours!",
      },
      {
        role: "owl",
        message:
          "Almost right! 🌟 The top colour is **Saffron (Kesari)** -- not orange -- meaning **courage and sacrifice**. The middle is **White** for **peace and truth**. The bottom is **Green** for **prosperity**!",
      },
      { role: "student", message: "What is the wheel in the middle?" },
      {
        role: "owl",
        message:
          "That's the **Ashoka Chakra** -- a navy blue wheel with **24 spokes**! It comes from the Lion Capital at Sarnath and represents **dharma** (doing what is right) and continuous progress!",
      },
      { role: "student", message: "When was it made?" },
      {
        role: "owl",
        message:
          "It was **adopted on 22 July 1947** -- just before Independence! It was designed by **Pingali Venkayya** from Andhra Pradesh. 🌟 The flag must be made of **Khadi** cloth. Always respect our Tiranga! Jai Hind! 🇮🇳⭐⭐⭐",
      },
    ],
  },
  "continents and oceans": {
    keyConcepts: [
      "7 continents: Asia, Africa, Americas, Europe, Australia, Antarctica",
      "5 oceans: Pacific, Atlantic, Indian, Southern, Arctic",
      "Earth is 71% water",
      "Asia is the largest continent",
    ],
    videoContent:
      "Fly around the globe! See all 7 continents light up on the world map with their names, sizes, and famous features. Then dive into the 5 great oceans and discover which is the largest, deepest, and coldest!",
    notes: `# Continents and Oceans

## What You Will Learn
- The names of the 7 continents
- The names of the 5 oceans
- Basic facts about each continent
- India's location on the world map

## The 7 Continents 🌍

| Continent | Key Facts |
|-----------|-----------|
| **Asia** | Largest continent; India, China, Japan; Most populated |
| **Africa** | Second largest; Sahara Desert; Nile River |
| **North America** | USA, Canada, Mexico |
| **South America** | Brazil, Amazon Rainforest, Andes Mountains |
| **Europe** | Smallest (with Australia); UK, France, Germany |
| **Australia** | Smallest continent; Unique wildlife (kangaroos!) |
| **Antarctica** | Coldest; No permanent residents; Lots of ice |

**Memory trick**: **A**ll **A**nts **N**eed **S**ugar **E**specially **A**t **A**nt-arctica!
(Asia, Africa, North America, South America, Europe, Australia, Antarctica)

## The 5 Oceans 🌊

| Ocean | Key Facts |
|-------|-----------|
| **Pacific Ocean** | Largest and deepest ocean in the world |
| **Atlantic Ocean** | Second largest; separates Americas from Europe/Africa |
| **Indian Ocean** | Surrounds India; third largest |
| **Southern Ocean** | Around Antarctica |
| **Arctic Ocean** | Smallest and coldest; around the North Pole |

## India's Location
- India is in **South Asia**
- Bordered by the **Indian Ocean** to the south
- Bay of Bengal to the east, Arabian Sea to the west
- Part of the **Asian continent**

## Fun Fact
The **Pacific Ocean** is so large that all 7 continents could fit inside it! And Earth is called the "Blue Planet" because **71% of its surface is water**!

## Practice
1. Name the 7 continents.
2. Which is the largest ocean?
3. Which continent is India in?

## Summary
Earth has 7 continents (Asia, Africa, North America, South America, Europe, Australia, Antarctica) and 5 oceans (Pacific, Atlantic, Indian, Southern, Arctic). Earth is called the Blue Planet because most of it is water! 🌍`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Hello! 🦉 Today we explore the whole world -- **7 Continents and 5 Oceans**! Earth looks like a blue marble from space. Do you know why it's blue?",
      },
      { role: "student", message: "Because of the oceans?" },
      {
        role: "owl",
        message:
          "Exactly! **71% of Earth is water**! 🌊 The land is divided into **7 continents**: Asia (where India is!), Africa, North America, South America, Europe, Australia, and Antarctica. Say them all!",
      },
      {
        role: "student",
        message:
          "Asia, Africa, North and South America... Europe, Australia, Antarctica!",
      },
      {
        role: "owl",
        message:
          "PERFECT! 🌟 Great memory! Now the **5 oceans**: **Pacific** (biggest!), **Atlantic**, **Indian** (India is surrounded by this one 🇮🇳), **Southern**, and **Arctic** (coldest, near North Pole)!",
      },
      { role: "student", message: "Which continent is biggest?" },
      {
        role: "owl",
        message:
          "**Asia** is the largest and most populated continent! It has India, China, Japan, Russia -- almost half the world's people live in Asia! And the Pacific Ocean is so big, all 7 continents could fit inside it! Amazing! 🌍⭐⭐⭐",
      },
    ],
  },
  "circulatory system": {
    keyConcepts: [
      "Heart pumps blood around the body",
      "Blood vessels: arteries, veins, capillaries",
      "Blood carries oxygen and nutrients",
      "Heart beats 60-100 times per minute",
    ],
    videoContent:
      "Take a journey through the human circulatory system! Watch red blood cells travel through arteries, deliver oxygen to body tissues, and return through veins. See the amazing heart pump 100,000 times every day!",
    notes: `# The Circulatory System

## What You Will Learn
- The main organs of the circulatory system
- How the heart pumps blood
- Types of blood vessels
- What blood carries

## What is the Circulatory System?
The **circulatory system** transports blood, oxygen, nutrients, and waste throughout the body. It is also called the **cardiovascular system**.

## Main Organs

### The Heart ❤️
- A **muscular pump** the size of your fist
- Located in the **chest**, slightly to the left
- Beats **60-100 times per minute** (100,000 times/day!)
- Has **4 chambers**: 2 atria (upper) and 2 ventricles (lower)
- **Left side** pumps oxygenated blood to the body
- **Right side** pumps deoxygenated blood to the lungs

### Blood Vessels 🩸
Three types:

| Type | Function | Wall |
|------|----------|------|
| **Arteries** | Carry blood AWAY from heart | Thick, strong |
| **Veins** | Carry blood TO heart | Thinner, with valves |
| **Capillaries** | Connect arteries and veins; exchange gases | Very thin (one cell!) |

### Blood 🔴
Blood is made of:
- **Red Blood Cells (RBC)**: Carry oxygen using haemoglobin
- **White Blood Cells (WBC)**: Fight infection (immune system)
- **Platelets**: Help blood clot when cut
- **Plasma**: Liquid part (yellow); carries nutrients and hormones

## The Blood's Journey
1. Heart pumps blood to **lungs** → picks up oxygen
2. Blood returns to heart → pumped to **all body parts**
3. Blood delivers oxygen, picks up carbon dioxide
4. Blood returns to heart → sent to lungs again

## Fun Fact
If you laid all the blood vessels in your body end to end, they would stretch **100,000 km** -- more than 2.5 times around the Earth! 🌍

## Practice
1. What is the main function of the heart?
2. Name the three types of blood vessels.
3. What do red blood cells carry?

## Summary
The circulatory system transports blood through the body. The heart pumps blood through arteries (away from heart) and veins (back to heart). Blood carries oxygen, nutrients, and removes waste! ❤️`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Hello! 🦉 Today we explore one of the most amazing systems in your body -- the **Circulatory System**! Your heart is beating right now. Can you feel it?",
      },
      { role: "student", message: "Yes! Thump thump! What does the heart do?" },
      {
        role: "owl",
        message:
          "Your **heart** is a powerful pump! ❤️ It beats **60-100 times per minute** -- that's over 100,000 times a day! It pumps blood through tubes called **blood vessels** to every part of your body!",
      },
      { role: "student", message: "What is blood for?" },
      {
        role: "owl",
        message:
          "Blood does many jobs! 🩸 **Red blood cells** carry **oxygen** from your lungs to all body parts. **White blood cells** fight germs like soldiers! And **platelets** make blood clot when you get a cut!",
      },
      { role: "student", message: "What are blood vessels?" },
      {
        role: "owl",
        message:
          "There are 3 types! **Arteries** carry blood AWAY from the heart. **Veins** bring blood BACK. And tiny **Capillaries** connect them -- they're so thin, only one blood cell can pass at a time! Together they stretch 100,000 km! 🌍⭐⭐⭐",
      },
    ],
  },
  "linear equations": {
    keyConcepts: [
      "Variable represents an unknown number",
      "Solve by keeping equation balanced",
      "Add/subtract same on both sides",
      "Check answer by substituting back",
    ],
    videoContent:
      "Watch algebra come alive with balance scale animations! See how variables represent unknown numbers and how we find them by keeping equations balanced. Solve real-world puzzles using simple linear equations.",
    notes: `# Linear Equations

## What You Will Learn
- What a variable is
- What a linear equation is
- How to solve simple equations
- How to check your answer

## What is a Variable?
A **variable** is a letter used to represent an **unknown number**.

Common variables: x, y, n, a

**Example**: If 3 + x = 7, then x = ?

## What is a Linear Equation?
A **linear equation** is a mathematical statement that two things are equal, containing a variable with power 1.

**Example**: 2x + 3 = 11

## Rules for Solving Equations
An equation is like a **balance scale** ⚖️. Whatever you do to one side, you MUST do to the other side!

**Golden Rule**: To find the unknown, do the **opposite operation**:
- If + is used, **subtract** from both sides
- If − is used, **add** to both sides
- If × is used, **divide** both sides
- If ÷ is used, **multiply** both sides

## Solved Examples

**Example 1**: Solve x + 5 = 12
- Subtract 5 from both sides: x + 5 − 5 = 12 − 5
- Answer: **x = 7**
- Check: 7 + 5 = 12 ✅

**Example 2**: Solve 3x = 18
- Divide both sides by 3: 3x ÷ 3 = 18 ÷ 3
- Answer: **x = 6**
- Check: 3 × 6 = 18 ✅

**Example 3**: Solve 2x + 3 = 11
- Subtract 3 from both sides: 2x = 8
- Divide both sides by 2: x = 4
- Check: 2(4) + 3 = 8 + 3 = 11 ✅

## Fun Fact
The word **algebra** comes from the Arabic "al-jabr" meaning "reunion of broken parts"! It was developed by the mathematician **Al-Khwarizmi** in the 9th century!

## Practice
1. Solve: x + 8 = 15
2. Solve: 4x = 28
3. Solve: 3x − 2 = 10

## Summary
A linear equation has a variable (unknown) equal to a value. To solve it, do the same operation to BOTH sides to isolate the variable. Always check your answer! 🔢`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Hello! 🦉 Today we start **Algebra** with Linear Equations! Algebra uses letters to represent unknown numbers. Imagine: 'I'm thinking of a number. Add 5 and you get 12. What's my number?'",
      },
      { role: "student", message: "Umm... 7? Because 7 + 5 = 12!" },
      {
        role: "owl",
        message:
          "PERFECT! 🌟 In algebra, we'd write this as: **x + 5 = 12**, and x = 7! The letter **x** is a **variable** -- it stands for the unknown number we want to find!",
      },
      { role: "student", message: "How do we solve harder ones?" },
      {
        role: "owl",
        message:
          "Think of a **balance scale** ⚖️! An equation means both sides are equal. To find x, do the OPPOSITE operation: for x + 5 = 12, subtract 5 from BOTH sides: x + 5 - 5 = 12 - 5, so x = 7!",
      },
      { role: "student", message: "What about 3x = 18?" },
      {
        role: "owl",
        message:
          "3x means 3 × x = 18. To undo multiplication, we **divide** both sides by 3: 3x ÷ 3 = 18 ÷ 3, so **x = 6**! Always check: 3 × 6 = 18 ✅! Algebra is like solving puzzles! 🧩⭐⭐⭐",
      },
    ],
  },
  "first war of independence 1857": {
    keyConcepts: [
      "Also called Sepoy Mutiny / India's first uprising against British",
      "Started at Meerut on 10 May 1857",
      "Key leaders: Mangal Pandey, Rani Lakshmibai, Bahadur Shah Zafar",
      "Failed but inspired future freedom movement",
    ],
    videoContent:
      "Travel back to 1857 when India's first major revolt against British rule erupted! See the brave soldiers, leaders like Rani Lakshmibai and Mangal Pandey, and understand how this uprising changed India's history forever.",
    notes: `# The First War of Independence, 1857

## What You Will Learn
- What caused the 1857 uprising
- How and where it started
- Key leaders of the revolt
- Why it failed and its importance

## Background
By 1857, the **British East India Company** had control over most of India. Indian soldiers called **Sepoys** served in the British army.

## Causes of the Revolt

### Immediate Cause: Greased Cartridges
- New **Enfield rifles** were introduced in the Indian army
- Soldiers had to bite off the cartridge tips
- Rumour spread that cartridges were greased with **pig fat** (offensive to Muslims) and **cow fat** (offensive to Hindus)
- This deeply hurt religious sentiments

### Other Causes
- **Political**: Doctrine of Lapse -- British annexed kingdoms without heirs
- **Economic**: Heavy taxes ruined Indian farmers and craftsmen
- **Social**: British tried to change Indian customs (e.g. banning sati, child marriage)
- **Military**: Indian soldiers had lower pay and faced racial discrimination

## The Revolt Begins
- **10 May 1857**: Sepoys at **Meerut** refused to use the cartridges and were arrested
- Fellow soldiers freed them and marched to **Delhi**
- The revolt spread to Kanpur, Lucknow, Jhansi, and other places

## Key Leaders

| Leader | Role |
|--------|------|
| **Mangal Pandey** | First martyr; hanged at Barrackpore in March 1857 |
| **Rani Lakshmibai of Jhansi** | Heroic queen who fought and died in battle ⚔️ |
| **Nana Sahib** | Led revolt at Kanpur |
| **Tantia Tope** | Military commander |
| **Bahadur Shah Zafar** | Last Mughal Emperor; declared leader |

## Why Did It Fail?
- Revolts were not coordinated across India
- No united national leadership
- Some Indian rulers supported the British
- British had superior weapons and communication (telegraph)

## Importance
- British government took direct control from East India Company in **1858**
- Inspired later freedom fighters -- seed of nationalism was sown
- Called the **First War of Independence** by Vinayak Damodar Savarkar

## Fun Fact
Rani Lakshmibai of Jhansi is remembered as one of the greatest warriors in Indian history. She fought with her infant son strapped to her back! 👑⚔️

## Summary
The 1857 revolt was India's first major uprising against British rule. Though it failed, it inspired future generations of freedom fighters and ended the East India Company's rule! 🇮🇳`,
    chatExplanation: [
      {
        role: "owl",
        message:
          "Hello! 🦉 Today we learn about a very important event -- the **First War of Independence in 1857**! This was when brave Indians first rose up against British rule. Ready to travel back in time?",
      },
      { role: "student", message: "Yes! Why did Indians fight?" },
      {
        role: "owl",
        message:
          "Many reasons! But the spark was **greased cartridges** 💥! New rifle cartridges were reportedly greased with pig and cow fat. Soldiers had to bite them -- this was deeply offensive to both **Muslims and Hindus**!",
      },
      { role: "student", message: "Who were the heroes?" },
      {
        role: "owl",
        message:
          "So many heroes! ⚔️ **Mangal Pandey** was the first martyr. **Rani Lakshmibai** of Jhansi fought bravely in battle -- she's one of India's greatest warriors! **Nana Sahib** led the revolt in Kanpur!",
      },
      { role: "student", message: "Did they win?" },
      {
        role: "owl",
        message:
          "Sadly, the revolt was defeated -- it lacked unity and coordination. But it was NOT a failure! It inspired all future freedom fighters and ended the East India Company's power. British government took direct control in **1858**. The seed of Indian independence was planted! 🌱🇮🇳⭐⭐⭐",
      },
    ],
  },
};

function normalizeTopicTitle(title: string): string {
  return title.toLowerCase().trim();
}

function getSubjectFallbackContent(
  title: string,
  subject: string,
  classLabel: string,
): TopicContentData {
  const subjectLower = subject.toLowerCase();

  if (subjectLower.includes("math")) {
    return {
      keyConcepts: [
        `Understanding ${title}`,
        "Practice with examples",
        "Apply to word problems",
        "Check answers by working backwards",
      ],
      videoContent: `Explore ${title} with step-by-step animated solutions! Watch numbers and shapes work together as we break down this ${classLabel} Mathematics concept with colorful visuals and worked examples that make it crystal clear.`,
      notes: `# ${title}

## What You Will Learn
- The concept of ${title} in Mathematics
- Key formulas and rules
- Worked examples with solutions
- Practice problems to build confidence

## Key Concept
**${title}** is an important topic in ${classLabel} Mathematics. Understanding this concept helps you solve real-world problems and prepares you for higher-level maths.

## Important Rules
1. Read the problem carefully before solving
2. Write down the given information
3. Identify what formula or method to use
4. Show all working steps
5. Always check your answer

## Worked Example
Think step by step:
- Identify the numbers given
- Choose the right operation (+, −, ×, ÷)
- Calculate carefully
- Write the answer with units if needed

## Fun Fact
Mathematics is used in everything around us -- from the architecture of buildings to the music we listen to, even in nature (the Fibonacci sequence appears in flowers and shells)!

## Practice
1. Try solving 3 examples of ${title} from your textbook
2. Create your own word problem using ${title}
3. Check your answers by using the opposite operation

## Summary
${title} is a key ${classLabel} Mathematics concept. Practice regularly and always show your working steps. Mathematics becomes easier the more you practise! 🔢`,
      chatExplanation: [
        {
          role: "owl",
          message: `Hello! 🦉 Today we tackle **${title}** in Mathematics! This is an important topic for ${classLabel}. Shall we work through it together?`,
        },
        { role: "student", message: `Yes! How does ${title} work?` },
        {
          role: "owl",
          message: `Great question! 🌟 In Mathematics, ${title} follows specific rules and steps. The most important thing is to always show your working -- never skip steps!`,
        },
        { role: "student", message: "Can you show me an example?" },
        {
          role: "owl",
          message:
            "Of course! 😊 When solving any Maths problem: first **read carefully**, then **identify the operation** needed (+, −, ×, ÷), then **calculate step by step**. Practice makes perfect!",
        },
        { role: "student", message: "What if I make a mistake?" },
        {
          role: "owl",
          message: `Mistakes help you learn! 🎉 Always **check your answer** by working backwards. For addition, check with subtraction. For multiplication, check with division. You're doing amazing! ⭐⭐⭐`,
        },
      ],
    };
  }

  if (subjectLower.includes("science") || subjectLower.includes("evs")) {
    return {
      keyConcepts: [
        `Key facts about ${title}`,
        "Observe and experiment",
        "Connect to daily life",
        "Scientific thinking",
      ],
      videoContent: `Discover ${title} through fascinating animations! See real-world science in action as we explore this ${classLabel} topic with experiments, observations, and colourful illustrations that bring science to life.`,
      notes: `# ${title}

## What You Will Learn
- What ${title} is and why it matters
- Key scientific facts and concepts
- How this topic connects to our daily life
- Simple experiments or observations

## Introduction
**${title}** is a fascinating science topic that you can observe in the world around you! Science is all about asking questions and finding answers through observation and experiments.

## Key Facts
1. ${title} is part of our natural world
2. Scientists study this topic to understand our universe better
3. This knowledge helps solve real-world problems
4. Many important discoveries were made by curious children just like you!

## In Daily Life
Look around you -- you can see ${title} in action every day! Science is not just in textbooks; it's everywhere in our environment.

## Simple Observation Activity
1. Find an example of ${title} in your home or garden
2. Observe it carefully for 5 minutes
3. Write down or draw what you notice
4. Share your observations with your family!

## Fun Fact
The word "Science" comes from the Latin word "Scientia" meaning **knowledge**. Every great scientist started as a curious student just like you!

## Practice
1. Can you find 3 examples of ${title} in your surroundings?
2. Write 3 questions you have about ${title}
3. Try the observation activity above

## Summary
${title} is an important science topic that connects our classroom learning to the real world. Stay curious, keep asking questions, and you'll become a great scientist! 🔬`,
      chatExplanation: [
        {
          role: "owl",
          message: `Hello curious scientist! 🦉🔬 Today we explore **${title}** in Science! This is something you can actually observe in the real world. Ready to discover?`,
        },
        { role: "student", message: `Yes! What is ${title}?` },
        {
          role: "owl",
          message: `${title} is a fascinating topic that helps us understand our natural world! 🌟 Scientists study it to solve real problems. The key is to **observe carefully** -- science is all about looking closely!`,
        },
        { role: "student", message: "How can I see this in real life?" },
        {
          role: "owl",
          message: `Look around you! 😊 Science is everywhere. You can find examples of ${title} in your home, garden, or even in the kitchen! True scientists notice things that others ignore.`,
        },
        { role: "student", message: "What should I remember?" },
        {
          role: "owl",
          message: `Remember the scientist's tools: **Observe, Question, Experiment, Conclude**! 🎉 Write down your observations, ask "why?" and "how?" and you'll discover amazing things. You were born to be a scientist! ⭐⭐⭐`,
        },
      ],
    };
  }

  if (
    subjectLower.includes("social") ||
    subjectLower.includes("history") ||
    subjectLower.includes("geography") ||
    subjectLower.includes("civics")
  ) {
    return {
      keyConcepts: [
        `Understanding ${title}`,
        "India's history and geography",
        "Citizenship and community",
        "Map skills and dates",
      ],
      videoContent: `Journey through ${title} with animated maps, timelines, and illustrations! This ${classLabel} Social Studies topic comes alive as we explore India's rich history, geography, and civic life with engaging visuals.`,
      notes: `# ${title}

## What You Will Learn
- Key facts and events related to ${title}
- How this connects to India's story
- Important people, places, or dates
- How this affects our lives today

## Introduction
**${title}** is a fascinating topic in Social Studies that helps us understand India -- our history, geography, and how we live together as citizens.

## Key Points
1. **Historical context**: Understanding when and why events happened
2. **Geographical features**: Where places are located and their importance
3. **People and society**: The role of individuals and communities
4. **Impact on today**: How past events shape our present

## Important to Remember
- Dates and events should be understood, not just memorised
- Connect history to the present -- how does it affect India today?
- Geography helps us understand why civilisations grew where they did
- As citizens, we all have responsibilities to our country

## Fun Fact
India is one of the world's oldest civilisations -- the Indus Valley Civilisation dates back over **4,000 years**, making India's history one of the richest in the world! 🏛️

## Practice
1. Create a timeline of key events related to ${title}
2. Draw a map showing relevant geographical features
3. Write 3 ways this topic affects your life today

## Summary
${title} is a key part of India's Social Studies curriculum. Understanding our history, geography, and civic responsibilities makes us better citizens! 🇮🇳`,
      chatExplanation: [
        {
          role: "owl",
          message: `Jai Hind! 🦉🇮🇳 Today we explore **${title}** in Social Studies! India has one of the world's richest histories. Ready to discover our amazing country?`,
        },
        { role: "student", message: `Yes! Tell me about ${title}!` },
        {
          role: "owl",
          message: `${title} is a very important topic! 🌟 Social Studies helps us understand our history, our land, and our responsibilities as citizens of India. Every Indian should know their country's story!`,
        },
        { role: "student", message: "Why is this important for us today?" },
        {
          role: "owl",
          message: `Because our present comes from our past! 😊 Understanding ${title} helps us appreciate what our ancestors achieved, the challenges they faced, and how their actions shaped the India we live in today!`,
        },
        { role: "student", message: "What should I remember most?" },
        {
          role: "owl",
          message: `Remember: India's story is YOUR story! 🎉 Learn the key dates, important people, and geographical features. Most importantly, be a proud and responsible citizen! Jai Hind! 🇮🇳⭐⭐⭐`,
        },
      ],
    };
  }

  if (subjectLower.includes("english")) {
    return {
      keyConcepts: [
        `Master ${title} in English`,
        "Read, write, speak, listen",
        "Grammar rules with examples",
        "Build vocabulary",
      ],
      videoContent: `Improve your English with this animated lesson on ${title}! Watch grammar rules explained with colourful examples, hear correct pronunciation, and see how to use ${title} correctly in sentences for ${classLabel} students.`,
      notes: `# ${title}

## What You Will Learn
- The rules and usage of ${title} in English
- Examples in sentences
- Common mistakes to avoid
- Practice exercises

## Introduction
**${title}** is an important part of English language learning. Mastering this topic will help you read, write, speak, and understand English better!

## Key Rules
English has specific grammar rules for ${title}. Understanding these rules helps you:
1. **Write correctly** -- avoid common errors
2. **Speak clearly** -- communicate better
3. **Read with understanding** -- know what you're reading
4. **Listen actively** -- understand what others say

## Examples in Context
Good English uses correct grammar. Here are tips:
- Always re-read your writing to check for errors
- Notice how authors use language in your textbook
- Practice by writing short paragraphs daily
- Read English books, stories, and newspapers

## Common Mistakes
Watch out for these common errors in ${title}:
1. Confusing similar-sounding words
2. Incorrect punctuation
3. Subject-verb agreement errors

## Fun Fact
English has over **1 million words** -- more than any other language! And new words are added every year. "Selfie" and "emoji" are recent additions to the dictionary!

## Practice
1. Write 5 sentences using ${title} correctly
2. Find examples of ${title} in your English textbook
3. Create a mini-story using the concept

## Summary
${title} is a key English language skill. Practice reading and writing every day to master English. Good language skills will help you succeed in all subjects! 📚`,
      chatExplanation: [
        {
          role: "owl",
          message: `Hello! 🦉📚 Today we improve our English with **${title}**! English is the key to learning, communicating, and opening doors to the world. Ready to master this topic?`,
        },
        { role: "student", message: `Yes! How do I learn ${title}?` },
        {
          role: "owl",
          message: `The best way to learn English is the 4 skills: **Read, Write, Speak, Listen**! 🌟 For ${title} specifically, we'll look at the rules, see examples, and then practise writing!`,
        },
        { role: "student", message: "What are the most important rules?" },
        {
          role: "owl",
          message: `Great question! 😊 In English, ${title} has specific rules. The key is to learn by seeing lots of examples -- read books, stories, and pay attention to how good writers use language!`,
        },
        { role: "student", message: "How do I remember everything?" },
        {
          role: "owl",
          message: `Practice every day! 🎉 Write a sentence, write a paragraph, write a short story. The more you write, the better you get! Reading and writing together are the perfect pair for mastering English. You're brilliant! ⭐⭐⭐`,
        },
      ],
    };
  }

  if (subjectLower.includes("urdu")) {
    return {
      keyConcepts: [
        "اردو زبان کا مطالعہ",
        `${title} سیکھنا`,
        "Urdu script and pronunciation",
        "Connect to culture and literature",
      ],
      videoContent: `Explore ${title} in Urdu with beautifully animated Arabic script and audio! This ${classLabel} Urdu lesson uses colourful visuals to teach reading, writing, and pronunciation with cultural context from India's rich Urdu literary tradition.`,
      notes: `# ${title}

## آج کیا سیکھیں گے (What We Will Learn)
- ${title} کے بارے میں بنیادی معلومات
- اردو زبان کی خصوصیات
- لکھنا اور پڑھنا مشق
- روزمرہ زندگی میں استعمال

## اردو زبان کا تعارف (Introduction)
اردو ایک خوبصورت زبان ہے جو **فارسی، عربی، اور ہندی** سے مل کر بنی ہے۔ یہ دائیں سے بائیں لکھی جاتی ہے۔

**Urdu** is a beautiful language written from **right to left** using Arabic script. It is rich in poetry and literature and is one of India's official languages.

## اہم نکات (Key Points)
1. اردو رسم الخط: نستعلیق (Nastaliq script)
2. بائیں سے دائیں نہیں، **دائیں سے بائیں** لکھیں
3. حروف کی تعداد: 37 حروف تہجی
4. مشہور اردو شاعر: علامہ اقبال، میر تقی میر، غالب

## مشق (Practice)
1. آج کے موضوع پر 5 جملے لکھیں
2. کوئی اردو نظم یاد کریں
3. کسی لفظ کو اردو میں لکھ کر دیکھیں

## خلاصہ (Summary)
اردو ایک شاندار زبان ہے۔ روزانہ مشق سے آپ اردو پڑھنا اور لکھنا سیکھ سکتے ہیں! ⭐`,
      chatExplanation: [
        {
          role: "owl",
          message: `آداب! 🦉 میں اُولی ہوں! آج ہم **${title}** سیکھیں گے۔ اردو بہت خوبصورت زبان ہے! کیا آپ تیار ہیں؟`,
        },
        { role: "student", message: `جی ہاں! مجھے ${title} سکھائیں!` },
        {
          role: "owl",
          message: `بہت اچھا! 🌟 اردو دائیں سے بائیں لکھی جاتی ہے اور اس میں **37 حروف** ہیں۔ ${title} اردو زبان کا بہت اہم حصہ ہے!`,
        },
        { role: "student", message: "مجھے مزید بتائیں!" },
        {
          role: "owl",
          message:
            "بالکل! 😊 اردو میں مہارت حاصل کرنے کے لیے روزانہ **پڑھنا، لکھنا، اور سننا** ضروری ہے۔ علامہ اقبال، غالب جیسے عظیم شاعروں نے اردو کو امر کر دیا!",
        },
        { role: "student", message: "میں اردو کیسے بہتر کروں؟" },
        {
          role: "owl",
          message:
            "روزانہ مشق کریں! 🎉 کوئی نظم یاد کریں، اردو میں لکھنے کی کوشش کریں، اور اردو کہانیاں پڑھیں۔ آپ بہت ذہین ہیں! شاباش! ⭐⭐⭐",
        },
      ],
    };
  }

  if (subjectLower.includes("telugu")) {
    return {
      keyConcepts: [
        "తెలుగు భాష అధ్యయనం",
        `${title} నేర్చుకోవడం`,
        "Telugu script and pronunciation",
        "Andhra and Telangana culture",
      ],
      videoContent: `Explore ${title} in Telugu with animated Telugu script! This ${classLabel} Telugu lesson teaches reading, writing, and pronunciation with examples from everyday life and Andhra/Telangana culture, making Telugu learning fun and engaging.`,
      notes: `# ${title}

## ఏమి నేర్చుకుంటాం (What We Will Learn)
- ${title} గురించి ముఖ్యమైన విషయాలు
- తెలుగు భాష ప్రత్యేకతలు
- చదవడం మరియు రాయడం సాధన
- రోజువారీ జీవితంలో వినియోగం

## తెలుగు భాష పరిచయం (Introduction)
తెలుగు **ద్రావిడ భాషా కుటుంబంలో** అత్యంత సుందరమైన భాష. ఇది **ఆంధ్ర ప్రదేశ్ మరియు తెలంగాణ** యొక్క అధికారిక భాష.

**Telugu** belongs to the **Dravidian language family** and is the official language of Andhra Pradesh and Telangana. It is called **Italian of the East** for its musicality!

## ముఖ్యమైన అంశాలు (Key Points)
1. తెలుగు లిపి: బ్రాహ్మీ లిపి నుండి పుట్టింది
2. అక్షరాలు: 56 అక్షరాలు (16 స్వరాలు + 40 వ్యంజనాలు)
3. ప్రసిద్ధ కవులు: వేమన, గురజాడ అప్పారావు, శ్రీశ్రీ
4. తెలుగు "ఇటాలియన్ ఆఫ్ ది ఈస్ట్" అని పేరు పొందింది

## అభ్యాసం (Practice)
1. ఈ రోజు నేర్చుకున్న విషయంపై 5 వాక్యాలు రాయండి
2. ఒక తెలుగు పద్యం కంఠస్తం చేయండి
3. తెలుగు పదాలతో చిన్న కథ రాయడానికి ప్రయత్నించండి

## సారాంశం (Summary)
తెలుగు మన తల్లి భాష! రోజూ సాధన చేస్తే తెలుగు చదవడం మరియు రాయడం నేర్చుకోవచ్చు! ⭐`,
      chatExplanation: [
        {
          role: "owl",
          message: `నమస్కారం! 🦉 నేను ఆులీని! ఈ రోజు మనం **${title}** నేర్చుకుందాం! తెలుగు చాలా అందమైన భాష! సిద్ధంగా ఉన్నారా?`,
        },
        { role: "student", message: `అవును! నాకు ${title} నేర్పించండి!` },
        {
          role: "owl",
          message: `చాలా బాగుంది! 🌟 తెలుగు "ఇటాలియన్ ఆఫ్ ది ఈస్ట్" అని పిలుస్తారు -- ఎందుకంటే ఇది చాలా సంగీతాత్మకంగా ఉంటుంది! ${title} తెలుగు భాషలో చాలా ముఖ్యమైన భాగం!`,
        },
        { role: "student", message: "మరింత చెప్పండి!" },
        {
          role: "owl",
          message:
            "తప్పకుండా! 😊 తెలుగులో **56 అక్షరాలు** ఉంటాయి. వేమన పద్యాలు, గురజాడ అప్పారావు రచనలు తెలుగు సాహిత్యాన్ని గొప్పగా చేశాయి. మన భాష మన గర్వం!",
        },
        { role: "student", message: "తెలుగు బాగా నేర్చుకోవాలంటే?" },
        {
          role: "owl",
          message:
            "రోజూ సాధన చేయండి! 🎉 తెలుగు పుస్తకాలు చదవండి, వాక్యాలు రాయండి, పద్యాలు కంఠస్తం చేయండి! మీరు చాలా తెలివైన విద్యార్థి! శభాష్! ⭐⭐⭐",
        },
      ],
    };
  }

  // Generic fallback with improvement
  return {
    keyConcepts: [
      `Core concepts of ${title}`,
      "Real-world connections",
      "Practice and application",
      "Review and summary",
    ],
    videoContent: `Watch an animated lesson on **${title}** designed for ${classLabel} students! Colorful visuals, step-by-step explanations, and real-world examples make this ${subject} concept easy to understand and fun to learn.`,
    notes: `# ${title}

## What You Will Learn
- The main concepts of ${title}
- How ${title} connects to ${subject}
- Real-world examples and applications
- Practice activities to test your understanding

## Introduction
**${title}** is an important topic in ${subject} for ${classLabel} students. Understanding this topic will help you build a strong foundation for future learning.

## Key Concepts
Every great topic has key ideas that form its foundation. For ${title}:

1. **What it is**: The definition and basic understanding
2. **Why it matters**: How it connects to the world around you
3. **How it works**: The process or mechanism behind it
4. **Where we see it**: Real-life examples and applications

## Connection to Daily Life
Science, Mathematics, Languages, and Social Studies all connect to our everyday experiences. ${title} is something you encounter or use in your daily life without always realising it!

## Fun Fact
Did you know that curious students who ask "why?" and "how?" about what they learn are more likely to remember it? Your brain loves connections and stories!

## Practice Activities
1. In your own words, explain what ${title} means
2. Draw a diagram or picture representing ${title}
3. Find 3 examples of ${title} in your home or school
4. Write 5 key facts you learned about ${title}

## Summary
${title} is a fascinating topic that connects ${subject} learning to the real world. Always ask questions, make connections, and never stop being curious! 🌟`,
    chatExplanation: [
      {
        role: "owl",
        message: `Hello! 🦉 Welcome! Today we learn about **${title}** in ${subject}. This is an exciting topic for ${classLabel}. Are you ready to explore?`,
      },
      { role: "student", message: `Yes Owly! What is ${title}?` },
      {
        role: "owl",
        message: `Great question! 🌟 **${title}** is a topic that helps us understand our world better. In ${subject}, we learn about it because it connects to so many things around us!`,
      },
      {
        role: "student",
        message: "Can you give me an example from real life?",
      },
      {
        role: "owl",
        message: `Absolutely! 😊 Look around you -- you can find examples of ${title} in nature, in your home, and in everyday activities! True learning happens when we connect lessons to the world around us.`,
      },
      {
        role: "student",
        message: "What is the most important thing to remember?",
      },
      {
        role: "owl",
        message: `Remember: learning is a journey, not a race! 🎉 Write down the key points, draw a diagram, and review your notes. Understanding ${title} deeply will help you in exams AND in real life! You're a superstar! ⭐⭐⭐`,
      },
    ],
  };
}

function makeTopic(
  id: number,
  title: string,
  subject: string,
  classLabel: string,
): SyllabusTopic {
  const key = normalizeTopicTitle(title);
  const specificContent = TOPIC_CONTENT_MAP[key];

  if (specificContent) {
    return {
      id,
      title,
      ...specificContent,
    };
  }

  const fallbackContent = getSubjectFallbackContent(title, subject, classLabel);
  return {
    id,
    title,
    ...fallbackContent,
  };
}

function makeChapter(
  id: number,
  title: string,
  icon: string,
  subject: string,
  classLabel: string,
  topicTitles: string[],
): SyllabusChapter {
  return {
    id,
    title,
    icon,
    topics: topicTitles.map((t, i) =>
      makeTopic(id * 100 + i + 1, t, subject, classLabel),
    ),
  };
}

// LKG Syllabus
const lkgSyllabus: Record<number, SubjectData> = {
  1: {
    ...SUBJECT_META[1],
    chapters: [
      makeChapter(1, "Letters & Phonics", "🔤", "English", "LKG", [
        "Alphabet A to M",
        "Alphabet N to Z",
        "Vowels: A, E, I, O, U",
        "Basic Phonics Sounds",
      ]),
      makeChapter(2, "My Body Parts", "🦵", "English", "LKG", [
        "Head and Face",
        "Hands and Fingers",
        "Legs and Feet",
        "Body Parts Song",
      ]),
      makeChapter(3, "Colors & Shapes", "🎨", "English", "LKG", [
        "Red, Blue, Yellow",
        "Green, Orange, Purple",
        "Circle and Square",
        "Triangle and Rectangle",
      ]),
      makeChapter(4, "Animals Around Me", "🐾", "English", "LKG", [
        "Pet Animals",
        "Farm Animals",
        "Wild Animals",
        "Animal Sounds",
      ]),
    ],
  },
  2: {
    ...SUBJECT_META[2],
    chapters: [
      makeChapter(5, "Numbers 1-10", "🔢", "Mathematics", "LKG", [
        "Numbers 1, 2, 3",
        "Numbers 4, 5, 6",
        "Numbers 7, 8, 9",
        "Number 10",
      ]),
      makeChapter(6, "Counting Objects", "🧮", "Mathematics", "LKG", [
        "Count with Fingers",
        "Count Toys",
        "Count Animals",
        "Count Fruits",
      ]),
      makeChapter(7, "Big & Small", "📏", "Mathematics", "LKG", [
        "Big and Small Objects",
        "Tall and Short",
        "Heavy and Light",
        "Comparing Sizes",
      ]),
      makeChapter(8, "More & Less", "⚖️", "Mathematics", "LKG", [
        "More Objects",
        "Less Objects",
        "Equal Groups",
        "Which Has More?",
      ]),
    ],
  },
  3: {
    ...SUBJECT_META[3],
    chapters: [
      makeChapter(9, "My Family", "👨‍👩‍👧‍👦", "Science/EVS", "LKG", [
        "Mother and Father",
        "Brothers and Sisters",
        "Grandparents",
        "Our Happy Family",
      ]),
      makeChapter(10, "Plants Around Me", "🌱", "Science/EVS", "LKG", [
        "Trees and Flowers",
        "Fruits and Vegetables",
        "Plants Need Water",
        "Plants Need Sunlight",
      ]),
      makeChapter(11, "Water & Air", "💧", "Science/EVS", "LKG", [
        "What is Water?",
        "Uses of Water",
        "What is Air?",
        "We Need Air to Breathe",
      ]),
      makeChapter(12, "Day & Night", "🌙", "Science/EVS", "LKG", [
        "The Sun Gives Light",
        "Day Time Activities",
        "Night Time Activities",
        "Stars and Moon",
      ]),
    ],
  },
  5: {
    ...SUBJECT_META[5],
    chapters: [
      makeChapter(13, "Urdu Haroof (Alif to Ye)", "الف", "Urdu", "LKG", [
        "Alif, Be, Pe",
        "Te, Se, Jeem",
        "Che, He, Khe",
        "Numbers in Urdu",
      ]),
      makeChapter(14, "Basic Urdu Words", "كلمات", "Urdu", "LKG", [
        "Body Parts in Urdu",
        "Colors in Urdu",
        "Animals in Urdu",
        "Fruits in Urdu",
      ]),
      makeChapter(15, "Numbers in Urdu", "١٢٣", "Urdu", "LKG", [
        "Ek, Do, Teen",
        "Chaar, Paanch",
        "Chhe, Saat",
        "Aath, Nau, Das",
      ]),
    ],
  },
  6: {
    ...SUBJECT_META[6],
    chapters: [
      makeChapter(16, "Telugu Varnamala (Aa-Na)", "అ", "Telugu", "LKG", [
        "Aa, Aa, E",
        "Ee, U, Oo",
        "Ru, E, Ai",
        "O, Ou, Am",
      ]),
      makeChapter(17, "Basic Telugu Words", "పదాలు", "Telugu", "LKG", [
        "Body Parts in Telugu",
        "Colors in Telugu",
        "Animals in Telugu",
        "Numbers in Telugu",
      ]),
      makeChapter(18, "Numbers 1-20 Telugu", "సంఖ్యలు", "Telugu", "LKG", [
        "Oka, Rendu, Moodu",
        "Nalugu, Ayidu",
        "Aaru, Edu",
        "Enimidi, Tommidi, Padi",
      ]),
    ],
  },
};

// UKG Syllabus
const ukgSyllabus: Record<number, SubjectData> = {
  1: {
    ...SUBJECT_META[1],
    chapters: [
      makeChapter(19, "Alphabet Mastery", "🔤", "English", "UKG", [
        "Capital Letters A-M",
        "Capital Letters N-Z",
        "Small Letters a-m",
        "Small Letters n-z",
      ]),
      makeChapter(20, "Simple Words", "📝", "English", "UKG", [
        "3-Letter Words (cat, bat)",
        "Animal Words",
        "Fruit Words",
        "Color Words",
      ]),
      makeChapter(21, "Small Sentences", "💬", "English", "UKG", [
        "I am happy",
        "This is a ball",
        "The cat is black",
        "I like apples",
      ]),
      makeChapter(22, "Rhymes & Poems", "🎵", "English", "UKG", [
        "Twinkle Twinkle",
        "Baa Baa Black Sheep",
        "Jack and Jill",
        "Mary Had a Little Lamb",
      ]),
    ],
  },
  2: {
    ...SUBJECT_META[2],
    chapters: [
      makeChapter(23, "Numbers 1-50", "🔢", "Mathematics", "UKG", [
        "Numbers 1-10",
        "Numbers 11-20",
        "Numbers 21-35",
        "Numbers 36-50",
      ]),
      makeChapter(24, "Addition Basics", "➕", "Mathematics", "UKG", [
        "Adding 1s",
        "Adding with Fingers",
        "Simple Sums",
        "Adding Small Numbers",
      ]),
      makeChapter(25, "Subtraction Basics", "➖", "Mathematics", "UKG", [
        "Taking Away Objects",
        "Minus Sign",
        "Simple Differences",
        "Subtraction Stories",
      ]),
      makeChapter(26, "Shapes", "🔷", "Mathematics", "UKG", [
        "Circle and Square",
        "Triangle and Rectangle",
        "Oval and Diamond",
        "Shapes Around Us",
      ]),
    ],
  },
  3: {
    ...SUBJECT_META[3],
    chapters: [
      makeChapter(27, "Food We Eat", "🍎", "Science/EVS", "UKG", [
        "Fruits We Eat",
        "Vegetables We Eat",
        "Grains and Pulses",
        "Junk Food vs Healthy Food",
      ]),
      makeChapter(28, "Seasons", "🌤️", "Science/EVS", "UKG", [
        "Summer Season",
        "Winter Season",
        "Rainy Season",
        "Spring Season",
      ]),
      makeChapter(29, "Animals & Habitats", "🐘", "Science/EVS", "UKG", [
        "Animals in Forest",
        "Animals in Water",
        "Animals at Home (Pets)",
        "Animals on Farm",
      ]),
      makeChapter(30, "Transport", "🚗", "Science/EVS", "UKG", [
        "Land Transport",
        "Water Transport",
        "Air Transport",
        "Types of Vehicles",
      ]),
    ],
  },
  5: {
    ...SUBJECT_META[5],
    chapters: [
      makeChapter(31, "Urdu Alphabets Review", "حروف", "Urdu", "UKG", [
        "Haroof-e-Tahajji Part 1",
        "Haroof-e-Tahajji Part 2",
        "Writing Practice",
        "Alphabet Songs",
      ]),
      makeChapter(32, "Two-Letter Words", "لفظ", "Urdu", "UKG", [
        "Simple Urdu Words",
        "Body Parts Words",
        "Animal Names in Urdu",
        "Fruit Names in Urdu",
      ]),
      makeChapter(33, "Simple Sentences in Urdu", "جملے", "Urdu", "UKG", [
        "Mera Naam...",
        "Yeh Mera Ghar Hai",
        "Mujhe Khana Chahiye",
        "Main Khush Hun",
      ]),
    ],
  },
  6: {
    ...SUBJECT_META[6],
    chapters: [
      makeChapter(34, "Telugu Alphabets Review", "అక్షరాలు", "Telugu", "UKG", [
        "Swaras (Vowels)",
        "Vyanjanalu (Consonants)",
        "Writing Practice",
        "Alphabet Songs Telugu",
      ]),
      makeChapter(35, "Simple Telugu Words", "పదాలు", "Telugu", "UKG", [
        "Nenu, Neenu, Adi",
        "Intiki, Pakkaku",
        "Meeru, Manam",
        "Idi, Adi, Emi",
      ]),
      makeChapter(36, "Numbers 1-20 Telugu", "సంఖ్యలు", "Telugu", "UKG", [
        "1 to 5 in Telugu",
        "6 to 10 in Telugu",
        "11 to 15 in Telugu",
        "16 to 20 in Telugu",
      ]),
    ],
  },
};

// Class 1 Syllabus
const class1Syllabus: Record<number, SubjectData> = {
  1: {
    ...SUBJECT_META[1],
    chapters: [
      makeChapter(37, "My Family", "👨‍👩‍👧‍👦", "English", "Class 1", [
        "Reading: My Family Story",
        "Words: Mother, Father, Sister, Brother",
        "Sentence: My family is big",
        "Drawing and Writing",
      ]),
      makeChapter(38, "Animals & Birds", "🐦", "English", "Class 1", [
        "Farm Animals Names",
        "Wild Animals Names",
        "Birds Around Us",
        "Animal Sounds and Descriptions",
      ]),
      makeChapter(39, "Plants & Trees", "🌳", "English", "Class 1", [
        "Types of Plants",
        "Parts of a Plant",
        "Trees in our Garden",
        "Writing about Plants",
      ]),
      makeChapter(40, "Simple Stories", "📖", "English", "Class 1", [
        "The Clever Crow",
        "The Lion and the Mouse",
        "The Ant and the Grasshopper",
        "Comprehension Questions",
      ]),
    ],
  },
  2: {
    ...SUBJECT_META[2],
    chapters: [
      makeChapter(41, "Numbers 1-100", "💯", "Mathematics", "Class 1", [
        "Numbers 1-20 Revision",
        "Numbers 21-50",
        "Numbers 51-75",
        "Numbers 76-100",
      ]),
      makeChapter(42, "Addition", "➕", "Mathematics", "Class 1", [
        "Adding Single Digits",
        "Adding Tens",
        "Word Problems - Addition",
        "Addition with Carrying",
      ]),
      makeChapter(43, "Subtraction", "➖", "Mathematics", "Class 1", [
        "Subtracting Single Digits",
        "Subtracting Tens",
        "Word Problems - Subtraction",
        "Subtraction with Borrowing",
      ]),
      makeChapter(44, "Shapes & Patterns", "🔷", "Mathematics", "Class 1", [
        "2D Shapes",
        "3D Shapes",
        "Patterns in Nature",
        "Creating Patterns",
      ]),
    ],
  },
  3: {
    ...SUBJECT_META[3],
    chapters: [
      makeChapter(45, "Food & Water", "🌊", "Science/EVS", "Class 1", [
        "Healthy Food",
        "Sources of Water",
        "Saving Water",
        "Clean Food Habits",
      ]),
      makeChapter(46, "Air & Weather", "🌬️", "Science/EVS", "Class 1", [
        "What is Air?",
        "Types of Weather",
        "Rain and Clouds",
        "Wind and Storms",
      ]),
      makeChapter(47, "Plants & Animals", "🌿", "Science/EVS", "Class 1", [
        "How Plants Grow",
        "Animals and Their Babies",
        "Animals We Help",
        "Animals That Help Us",
      ]),
      makeChapter(48, "Our Body", "🦷", "Science/EVS", "Class 1", [
        "Parts of Body",
        "Sense Organs",
        "Keeping Body Clean",
        "Exercise and Rest",
      ]),
    ],
  },
  4: {
    ...SUBJECT_META[4],
    chapters: [
      makeChapter(49, "My School", "🏫", "Social Studies", "Class 1", [
        "School Building and Rooms",
        "People in School",
        "School Rules",
        "My Favourite Subject",
      ]),
      makeChapter(50, "My Neighbourhood", "🏘️", "Social Studies", "Class 1", [
        "My House",
        "Neighbours",
        "Community Helpers",
        "Places Near My Home",
      ]),
      makeChapter(51, "Festivals", "🎉", "Social Studies", "Class 1", [
        "Diwali",
        "Eid",
        "Christmas",
        "Holi and Other Festivals",
      ]),
      makeChapter(
        52,
        "Transport & Communication",
        "📱",
        "Social Studies",
        "Class 1",
        [
          "Types of Transport",
          "How We Travel",
          "Telephone and Internet",
          "Postal Services",
        ],
      ),
    ],
  },
  5: {
    ...SUBJECT_META[5],
    chapters: [
      makeChapter(53, "Haroof-e-Tahajji", "ح", "Urdu", "Class 1", [
        "Alif to Dal",
        "Raa to Seen",
        "Sheen to Fa",
        "Qaaf to Ye",
      ]),
      makeChapter(54, "Jod Tod", "جوڑ", "Urdu", "Class 1", [
        "Joining Letters",
        "Breaking Words",
        "Two-Letter Joins",
        "Three-Letter Joins",
      ]),
      makeChapter(55, "Simple Urdu Sentences", "جملے", "Urdu", "Class 1", [
        "Mera Naam Kya Hai",
        "Ghar ki Baatein",
        "School ki Baatein",
        "Dost ki Baatein",
      ]),
      makeChapter(56, "Urdu Poems", "نظم", "Urdu", "Class 1", [
        "Nanhi si Chiriya",
        "Phool Baagh Mein",
        "Baarish Aayi",
        "Meri Ammi",
      ]),
    ],
  },
  6: {
    ...SUBJECT_META[6],
    chapters: [
      makeChapter(57, "Aksharalu", "అక్షరాలు", "Telugu", "Class 1", [
        "Aa to Ja",
        "Jha to Ta",
        "Tha to Pa",
        "Ba to Ha",
      ]),
      makeChapter(58, "Ottulu Basics", "ఒత్తులు", "Telugu", "Class 1", [
        "Ka Ottulu",
        "Ga Ottulu",
        "Cha Ottulu",
        "Combined Ottulu",
      ]),
      makeChapter(59, "Simple Telugu Sentences", "వాక్యాలు", "Telugu", "Class 1", [
        "Nenu Paduthanu",
        "Idi Naa Intiki",
        "Ee Prapancha Chala Chakkaga Undi",
        "Naa Talli Nanna",
      ]),
      makeChapter(60, "Telugu Poems", "పద్యాలు", "Telugu", "Class 1", [
        "Nenu Chinna Pillanu",
        "Thota Lo Puvvulu",
        "Vaana Paadindi",
        "Ammamma Kathalu",
      ]),
    ],
  },
};

// Class 2 Syllabus
const class2Syllabus: Record<number, SubjectData> = {
  1: {
    ...SUBJECT_META[1],
    chapters: [
      makeChapter(61, "Short Stories", "📖", "English", "Class 2", [
        "The Greedy Dog",
        "Two Friends in the Forest",
        "The Honest Woodcutter",
        "Comprehension Skills",
      ]),
      makeChapter(62, "Grammar Basics", "📝", "English", "Class 2", [
        "Nouns - People, Places, Things",
        "Verbs - Action Words",
        "Adjectives - Describing Words",
        "Sentences - Subject and Predicate",
      ]),
      makeChapter(63, "Reading Comprehension", "👁️", "English", "Class 2", [
        "Reading a Passage",
        "Answering Questions",
        "Finding Main Idea",
        "Vocabulary in Context",
      ]),
      makeChapter(64, "Creative Writing", "✏️", "English", "Class 2", [
        "Describing a Picture",
        "Writing About My Day",
        "My Favourite Animal",
        "My Best Friend",
      ]),
    ],
  },
  2: {
    ...SUBJECT_META[2],
    chapters: [
      makeChapter(65, "Numbers to 1000", "🔢", "Mathematics", "Class 2", [
        "Hundreds, Tens, Ones",
        "Place Value",
        "Comparing 3-Digit Numbers",
        "Ordering Numbers",
      ]),
      makeChapter(
        66,
        "Addition & Subtraction",
        "🧮",
        "Mathematics",
        "Class 2",
        [
          "Adding 3-Digit Numbers",
          "Subtracting 3-Digit Numbers",
          "Word Problems",
          "Mental Maths",
        ],
      ),
      makeChapter(67, "Multiplication Tables", "✖️", "Mathematics", "Class 2", [
        "Tables of 2 and 3",
        "Tables of 4 and 5",
        "Tables of 6 and 7",
        "Tables of 8, 9 and 10",
      ]),
      makeChapter(68, "Measurement", "📐", "Mathematics", "Class 2", [
        "Length - cm and m",
        "Weight - kg and g",
        "Capacity - litres",
        "Time - hours and minutes",
      ]),
    ],
  },
  3: {
    ...SUBJECT_META[3],
    chapters: [
      makeChapter(69, "Plants & Their Parts", "🌱", "Science", "Class 2", [
        "Roots and Stem",
        "Leaves and Functions",
        "Flowers and Fruits",
        "Seeds and Germination",
      ]),
      makeChapter(70, "Animals & Their Homes", "🏠", "Science", "Class 2", [
        "Animals in Water",
        "Animals on Land",
        "Animals that Fly",
        "Animal Shelters",
      ]),
      makeChapter(71, "Our Body & Senses", "👃", "Science", "Class 2", [
        "Five Sense Organs",
        "Eyes and Sight",
        "Ears and Hearing",
        "Skin - Touch and Feel",
      ]),
      makeChapter(72, "Food & Nutrition", "🥗", "Science", "Class 2", [
        "Carbohydrates - Energy Food",
        "Proteins - Body Building",
        "Vitamins and Minerals",
        "Balanced Diet",
      ]),
    ],
  },
  4: {
    ...SUBJECT_META[4],
    chapters: [
      makeChapter(
        73,
        "My Family & Community",
        "👨‍👩‍👧",
        "Social Studies",
        "Class 2",
        [
          "Types of Families",
          "Roles in Family",
          "Community Workers",
          "Helping Each Other",
        ],
      ),
      makeChapter(74, "Our Village & Town", "🏙️", "Social Studies", "Class 2", [
        "Village Life",
        "Town Life",
        "Differences - Village vs Town",
        "Development and Change",
      ]),
      makeChapter(75, "Maps & Directions", "🗺️", "Social Studies", "Class 2", [
        "North, South, East, West",
        "Reading a Simple Map",
        "Compass Points",
        "Directions in Daily Life",
      ]),
      makeChapter(76, "National Symbols", "🇮🇳", "Social Studies", "Class 2", [
        "National Flag",
        "National Anthem",
        "National Animal - Tiger",
        "National Bird - Peacock",
      ]),
    ],
  },
  5: {
    ...SUBJECT_META[5],
    chapters: [
      makeChapter(77, "Murakkab Haroof", "مرکب", "Urdu", "Class 2", [
        "Letters that Join",
        "Letters that Don't Join",
        "Writing Words",
        "Reading Practice",
      ]),
      makeChapter(78, "Short Stories in Urdu", "کہانیاں", "Urdu", "Class 2", [
        "Billi aur Chuha",
        "Pyaas Lagti Thi Kaauwe Ko",
        "Do Dost",
        "Sachchi Dosti",
      ]),
      makeChapter(79, "Grammar Basics Urdu", "گرامر", "Urdu", "Class 2", [
        "Ism (Noun)",
        "Fail (Verb)",
        "Sifat (Adjective)",
        "Simple Sentences",
      ]),
      makeChapter(80, "Urdu Nazm", "نظم", "Urdu", "Class 2", [
        "Mera Desh",
        "Phoolwali Dukaan",
        "School Mera Pyaara",
        "Madar-e-Watan",
      ]),
    ],
  },
  6: {
    ...SUBJECT_META[6],
    chapters: [
      makeChapter(81, "Gunintalu", "గుణింతాలు", "Telugu", "Class 2", [
        "Ka Gunintam",
        "Ga, Ja Gunintam",
        "Ta, Da Gunintam",
        "Pa, Ba Gunintam",
      ]),
      makeChapter(82, "Short Stories Telugu", "కథలు", "Telugu", "Class 2", [
        "Dhumma Gurram",
        "Thelavari Kashtam",
        "Idi Charitra",
        "Manchivadu Evadu?",
      ]),
      makeChapter(83, "Grammar Basics Telugu", "వ్యాకరణం", "Telugu", "Class 2", [
        "Naama Vaachakamu",
        "Kriya Padam",
        "Viseshanam",
        "Vakya Niramana",
      ]),
      makeChapter(84, "Telugu Padyalu", "పద్యాలు", "Telugu", "Class 2", [
        "Bhoomi Talli",
        "Nela Talli",
        "Vidya Mahima",
        "Desabhakti",
      ]),
    ],
  },
};

// Class 3 Syllabus
const class3Syllabus: Record<number, SubjectData> = {
  1: {
    ...SUBJECT_META[1],
    chapters: [
      makeChapter(85, "Reading Comprehension", "📖", "English", "Class 3", [
        "Unseen Passages",
        "Finding Key Information",
        "Inference and Deduction",
        "Vocabulary Building",
      ]),
      makeChapter(86, "Grammar - Tenses", "⏰", "English", "Class 3", [
        "Present Tense",
        "Past Tense",
        "Future Tense",
        "Tense in Sentences",
      ]),
      makeChapter(87, "Grammar - Pronouns", "👤", "English", "Class 3", [
        "Personal Pronouns",
        "Possessive Pronouns",
        "Reflexive Pronouns",
        "Using Pronouns Correctly",
      ]),
      makeChapter(88, "Letter Writing", "✉️", "English", "Class 3", [
        "Formal Letter Format",
        "Informal Letter Format",
        "Writing to a Friend",
        "Application Writing",
      ]),
    ],
  },
  2: {
    ...SUBJECT_META[2],
    chapters: [
      makeChapter(89, "4-Digit Numbers", "🔢", "Mathematics", "Class 3", [
        "Thousands, Hundreds, Tens, Ones",
        "Place Value of 4-Digit Numbers",
        "Comparing Large Numbers",
        "Roman Numerals",
      ]),
      makeChapter(
        90,
        "Multiplication & Division",
        "✖️",
        "Mathematics",
        "Class 3",
        [
          "Tables up to 12",
          "Multiplication by 2-Digit Numbers",
          "Division - Sharing Equally",
          "Long Division Basics",
        ],
      ),
      makeChapter(91, "Fractions Intro", "½", "Mathematics", "Class 3", [
        "Half and Quarter",
        "Numerator and Denominator",
        "Equivalent Fractions",
        "Comparing Fractions",
      ]),
      makeChapter(92, "Time & Calendar", "📅", "Mathematics", "Class 3", [
        "Reading Clocks",
        "AM and PM",
        "Calendar - Days, Months",
        "Calculating Time Differences",
      ]),
    ],
  },
  3: {
    ...SUBJECT_META[3],
    chapters: [
      makeChapter(93, "Plants - Photosynthesis", "☀️", "Science", "Class 3", [
        "Chlorophyll and Green Leaves",
        "Sunlight + Water + CO2",
        "Food Making Process",
        "Why Plants are Important",
      ]),
      makeChapter(94, "Animals - Classification", "🦁", "Science", "Class 3", [
        "Vertebrates and Invertebrates",
        "Mammals and Birds",
        "Reptiles and Amphibians",
        "Fish and Insects",
      ]),
      makeChapter(95, "Matter & Materials", "⚗️", "Science", "Class 3", [
        "Solids, Liquids, Gases",
        "Properties of Materials",
        "Uses of Different Materials",
        "Changes in Matter",
      ]),
      makeChapter(96, "Water Cycle", "💧", "Science", "Class 3", [
        "Evaporation and Condensation",
        "Rain Formation",
        "The Complete Water Cycle",
        "Importance of Water Cycle",
      ]),
    ],
  },
  4: {
    ...SUBJECT_META[4],
    chapters: [
      makeChapter(
        97,
        "Family & Society",
        "👨‍👩‍👧‍👦",
        "Social Studies",
        "Class 3",
        [
          "Nuclear and Joint Family",
          "Society and Culture",
          "Social Customs",
          "Respecting Differences",
        ],
      ),
      makeChapter(98, "Community Services", "🏥", "Social Studies", "Class 3", [
        "Doctors and Hospitals",
        "Police and Safety",
        "Teachers and Education",
        "Farmers and Food",
      ]),
      makeChapter(99, "Maps & Globes", "🌐", "Social Studies", "Class 3", [
        "What is a Globe?",
        "Continents and Oceans",
        "India on the World Map",
        "Reading Physical Maps",
      ]),
      makeChapter(100, "Our Country India", "🇮🇳", "Social Studies", "Class 3", [
        "India's Location",
        "Neighbours of India",
        "India's Diversity",
        "Pride in India",
      ]),
    ],
  },
  5: {
    ...SUBJECT_META[5],
    chapters: [
      makeChapter(101, "Imlaa & Insha", "إملاء", "Urdu", "Class 3", [
        "Dictation Practice",
        "Writing from Memory",
        "Common Spelling Mistakes",
        "Word Formation",
      ]),
      makeChapter(102, "Urdu Grammar", "قواعد", "Urdu", "Class 3", [
        "Muzakkar and Muannas",
        "Wahid and Jamaa",
        "Faa'il and Mafool",
        "Simple Urdu Sentences",
      ]),
      makeChapter(103, "Short Essays in Urdu", "مضامین", "Urdu", "Class 3", [
        "Meri Pasandeeda Kitaab",
        "Mera Pyaara Desh",
        "Garmi ka Mausam",
        "Eid ki Khushi",
      ]),
      makeChapter(104, "Urdu Stories", "کہانیاں", "Urdu", "Class 3", [
        "Hazrat Imam Hussain",
        "Allama Iqbal ki Nekem",
        "Akbar aur Birbal",
        "Mazhabi Kahaniyan",
      ]),
    ],
  },
  6: {
    ...SUBJECT_META[6],
    chapters: [
      makeChapter(105, "Telugu Vyakaranam", "వ్యాకరణం", "Telugu", "Class 3", [
        "Sandhulu",
        "Samasalu",
        "Krudu Pratyayalu",
        "Vakya Visleshana",
      ]),
      makeChapter(106, "Essay Writing Telugu", "వ్యాసాలు", "Telugu", "Class 3", [
        "Naa Desham India",
        "Naa Priya Visayam",
        "Varsha Ruthuvu",
        "Sankranti Panduga",
      ]),
      makeChapter(
        107,
        "Telugu Literature Basics",
        "సాహిత్యం",
        "Telugu",
        "Class 3",
        [
          "Telugu Paatalu",
          "Vemana Padyalu",
          "Sumati Satakam",
          "Andhra Kavullu",
        ],
      ),
      makeChapter(108, "Comprehension Telugu", "అవగాహన", "Telugu", "Class 3", [
        "Gadyam Aabhyasam",
        "Prasnalu Jawabu",
        "Mukhyaamsam",
        "Padam Artham",
      ]),
    ],
  },
};

// Class 4 Syllabus
const class4Syllabus: Record<number, SubjectData> = {
  1: {
    ...SUBJECT_META[1],
    chapters: [
      makeChapter(
        109,
        "Literature - Prose & Poetry",
        "📜",
        "English",
        "Class 4",
        [
          "Reading Prose Passages",
          "Understanding Poetry",
          "Figures of Speech",
          "Appreciation of Literature",
        ],
      ),
      makeChapter(
        110,
        "Grammar - Adjectives & Adverbs",
        "✏️",
        "English",
        "Class 4",
        [
          "Types of Adjectives",
          "Degrees of Comparison",
          "Types of Adverbs",
          "Using Adjectives & Adverbs",
        ],
      ),
      makeChapter(111, "Essay Writing", "📝", "English", "Class 4", [
        "Descriptive Essays",
        "Narrative Essays",
        "Paragraph Writing",
        "Essay Structure",
      ]),
      makeChapter(112, "Comprehension Skills", "👁️", "English", "Class 4", [
        "Advanced Passage Reading",
        "Critical Thinking Questions",
        "Vocabulary in Context",
        "Inference Skills",
      ]),
    ],
  },
  2: {
    ...SUBJECT_META[2],
    chapters: [
      makeChapter(113, "Large Numbers", "🔢", "Mathematics", "Class 4", [
        "5 and 6 Digit Numbers",
        "Lakhs and Crores",
        "Indian Number System",
        "Rounding Numbers",
      ]),
      makeChapter(114, "Fractions & Decimals", "½", "Mathematics", "Class 4", [
        "Proper and Improper Fractions",
        "Mixed Numbers",
        "Addition of Fractions",
        "Introduction to Decimals",
      ]),
      makeChapter(115, "Geometry Basics", "📐", "Mathematics", "Class 4", [
        "Points, Lines, Rays",
        "Types of Angles",
        "Types of Triangles",
        "Quadrilaterals",
      ]),
      makeChapter(116, "Area & Perimeter", "🟦", "Mathematics", "Class 4", [
        "Perimeter of Shapes",
        "Area of Rectangle and Square",
        "Area using Counting Squares",
        "Word Problems",
      ]),
    ],
  },
  3: {
    ...SUBJECT_META[3],
    chapters: [
      makeChapter(117, "Food & Digestion", "🍽️", "Science", "Class 4", [
        "Digestive System Overview",
        "Mouth and Stomach",
        "Small and Large Intestine",
        "Healthy Eating Habits",
      ]),
      makeChapter(118, "Teeth & Microbes", "🦷", "Science", "Class 4", [
        "Types of Teeth",
        "Taking Care of Teeth",
        "What are Microbes?",
        "Useful and Harmful Microbes",
      ]),
      makeChapter(119, "Plants - Reproduction", "🌸", "Science", "Class 4", [
        "Seeds and Fruits",
        "Vegetative Propagation",
        "Pollination Process",
        "Seed Dispersal",
      ]),
      makeChapter(120, "Light & Shadows", "🔦", "Science", "Class 4", [
        "Sources of Light",
        "Transparent and Opaque",
        "How Shadows Form",
        "Reflection of Light",
      ]),
    ],
  },
  4: {
    ...SUBJECT_META[4],
    chapters: [
      makeChapter(
        121,
        "Indian States & Capitals",
        "🗺️",
        "Social Studies",
        "Class 4",
        [
          "Northern States",
          "Southern States",
          "Eastern & Western States",
          "Union Territories",
        ],
      ),
      makeChapter(122, "Rivers & Mountains", "⛰️", "Social Studies", "Class 4", [
        "Himalayan Mountains",
        "Western and Eastern Ghats",
        "Major Rivers of India",
        "Importance of Rivers",
      ]),
      makeChapter(
        123,
        "Indian History Intro",
        "🏛️",
        "Social Studies",
        "Class 4",
        [
          "Ancient India",
          "Indus Valley Civilisation",
          "Great Rulers of India",
          "Important Events",
        ],
      ),
      makeChapter(
        124,
        "Constitution Basics",
        "📜",
        "Social Studies",
        "Class 4",
        [
          "What is a Constitution?",
          "Fundamental Rights",
          "Fundamental Duties",
          "Democracy in India",
        ],
      ),
    ],
  },
  5: {
    ...SUBJECT_META[5],
    chapters: [
      makeChapter(125, "Urdu Adab", "ادب", "Urdu", "Class 4", [
        "Urdu Literature Overview",
        "Famous Urdu Writers",
        "Nazm and Ghazal",
        "Prose and Poetry",
      ]),
      makeChapter(126, "Maqala Nigari", "مقالہ", "Urdu", "Class 4", [
        "Essay Structure in Urdu",
        "Formal Essays",
        "Informal Essays",
        "Creative Writing",
      ]),
      makeChapter(127, "Advanced Urdu Grammar", "قواعد", "Urdu", "Class 4", [
        "Kaal - Tenses in Urdu",
        "Mutradif Alfaaz",
        "Mutazaad Alfaaz",
        "Muhawre aur Kahawatein",
      ]),
      makeChapter(128, "Urdu Poetry Analysis", "شاعری", "Urdu", "Class 4", [
        "Allama Iqbal",
        "Mir Taqi Mir",
        "Ghalib ki Shayari",
        "Modern Urdu Poetry",
      ]),
    ],
  },
  6: {
    ...SUBJECT_META[6],
    chapters: [
      makeChapter(129, "Telugu Sahityam", "సాహిత్యం", "Telugu", "Class 4", [
        "Prabandha Sahityam",
        "Padya Sahityam",
        "Gadya Sahityam",
        "Veerabhadra Kavyam",
      ]),
      makeChapter(
        130,
        "Advanced Telugu Grammar",
        "వ్యాకరణం",
        "Telugu",
        "Class 4",
        ["Alankaralu", "Chandas", "Vachya Prayogalu", "Sandhi Nirhana"],
      ),
      makeChapter(131, "Telugu Essays", "వ్యాసాలు", "Telugu", "Class 4", [
        "Prakriti Saundarya",
        "Vigyana Vimarshanam",
        "Bharata Desham",
        "Naa Priya Sahityakudu",
      ]),
      makeChapter(132, "Telugu Comprehension", "అవగాహన", "Telugu", "Class 4", [
        "Kavitha Aabhyasam",
        "Gadyam Visleshana",
        "Mukhyaamsam",
        "Vibhinna Prasna Roopallu",
      ]),
    ],
  },
};

// Class 5 Syllabus
const class5Syllabus: Record<number, SubjectData> = {
  1: {
    ...SUBJECT_META[1],
    chapters: [
      makeChapter(133, "Prose & Poetry", "📜", "English", "Class 5", [
        "Appreciating Prose",
        "Elements of Poetry",
        "Rhyme Scheme",
        "Poetic Devices",
      ]),
      makeChapter(
        134,
        "Grammar - Complex Sentences",
        "✏️",
        "English",
        "Class 5",
        [
          "Clauses and Phrases",
          "Compound Sentences",
          "Complex Sentences",
          "Relative Clauses",
        ],
      ),
      makeChapter(135, "Letter & Email Writing", "✉️", "English", "Class 5", [
        "Formal Letter Writing",
        "Email Format and Etiquette",
        "Application Letter",
        "Letter of Complaint",
      ]),
      makeChapter(136, "Report Writing", "📊", "English", "Class 5", [
        "News Report Format",
        "School Event Reports",
        "Science Report",
        "Factual Writing",
      ]),
    ],
  },
  2: {
    ...SUBJECT_META[2],
    chapters: [
      makeChapter(
        137,
        "Decimals & Percentages",
        "💯",
        "Mathematics",
        "Class 5",
        [
          "Decimal Numbers",
          "Operations with Decimals",
          "What is Percentage?",
          "Converting Fractions to Percentages",
        ],
      ),
      makeChapter(138, "Ratio & Proportion", "⚖️", "Mathematics", "Class 5", [
        "What is a Ratio?",
        "Equivalent Ratios",
        "Direct Proportion",
        "Indirect Proportion",
      ]),
      makeChapter(
        139,
        "Area, Perimeter & Volume",
        "📦",
        "Mathematics",
        "Class 5",
        [
          "Area of Triangle",
          "Area of Complex Shapes",
          "Volume of Cuboid",
          "Practical Applications",
        ],
      ),
      makeChapter(140, "Data Handling", "📈", "Mathematics", "Class 5", [
        "Collecting Data",
        "Bar Graphs",
        "Pie Charts",
        "Interpreting Data",
      ]),
    ],
  },
  3: {
    ...SUBJECT_META[3],
    chapters: [
      makeChapter(141, "Human Body Systems", "🫀", "Science", "Class 5", [
        "Skeletal System",
        "Muscular System",
        "Circulatory System",
        "Respiratory System",
      ]),
      makeChapter(
        142,
        "Reproduction in Plants & Animals",
        "🌼",
        "Science",
        "Class 5",
        [
          "Asexual Reproduction",
          "Sexual Reproduction in Plants",
          "Animal Reproduction",
          "Life Cycles",
        ],
      ),
      makeChapter(143, "Force & Motion", "⚡", "Science", "Class 5", [
        "Types of Forces",
        "Newton's Laws (Simple)",
        "Friction and Motion",
        "Simple Machines",
      ]),
      makeChapter(144, "Electricity Basics", "💡", "Science", "Class 5", [
        "Electric Circuit",
        "Conductors and Insulators",
        "Series and Parallel Circuits",
        "Electrical Safety",
      ]),
    ],
  },
  4: {
    ...SUBJECT_META[4],
    chapters: [
      makeChapter(
        145,
        "India's Physical Features",
        "🏔️",
        "Social Studies",
        "Class 5",
        [
          "Himalayan Region",
          "Great Plains of India",
          "Deccan Plateau",
          "Coastal Plains and Islands",
        ],
      ),
      makeChapter(146, "Freedom Movement", "🕊️", "Social Studies", "Class 5", [
        "First War of Independence 1857",
        "Role of Mahatma Gandhi",
        "Subhas Chandra Bose",
        "Independence Day 1947",
      ]),
      makeChapter(147, "Trade & Resources", "💼", "Social Studies", "Class 5", [
        "Natural Resources of India",
        "Agriculture and Farming",
        "Industries of India",
        "Trade and Commerce",
      ]),
      makeChapter(148, "World Map Basics", "🌍", "Social Studies", "Class 5", [
        "Seven Continents",
        "Five Oceans",
        "Latitude and Longitude",
        "Time Zones",
      ]),
    ],
  },
  5: {
    ...SUBJECT_META[5],
    chapters: [
      makeChapter(149, "Urdu Novel & Story", "ناول", "Urdu", "Class 5", [
        "Elements of a Story",
        "Novel Structure",
        "Character Analysis",
        "Setting and Plot",
      ]),
      makeChapter(150, "Formal Letter Writing Urdu", "خط", "Urdu", "Class 5", [
        "Business Letter Format",
        "Complaint Letter",
        "Application Letter",
        "Official Correspondence",
      ]),
      makeChapter(151, "Urdu Grammar Advanced", "قواعد", "Urdu", "Class 5", [
        "Nahw (Syntax)",
        "Sarf (Morphology)",
        "Complex Sentences",
        "Grammatical Errors",
      ]),
      makeChapter(152, "Urdu Poetry", "شاعری", "Urdu", "Class 5", [
        "Faiz Ahmed Faiz",
        "Josh Malihabadi",
        "Ahmad Faraz",
        "Contemporary Urdu Poets",
      ]),
    ],
  },
  6: {
    ...SUBJECT_META[6],
    chapters: [
      makeChapter(153, "Telugu Novel & Story", "నవల", "Telugu", "Class 5", [
        "Katha Niramana",
        "Navala Nirmipadam",
        "Paatra Chitrana",
        "Kadhanu Vishleshinchuta",
      ]),
      makeChapter(154, "Formal Letter Telugu", "లేఖ", "Telugu", "Class 5", [
        "Vyavaharika Lekha",
        "Aavedam",
        "Pariksha Lekha",
        "Sarkari Lekhalu",
      ]),
      makeChapter(
        155,
        "Advanced Telugu Grammar",
        "వ్యాకరణం",
        "Telugu",
        "Class 5",
        [
          "Samasa Vigrahamu",
          "Pratipada Vibhaktulu",
          "Kriya Padam Rupalu",
          "Vaakya Niramana",
        ],
      ),
      makeChapter(156, "Telugu Poetry", "కవిత", "Telugu", "Class 5", [
        "Gurajada Apparao",
        "Sri Sri Kavitalu",
        "Digambarakavudu",
        "Navya Kavitalu",
      ]),
    ],
  },
};

// Class 6 Syllabus
const class6Syllabus: Record<number, SubjectData> = {
  1: {
    ...SUBJECT_META[1],
    chapters: [
      makeChapter(157, "Literature Appreciation", "📚", "English", "Class 6", [
        "Prose Appreciation",
        "Poetry Appreciation",
        "Drama Introduction",
        "Literary Criticism Basics",
      ]),
      makeChapter(158, "Advanced Grammar", "✏️", "English", "Class 6", [
        "Passive Voice",
        "Reported Speech",
        "Conditional Sentences",
        "Modal Verbs",
      ]),
      makeChapter(159, "Debate & Speech Writing", "🎤", "English", "Class 6", [
        "Structure of a Debate",
        "Public Speaking Tips",
        "Writing a Speech",
        "Persuasive Language",
      ]),
      makeChapter(160, "Comprehension Advanced", "📖", "English", "Class 6", [
        "Multiple Text Types",
        "Analytical Reading",
        "Critical Comprehension",
        "Vocabulary Strategies",
      ]),
    ],
  },
  2: {
    ...SUBJECT_META[2],
    chapters: [
      makeChapter(
        161,
        "Integers & Number Line",
        "➡️",
        "Mathematics",
        "Class 6",
        [
          "Positive and Negative Integers",
          "Number Line",
          "Adding Integers",
          "Subtracting Integers",
        ],
      ),
      makeChapter(
        162,
        "Fractions & Decimals Advanced",
        "½",
        "Mathematics",
        "Class 6",
        [
          "Multiplying Fractions",
          "Dividing Fractions",
          "Decimal Multiplication",
          "Converting between Forms",
        ],
      ),
      makeChapter(163, "Algebra Introduction", "📐", "Mathematics", "Class 6", [
        "What are Variables?",
        "Simple Expressions",
        "Linear Equations",
        "Word Problems with Algebra",
      ]),
      makeChapter(164, "Basic Geometry", "🔷", "Mathematics", "Class 6", [
        "Lines and Angles",
        "Triangle Properties",
        "Quadrilateral Properties",
        "Construction Basics",
      ]),
    ],
  },
  3: {
    ...SUBJECT_META[3],
    chapters: [
      makeChapter(
        165,
        "Food Components & Nutrition",
        "🥗",
        "Science",
        "Class 6",
        [
          "Carbohydrates and Fats",
          "Proteins and Vitamins",
          "Minerals and Water",
          "Deficiency Diseases",
        ],
      ),
      makeChapter(166, "Fibre to Fabric", "🧵", "Science", "Class 6", [
        "Sources of Fibre",
        "Cotton and Silk",
        "Wool and Nylon",
        "Weaving and Spinning",
      ]),
      makeChapter(167, "Sorting Materials", "🔬", "Science", "Class 6", [
        "Properties of Materials",
        "Classification of Materials",
        "Separating Mixtures",
        "Pure Substances",
      ]),
      makeChapter(168, "Body Movements & Bones", "🦴", "Science", "Class 6", [
        "Skeleton and Joints",
        "Types of Joints",
        "Muscles and Movement",
        "Diseases of Bones",
      ]),
    ],
  },
  4: {
    ...SUBJECT_META[4],
    chapters: [
      makeChapter(
        169,
        "What Where How & When - History",
        "📜",
        "History/Social Studies",
        "Class 6",
        [
          "Sources of History",
          "Types of Sources",
          "Dating Historical Events",
          "Historians and Their Work",
        ],
      ),
      makeChapter(
        170,
        "From Hunting to Farming",
        "🌾",
        "History/Social Studies",
        "Class 6",
        [
          "Early Humans",
          "Beginning of Agriculture",
          "First Settlements",
          "Neolithic Revolution",
        ],
      ),
      makeChapter(
        171,
        "Earth - Shape & Motions",
        "🌍",
        "Geography/Social Studies",
        "Class 6",
        [
          "Shape of the Earth",
          "Rotation and Day/Night",
          "Revolution and Seasons",
          "Poles and Equator",
        ],
      ),
      makeChapter(
        172,
        "Diversity in India - Civics",
        "🤝",
        "Civics/Social Studies",
        "Class 6",
        [
          "Cultural Diversity",
          "Linguistic Diversity",
          "Religious Diversity",
          "Unity in Diversity",
        ],
      ),
    ],
  },
  5: {
    ...SUBJECT_META[5],
    chapters: [
      makeChapter(
        173,
        "Urdu Classical Literature",
        "كلاسيك",
        "Urdu",
        "Class 6",
        [
          "Daastan and Masnavi",
          "Classical Ghazal",
          "Qasida and Marsiya",
          "Mir and Ghalib",
        ],
      ),
      makeChapter(
        174,
        "Advanced Urdu Composition",
        "تصنیف",
        "Urdu",
        "Class 6",
        [
          "Academic Writing in Urdu",
          "Research-based Essays",
          "Comparative Essays",
          "Critical Analysis",
        ],
      ),
      makeChapter(175, "Urdu Grammar Mastery", "قواعد", "Urdu", "Class 6", [
        "Advanced Morphology",
        "Syntax Rules",
        "Stylistic Analysis",
        "Error Correction",
      ]),
      makeChapter(176, "Urdu Essays", "مضامین", "Urdu", "Class 6", [
        "Tahrik-e-Pakistan",
        "Maulana Azad",
        "Urdu Zabaan ki Ahemiyat",
        "Adab aur Zindagi",
      ]),
    ],
  },
  6: {
    ...SUBJECT_META[6],
    chapters: [
      makeChapter(
        177,
        "Telugu Classical Literature",
        "సాహిత్యం",
        "Telugu",
        "Class 6",
        [
          "Kavitraya Telugu Ramayanam",
          "Bharatamu",
          "Bhagavatamu",
          "Prabandha Kavitalu",
        ],
      ),
      makeChapter(
        178,
        "Advanced Telugu Composition",
        "రచన",
        "Telugu",
        "Class 6",
        [
          "Shodha Vanchana",
          "Tulana Atmaka Vachana",
          "Vimarshana Rachana",
          "Vivadaspada Vachana",
        ],
      ),
      makeChapter(
        179,
        "Telugu Grammar Mastery",
        "వ్యాకరణం",
        "Telugu",
        "Class 6",
        ["Vyutpatti", "Padam Bhedam", "Vakya Visleshana", "Sahitya Alankaras"],
      ),
      makeChapter(180, "Telugu Essays", "వ్యాసాలు", "Telugu", "Class 6", [
        "Telugu Bhashabhimaanam",
        "Andhra Sahitya Charitra",
        "Navya Yuga Kavitalu",
        "Telugu Vaangmayam",
      ]),
    ],
  },
};

export const ALL_SYLLABUS: Record<number, Record<number, SubjectData>> = {
  1: lkgSyllabus,
  2: ukgSyllabus,
  3: class1Syllabus,
  4: class2Syllabus,
  5: class3Syllabus,
  6: class4Syllabus,
  7: class5Syllabus,
  8: class6Syllabus,
};

export function getSubjectsForMedium(medium: Medium): number[] {
  return MEDIUMS[medium].subjects;
}

export function getChaptersForSubject(
  classId: number,
  subjectId: number,
): SyllabusChapter[] {
  return ALL_SYLLABUS[classId]?.[subjectId]?.chapters || [];
}

export function getTopicsForChapter(
  classId: number,
  subjectId: number,
  chapterId: number,
): SyllabusTopic[] {
  const chapters = getChaptersForSubject(classId, subjectId);
  const chapter = chapters.find((c) => c.id === chapterId);
  return chapter?.topics || [];
}

export function getTopic(
  classId: number,
  subjectId: number,
  chapterId: number,
  topicId: number,
): SyllabusTopic | undefined {
  const topics = getTopicsForChapter(classId, subjectId, chapterId);
  return topics.find((t) => t.id === topicId);
}
