import type { Course } from "../types/course";

interface CourseCardProps {
  course: Course;
  onEdit: (course: Course) => void;
  onDelete: (id: number) => void;
}

export const CourseCard = ({ course, onEdit, onDelete }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            course.published
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {course.published ? "Published" : "Draft"}
        </span>
      </div>

      <p className="text-gray-600 mb-6 line-clamp-3">{course.description}</p>

      <div className="flex gap-3">
        <button
          onClick={() => onEdit(course)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(course.id)}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
