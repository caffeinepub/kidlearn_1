export type Language = "en" | "hi" | "ur" | "te";

export interface UILabels {
  dashboard: string;
  subjects: string;
  chapters: string;
  topics: string;
  progress: string;
  login: string;
  logout: string;
  profile: string;
  admin: string;
  welcome: string;
  continue: string;
  completed: string;
  startLearning: string;
  markComplete: string;
  notes: string;
  video: string;
  chat: string;
  download: string;
  back: string;
  next: string;
  myProgress: string;
  settings: string;
  selectClass: string;
  selectMedium: string;
  selectLanguage: string;
  save: string;
  cancel: string;
  loading: string;
  error: string;
  home: string;
  aiTutor: string;
  askQuestion: string;
  sendMessage: string;
  chooseClass: string;
  chooseMedium: string;
  langLabel: string;
  total: string;
  students: string;
  today: string;
}

export const TRANSLATIONS: Record<Language, UILabels> = {
  en: {
    dashboard: "Dashboard",
    subjects: "Subjects",
    chapters: "Chapters",
    topics: "Topics",
    progress: "Progress",
    login: "Login",
    logout: "Logout",
    profile: "Profile",
    admin: "Admin",
    welcome: "Welcome",
    continue: "Continue",
    completed: "Completed",
    startLearning: "Start Learning",
    markComplete: "Mark as Complete",
    notes: "Notes",
    video: "Video",
    chat: "Chat",
    download: "Download PDF",
    back: "Back",
    next: "Next",
    myProgress: "My Progress",
    settings: "Settings",
    selectClass: "Select Class",
    selectMedium: "Select Medium",
    selectLanguage: "Select Language",
    save: "Save",
    cancel: "Cancel",
    loading: "Loading...",
    error: "Something went wrong",
    home: "Home",
    aiTutor: "AI Tutor",
    askQuestion: "Ask a question...",
    sendMessage: "Send",
    chooseClass: "Choose your class",
    chooseMedium: "Choose your medium",
    langLabel: "Language",
    total: "Total",
    students: "Students",
    today: "Today",
  },
  hi: {
    dashboard: "डैशबोर्ड",
    subjects: "विषय",
    chapters: "अध्याय",
    topics: "पाठ",
    progress: "प्रगति",
    login: "लॉग इन",
    logout: "लॉग आउट",
    profile: "प्रोफ़ाइल",
    admin: "एडमिन",
    welcome: "स्वागत",
    continue: "जारी रखें",
    completed: "पूरा हो गया",
    startLearning: "सीखना शुरू करें",
    markComplete: "पूरा हुआ",
    notes: "नोट्स",
    video: "वीडियो",
    chat: "चैट",
    download: "PDF डाउनलोड",
    back: "वापस",
    next: "आगे",
    myProgress: "मेरी प्रगति",
    settings: "सेटिंग्स",
    selectClass: "कक्षा चुनें",
    selectMedium: "माध्यम चुनें",
    selectLanguage: "भाषा चुनें",
    save: "सहेजें",
    cancel: "रद्द करें",
    loading: "लोड हो रहा है...",
    error: "कुछ गलत हुआ",
    home: "होम",
    aiTutor: "AI टीचर",
    askQuestion: "सवाल पूछें...",
    sendMessage: "भेजें",
    chooseClass: "अपनी कक्षा चुनें",
    chooseMedium: "अपना माध्यम चुनें",
    langLabel: "भाषा",
    total: "कुल",
    students: "छात्र",
    today: "आज",
  },
  ur: {
    dashboard: "ڈیش بورڈ",
    subjects: "مضامین",
    chapters: "ابواب",
    topics: "عنوانات",
    progress: "پیشرفت",
    login: "لاگ ان",
    logout: "لاگ آؤٹ",
    profile: "پروفائل",
    admin: "ایڈمن",
    welcome: "خوش آمدید",
    continue: "جاری رکھیں",
    completed: "مکمل",
    startLearning: "سیکھنا شروع کریں",
    markComplete: "مکمل کریں",
    notes: "نوٹس",
    video: "ویڈیو",
    chat: "چیٹ",
    download: "PDF ڈاؤنلوڈ",
    back: "واپس",
    next: "آگے",
    myProgress: "میری ترقی",
    settings: "ترتیبات",
    selectClass: "جماعت منتخب کریں",
    selectMedium: "میڈیم منتخب کریں",
    selectLanguage: "زبان منتخب کریں",
    save: "محفوظ کریں",
    cancel: "منسوخ",
    loading: "لوڈ ہو رہا ہے...",
    error: "کچھ غلط ہوا",
    home: "گھر",
    aiTutor: "AI استاد",
    askQuestion: "سوال پوچھیں...",
    sendMessage: "بھیجیں",
    chooseClass: "اپنی جماعت چنیں",
    chooseMedium: "اپنا میڈیم چنیں",
    langLabel: "زبان",
    total: "کل",
    students: "طلباء",
    today: "آج",
  },
  te: {
    dashboard: "డాష్‌బోర్డ్",
    subjects: "విషయాలు",
    chapters: "అధ్యాయాలు",
    topics: "అంశాలు",
    progress: "పురోగతి",
    login: "లాగిన్",
    logout: "లాగ్అవుట్",
    profile: "ప్రొఫైల్",
    admin: "అడ్మిన్",
    welcome: "స్వాగతం",
    continue: "కొనసాగించు",
    completed: "పూర్తైంది",
    startLearning: "నేర్చుకోవడం ప్రారంభించు",
    markComplete: "పూర్తిగా గుర్తించు",
    notes: "నోట్స్",
    video: "వీడియో",
    chat: "చాట్",
    download: "PDF డౌన్‌లోడ్",
    back: "వెనుకకు",
    next: "తరువాత",
    myProgress: "నా పురోగతి",
    settings: "సెట్టింగులు",
    selectClass: "తరగతి ఎంచుకోండి",
    selectMedium: "మాధ్యమం ఎంచుకోండి",
    selectLanguage: "భాష ఎంచుకోండి",
    save: "సేవ్ చేయి",
    cancel: "రద్దు చేయి",
    loading: "లోడవుతోంది...",
    error: "ఏదో తప్పు జరిగింది",
    home: "హోమ్",
    aiTutor: "AI గురువు",
    askQuestion: "ప్రశ్న అడగండి...",
    sendMessage: "పంపు",
    chooseClass: "మీ తరగతి ఎంచుకోండి",
    chooseMedium: "మీ మాధ్యమం ఎంచుకోండి",
    langLabel: "భాష",
    total: "మొత్తం",
    students: "విద్యార్థులు",
    today: "ఈరోజు",
  },
};

