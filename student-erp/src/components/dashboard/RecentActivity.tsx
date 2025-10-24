import { ClockIcon, CheckCircleIcon, XCircleIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const activity = [
  {
    id: 1,
    type: 'assignment',
    title: 'Math Assignment #3',
    status: 'submitted',
    date: '2023-06-15T10:00:00',
    user: 'John Doe',
  },
  {
    id: 2,
    type: 'exam',
    title: 'Physics Midterm',
    status: 'graded',
    date: '2023-06-14T14:30:00',
    user: 'Jane Smith',
  },
  {
    id: 3,
    type: 'attendance',
    title: 'Chemistry Lab',
    status: 'absent',
    date: '2023-06-13T09:15:00',
    user: 'Alex Johnson',
  },
  {
    id: 4,
    type: 'enrollment',
    title: 'Computer Science 101',
    status: 'enrolled',
    date: '2023-06-12T16:45:00',
    user: 'Sarah Williams',
  },
];

const statusIcons = {
  submitted: CheckCircleIcon,
  graded: AcademicCapIcon,
  absent: XCircleIcon,
  enrolled: CheckCircleIcon,
} as const;

const statusColors = {
  submitted: 'text-yellow-500',
  graded: 'text-green-500',
  absent: 'text-red-500',
  enrolled: 'text-blue-500',
} as const;

const statusText = {
  submitted: 'Submitted',
  graded: 'Graded',
  absent: 'Absent',
  enrolled: 'Enrolled',
} as const;

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export default function RecentActivity() {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Activity</h3>
      </div>
      <div className="border-t border-gray-200">
        <ul role="list" className="divide-y divide-gray-200">
          {activity.map((item) => {
            const StatusIcon = statusIcons[item.status as keyof typeof statusIcons];
            const statusColor = statusColors[item.status as keyof typeof statusColors];
            const statusTextValue = statusText[item.status as keyof typeof statusText];
            
            return (
              <li key={item.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 ${statusColor}`}>
                      <StatusIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.user} • {statusTextValue}
                      </p>
                    </div>
                  </div>
                  <div className="ml-2 flex flex-shrink-0">
                    <p className="inline-flex items-center text-sm text-gray-500">
                      <ClockIcon className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      <span>{formatDate(item.date)}</span>
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-gray-50 px-4 py-4 sm:px-6">
        <div className="text-sm">
          <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
            View all activity<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
