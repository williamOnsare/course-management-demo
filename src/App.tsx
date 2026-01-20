import { useState } from "react";
import { CourseList } from "./components/CourseList";
import { CourseForm } from "./components/CourseForm";
import { useCourses } from "./hooks/useCourses";
import type { Course, CourseFormData } from "./types/course";

function App() {
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [showForm, setShowForm] = useState(false);
  const { createCourse, updateCourse } = useCourses();

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
      } else {
        await createCourse(courseData);
      }
      setShowForm(false);
      setEditingCourse(null);
    } catch (error) {
      console.error("Error saving course:", error);
    }
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingCourse(null);
  };

  const handleDeleteCourse = (id: string) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      // Delete functionality will be implemented in next phase
      console.log("Delete course:", id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
