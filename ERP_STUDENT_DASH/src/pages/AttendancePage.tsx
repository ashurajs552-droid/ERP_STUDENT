import React, { useState } from 'react';
import { Calendar, CheckCircle, XCircle, Clock, TrendingUp } from 'lucide-react';
import { format } from 'date-fns';

const AttendancePage: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('all');

  const attendanceRecords = [
    { id: '1', courseCode: 'CS101', courseName: 'Data Structures', date: new Date('2024-01-15'), status: 'present' },
    { id: '2', courseCode: 'CS102', courseName: 'Algorithms', date: new Date('2024-01-15'), status: 'present' },
    { id: '3', courseCode: 'CS103', courseName: 'Database Systems', date: new Date('2024-01-16'), status: 'absent' },
    { id: '4', courseCode: 'CS101', courseName: 'Data Structures', date: new Date('2024-01-17'), status: 'present' },
    { id: '5', courseCode: 'CS104', courseName: 'Web Development', date: new Date('2024-01-17'), status: 'late' },
    { id: '6', courseCode: 'CS102', courseName: 'Algorithms', date: new Date('2024-01-18'), status: 'present' },
    { id: '7', courseCode: 'CS103', courseName: 'Database Systems', date: new Date('2024-01-18'), status: 'present' },
    { id: '8', courseCode: 'CS101', courseName: 'Data Structures', date: new Date('2024-01-19'), status: 'present' },
  ];

  const courses = ['all', 'CS101', 'CS102', 'CS103', 'CS104'];

  const filteredRecords = selectedCourse === 'all' 
    ? attendanceRecords 
    : attendanceRecords.filter(r => r.courseCode === selectedCourse);

  const totalClasses = attendanceRecords.length;
  const presentClasses = attendanceRecords.filter(r => r.status === 'present').length;
  const absentClasses = attendanceRecords.filter(r => r.status === 'absent').length;
  const lateClasses = attendanceRecords.filter(r => r.status === 'late').length;
  const attendancePercentage = ((presentClasses / totalClasses) * 100).toFixed(1);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="h-5 w-5 text-success-600" />;
      case 'absent':
        return <XCircle className="h-5 w-5 text-danger-600" />;
      case 'late':
        return <Clock className="h-5 w-5 text-warning-600" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'present':
        return 'badge-success';
      case 'absent':
        return 'badge-danger';
      case 'late':
        return 'badge-warning';
      default:
        return 'badge-info';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Attendance</h1>
        <p className="text-gray-600 mt-1">Track your class attendance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Overall Attendance</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{attendancePercentage}%</p>
              <p className="text-sm text-success-600 mt-1 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                Good Standing
              </p>
            </div>
            <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
              <Calendar className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Present</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{presentClasses}</p>
              <p className="text-sm text-gray-600 mt-1">Classes attended</p>
            </div>
            <div className="h-12 w-12 bg-success-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-success-600" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Absent</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{absentClasses}</p>
              <p className="text-sm text-gray-600 mt-1">Classes missed</p>
            </div>
            <div className="h-12 w-12 bg-danger-100 rounded-full flex items-center justify-center">
              <XCircle className="h-6 w-6 text-danger-600" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Late</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{lateClasses}</p>
              <p className="text-sm text-gray-600 mt-1">Arrived late</p>
            </div>
            <div className="h-12 w-12 bg-warning-100 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-warning-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="card p-4">
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-700">Filter by Course:</label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="input max-w-xs"
          >
            <option value="all">All Courses</option>
            {courses.filter(c => c !== 'all').map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Attendance Records */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Attendance Records</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Course Code</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Course Name</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record) => (
                <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-sm text-gray-900">
                    {format(record.date, 'MMM dd, yyyy')}
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{record.courseCode}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{record.courseName}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      {getStatusIcon(record.status)}
                      <span className={`badge ${getStatusBadge(record.status)} capitalize`}>
                        {record.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attendance Alert */}
      {parseFloat(attendancePercentage) < 75 && (
        <div className="card p-6 bg-warning-50 border-warning-200">
          <div className="flex items-start space-x-3">
            <XCircle className="h-6 w-6 text-warning-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-warning-900">Attendance Warning</h3>
              <p className="text-sm text-warning-700 mt-1">
                Your attendance is below the required 75%. Please ensure regular attendance to avoid academic penalties.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendancePage;
