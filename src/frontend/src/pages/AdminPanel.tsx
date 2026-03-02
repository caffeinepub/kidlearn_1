import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useQueryClient } from "@tanstack/react-query";
import {
  Activity,
  BookOpen,
  ChevronLeft,
  Edit,
  Plus,
  Trash2,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "../App";
import { DifficultyLevel } from "../backend.d";
import { CLASS_NAMES, SUBJECT_META } from "../data/syllabus";
import { CLASS_OPTIONS, MEDIUM_OPTIONS } from "../data/translations";
import { useActor } from "../hooks/useActor";
import { useAdminStats, useAllStudents } from "../hooks/useProgress";
import { useIsAdmin } from "../hooks/useStudentProfile";

export default function AdminPanel() {
  const navigate = useNavigate();
  const { data: isAdmin, isLoading: adminLoading } = useIsAdmin();
  const { data: stats, isLoading: statsLoading } = useAdminStats();
  const { data: students = [], isLoading: studentsLoading } = useAllStudents();
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const [contentForm, setContentForm] = useState({
    classId: "3",
    subjectId: "1",
    chapterTitle: "",
    chapterIcon: "📚",
    topicTitle: "",
    topicContent: "",
    videoUrl: "",
    pdfUrl: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  if (adminLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground font-body">
            Checking admin access...
          </p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center bg-card rounded-3xl border border-destructive/30 p-10 max-w-md shadow-float"
        >
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Access Denied
          </h2>
          <p className="text-muted-foreground font-body mb-6">
            You don't have admin privileges. Please contact the administrator.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="rounded-2xl bg-kid-gradient text-white font-display font-bold"
          >
            Go to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  const handleAddChapter = async () => {
    if (!actor || !contentForm.chapterTitle.trim()) {
      toast.error("Please enter a chapter title");
      return;
    }
    setIsSaving(true);
    try {
      await actor.createChapter(
        BigInt(contentForm.classId),
        BigInt(contentForm.subjectId),
        contentForm.chapterTitle,
        contentForm.chapterIcon || null,
        null,
      );
      toast.success("✅ Chapter added successfully!");
      setContentForm((f) => ({ ...f, chapterTitle: "" }));
      queryClient.invalidateQueries({ queryKey: ["chapters"] });
    } catch {
      toast.error("Failed to add chapter. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddTopic = async () => {
    if (!actor || !contentForm.topicTitle.trim()) {
      toast.error("Please enter a topic title");
      return;
    }
    setIsSaving(true);
    try {
      await actor.createTopic({
        title: contentForm.topicTitle,
        subjects: BigInt(contentForm.subjectId),
        order: BigInt(0),
        difficulty: DifficultyLevel.easy,
        description: contentForm.topicContent || contentForm.topicTitle,
        classId: BigInt(contentForm.classId),
        durationMinutes: BigInt(15),
        pdfUrl: contentForm.pdfUrl || undefined,
        videoUrl: contentForm.videoUrl || undefined,
        textContent: contentForm.topicContent || undefined,
        questions: [],
      });
      toast.success("✅ Topic added successfully!");
      setContentForm((f) => ({
        ...f,
        topicTitle: "",
        topicContent: "",
        videoUrl: "",
        pdfUrl: "",
      }));
    } catch {
      toast.error("Failed to add topic. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-kid-gradient px-4 pt-4 pb-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="font-display text-2xl font-bold text-white">
              Admin Panel
            </h1>
            <Badge className="bg-white/20 text-white border-0 font-body">
              🔑 Admin Access
            </Badge>
          </div>
        </div>
      </motion.div>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <Tabs defaultValue="overview">
          <TabsList className="bg-secondary rounded-2xl h-12 mb-6">
            <TabsTrigger
              value="overview"
              className="rounded-xl font-body font-semibold gap-2"
            >
              <Activity className="w-4 h-4" /> Overview
            </TabsTrigger>
            <TabsTrigger
              value="students"
              className="rounded-xl font-body font-semibold gap-2"
            >
              <Users className="w-4 h-4" /> Students
            </TabsTrigger>
            <TabsTrigger
              value="content"
              className="rounded-xl font-body font-semibold gap-2"
            >
              <BookOpen className="w-4 h-4" /> Content
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {statsLoading
                ? [1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-32 rounded-3xl" />
                  ))
                : [
                    {
                      icon: <Users className="w-8 h-8" />,
                      label: "Total Students",
                      value: stats ? Number(stats.totalStudents) : 0,
                      color: "from-blue-500 to-cyan-400",
                    },
                    {
                      icon: <TrendingUp className="w-8 h-8" />,
                      label: "Topics Completed",
                      value: stats ? Number(stats.topicsCompletedTotal) : 0,
                      color: "from-emerald-500 to-green-400",
                    },
                    {
                      icon: <Activity className="w-8 h-8" />,
                      label: "Active Today",
                      value: stats ? Number(stats.activeToday) : 0,
                      color: "from-orange-500 to-amber-400",
                    },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`bg-gradient-to-br ${stat.color} rounded-3xl p-6 text-white shadow-float`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        {stat.icon}
                        <span className="text-3xl font-display font-bold">
                          {stat.value}
                        </span>
                      </div>
                      <p className="font-body text-white/80 text-sm">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-3xl border border-border p-6"
            >
              <h2 className="font-display font-bold text-lg mb-4">
                📚 Syllabus Coverage
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {Object.entries(CLASS_NAMES).map(([id, name]) => (
                  <div
                    key={id}
                    className="bg-secondary rounded-2xl p-3 text-center"
                  >
                    <div className="font-display font-bold text-sm">{name}</div>
                    <div className="text-muted-foreground text-xs font-body mt-1">
                      Fully loaded
                    </div>
                    <div className="text-green-500 text-xs font-semibold">
                      ✅ Active
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-card rounded-3xl border border-border overflow-hidden"
            >
              <div className="p-5 border-b border-border flex items-center justify-between">
                <h2 className="font-display font-bold text-lg">
                  All Students ({students.length})
                </h2>
              </div>
              {studentsLoading ? (
                <div className="p-6 space-y-3">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-12 rounded-2xl" />
                  ))}
                </div>
              ) : students.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                  <p className="text-muted-foreground font-body">
                    No students enrolled yet.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-display font-bold">
                          Name
                        </TableHead>
                        <TableHead className="font-display font-bold">
                          Class
                        </TableHead>
                        <TableHead className="font-display font-bold">
                          Medium
                        </TableHead>
                        <TableHead className="font-display font-bold">
                          ID
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student) => (
                        <TableRow key={student.profileID}>
                          <TableCell className="font-body font-semibold">
                            {student.displayName}
                          </TableCell>
                          <TableCell className="font-body">
                            <Badge variant="secondary" className="rounded-full">
                              {CLASS_NAMES[Number(student.classId)] ||
                                `Class ${student.classId}`}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-body capitalize">
                            {student.medium}
                          </TableCell>
                          <TableCell className="font-mono text-xs text-muted-foreground">
                            {student.userId.toString().slice(0, 16)}...
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </motion.div>
          </TabsContent>

          {/* Content Manager Tab */}
          <TabsContent value="content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Add Chapter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-3xl border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Plus className="w-5 h-5 text-primary" />
                  <h2 className="font-display font-bold text-lg">
                    Add Chapter
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label className="font-body text-sm font-semibold">
                        Class
                      </Label>
                      <select
                        value={contentForm.classId}
                        onChange={(e) =>
                          setContentForm((f) => ({
                            ...f,
                            classId: e.target.value,
                          }))
                        }
                        className="w-full h-10 px-3 rounded-xl border border-border bg-secondary text-sm font-body"
                      >
                        {CLASS_OPTIONS.map((cls) => (
                          <option key={cls.value} value={cls.value}>
                            {cls.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label className="font-body text-sm font-semibold">
                        Subject
                      </Label>
                      <select
                        value={contentForm.subjectId}
                        onChange={(e) =>
                          setContentForm((f) => ({
                            ...f,
                            subjectId: e.target.value,
                          }))
                        }
                        className="w-full h-10 px-3 rounded-xl border border-border bg-secondary text-sm font-body"
                      >
                        {Object.entries(SUBJECT_META).map(([id, meta]) => (
                          <option key={id} value={id}>
                            {meta.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body text-sm font-semibold">
                      Chapter Title
                    </Label>
                    <Input
                      value={contentForm.chapterTitle}
                      onChange={(e) =>
                        setContentForm((f) => ({
                          ...f,
                          chapterTitle: e.target.value,
                        }))
                      }
                      placeholder="e.g., Numbers 1-10"
                      className="h-11 rounded-xl font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body text-sm font-semibold">
                      Chapter Icon (emoji)
                    </Label>
                    <Input
                      value={contentForm.chapterIcon}
                      onChange={(e) =>
                        setContentForm((f) => ({
                          ...f,
                          chapterIcon: e.target.value,
                        }))
                      }
                      placeholder="📚"
                      className="h-11 rounded-xl font-body w-24"
                    />
                  </div>
                  <Button
                    onClick={handleAddChapter}
                    disabled={isSaving}
                    className="w-full h-11 rounded-2xl bg-kid-gradient text-white font-display font-bold gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    {isSaving ? "Adding..." : "Add Chapter"}
                  </Button>
                </div>
              </motion.div>

              {/* Add Topic */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-3xl border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Edit className="w-5 h-5 text-primary" />
                  <h2 className="font-display font-bold text-lg">Add Topic</h2>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="font-body text-sm font-semibold">
                      Topic Title
                    </Label>
                    <Input
                      value={contentForm.topicTitle}
                      onChange={(e) =>
                        setContentForm((f) => ({
                          ...f,
                          topicTitle: e.target.value,
                        }))
                      }
                      placeholder="e.g., Counting 1 to 10"
                      className="h-11 rounded-xl font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body text-sm font-semibold">
                      Video URL (optional)
                    </Label>
                    <Input
                      value={contentForm.videoUrl}
                      onChange={(e) =>
                        setContentForm((f) => ({
                          ...f,
                          videoUrl: e.target.value,
                        }))
                      }
                      placeholder="https://youtube.com/..."
                      className="h-11 rounded-xl font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body text-sm font-semibold">
                      PDF URL (optional)
                    </Label>
                    <Input
                      value={contentForm.pdfUrl}
                      onChange={(e) =>
                        setContentForm((f) => ({
                          ...f,
                          pdfUrl: e.target.value,
                        }))
                      }
                      placeholder="https://drive.google.com/..."
                      className="h-11 rounded-xl font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body text-sm font-semibold">
                      Text Content
                    </Label>
                    <Textarea
                      value={contentForm.topicContent}
                      onChange={(e) =>
                        setContentForm((f) => ({
                          ...f,
                          topicContent: e.target.value,
                        }))
                      }
                      placeholder="Enter topic content here..."
                      className="rounded-xl font-body min-h-24 resize-none"
                      rows={4}
                    />
                  </div>
                  <Button
                    onClick={handleAddTopic}
                    disabled={isSaving}
                    className="w-full h-11 rounded-2xl bg-kid-gradient text-white font-display font-bold gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    {isSaving ? "Adding..." : "Add Topic"}
                  </Button>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