export function useTranslation(lang: Language): UILabels {
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
}

export const LANGUAGE_OPTIONS: {
  value: Language;
  label: string;
  nativeLabel: string;
  flag: string;
}[] = [
  { value: "en", label: "English", nativeLabel: "English", flag: "🇬🇧" },
  { value: "hi", label: "Hindi", nativeLabel: "हिंदी", flag: "🇮🇳" },
  { value: "ur", label: "Urdu", nativeLabel: "اردو", flag: "🕌" },
  { value: "te", label: "Telugu", nativeLabel: "తెలుగు", flag: "🌺" },
];

export const MEDIUM_OPTIONS = [
  {
    value: "english",
    label: "English Medium",
    icon: "🇬🇧",
    description: "All subjects in English",
  },
  {
    value: "urdu",
    label: "Urdu Medium",
    icon: "🕌",
    description: "Includes Urdu subject",
  },
  {
    value: "telugu",
    label: "Telugu Medium",
    icon: "🌺",
    description: "Includes Telugu subject",
  },
];

export const CLASS_OPTIONS = [
  {
    value: "1",
    label: "LKG",
    description: "Lower Kindergarten",
    age: "3-4 years",
  },
  {
    value: "2",
    label: "UKG",
    description: "Upper Kindergarten",
    age: "4-5 years",
  },
  { value: "3", label: "Class 1", description: "Standard 1", age: "5-6 years" },
  { value: "4", label: "Class 2", description: "Standard 2", age: "6-7 years" },
  { value: "5", label: "Class 3", description: "Standard 3", age: "7-8 years" },
  { value: "6", label: "Class 4", description: "Standard 4", age: "8-9 years" },
  {
    value: "7",
    label: "Class 5",
    description: "Standard 5",
    age: "9-10 years",
  },
  {
    value: "8",
    label: "Class 6",
    description: "Standard 6",
    age: "10-11 years",
  },
];
