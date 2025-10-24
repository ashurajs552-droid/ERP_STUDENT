export interface Student {
  _id: string;
  studentId: string;
  firstName: string;
  lastName: string;
  email: string;
  program: string;
  semester: number;
  cgpa?: number;
  enrollmentDate?: Date;
  status: 'active' | 'inactive' | 'graduated';
}

export interface Grade {
  _id: string;
  studentId: string;
  courseCode: string;
  courseName: string;
  credits: number;
  grade: string;
  gradePoint: number;
  semester: string;
  examType: 'midterm' | 'final' | 'assignment' | 'quiz';
}

export interface Attendance {
  _id: string;
  studentId: string;
  courseCode: string;
  courseName: string;
  date: Date;
  status: 'present' | 'absent' | 'late';
  markedBy: string;
}

export interface Fee {
  _id: string;
  studentId: string;
  feeType: string;
  amount: number;
  amountPaid: number;
  dueDate: Date;
  status: 'paid' | 'pending' | 'overdue';
  paymentDate?: Date;
}

export interface Course {
  _id: string;
  courseCode: string;
  courseName: string;
  credits: number;
  instructor: string;
  semester: string;
  schedule: {
    day: string;
    startTime: string;
    endTime: string;
    room: string;
  }[];
}

export interface DashboardStats {
  student: Student;
  grades: Grade[];
  attendance: {
    total: number;
    present: number;
    percentage: number;
  };
  fees: {
    total: number;
    paid: number;
    pending: number;
  };
}
