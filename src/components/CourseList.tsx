import { useCourses } from "../hooks/useCourses";
import { CourseCard } from "./CourseCard";
import { CourseFilters } from "./CourseFilters";
import type { Course } from "../types/course";
import { useMemo, useState } from "react";

interface CourseListProps {
  onEditCourse: (course: Course) => void;
  onDeleteCourse: (id: number) => void;
}

export const CourseList = ({
  onEditCourse,
  onDeleteCourse,
}: CourseListProps) => {
  const { courses, loading, error, fetchCourses } = useCourses();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "published" | "draft"
  >("all");

  const filteredCourses = useMemo(() => {
    if (!Array.isArray(courses)) {
      return [];
    }
    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter =
        filterStatus === "all" ||
        (filterStatus === "published" && course.published) ||
        (filterStatus === "draft" && !course.published);

      return matchesSearch && matchesFilter;
    });
  }, [courses, searchTerm, filterStatus]);

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

  if (filteredCourses.length === 0 && !loading) {
    return (
      <div>
        <CourseFilters
          onSearchChange={setSearchTerm}
          onFilterChange={setFilterStatus}
          searchValue={searchTerm}
          filterValue={filterStatus}
        />
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0l9.172-9.172a4 4 0 01-5.656 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="text-gray-500 text-lg mb-4">No courses found</div>
          <p className="text-gray-400 max-w-md mx-auto">
            {searchTerm || filterStatus !== "all"
              ? "Try adjusting your search terms or filters to find what you're looking for."
              : "Start by creating your first course to get started on your learning journey."}
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setFilterStatus("all");
            }}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium"
          >
            Clear Filters
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <CourseFilters
        onSearchChange={setSearchTerm}
        onFilterChange={setFilterStatus}
        searchValue={searchTerm}
        filterValue={filterStatus}
      />
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <span className="flex items-center gap-2">
            {filterStatus === "published" && (
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                Published
              </span>
            )}
            {filterStatus === "draft" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                Drafts
              </span>
            )}
            {filterStatus === "all" && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                All Courses
              </span>
            )}
          </span>
          <span className="text-gray-500 font-normal text-lg">
            ({filteredCourses.length})
          </span>
        </h2>
        {searchTerm && (
          <div className="text-sm text-gray-600 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
            Showing results for:{" "}
            <span className="font-semibold text-blue-800">{searchTerm}</span>
            <button
              onClick={() => setSearchTerm("")}
              className="ml-2 text-blue-600 hover:text-blue-800 font-medium underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
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
