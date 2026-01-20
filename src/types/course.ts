export interface Course {
  id: string;
  title: string;
  description: string;
  published: boolean;
}

export interface CourseFormData {
  title: string;
  description: string;
  published: boolean;
}
