import React from 'react';
import { BookOpen, User, Calendar, Clock } from 'lucide-react';

const CoursesPage: React.FC = () => {
  const courses = [
    {
      id: '1',
      courseCode: 'CS101',
      courseName: 'Data Structures and Algorithms',
      credits: 3,
      instructor: 'Dr. John Smith',
      schedule: [
        { day: 'Monday', startTime: '09:00 AM', endTime: '10:30 AM', room: 'Room 101' },
        { day: 'Wednesday', startTime: '09:00 AM', endTime: '10:30 AM', room: 'Room 101' },
      ],
      description: 'Introduction to fundamental data structures and algorithms',
    },
    {
      id: '2',
      courseCode: 'CS102',
      courseName: 'Database Management Systems',
      credits: 4,
      instructor: 'Prof. Sarah Johnson',
      schedule: [
        { day: 'Tuesday', startTime: '11:00 AM', endTime: '12:30 PM', room: 'Lab 202' },
        { day: 'Thursday', startTime: '11:00 AM', endTime: '12:30 PM', room: 'Lab 202' },
      ],
      description: 'Comprehensive study of database design and implementation',
    },
    {
      id: '3',
      courseCode: 'CS103',
      courseName: 'Web Development',
      credits: 3,
      instructor: 'Dr. Michael Brown',
      schedule: [
        { day: 'Monday', startTime: '02:00 PM', endTime: '03:30 PM', room: 'Room 305' },
        { day: 'Friday', startTime: '02:00 PM', endTime: '03:30 PM', room: 'Lab 305' },
      ],
      description: 'Modern web development technologies and frameworks',
    },
    {
      id: '4',
      courseCode: 'CS104',
      courseName: 'Operating Systems',
      credits: 4,
      instructor: 'Prof. Emily Davis',
      schedule: [
        { day: 'Wednesday', startTime: '03:30 PM', endTime: '05:00 PM', room: 'Room 201' },
        { day: 'Friday', startTime: '10:00 AM', endTime: '11:30 AM', room: 'Room 201' },
      ],
      description: 'Principles and implementation of operating systems',
    },
  ];

  const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
        <p className="text-gray-600 mt-1">Current semester courses and details</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Courses</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{courses.length}</p>
            </div>
            <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Credits</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{totalCredits}</p>
            </div>
            <div className="h-12 w-12 bg-success-100 rounded-full flex items-center justify-center">
              <Calendar className="h-6 w-6 text-success-600" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Semester</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">6th</p>
            </div>
            <div className="h-12 w-12 bg-warning-100 rounded-full flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-warning-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="badge badge-info">{course.courseCode}</span>
                  <span className="badge badge-success">{course.credits} Credits</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">{course.courseName}</h3>
                <p className="text-sm text-gray-600 mt-1">{course.description}</p>
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-center space-x-2 py-3 border-t border-gray-100">
              <User className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700">{course.instructor}</span>
            </div>

            {/* Schedule */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                <Calendar className="h-4 w-4" />
                <span>Schedule</span>
              </div>
              {course.schedule.map((schedule, index) => (
                <div key={index} className="ml-6 flex items-center justify-between text-sm text-gray-600 py-2 border-b border-gray-100 last:border-0">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-3 w-3" />
                    <span className="font-medium">{schedule.day}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{schedule.startTime} - {schedule.endTime}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-primary-600">{schedule.room}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 btn btn-primary">View Details</button>
              <button className="flex-1 btn btn-secondary">Course Materials</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
