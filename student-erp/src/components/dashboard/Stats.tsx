import { AcademicCapIcon, BookOpenIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const stats = [
  { id: 1, name: 'Total Students', value: '2,345', icon: UserGroupIcon, change: '+12%', changeType: 'increase' },
  { id: 2, name: 'Active Courses', value: '48', icon: BookOpenIcon, change: '+4', changeType: 'increase' },
  { id: 3, name: 'Faculty Members', value: '86', icon: AcademicCapIcon, change: '+3', changeType: 'increase' },
  { id: 4, name: 'Average Grade', value: 'A-', icon: ChartBarIcon, change: '-2%', changeType: 'decrease' },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
        >
          <dt>
            <div className="absolute rounded-md bg-primary-500 p-3">
              <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            <p
              className={`ml-2 flex items-baseline text-sm font-semibold ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stat.change}
            </p>
          </dd>
        </div>
      ))}
    </div>
  );
}
