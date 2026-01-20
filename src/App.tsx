import { useState } from "react";
import { CourseList } from "./components/CourseList";
import type { Course } from "./types/course";

function App() {
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  const handleEditCourse = (course: Course) => {
    setEditingCourse(course);
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Course Management
          </h1>
          <p className="text-gray-600">Manage your courses with ease</p>
        </header>

        <main>
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
