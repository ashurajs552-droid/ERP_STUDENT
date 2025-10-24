import React, { useState } from 'react';
import { TrendingUp, Download, Filter } from 'lucide-react';

const GradesPage: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState('Fall 2024');

  const grades = [
    { id: '1', courseCode: 'CS101', courseName: 'Data Structures', credits: 3, grade: 'A', gradePoint: 4.0, semester: 'Fall 2024' },
    { id: '2', courseCode: 'CS102', courseName: 'Algorithms', credits: 3, grade: 'A-', gradePoint: 3.7, semester: 'Fall 2024' },
    { id: '3', courseCode: 'CS103', courseName: 'Database Systems', credits: 4, grade: 'B+', gradePoint: 3.3, semester: 'Fall 2024' },
    { id: '4', courseCode: 'CS104', courseName: 'Web Development', credits: 3, grade: 'A', gradePoint: 4.0, semester: 'Fall 2024' },
    { id: '5', courseCode: 'CS105', courseName: 'Operating Systems', credits: 4, grade: 'A-', gradePoint: 3.7, semester: 'Fall 2024' },
    { id: '6', courseCode: 'CS106', courseName: 'Computer Networks', credits: 3, grade: 'B+', gradePoint: 3.3, semester: 'Fall 2024' },
  ];

  const semesters = ['Fall 2024', 'Spring 2024', 'Fall 2023', 'Spring 2023'];

  const calculateSGPA = () => {
    const totalPoints = grades.reduce((acc, grade) => acc + (grade.gradePoint * grade.credits), 0);
    const totalCredits = grades.reduce((acc, grade) => acc + grade.credits, 0);
    return (totalPoints / totalCredits).toFixed(2);
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'badge-success';
    if (grade.startsWith('B')) return 'badge-info';
    if (grade.startsWith('C')) return 'badge-warning';
    return 'badge-danger';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Grades</h1>
          <p className="text-gray-600 mt-1">View your academic performance</p>
        </div>
        <button className="btn btn-primary flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Download Transcript</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Current CGPA</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">3.45</p>
            </div>
            <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Semester GPA</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{calculateSGPA()}</p>
            </div>
            <div className="h-12 w-12 bg-success-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-success-600" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Credits</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{grades.reduce((acc, g) => acc + g.credits, 0)}</p>
            </div>
            <div className="h-12 w-12 bg-warning-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-warning-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-4">
        <div className="flex items-center space-x-4">
          <Filter className="h-5 w-5 text-gray-600" />
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="input max-w-xs"
          >
            {semesters.map((sem) => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grades Table */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Grade Report - {selectedSemester}</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Course Code</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Course Name</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Credits</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Grade</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Grade Point</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Points Earned</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade) => (
                <tr key={grade.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{grade.courseCode}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{grade.courseName}</td>
                  <td className="py-4 px-4 text-sm text-gray-600 text-center">{grade.credits}</td>
                  <td className="py-4 px-4 text-center">
                    <span className={`badge ${getGradeColor(grade.grade)}`}>{grade.grade}</span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-900 text-center">{grade.gradePoint.toFixed(1)}</td>
                  <td className="py-4 px-4 text-sm text-gray-900 text-center">{(grade.gradePoint * grade.credits).toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50 font-semibold">
                <td colSpan={2} className="py-4 px-4 text-sm text-gray-900">Total</td>
                <td className="py-4 px-4 text-sm text-gray-900 text-center">
                  {grades.reduce((acc, g) => acc + g.credits, 0)}
                </td>
                <td className="py-4 px-4 text-sm text-gray-900 text-center">-</td>
                <td className="py-4 px-4 text-sm text-gray-900 text-center">{calculateSGPA()}</td>
                <td className="py-4 px-4 text-sm text-gray-900 text-center">
                  {grades.reduce((acc, g) => acc + (g.gradePoint * g.credits), 0).toFixed(1)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Grade Scale */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Grading Scale</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {[
            { grade: 'A', points: '4.0', range: '90-100' },
            { grade: 'A-', points: '3.7', range: '85-89' },
            { grade: 'B+', points: '3.3', range: '80-84' },
            { grade: 'B', points: '3.0', range: '75-79' },
            { grade: 'B-', points: '2.7', range: '70-74' },
            { grade: 'C+', points: '2.3', range: '65-69' },
            { grade: 'C', points: '2.0', range: '60-64' },
            { grade: 'F', points: '0.0', range: '<60' },
          ].map((item) => (
            <div key={item.grade} className="text-center p-4 border border-gray-200 rounded-lg">
              <p className="text-lg font-bold text-gray-900">{item.grade}</p>
              <p className="text-sm text-gray-600 mt-1">{item.points}</p>
              <p className="text-xs text-gray-500 mt-1">{item.range}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradesPage;
