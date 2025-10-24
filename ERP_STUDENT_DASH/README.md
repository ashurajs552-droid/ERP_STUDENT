# Student ERP Dashboard

A modern, feature-rich Student ERP (Enterprise Resource Planning) Dashboard built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**. This application provides students with a comprehensive platform to manage their academic information, track attendance, view grades, manage fees, and access course materials.

## ⚡ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **HTTP Client**: Axios
- **Deployment**: Vercel-ready

## 🚀 Features

### 1. **Dashboard Overview**
- Real-time CGPA display with performance indicators
- Attendance percentage tracking
- Pending fees overview
- Current semester courses count
- Interactive charts for grade distribution
- Attendance visualization (Pie chart)
- Recent grades summary table
- Quick action buttons for common tasks

### 2. **Grades Management**
- Comprehensive grade report by semester
- Current CGPA and Semester GPA calculation
- Total credits tracking
- Detailed grade table with:
  - Course code and name
  - Credits assigned
  - Grade received (A, A-, B+, etc.)
  - Grade points earned
- Semester filtering
- Grade scale reference chart
- Download transcript functionality

### 3. **Attendance Tracking**
- Overall attendance percentage
- Present/Absent/Late statistics
- Course-wise attendance filtering
- Detailed attendance records with:
  - Date of class
  - Course information
  - Status indicators (color-coded)
- Attendance warnings for below 75%
- Visual status icons

### 4. **Fee Management**
- Total fees overview
- Paid amount tracking
- Pending fees display
- Payment progress bar
- Detailed fee breakdown:
  - Tuition fees
  - Library fees
  - Lab fees
  - Sports fees
  - Other institutional fees
- Payment status indicators
- Due date tracking
- Multiple payment methods:
  - Credit/Debit Card
  - Net Banking
  - UPI Payment
- Receipt download functionality

### 5. **Courses**
- Current semester courses
- Course details including:
  - Course code and name
  - Credits
  - Instructor information
  - Class schedule (day, time, room)
  - Course description
- Total credits calculation
- Access to course materials
- Detailed schedule view

### 6. **Class Schedule**
- Weekly timetable view
- Day-wise class organization
- Time slots for each class
- Room/location information
- Instructor details
- Color-coded schedule cards

### 7. **Student Profile**
- Personal information management
- Profile picture placeholder
- Contact details:
  - Email address
  - Phone number
  - Physical address
  - Date of birth
- Academic information:
  - Program/Major
  - Current semester
  - CGPA
- Profile editing capability

### 8. **Authentication**
- Secure login system
- JWT token-based authentication
- Protected routes
- Session management
- Demo credentials provided

## 🎨 UI/UX Features

### Design Elements
- **Modern Card-Based Layout**: Clean, organized content presentation
- **Color-Coded Status Indicators**:
  - Success (Green): Paid fees, present attendance, good grades
  - Warning (Yellow): Pending fees, approaching deadlines
  - Danger (Red): Overdue fees, absent status, low attendance
  - Info (Blue): General information, course details

- **Responsive Grid System**: Adapts to all screen sizes
- **Interactive Charts**: Visual data representation using Recharts
- **Smooth Transitions**: Hover effects and animations
- **Icon Integration**: Lucide React icons for better UX

### Navigation
- **Collapsible Sidebar**: 
  - Full width with labels
  - Collapsed icon-only mode
  - Active route highlighting
- **Top Header**:
  - Search functionality
  - Notifications bell
  - User profile display
  - Responsive mobile menu

