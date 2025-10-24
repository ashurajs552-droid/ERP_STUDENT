import React, { useEffect, useState } from 'react';
import { GraduationCap, CalendarCheck, DollarSign, TrendingUp, BookOpen, Award } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { DashboardStats } from '../types';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Mock data for demonstration
        const mockStats: DashboardStats = {
          student: {
            _id: '1',
            studentId: user?.studentId || 'STU001',
            firstName: user?.profile.firstName || 'John',
            lastName: user?.profile.lastName || 'Doe',
            email: user?.email || 'john@example.com',
            program: 'Computer Science',
            semester: 6,
            cgpa: 3.45,
            status: 'active',
          },
          grades: [
            { _id: '1', studentId: '1', courseCode: 'CS101', courseName: 'Data Structures', credits: 3, grade: 'A', gradePoint: 4.0, semester: 'Fall 2024', examType: 'final' },
            { _id: '2', studentId: '1', courseCode: 'CS102', courseName: 'Algorithms', credits: 3, grade: 'A-', gradePoint: 3.7, semester: 'Fall 2024', examType: 'final' },
            { _id: '3', studentId: '1', courseCode: 'CS103', courseName: 'Database Systems', credits: 4, grade: 'B+', gradePoint: 3.3, semester: 'Fall 2024', examType: 'final' },
            { _id: '4', studentId: '1', courseCode: 'CS104', courseName: 'Web Development', credits: 3, grade: 'A', gradePoint: 4.0, semester: 'Fall 2024', examType: 'final' },
          ],
          attendance: {
            total: 120,
            present: 108,
            percentage: 90,
          },
          fees: {
            total: 50000,
            paid: 35000,
            pending: 15000,
          },
        };
        setStats(mockStats);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const attendanceData = [
    { name: 'Present', value: stats?.attendance.present || 0, color: '#22c55e' },
    { name: 'Absent', value: (stats?.attendance.total || 0) - (stats?.attendance.present || 0), color: '#ef4444' },
  ];

  const gradeDistribution = stats?.grades.reduce((acc, grade) => {
    acc[grade.grade] = (acc[grade.grade] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const gradeChartData = Object.entries(gradeDistribution || {}).map(([grade, count]) => ({
    grade,
    count,
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back, {user?.profile.firstName}!</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">CGPA</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats?.student.cgpa?.toFixed(2)}</p>
              <p className="text-sm text-success-600 mt-1 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                Excellent
              </p>
            </div>
            <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Attendance</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats?.attendance.percentage}%</p>
              <p className="text-sm text-gray-600 mt-1">
                {stats?.attendance.present}/{stats?.attendance.total} classes
              </p>
            </div>
            <div className="h-12 w-12 bg-success-100 rounded-full flex items-center justify-center">
              <CalendarCheck className="h-6 w-6 text-success-600" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Pending Fees</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">₹{stats?.fees.pending.toLocaleString()}</p>
              <p className="text-sm text-gray-600 mt-1">
                Paid: ₹{stats?.fees.paid.toLocaleString()}
              </p>
            </div>
            <div className="h-12 w-12 bg-warning-100 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-warning-600" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Courses</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats?.grades.length}</p>
              <p className="text-sm text-gray-600 mt-1">This semester</p>
            </div>
            <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grade Distribution */}
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Grade Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={gradeChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="grade" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Attendance Overview */}
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Attendance Overview</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={attendanceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {attendanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Grades */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Grades</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Course Code</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Course Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Credits</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Grade</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Grade Point</th>
              </tr>
            </thead>
            <tbody>
              {stats?.grades.slice(0, 5).map((grade) => (
                <tr key={grade._id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">{grade.courseCode}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{grade.courseName}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{grade.credits}</td>
                  <td className="py-3 px-4">
                    <span className="badge badge-success">{grade.grade}</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">{grade.gradePoint.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all">
            <Award className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">View Grades</p>
          </button>
          <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all">
            <CalendarCheck className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">Mark Attendance</p>
          </button>
          <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all">
            <DollarSign className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">Pay Fees</p>
          </button>
          <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all">
            <BookOpen className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">View Schedule</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
