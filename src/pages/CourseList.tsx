import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/courses/CourseCard";
import { CourseCardSkeleton } from "@/components/courses/CourseCardSkeleton";
import { FilterBar } from "@/components/courses/FilterBar";
import { DeleteCourseDialog } from "@/components/courses/DeleteCourseDialog";
import { EmptyState } from "@/components/courses/EmptyState";
import { ErrorState } from "@/components/courses/ErrorState";
import { useCourses } from "@/hooks/useCourses";
import { useCourseFilters } from "@/hooks/useCourseFilters";
import type { CourseResponse } from "@/types/course";

const CourseList = () => {
  const navigate = useNavigate();
  const [courseToDelete, setCourseToDelete] = useState<CourseResponse | null>(
    null,
  );

  const {
    filters,
    debouncedSearch,
    updateSearch,
    updatePublishedFilter,
    hasActiveFilters,
  } = useCourseFilters();

  const {
    courses,
    isLoading,
    isError,
    error,
    refetch,
    deleteCourse,
    isDeleting,
  } = useCourses(debouncedSearch, filters.publishedFilter);

  const handleDeleteClick = (course: CourseResponse) => {
    setCourseToDelete(course);
  };

  const handleDeleteConfirm = async () => {
    if (courseToDelete) {
      await deleteCourse(courseToDelete.id);
      setCourseToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setCourseToDelete(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
            <p className="text-muted-foreground mt-1">
              Manage your course catalog
            </p>
          </div>
          <Button onClick={() => navigate("/courses/new")}>
            <Plus className="h-4 w-4 mr-2" />
            Add Course
          </Button>
        </div>

        {/* Filter Bar */}
        <FilterBar
          searchQuery={filters.search}
          onSearchChange={updateSearch}
          publishedFilter={filters.publishedFilter}
          onPublishedFilterChange={updatePublishedFilter}
        />

        {/* Content */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <CourseCardSkeleton key={index} />
            ))}
          </div>
        ) : isError ? (
          <ErrorState message={error?.message} onRetry={refetch} />
        ) : courses.length === 0 ? (
          <EmptyState hasFilters={hasActiveFilters} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onDelete={handleDeleteClick}
              />
            ))}
          </div>
        )}

        {/* Delete Confirmation Dialog */}
        <DeleteCourseDialog
          course={courseToDelete}
          isOpen={!!courseToDelete}
          onClose={handleDeleteCancel}
          onConfirm={handleDeleteConfirm}
          isDeleting={isDeleting}
        />
      </div>
    </div>
  );
};

export default CourseList;
