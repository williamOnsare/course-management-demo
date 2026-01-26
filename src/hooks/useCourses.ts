import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { courseApi } from "@/services/courseApi";
import type {
  CourseRequest,
  CourseResponse,
  PublishedFilter,
} from "@/types/course";
import { toast } from "sonner";

export const useCourses = (
  search?: string,
  publishedFilter?: PublishedFilter,
) => {
  const queryClient = useQueryClient();

  const coursesQuery = useQuery({
    queryKey: ["courses", search, publishedFilter],
    queryFn: () => courseApi.getAll(0, 100, search, publishedFilter),
  });

  const createMutation = useMutation({
    mutationFn: (course: CourseRequest) => courseApi.create(course),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      toast.success("Course created successfully");
    },
    onError: (error: Error) => {
      toast.error(`Failed to create course: ${error.message}`);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, course }: { id: number; course: CourseRequest }) =>
      courseApi.update(id, course),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      toast.success("Course updated successfully");
    },
    onError: (error: Error) => {
      toast.error(`Failed to update course: ${error.message}`);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => courseApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      toast.success("Course deleted successfully");
    },
    onError: (error: Error) => {
      toast.error(`Failed to delete course: ${error.message}`);
    },
  });

  return {
    courses: coursesQuery.data?.content ?? [],
    isLoading: coursesQuery.isLoading,
    isError: coursesQuery.isError,
    error: coursesQuery.error,
    refetch: coursesQuery.refetch,
    createCourse: createMutation.mutateAsync,
    updateCourse: updateMutation.mutateAsync,
    deleteCourse: deleteMutation.mutateAsync,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
};

export const useCourse = (id: number) => {
  return useQuery({
    queryKey: ["course", id],
    queryFn: () => courseApi.getById(id),
    enabled: !!id,
  });
};
