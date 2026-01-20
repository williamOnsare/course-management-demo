import { useCourses } from "../hooks/useCourses";
import { CourseCard } from "./CourseCard";
import type { Course } from "../types/course";

interface CourseListProps {
  onEditCourse: (course: Course) => void;
  onDeleteCourse: (id: string) => void;
}

export const CourseList = ({
  onEditCourse,
  onDeleteCourse,
}: CourseListProps) => {
  const { courses, loading, error, fetchCourses } = useCourses();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              Error loading courses
            </h3>
            <p className="mt-2 text-sm text-red-700">{error}</p>
            <button
              onClick={fetchCourses}
              className="mt-3 text-sm font-medium text-red-600 hover:text-red-500 underline"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-4">No courses found</div>
        <p className="text-gray-400">Create your first course to get started</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Courses ({courses.length})
      </h2>
      <div className="space-y-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onEdit={onEditCourse}
            onDelete={onDeleteCourse}
          />
        ))}
      </div>
    </div>
  );
};
