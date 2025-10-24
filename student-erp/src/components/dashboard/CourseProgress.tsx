import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BookOpenIcon } from '@heroicons/react/24/outline';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const courses = [
  { name: 'Mathematics', progress: 75, color: 'bg-blue-500' },
  { name: 'Physics', progress: 60, color: 'bg-green-500' },
  { name: 'Chemistry', progress: 45, color: 'bg-yellow-500' },
  { name: 'Biology', progress: 30, color: 'bg-red-500' },
];

export default function CourseProgress() {
  const data = {
    labels: courses.map(course => course.name),
    datasets: [
      {
        data: courses.map(course => course.progress),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(234, 179, 8, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
    cutout: '70%',
  };

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <BookOpenIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <h3 className="text-lg font-medium text-gray-900">Course Progress</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="h-64">
          <Doughnut data={data} options={options} />
        </div>
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900">Progress by Course</h4>
          <ul role="list" className="mt-3 space-y-3">
            {courses.map((course) => (
              <li key={course.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div className={`h-3 w-3 rounded-full ${course.color}`} aria-hidden="true" />
                  <span className="ml-2 text-gray-600">{course.name}</span>
                </div>
                <span className="font-medium text-gray-900">{course.progress}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
