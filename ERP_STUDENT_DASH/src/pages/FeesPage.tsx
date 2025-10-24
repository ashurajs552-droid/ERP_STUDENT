import React, { useState } from 'react';
import { DollarSign, Download, CreditCard, CheckCircle, Clock } from 'lucide-react';
import { format } from 'date-fns';

const FeesPage: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState('Fall 2024');

  const feeRecords = [
    { id: '1', feeType: 'Tuition Fee', amount: 25000, amountPaid: 25000, dueDate: new Date('2024-01-15'), status: 'paid', paymentDate: new Date('2024-01-10') },
    { id: '2', feeType: 'Library Fee', amount: 2000, amountPaid: 2000, dueDate: new Date('2024-01-15'), status: 'paid', paymentDate: new Date('2024-01-10') },
    { id: '3', feeType: 'Lab Fee', amount: 5000, amountPaid: 5000, dueDate: new Date('2024-01-15'), status: 'paid', paymentDate: new Date('2024-01-12') },
    { id: '4', feeType: 'Sports Fee', amount: 3000, amountPaid: 3000, dueDate: new Date('2024-01-15'), status: 'paid', paymentDate: new Date('2024-01-14') },
    { id: '5', feeType: 'Semester Fee', amount: 15000, amountPaid: 0, dueDate: new Date('2024-06-30'), status: 'pending' },
  ];

  const semesters = ['Fall 2024', 'Spring 2024', 'Fall 2023', 'Spring 2023'];

  const totalFees = feeRecords.reduce((acc, fee) => acc + fee.amount, 0);
  const paidFees = feeRecords.reduce((acc, fee) => acc + fee.amountPaid, 0);
  const pendingFees = totalFees - paidFees;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return 'badge-success';
      case 'pending':
        return 'badge-warning';
      case 'overdue':
        return 'badge-danger';
      default:
        return 'badge-info';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return <CheckCircle className="h-5 w-5 text-success-600" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-warning-600" />;
      case 'overdue':
        return <Clock className="h-5 w-5 text-danger-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Fee Management</h1>
          <p className="text-gray-600 mt-1">Track and manage your fee payments</p>
        </div>
        <button className="btn btn-primary flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Download Receipt</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Fees</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">₹{totalFees.toLocaleString()}</p>
              <p className="text-sm text-gray-600 mt-1">This semester</p>
            </div>
            <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Paid Amount</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">₹{paidFees.toLocaleString()}</p>
              <p className="text-sm text-success-600 mt-1">
                {((paidFees / totalFees) * 100).toFixed(1)}% completed
              </p>
            </div>
            <div className="h-12 w-12 bg-success-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-success-600" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Pending Fees</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">₹{pendingFees.toLocaleString()}</p>
              <p className="text-sm text-warning-600 mt-1">Due soon</p>
            </div>
            <div className="h-12 w-12 bg-warning-100 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-warning-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Progress */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Progress</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">₹{paidFees.toLocaleString()} paid</span>
            <span className="text-gray-600">₹{totalFees.toLocaleString()} total</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-success-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${(paidFees / totalFees) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="card p-4">
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-700">Filter by Semester:</label>
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

      {/* Fee Records Table */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Fee Details - {selectedSemester}</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Fee Type</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Paid</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Balance</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Due Date</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {feeRecords.map((fee) => (
                <tr key={fee.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{fee.feeType}</td>
                  <td className="py-4 px-4 text-sm text-gray-900 text-right">₹{fee.amount.toLocaleString()}</td>
                  <td className="py-4 px-4 text-sm text-gray-900 text-right">₹{fee.amountPaid.toLocaleString()}</td>
                  <td className="py-4 px-4 text-sm text-gray-900 text-right">
                    ₹{(fee.amount - fee.amountPaid).toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600 text-center">
                    {format(fee.dueDate, 'MMM dd, yyyy')}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      {getStatusIcon(fee.status)}
                      <span className={`badge ${getStatusBadge(fee.status)} capitalize`}>
                        {fee.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    {fee.status === 'pending' ? (
                      <button className="btn btn-primary btn-sm flex items-center space-x-1 mx-auto">
                        <CreditCard className="h-3 w-3" />
                        <span>Pay Now</span>
                      </button>
                    ) : (
                      <button className="btn btn-secondary btn-sm flex items-center space-x-1 mx-auto">
                        <Download className="h-3 w-3" />
                        <span>Receipt</span>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50 font-semibold">
                <td className="py-4 px-4 text-sm text-gray-900">Total</td>
                <td className="py-4 px-4 text-sm text-gray-900 text-right">₹{totalFees.toLocaleString()}</td>
                <td className="py-4 px-4 text-sm text-gray-900 text-right">₹{paidFees.toLocaleString()}</td>
                <td className="py-4 px-4 text-sm text-gray-900 text-right">₹{pendingFees.toLocaleString()}</td>
                <td colSpan={3}></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary-500 cursor-pointer transition-all">
            <CreditCard className="h-8 w-8 text-primary-600 mb-2" />
            <h3 className="font-semibold text-gray-900">Credit/Debit Card</h3>
            <p className="text-sm text-gray-600 mt-1">Pay securely with your card</p>
          </div>
          <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary-500 cursor-pointer transition-all">
            <DollarSign className="h-8 w-8 text-primary-600 mb-2" />
            <h3 className="font-semibold text-gray-900">Net Banking</h3>
            <p className="text-sm text-gray-600 mt-1">Pay via your bank account</p>
          </div>
          <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary-500 cursor-pointer transition-all">
            <CreditCard className="h-8 w-8 text-primary-600 mb-2" />
            <h3 className="font-semibold text-gray-900">UPI Payment</h3>
            <p className="text-sm text-gray-600 mt-1">Quick payment via UPI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesPage;