### Color Scheme
- Primary: Blue (#3b82f6)
- Success: Green (#22c55e)
- Warning: Amber (#f59e0b)
- Danger: Red (#ef4444)
- Background: Light gray (#f9fafb)
- Text: Dark gray (#111827)

## 📁 Project Structure

```
ERP_STUDENT_DASH/
├── public/                          # Static assets
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (dashboard)/           # Route group for protected routes
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx      # Dashboard page
│   │   │   ├── grades/
│   │   │   │   └── page.tsx      # Grades page
│   │   │   ├── attendance/
│   │   │   │   └── page.tsx      # Attendance page
│   │   │   ├── fees/
│   │   │   │   └── page.tsx      # Fees page
│   │   │   ├── courses/
│   │   │   │   └── page.tsx      # Courses page
│   │   │   ├── schedule/
│   │   │   │   └── page.tsx      # Schedule page
│   │   │   ├── profile/
│   │   │   │   └── page.tsx      # Profile page
│   │   │   └── layout.tsx         # Protected layout with auth
│   │   ├── login/
│   │   │   └── page.tsx           # Login page
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Home page (redirects)
│   │   └── globals.css            # Global styles with Tailwind
│   │
│   ├── components/                 # Reusable components
│   │   ├── auth/
│   │   │   └── ProtectedRoute.tsx # Route protection (legacy)
│   │   └── layout/
│   │       ├── DashboardLayout.tsx # Main layout wrapper
│   │       ├── Header.tsx          # Top navigation bar
│   │       └── Sidebar.tsx         # Side navigation menu
│   │
│   ├── context/                   # React Context
│   │   └── AuthContext.tsx       # Authentication state management
│   │
│   ├── pages/                     # Page component logic
│   │   ├── Dashboard.tsx         # Dashboard business logic
│   │   ├── GradesPage.tsx        # Grades logic
│   │   ├── AttendancePage.tsx    # Attendance logic
│   │   ├── FeesPage.tsx          # Fees logic
│   │   ├── CoursesPage.tsx       # Courses logic
│   │   ├── SchedulePage.tsx      # Schedule logic
│   │   └── ProfilePage.tsx       # Profile logic
│   │
│   ├── types/                     # TypeScript definitions
│   │   └── index.ts              # Type interfaces
│   │
│   └── utils/                     # Utility functions
│       └── cn.ts                 # Class name utility
│
├── .env.local.example            # Example environment variables
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore rules
├── DEPLOYMENT.md                 # Deployment guide
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── vercel.json                   # Vercel deployment config
└── README.md                     # Project documentation
```

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 14**: React framework with App Router
- **React 18**: Modern UI library with hooks
- **TypeScript**: Type-safe development

### Routing & State
- **Next.js App Router**: File-based routing with layouts
- **Next.js Navigation**: useRouter, usePathname hooks
- **Context API**: Global state management (client-side)

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **Recharts**: Chart visualization library

### Utilities
- **Axios**: HTTP client for API requests
- **date-fns**: Date formatting and manipulation
- **clsx**: Conditional className utility
- **tailwind-merge**: Merge Tailwind classes intelligently

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Backend API running (see backend setup)

### Installation

1. **Navigate to project directory**
   ```bash
   cd ERP_STUDENT_DASH
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` and set your backend API URL:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

### Demo Credentials
```
Email: student@test.com
Password: password123
```

## 📦 Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ashurajs552-droid/ERP_STUDENT)

**Quick Deploy:**
1. Click the "Deploy with Vercel" button above
2. Set environment variable: `NEXT_PUBLIC_API_URL`
3. Deploy!

**Manual Deploy:**
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Detailed deployment guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)

### Environment Variables for Production

When deploying to Vercel, set these environment variables in your project settings:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `https://your-api.herokuapp.com` |

**Important**: The `NEXT_PUBLIC_` prefix makes the variable accessible in the browser.

## 🔌 Backend Integration

The dashboard is designed to work with the Student ERP Backend API. Configure the backend URL using environment variables:

**Development** (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Production** (Vercel Environment Variables):
```env
NEXT_PUBLIC_API_URL=https://your-backend-api.herokuapp.com
```

**API Proxy Configuration** (`next.config.js`):
```javascript
async rewrites() {
  return [
    {
      source: '/api/:path*',
      destination: process.env.NEXT_PUBLIC_API_URL 
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`
        : 'http://localhost:5000/api/:path*',
    },
  ];
}
```

### API Endpoints Used

- `POST /api/auth/login` - User authentication
- `GET /api/auth/me` - Get current user
- `GET /api/students/:id/dashboard` - Dashboard statistics
- `GET /api/grades/student/:studentId` - Student grades
- `GET /api/attendance` - Attendance records
- `GET /api/fees` - Fee information

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Desktop** (1920px and above)
- **Laptop** (1024px - 1919px)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🎯 Key Features Breakdown

### Dashboard Page
- **4 Stat Cards**: CGPA, Attendance, Pending Fees, Courses
- **2 Charts**: Grade Distribution (Bar), Attendance Overview (Pie)
- **Recent Grades Table**: Last 5 grade entries
- **Quick Actions**: 4 action buttons for common tasks

### Grades Page
- **3 Stat Cards**: Current CGPA, Semester GPA, Total Credits
- **Semester Filter**: Dropdown to filter by semester
- **Grades Table**: Complete grade details with calculations
- **Grade Scale**: Reference chart for grade point system

### Attendance Page
- **4 Stat Cards**: Overall %, Present, Absent, Late
- **Course Filter**: Filter attendance by course
- **Attendance Records**: Detailed table with status icons
- **Warning Alert**: Shows when attendance < 75%

### Fees Page
- **3 Stat Cards**: Total Fees, Paid Amount, Pending Fees
- **Progress Bar**: Visual payment progress
- **Semester Filter**: Filter fees by semester
- **Fee Details Table**: Complete breakdown with actions
- **Payment Methods**: 3 payment option cards

### Courses Page
- **3 Stat Cards**: Total Courses, Total Credits, Current Semester
- **Course Cards**: Grid layout with detailed information
- **Schedule Display**: Day/time/room for each course
- **Action Buttons**: View details, access materials

### Schedule Page
- **Weekly View**: 5-day schedule grid (Monday-Friday)
- **Time Slots**: Clear time display for each class
- **Room Information**: Location details
- **Color-Coded Cards**: Visual distinction between classes

### Profile Page
- **Profile Card**: Avatar, name, student ID
- **Personal Info**: 4 contact fields
- **Academic Info**: 3 academic details
- **Edit Capability**: Profile editing button

## 🔐 Authentication Flow

1. User enters credentials on login page
2. Frontend sends POST request to `/api/auth/login`
3. Backend validates and returns JWT token
4. Token stored in localStorage
5. Token added to Axios headers
6. Protected routes check authentication
7. Redirect to dashboard if authenticated

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: { ... },
      success: { ... },
      warning: { ... },
      danger: { ... },
    },
  },
}
```

### Components
All components are modular and can be easily customized in the `src/components` directory.

## 📄 License

This project is open source and available for educational purposes.

## 👥 Support

For issues or questions, please refer to the backend documentation or contact support.

## 🚧 Future Enhancements

- Assignment submission module
- Online exam portal
- Library book management
- Hostel room allocation
- Event calendar
- Discussion forums
- Mobile app version
- Push notifications
- PDF generation for reports
- Export data functionality
