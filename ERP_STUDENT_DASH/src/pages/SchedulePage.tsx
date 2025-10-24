import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const SchedulePage: React.FC = () => {
  const schedule = [
    { id: '1', day: 'Monday', time: '09:00 AM - 10:30 AM', course: 'Data Structures', room: 'Room 101', instructor: 'Dr. John Smith' },
    { id: '2', day: 'Monday', time: '02:00 PM - 03:30 PM', course: 'Web Development', room: 'Room 305', instructor: 'Dr. Michael Brown' },
    { id: '3', day: 'Tuesday', time: '11:00 AM - 12:30 PM', course: 'Database Systems', room: 'Lab 202', instructor: 'Prof. Sarah Johnson' },
    { id: '4', day: 'Wednesday', time: '09:00 AM - 10:30 AM', course: 'Data Structures', room: 'Room 101', instructor: 'Dr. John Smith' },
    { id: '5', day: 'Wednesday', time: '03:30 PM - 05:00 PM', course: 'Operating Systems', room: 'Room 201', instructor: 'Prof. Emily Davis' },
    { id: '6', day: 'Thursday', time: '11:00 AM - 12:30 PM', course: 'Database Systems', room: 'Lab 202', instructor: 'Prof. Sarah Johnson' },
    { id: '7', day: 'Friday', time: '10:00 AM - 11:30 AM', course: 'Operating Systems', room: 'Room 201', instructor: 'Prof. Emily Davis' },
    { id: '8', day: 'Friday', time: '02:00 PM - 03:30 PM', course: 'Web Development', room: 'Lab 305', instructor: 'Dr. Michael Brown' },
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Class Schedule</h1>
        <p className="text-gray-600 mt-1">Your weekly timetable</p>
      </div>

      <div className="card p-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {days.map((day) => (
            <div key={day} className="space-y-3">
              <h3 className="font-semibold text-gray-900 pb-2 border-b-2 border-primary-600">{day}</h3>
              {schedule
                .filter((item) => item.day === day)
                .map((item) => (
                  <div key={item.id} className="bg-primary-50 border-l-4 border-primary-600 p-3 rounded">
                    <div className="flex items-center space-x-2 text-sm mb-1">
                      <Clock className="h-3 w-3 text-primary-600" />
                      <span className="font-medium text-primary-900">{item.time}</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">{item.course}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-600 mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{item.room}</span>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
