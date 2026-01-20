import { BookOpen, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  hasFilters: boolean;
}

export const EmptyState = ({ hasFilters }: EmptyStateProps) => {
  const navigate = useNavigate();

  if (hasFilters) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No courses found</h3>
        <p className="text-muted-foreground mb-4">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-semibold mb-2">No courses yet</h3>
      <p className="text-muted-foreground mb-4">
        Get started by creating your first course
      </p>
      <Button onClick={() => navigate('/courses/new')}>
        <Plus className="h-4 w-4 mr-2" />
        Add Course
      </Button>
    </div>
  );
};
