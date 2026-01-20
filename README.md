# Course Management App

A React application for managing courses with full CRUD operations, built for the Zeraki technical assessment.

## 🚀 Features

### Core Functionality (Beginner Level)

- ✅ **Course List**: Display all courses with loading and error states
- ✅ **Create Course**: Add new courses with form validation
- ✅ **Edit Course**: Update existing course information
- ✅ **Delete Course**: Remove courses with confirmation dialog
- ✅ **API Integration**: Full REST API integration with Zeraki Courses API

### Enhanced Features (Intermediate Level)

- ✅ **Search**: Real-time search by course title
- ✅ **Filtering**: Filter by published/draft status
- ✅ **Notifications**: Success/error toast messages
- ✅ **Responsive Design**: Mobile-friendly interface
- ✅ **Form Validation**: Client-side validation with error feedback

## 🛠️ Technical Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **HTTP Client**: Axios
- **API**: Zeraki Courses API (`https://assesmentsapi.zeraki.app/api/courses`)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── CourseCard.tsx     # Individual course display
│   ├── CourseForm.tsx      # Create/edit form
│   ├── CourseFilters.tsx    # Search and filter controls
│   ├── CourseList.tsx      # Main course list
│   └── Notification.tsx     # Toast notifications
├── services/           # API service layer
│   └── courseService.ts     # CRUD API calls
├── hooks/             # Custom React hooks
│   └── useCourses.ts        # Course state management
├── types/            # TypeScript type definitions
│   └── course.ts           # Course interfaces
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
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
   Navigate to `http://localhost:5173`

## 🧪 Testing the Application

### Manual Testing Steps:

1. **View Courses**: Application loads and displays course list
2. **Create Course**: Click "Create New Course", fill form, submit
3. **Edit Course**: Click "Edit" on any course, modify, save
4. **Delete Course**: Click "Delete", confirm removal
5. **Search**: Type in search box to filter courses
6. **Filter**: Use status dropdown to filter published/draft

### API Integration:

- All operations communicate with Zeraki Courses API
- Real-time updates without page refresh
- Proper error handling and user feedback

## 🎯 Assessment Implementation

### Technical Requirements Met:

- ✅ **React with TypeScript**: Modern React patterns with strict typing
- ✅ **API Integration**: Full CRUD with Zeraki Courses API
- ✅ **Form Validation**: Title (min 3 chars) and description required
- ✅ **Error Handling**: Comprehensive error states and user feedback
- ✅ **Loading States**: Proper loading indicators
- ✅ **Responsive Design**: Mobile-first approach

### Assessment Criteria:

- ✅ **Functionality**: All required features implemented
- ✅ **Code Quality**: Clean, maintainable, well-structured
- ✅ **User Experience**: Intuitive interface with feedback
- ✅ **Technical Standards**: Modern React patterns and TypeScript

## 🤔 Challenges & Solutions

### Complex Parts:

1. **State Management**:
   - **Challenge**: Coordinating CRUD operations across components
   - **Solution**: Custom hook with centralized state management

2. **Type Safety**:
   - **Challenge**: Ensuring type consistency across API and UI
   - **Solution**: Strict TypeScript interfaces and validation

### Easy Parts:

1. **UI Components**: TailwindCSS made styling straightforward
2. **Form Handling**: React patterns made form management intuitive
3. **Routing**: Single-page approach simplified navigation

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
