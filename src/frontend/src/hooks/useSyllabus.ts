import { useMemo } from "react";
import {
  ALL_SYLLABUS,
  MEDIUMS,
  type Medium,
  SUBJECT_META,
  type SyllabusChapter,
  type SyllabusTopic,
  getChaptersForSubject,
  getTopicsForChapter,
} from "../data/syllabus";

export type SubjectWithId = {
  id: number;
  name: string;
  icon: string;
  color: string;
  gradientClass: string;
  chapters: SyllabusChapter[];
};

export function useSubjectsForClass(
  classId: number,
  medium: Medium,
): SubjectWithId[] {
  return useMemo(() => {
    const subjectIds = MEDIUMS[medium].subjects;
    const classData = ALL_SYLLABUS[classId];
    if (!classData) return [];

    return subjectIds
      .map((sid) => {
        const subjectData = classData[sid];
        if (!subjectData) return null;
        return {
          ...SUBJECT_META[sid],
          id: sid,
          chapters: subjectData.chapters,
        };
      })
      .filter((s): s is SubjectWithId => s !== null);
  }, [classId, medium]);
}

export function useChapters(
  classId: number,
  subjectId: number,
): SyllabusChapter[] {
  return useMemo(() => {
    return getChaptersForSubject(classId, subjectId);
  }, [classId, subjectId]);
}

export function useTopics(
  classId: number,
  subjectId: number,
  chapterId: number,
): SyllabusTopic[] {
  return useMemo(() => {
    return getTopicsForChapter(classId, subjectId, chapterId);
  }, [classId, subjectId, chapterId]);
}
