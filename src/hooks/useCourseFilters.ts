import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { PublishedFilter } from '@/types/course';

interface CourseFilters {
  search: string;
  publishedFilter: PublishedFilter;
}

const DEFAULT_FILTERS: CourseFilters = {
  search: '',
  publishedFilter: 'all',
};

const DEBOUNCE_DELAY = 300;

export const useCourseFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<CourseFilters>(() => ({
    search: searchParams.get('search') || '',
    publishedFilter: (searchParams.get('published') as PublishedFilter) || 'all',
  }));
  const [debouncedSearch, setDebouncedSearch] = useState(filters.search);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (filters.search.trim()) {
      params.set('search', filters.search.trim());
    }
    
    if (filters.publishedFilter !== 'all') {
      params.set('published', filters.publishedFilter);
    }
    
    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  // Debounced search effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(filters.search.trim());
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  }, [filters.search]);

  // Sync with URL changes (browser back/forward)
  useEffect(() => {
    const urlSearch = searchParams.get('search') || '';
    const urlPublished = (searchParams.get('published') as PublishedFilter) || 'all';
    
    setFilters({
      search: urlSearch,
      publishedFilter: urlPublished,
    });
  }, [searchParams]);

  const updateSearch = (search: string) => {
    setFilters(prev => ({ ...prev, search }));
  };

  const updatePublishedFilter = (publishedFilter: PublishedFilter) => {
    setFilters(prev => ({ ...prev, publishedFilter }));
  };

  const clearFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  const hasActiveFilters = filters.search.trim() !== '' || filters.publishedFilter !== 'all';

  return {
    filters,
    debouncedSearch,
    updateSearch,
    updatePublishedFilter,
    clearFilters,
    hasActiveFilters,
  };
};
