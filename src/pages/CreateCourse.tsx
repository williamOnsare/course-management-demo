import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CourseForm } from '@/components/courses/CourseForm';
import { useCourses } from '@/hooks/useCourses';
import type { CourseRequest } from '@/types/course';

const CreateCourse = () => {
  const navigate = useNavigate();
  const { createCourse, isCreating } = useCourses();

  const handleSubmit = async (data: CourseRequest) => {
    await createCourse(data);
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

        {/* Form Card */}
        <Card>
          <CardHeader>
            <CardTitle>Create New Course</CardTitle>
          </CardHeader>
          <CardContent>
            <CourseForm
              onSubmit={handleSubmit}
              onCancel={handleCancel}
              isSubmitting={isCreating}
              submitLabel="Create Course"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateCourse;
