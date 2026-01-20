interface CourseFiltersProps {
  onSearchChange: (search: string) => void;
  onFilterChange: (filter: "all" | "published" | "draft") => void;
  searchValue: string;
  filterValue: "all" | "published" | "draft";
}

export const CourseFilters = ({
  onSearchChange,
  onFilterChange,
  searchValue,
  filterValue,
}: CourseFiltersProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Search by Title
          </label>
          <input
            type="text"
            id="search"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search courses..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:w-48">
          <label
            htmlFor="filter"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Filter by Status
          </label>
          <select
            id="filter"
            value={filterValue}
            onChange={(e) =>
              onFilterChange(e.target.value as "all" | "published" | "draft")
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Courses</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>
    </div>
  );
};
