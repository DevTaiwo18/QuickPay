import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useAuthContext } from '../../../../contexts/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const UserIndex = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const { createNewPassword, user } = useAuthContext();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setError('All fields are required');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setError('New passwords do not match');
      return;
    }

    try {
      await createNewPassword(user._id, newPassword);
      setMessage('Password updated successfully');
      setError('');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (err) {
      setError('Failed to update password');
      setMessage('');
    }
  };

  return (
    <div className="p-2 md:p-6">
      <Helmet>
        <title>QuickPay - My Account</title>
      </Helmet>
      <h1 className="text-5" style={{ fontSize: '1.5rem' }}>Profile settings</h1>
      <form onSubmit={handlePasswordChange} className="mt-4">
        <div className="mb-4 relative">
          <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Current Password</label>
          <input
            type={showCurrentPassword ? 'text' : 'password'}
            id="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="mb-4 relative">
          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type={showNewPassword ? 'text' : 'password'}
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="mb-4 relative">
          <label htmlFor="confirm-new-password" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
          <input
            type={showConfirmNewPassword ? 'text' : 'password'}
            id="confirm-new-password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showConfirmNewPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserIndex;
