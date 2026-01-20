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
    <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-md p-6 mb-6 border border-gray-100">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <label
            htmlFor="search"
            className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2"
          >
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 11a1 1 0 011 1h1a1 1 0 011 1v4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-4z"
              />
            </svg>
            Search Courses
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white shadow-sm"
              placeholder="Search by course title..."
            />
            {searchValue && (
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 11a1 1 0 011 1h1a1 1 0 011 1v4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-4z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className="lg:w-64">
          <label
            htmlFor="filter"
            className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2"
          >
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V4z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h5l-1 1v4M7 4v4l1-1m-1-1H4a1 1 0 00-1 1v4a1 1 0 001 1h5z"
              />
            </svg>
            Filter Status
          </label>
          <select
            id="filter"
            value={filterValue}
            onChange={(e) =>
              onFilterChange(e.target.value as "all" | "published" | "draft")
            }
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 bg-white shadow-sm appearance-none cursor-pointer"
          >
            <option value="all" className="text-gray-700">
              📚 All Courses
            </option>
            <option value="published" className="text-green-700">
              ✅ Published Only
            </option>
            <option value="draft" className="text-amber-700">
              📝 Drafts Only
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
