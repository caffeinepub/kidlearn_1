import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { StudentProfile } from "../backend.d";
import { useActor } from "./useActor";

export function useStudentProfile() {
  const { actor, isFetching } = useActor();

  return useQuery<StudentProfile | null>({
    queryKey: ["studentProfile"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getMyStudentProfile();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateStudentProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      displayName,
      classId,
      medium,
      languagePref,
    }: {
      displayName: string;
      classId: bigint;
      medium: string;
      languagePref: string;
    }) => {
      if (!actor) throw new Error("No actor");
      return actor.updateStudentProfile(
        displayName,
        classId,
        medium,
        languagePref,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentProfile"] });
    },
  });
}

export function useCreateStudentProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      displayName,
      classId,
      medium,
      languagePref,
    }: {
      displayName: string;
      classId: bigint;
      medium: string;
      languagePref: string;
    }) => {
      if (!actor) throw new Error("No actor");
      return actor.createStudentProfile(
        displayName,
        classId,
        medium,
        languagePref,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentProfile"] });
    },
  });
}

export function useUserRole() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ["userRole"],
    queryFn: async () => {
      if (!actor) return "guest";
      return actor.getCallerUserRole();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useIsAdmin() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}
