import { useState, useEffect } from "react";
import { CourseList } from "./components/CourseList";
import { CourseForm } from "./components/CourseForm";
import { Notification } from "./components/Notification";
import { useCourses } from "./hooks/useCourses";
import type { Course, CourseFormData } from "./types/course";

function App() {
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const { createCourse, updateCourse, deleteCourse } = useCourses();

  const handleEditCourse = (course: Course) => {
    setEditingCourse(course);
    setShowForm(true);
  };

  const handleCreateCourse = () => {
    setEditingCourse(null);
    setShowForm(true);
  };

  const handleSaveCourse = async (courseData: CourseFormData) => {
    try {
      if (editingCourse) {
        await updateCourse(editingCourse.id, courseData);
        setNotification({
          message: "Course updated successfully!",
          type: "success",
        });
      } else {
        await createCourse(courseData);
        setNotification({
          message: "Course created successfully!",
          type: "success",
        });
      }
      setShowForm(false);
      setEditingCourse(null);
    } catch (error) {
      console.error("Error saving course:", error);
      setNotification({
        message: "Failed to save course. Please try again.",
        type: "error",
      });
    }
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingCourse(null);
  };

  const handleDeleteCourse = async (id: number) => {
    if (
      window.confirm(
        "Are you sure you want to delete this course? This action cannot be undone.",
      )
    ) {
      try {
        const success = await deleteCourse(id);
        if (success) {
          setNotification({
            message: "Course deleted successfully!",
            type: "success",
          });
        } else {
          setNotification({
            message: "Failed to delete course. Please try again.",
            type: "error",
          });
        }
      } catch (error) {
        console.error("Error deleting course:", error);
        setNotification({
          message: "An error occurred while deleting the course.",
          type: "error",
        });
      }
    }
  };

  const clearNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(clearNotification, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={clearNotification}
        />
      )}

      <div className="container mx-auto px-4 py-8">
        <header className="mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">
                Course Management
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl">
                Create, manage, and organize your educational content with ease
              </p>
            </div>
            <button
              onClick={handleCreateCourse}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0 0V6m0 6a2 2 0 100 4 2 2 0 000-4z"
                  />
                </svg>
                Create New Course
              </span>
            </button>
          </div>
        </header>

        <main>
          {showForm && (
            <CourseForm
              course={editingCourse}
              onSave={handleSaveCourse}
              onCancel={handleCancelForm}
            />
          )}

          <CourseList
            onEditCourse={handleEditCourse}
            onDeleteCourse={handleDeleteCourse}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
