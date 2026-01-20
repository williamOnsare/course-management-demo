import axios from "axios";
import type {
  CourseRequest,
  CourseResponse,
  PagedCourseResponse,
} from "@/types/course";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const courseApi = {
  // Get all courses with optional pagination
  getAll: async (page = 0, size = 100): Promise<PagedCourseResponse> => {
    const response = await api.get<PagedCourseResponse>("/courses", {
      params: { page, size },
    });
    return response.data;
  },

  // Get a single course by ID
  getById: async (id: number): Promise<CourseResponse> => {
    const response = await api.get<CourseResponse>(`/courses/${id}`);
    return response.data;
  },

  // Create a new course
  create: async (course: CourseRequest): Promise<CourseResponse> => {
    const response = await api.post<CourseResponse>("/courses", course);
    return response.data;
  },

  // Update an existing course
  update: async (
    id: number,
    course: CourseRequest,
  ): Promise<CourseResponse> => {
    const response = await api.put<CourseResponse>(`/courses/${id}`, course);
    return response.data;
  },

  // Delete a course
  delete: async (id: number): Promise<void> => {
    await api.delete(`/courses/${id}`);
  },

  // Get published courses only
  getPublished: async (page = 0, size = 100): Promise<PagedCourseResponse> => {
    const response = await api.get<PagedCourseResponse>("/courses/published", {
      params: { page, size },
    });
    return response.data;
  },
};
