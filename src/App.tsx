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
    <div className="min-h-screen bg-gray-50">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={clearNotification}
        />
      )}

      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Course Management
              </h1>
              <p className="text-gray-600">Manage your courses with ease</p>
            </div>
            <button
              onClick={handleCreateCourse}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Create New Course
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
