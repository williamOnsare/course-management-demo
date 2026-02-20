import { Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DateDisplayProps {
  createdAt: string;
  updatedAt: string;
  className?: string;
}

export const DateDisplay = ({ createdAt, updatedAt, className }: DateDisplayProps) => {
  const createdDate = new Date(createdAt);
  const updatedDate = new Date(updatedAt);
  
  const isEdited = createdAt !== updatedAt;
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={cn('flex flex-col gap-1 text-xs text-muted-foreground', className)}>
      <div className="flex items-center gap-1" title='Time course was created'>
        <Calendar className="h-3 w-3" />
        <span>{formatDate(createdDate)}</span>
        <span className="text-muted-foreground/70">at</span>
        <Clock className="h-3 w-3" />
        <span>{formatTime(createdDate)}</span>
      </div>
      
      {isEdited && (
        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400" title='Time course was last edited'>
          <Clock className="h-3 w-3" />
          <span>Edited {formatDate(updatedDate)} at {formatTime(updatedDate)}</span>
        </div>
      )}
    </div>
  );
};
