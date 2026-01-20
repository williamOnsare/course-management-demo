import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { PublishedFilter } from '@/types/course';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  publishedFilter: PublishedFilter;
  onPublishedFilterChange: (value: PublishedFilter) => void;
}

export const FilterBar = ({
  searchQuery,
  onSearchChange,
  publishedFilter,
  onPublishedFilterChange,
}: FilterBarProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search courses by title..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>
      <Select
        value={publishedFilter}
        onValueChange={(value) => onPublishedFilterChange(value as PublishedFilter)}
      >
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Courses</SelectItem>
          <SelectItem value="published">Published</SelectItem>
          <SelectItem value="unpublished">Unpublished</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
