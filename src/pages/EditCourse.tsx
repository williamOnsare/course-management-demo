import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { CourseForm } from '@/components/courses/CourseForm';
import { ErrorState } from '@/components/courses/ErrorState';
import { useCourses, useCourse } from '@/hooks/useCourses';
import type { CourseRequest } from '@/types/course';

const EditCourse = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const courseId = parseInt(id || '0', 10);

  const { updateCourse, isUpdating } = useCourses();
  const { data: course, isLoading, isError, error, refetch } = useCourse(courseId);

  const handleSubmit = async (data: CourseRequest) => {
    await updateCourse({ id: courseId, course: data });
    navigate('/courses');
  };

  const handleCancel = () => {
    navigate('/courses');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate('/courses')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Button>

        {/* Content */}
        {isLoading ? (
          <Card>
            <CardHeader>
              <Skeleton className="h-7 w-48" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-32 w-full" />
              </div>
              <Skeleton className="h-16 w-full" />
              <div className="flex gap-4 pt-4">
                <Skeleton className="h-10 flex-1" />
                <Skeleton className="h-10 flex-1" />
              </div>
            </CardContent>
          </Card>
        ) : isError ? (
          <ErrorState message={error?.message} onRetry={refetch} />
        ) : course ? (
          <Card>
            <CardHeader>
              <CardTitle>Edit Course</CardTitle>
            </CardHeader>
            <CardContent>
              <CourseForm
                initialData={course}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                isSubmitting={isUpdating}
                submitLabel="Save Changes"
              />
            </CardContent>
          </Card>
        ) : null}
      </div>
    </div>
  );
};

export default EditCourse;
