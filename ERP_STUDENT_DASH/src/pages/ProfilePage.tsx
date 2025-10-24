import React from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-600 mt-1">Manage your personal information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card p-6 text-center">
          <div className="h-24 w-24 rounded-full bg-primary-600 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
            {user?.profile.firstName[0]}{user?.profile.lastName[0]}
          </div>
          <h2 className="text-xl font-bold text-gray-900">{user?.profile.firstName} {user?.profile.lastName}</h2>
          <p className="text-gray-600 mt-1">{user?.studentId}</p>
          <button className="btn btn-primary w-full mt-4">Edit Profile</button>
        </div>

        <div className="lg:col-span-2 card p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-gray-500 mt-1" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium text-gray-900">{user?.email}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-gray-500 mt-1" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium text-gray-900">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-gray-500 mt-1" />
              <div>
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-medium text-gray-900">123 Main St, City</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Calendar className="h-5 w-5 text-gray-500 mt-1" />
              <div>
                <p className="text-sm text-gray-600">Date of Birth</p>
                <p className="font-medium text-gray-900">January 1, 2000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Academic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <Award className="h-5 w-5 text-gray-500 mt-1" />
            <div>
              <p className="text-sm text-gray-600">Program</p>
              <p className="font-medium text-gray-900">Computer Science</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Calendar className="h-5 w-5 text-gray-500 mt-1" />
            <div>
              <p className="text-sm text-gray-600">Current Semester</p>
              <p className="font-medium text-gray-900">6th Semester</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Award className="h-5 w-5 text-gray-500 mt-1" />
            <div>
              <p className="text-sm text-gray-600">CGPA</p>
              <p className="font-medium text-gray-900">3.45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
