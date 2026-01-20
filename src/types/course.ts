// API Request/Response types matching Swagger schema

export interface CourseRequest {
  title: string;
  description: string;
  published: boolean;
}

export interface CourseResponse {
  id: number;
  title: string;
  description: string;
  published: boolean;
}

export interface PagedCourseResponse {
  content: CourseResponse[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  size: number;
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  numberOfElements: number;
  empty: boolean;
}

export type PublishedFilter = 'all' | 'published' | 'unpublished';
