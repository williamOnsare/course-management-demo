import axios from "axios";
import type { Course, CourseFormData } from "../types/course";

const API_BASE_URL = "https://assesmentsapi.zeraki.app/";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const courseService = {
  async getAllCourses(): Promise<Course[]> {
    try {
      const response = await api.get("/api/courses");
      return response.data;
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw new Error("Failed to fetch courses");
    }
  },

  async getCourseById(id: number): Promise<Course> {
    try {
      const response = await api.get(`/api/courses/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching course:", error);
      throw new Error("Failed to fetch course");
    }
  },

  async createCourse(courseData: CourseFormData): Promise<Course> {
    try {
      const response = await api.post("/api/courses", courseData);
      return response.data;
    } catch (error) {
      console.error("Error creating course:", error);
      throw new Error("Failed to create course");
    }
  },

  async updateCourse(id: number, courseData: CourseFormData): Promise<Course> {
    try {
      const response = await api.put(`/api/courses/${id}`, courseData);
      return response.data;
    } catch (error) {
      console.error("Error updating course:", error);
      throw new Error("Failed to update course");
    }
  },

  async deleteCourse(id: number): Promise<void> {
    try {
      await api.delete(`/api/courses/${id}`);
    } catch (error) {
      console.error("Error deleting course:", error);
      throw new Error("Failed to delete course");
    }
  },
};
