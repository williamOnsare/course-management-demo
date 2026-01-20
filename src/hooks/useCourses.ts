import { useState, useEffect } from "react";
import type { Course, CourseFormData } from "../types/course";
import { courseService } from "../services/courseService";

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await courseService.getAllCourses();
      setCourses(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const createCourse = async (
    courseData: CourseFormData,
  ): Promise<Course | null> => {
    setLoading(true);
    setError(null);
    try {
      const newCourse = await courseService.createCourse(courseData);
      setCourses((prev) => [...prev, newCourse]);
      return newCourse;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create course");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateCourse = async (
    id: string,
    courseData: CourseFormData,
  ): Promise<Course | null> => {
    setLoading(true);
    setError(null);
    try {
      const updatedCourse = await courseService.updateCourse(id, courseData);
      setCourses((prev) =>
        prev.map((course) => (course.id === id ? updatedCourse : course)),
      );
      return updatedCourse;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update course");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteCourse = async (id: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await courseService.deleteCourse(id);
      setCourses((prev) => prev.filter((course) => course.id !== id));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete course");
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return {
    courses,
    loading,
    error,
    fetchCourses,
    createCourse,
    updateCourse,
    deleteCourse,
  };
};
