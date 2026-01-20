import { Edit, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { CourseResponse } from '@/types/course';

interface CourseCardProps {
  course: CourseResponse;
  onDelete: (course: CourseResponse) => void;
}

export const CourseCard = ({ course, onDelete }: CourseCardProps) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/courses/${course.id}/edit`);
  };

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
          <Badge variant={course.published ? 'default' : 'secondary'}>
            {course.published ? 'Published' : 'Draft'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {course.description}
        </p>
      </CardContent>
      <CardFooter className="pt-3 gap-2">
        <Button variant="outline" size="sm" onClick={handleEdit} className="flex-1">
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onDelete(course)}
          className="flex-1 text-destructive hover:text-destructive"
        >
          <Trash2 className="h-4 w-4 mr-1" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
