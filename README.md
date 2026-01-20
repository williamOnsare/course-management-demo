# Course Management App

A React application for managing courses with full CRUD operations, built for the Zeraki technical assessment.

## 🚀 Features

### Core Functionality

- ✅ **Course List (Main Dashboard)**: Card grid layout with comprehensive filtering and search
- ✅ **Create Course**: Form-based course creation with real-time validation
- ✅ **Edit Course**: Update existing course information with pre-populated forms
- ✅ **Delete Course**: Remove courses with confirmation dialog
- ✅ **API Integration**: Full REST API integration with Zeraki Courses API

### Enhanced Features

- ✅ **Real-time Search**: Filter courses by title instantly
- ✅ **Status Filtering**: Filter by All/Published/Unpublished status
- ✅ **Toast Notifications**: Success/error feedback using Sonner
- ✅ **Responsive Design**: Mobile-first approach with TailwindCSS
- ✅ **Form Validation**: Client-side validation with React Hook Form and Zod
- ✅ **Loading States**: Skeleton loaders and proper state management
- ✅ **Error Handling**: Comprehensive error states and retry mechanisms

## 🛠️ Technical Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with shadcn/ui components
- **HTTP Client**: Axios with React Query for state management
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router DOM
- **Notifications**: Sonner toast system
- **API**: Zeraki Courses API (`https://assesmentsapi.zeraki.app/api/courses`)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/                 # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── select.tsx
│   │   ├── switch.tsx
│   │   ├── badge.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── skeleton.tsx
│   │   └── ...
│   ├── courses/            # Course-specific components
│   │   ├── CourseCard.tsx      # Individual course display
│   │   ├── CourseCardSkeleton.tsx  # Loading skeleton
│   │   ├── CourseForm.tsx       # Create/edit form
│   │   ├── FilterBar.tsx        # Search and filter controls
│   │   ├── DeleteCourseDialog.tsx  # Delete confirmation
│   │   ├── EmptyState.tsx       # Empty state display
│   │   └── ErrorState.tsx       # Error state display
│   └── NavLink.tsx          # Navigation component
├── pages/              # Page components
│   ├── CourseList.tsx       # Main dashboard
│   ├── CreateCourse.tsx     # Course creation page
│   ├── EditCourse.tsx       # Course editing page
│   └── NotFound.tsx          # 404 page
├── hooks/              # Custom React hooks
│   ├── useCourses.ts        # Course state management
│   ├── use-toast.ts         # Toast notifications
│   └── use-mobile.tsx        # Mobile detection
├── services/           # API service layer
│   └── courseApi.ts          # CRUD API calls
├── types/              # TypeScript type definitions
│   └── course.ts             # Course interfaces
├── lib/                # Utilities
│   └── utils.ts              # Helper functions
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🚀 Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/williamOnsare/course-management-demo.git
   cd course-management-demo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080/`

## 🧪 Testing the Application

### Manual Testing Steps:

1. **Course List Dashboard**:
   - Verify courses display in card grid layout
   - Test search functionality by typing course titles
   - Test status filter (All/Published/Unpublished)
   - Verify responsive design on different screen sizes

2. **Create Course**:
   - Navigate to create form via "Add New Course" button
   - Test form validation (title min 3 chars, required fields)
   - Submit valid form and verify toast notification
   - Verify redirect back to course list

3. **Edit Course**:
   - Click "Edit" on any course card
   - Verify form pre-populates with existing data
   - Modify fields and save changes
   - Verify updates reflect in course list

4. **Delete Course**:
   - Click "Delete" on any course card
   - Verify confirmation dialog appears
   - Confirm deletion and verify toast notification
   - Verify course removed from list

5. **Error States**:
   - Test network error handling
   - Verify retry functionality
   - Test loading states

## 🎯 Implementation Details

### Course List (Main Dashboard)

- **Layout**: Responsive card grid (1-3 columns based on screen size)
- **Header**: App title with "Add New Course" button
- **Filter Bar**: Real-time search by title and status dropdown (All/Published/Unpublished)
- **Course Cards**: Display title, truncated description, published badge, edit/delete actions
- **States**: Loading skeletons, error messages, empty states

### Create Course Page

- **Form Fields**:
  - Title: Text input, required, minimum 3 characters
  - Description: Textarea, required
  - Published: Toggle switch for status
- **Validation**: Real-time validation with error messages
- **Actions**: Cancel button (returns to list), Submit button (creates course)
- **Feedback**: Success/error toast notifications

### Edit Course Page

- **Pre-population**: Form loads with existing course data
- **Validation**: Same rules as create form
- **Actions**: Cancel button, Save Changes button
- **Error Handling**: Proper loading and error states

### Delete Functionality

- **Confirmation**: Modal dialog before deletion
- **Feedback**: Toast notifications on success/failure
- **UI Updates**: Immediate removal from list after successful deletion

## 🎯 Technical Implementation

### Requirements Met:

- ✅ **React with TypeScript**: Modern React patterns with strict typing
- ✅ **API Integration**: Full CRUD with Zeraki Courses API using Axios
- ✅ **Form Validation**: Title (min 3 chars) and description required using Zod
- ✅ **Error Handling**: Comprehensive error states and user feedback
- ✅ **Loading States**: Skeleton loaders and proper state management
- ✅ **Responsive Design**: Mobile-first approach with TailwindCSS
- ✅ **Component Architecture**: Modular design with shadcn/ui components
- ✅ **State Management**: React Query for server state, React Hook Form for forms

### Code Quality Standards:

- ✅ **TypeScript**: Strict typing throughout the application
- ✅ **Component Structure**: Separation of concerns with dedicated components
- ✅ **Custom Hooks**: Reusable logic encapsulated in custom hooks
- ✅ **Error Boundaries**: Proper error handling and user feedback
- ✅ **Accessibility**: Semantic HTML and ARIA considerations

## 🔮 Potential Improvements

If given more time:

- **Pagination**: For large course lists
- **Advanced Filtering**: By date, category, etc.
- **Bulk Operations**: Select and delete multiple courses
- **Offline Support**: Service worker for offline functionality
- **Unit Tests**: Jest and React Testing Library
- **E2E Tests**: Playwright or Cypress
- **Accessibility**: ARIA labels and keyboard navigation
- **Performance**: React.memo and useMemo optimizations
