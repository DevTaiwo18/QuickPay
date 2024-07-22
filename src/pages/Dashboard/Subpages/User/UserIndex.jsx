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
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setError('All fields are required');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setError('New passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await createNewPassword(user._id, newPassword);
      setMessage('Password updated successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (err) {
      setError('Failed to update password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-2 md:p-8 bg-gray-100 min-h-screen">
      <Helmet>
        <title>QuickPay - My Account</title>
      </Helmet>
      <h1 className="text-2xl md:text-3xl font-semibold md:font-bold mb-6 text-gray-800">Profile Settings</h1>

      {/* Password Management Form */}
      <form onSubmit={handlePasswordChange} className="bg-white shadow-md md:shadow-lg rounded-lg p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">Change Password</h2>

        <div className="mb-4 relative">
          <label htmlFor="current-password" className="block text-sm md:text-base font-medium text-gray-700">Current Password</label>
          <input
            type={showCurrentPassword ? 'text' : 'password'}
            id="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border outline-0 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-0 text-sm md:text-base p-2 md:p-2"
            aria-label="Current Password"
          />
          <button
            type="button"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 mt-6 text-gray-500"
            aria-label={showCurrentPassword ? 'Hide current password' : 'Show current password'}
          >
            {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="mb-4 relative">
          <label htmlFor="new-password" className="block text-sm md:text-base font-medium text-gray-700">New Password</label>
          <input
            type={showNewPassword ? 'text' : 'password'}
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 outline-none focus:ring-0 text-sm md:text-base p-2 md:p-2"
            aria-label="New Password"
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="mt-6 absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
            aria-label={showNewPassword ? 'Hide new password' : 'Show new password'}
          >
            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="mb-4 relative">
          <label htmlFor="confirm-new-password" className="block text-sm md:text-base font-medium text-gray-700">Confirm New Password</label>
          <input
            type={showConfirmNewPassword ? 'text' : 'password'}
            id="confirm-new-password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 outline-none focus:ring-0 text-sm md:text-base p-2 md:p-2"
            aria-label="Confirm New Password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
            className="mt-6 absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
            aria-label={showConfirmNewPassword ? 'Hide confirmation password' : 'Show confirmation password'}
          >
            {showConfirmNewPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="mt-2 text-xs md:text-sm text-gray-600">
          <p>Password must be at least 6 characters long</p>
        </div>

        {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

        <div className="mt-6">
          <button
            type="submit"
            className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm md:text-base font-medium rounded-md text-white ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </div>
      </form>

      {/* Help and Support */}
      <div className="mt-6 bg-white shadow-md md:shadow-lg rounded-lg p-4 md:p-6">
        <h2 className="text-sm md:text-lg font-semibold mb-4 text-gray-800">Need Help?</h2>
        <p className="text-xs md:text-base text-gray-600">If you encounter issues, visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a> or <a href="/contact" className="text-blue-600 hover:underline">Contact Support</a>.</p>
      </div>
    </div>
  );
};

export default UserIndex;
