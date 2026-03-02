import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface TopicProgressEntry {
    id: bigint;
    timeSpentSeconds: bigint;
    studentId: bigint;
    completionStatus: CompletionStatus;
    createdAt: NationTime;
    attempts: bigint;
    score: bigint;
    updatedAt: NationTime;
    correctAnswers: bigint;
    topicId: bigint;
}
export interface ContentInput {
    title: string;
    subjects: bigint;
    order: bigint;
    difficulty: DifficultyLevel;
    description: string;
    classId: bigint;
    durationMinutes: bigint;
    pdfUrl?: string;
    questions: Array<Question>;
    videoUrl?: string;
    textContent?: string;
}
export interface Chapter {
    id: bigint;
    status: ResourceStatus;
    title: string;
    order?: bigint;
    icon?: string;
    createdAt: NationTime;
    classId?: bigint;
    updatedAt: NationTime;
    subjectId: bigint;
}
export interface StudentProfile {
    id: bigint;
    timezone: string;
    grades: string;
    country: string;
    subjects: Array<string>;
    displayName: string;
    birthdate: string;
    city: string;
    userId: Principal;
    joinedAt: bigint;
    profileID: string;
    photoURL: string;
    classId: bigint;
    email: string;
    languagePref: string;
    updatedAt: bigint;
    state: string;
    entrySource: string;
    gender: string;
    phone: string;
    parentID: string;
    profileType: ProfileType;
    deletedAt: bigint;
    medium: string;
}
export interface AdminStats {
    topicsCompletedTotal: bigint;
    totalStudents: bigint;
    activeToday: bigint;
}
export interface Topic {
    id: bigint;
    status: ResourceStatus;
    title: string;
    order?: bigint;
    difficulty?: DifficultyLevel;
    createdAt: NationTime;
    description?: string;
    chapterId: bigint;
    classId?: bigint;
    updatedAt: NationTime;
    durationMinutes?: bigint;
    subjectId: bigint;
    pdfUrl?: string;
    questions: Array<Question>;
    videoUrl?: string;
    textContent?: string;
}
export interface NationTime {
    createdAt: bigint;
    updatedAt: bigint;
}
export interface Question {
    marks?: bigint;
    status: ResourceStatus;
    topic: bigint;
    difficulty?: DifficultyLevel;
    explanation?: string;
    createdAt: NationTime;
    text: string;
    correctAnswer: bigint;
    questionType: QuestionType;
    updatedAt: NationTime;
    questionId: bigint;
    options: Array<string>;
}
export interface UserProfile {
    displayName: string;
    classId: string;
    languagePref: string;
    medium: string;
}
export enum CompletionStatus {
    notStarted = "notStarted",
    completed = "completed",
    inProgress = "inProgress"
}
export enum DifficultyLevel {
    easy = "easy",
    hard = "hard",
    medium = "medium"
}
export enum ProfileType {
    teacher = "teacher",
    student = "student",
    parent = "parent"
}
export enum QuestionType {
    shortAnswer = "shortAnswer",
    fillInTheBlanks = "fillInTheBlanks",
    multipleChoice = "multipleChoice",
    trueFalse = "trueFalse"
}
export enum ResourceStatus {
    deleted = "deleted",
    active = "active",
    inactive = "inactive",
    archived = "archived"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createChapter(classId: bigint, subjectId: bigint, title: string, icon: string | null, order: bigint | null): Promise<bigint>;
    createStudentProfile(displayName: string, classId: bigint, medium: string, languagePref: string): Promise<bigint>;
    createTopic(content: ContentInput): Promise<bigint>;
    deleteChapter(id: bigint): Promise<void>;
    deleteTopic(topicId: bigint): Promise<void>;
    getAdminStats(): Promise<AdminStats>;
    getAllChapters(): Promise<Array<Chapter>>;
    getAllClasses(): Promise<Array<string>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getChaptersForSubject(subjectId: bigint, classId: bigint): Promise<Array<Chapter>>;
    getMyProgress(): Promise<Array<TopicProgressEntry>>;
    getMyStudentProfile(): Promise<StudentProfile | null>;
    getStudentProfile(studentPrincipal: Principal): Promise<StudentProfile | null>;
    getStudentProgress(studentPrincipal: Principal): Promise<Array<TopicProgressEntry>>;
    getTopicsForChapter(chapterId: bigint, subjectId: bigint, classId: bigint): Promise<Array<Topic>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    listAllStudents(): Promise<Array<StudentProfile>>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    updateChapter(chapterId: bigint, classId: bigint, subjectId: bigint, title: string, icon: string | null, order: bigint | null): Promise<void>;
    updateStudentProfile(displayName: string, classId: bigint, medium: string, languagePref: string): Promise<void>;
    updateTopic(topicId: bigint, content: ContentInput): Promise<void>;
}
