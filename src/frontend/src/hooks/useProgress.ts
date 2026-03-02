import type { Principal } from "@icp-sdk/core/principal";
import { useQuery } from "@tanstack/react-query";
import type { StudentProfile, TopicProgressEntry } from "../backend.d";
import { useActor } from "./useActor";

export function useMyProgress() {
  const { actor, isFetching } = useActor();

  return useQuery<TopicProgressEntry[]>({
    queryKey: ["myProgress"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyProgress();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useStudentProgress(studentPrincipal: Principal | undefined) {
  const { actor, isFetching } = useActor();

  return useQuery<TopicProgressEntry[]>({
    queryKey: ["studentProgress", studentPrincipal?.toString()],
    queryFn: async () => {
      if (!actor || !studentPrincipal) return [];
      return actor.getStudentProgress(studentPrincipal);
    },
    enabled: !!actor && !isFetching && !!studentPrincipal,
  });
}

export function useAllStudents() {
  const { actor, isFetching } = useActor();

  return useQuery<StudentProfile[]>({
    queryKey: ["allStudents"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listAllStudents();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAdminStats() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getAdminStats();
    },
    enabled: !!actor && !isFetching,
  });
}

// Calculate completion percentage for a set of topic IDs
export function calculateProgress(
  topicIds: number[],
  progressEntries: TopicProgressEntry[],
): number {
  if (topicIds.length === 0) return 0;
  const completedIds = new Set(
    progressEntries
      .filter((e) => e.completionStatus === "completed")
      .map((e) => Number(e.topicId)),
  );
  const completed = topicIds.filter((id) => completedIds.has(id)).length;
  return Math.round((completed / topicIds.length) * 100);
}
