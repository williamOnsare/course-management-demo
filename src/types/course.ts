export interface Course {
  id: number;
  title: string;
  description: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CourseFormData {
  title: string;
  description: string;
  published: boolean;
}
