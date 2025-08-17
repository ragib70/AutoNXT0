'use client';

import { useState } from 'react';
import { XIcon, CheckCircleIcon } from '../icons/index';

const RegistrationModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [registrationResult, setRegistrationResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      
      console.log('Submitting registration:', data);

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Registration failed');
      }

      console.log('Registration successful:', result);
      setRegistrationResult(result);
      
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setRegistrationResult(null);
    setError(null);
    setIsLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl shadow-blue-500/20 p-8 w-full max-w-md m-4 relative animate-fade-in-up">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
          <XIcon className="w-6 h-6" />
        </button>
        
        {registrationResult ? (
          // Success Card View
          <div className="text-center">
            <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4"/>
            <h2 className="text-3xl font-bold text-white mb-2">Registration Successful!</h2>
            <p className="text-gray-400 mb-6">
              Thank you, <span className="font-bold text-white">{registrationResult.data.name}</span>. 
              Your spot is confirmed.
            </p>
            <div className="bg-gray-800 rounded-lg p-4 text-left space-y-2 border border-gray-700 mb-4">
                <p className="text-sm text-gray-400">Booking ID:</p>
                <p className="font-mono text-lg text-blue-400">{registrationResult.bookingId}</p>
                <p className="text-sm text-gray-400 pt-2">Notification status:</p>
                <p className="font-medium text-green-400">
                  {registrationResult.messageType === 'Failed (will contact manually)' 
                    ? 'Registration confirmed - We\'ll contact you soon!' 
                    : `Sent via ${registrationResult.messageType}`
                  }
                </p>
                <p className="text-sm text-gray-400 pt-2">Phone:</p>
                <p className="font-medium text-white">{registrationResult.data.phone}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3 mb-6">
              <p className="text-xs text-gray-500 mb-1">
                {registrationResult.messageType === 'Failed (will contact manually)' 
                  ? 'Confirmation message:' 
                  : 'Message sent:'
                }
              </p>
              <p className="text-sm text-gray-300 italic">
                {registrationResult.messageType === 'Failed (will contact manually)' 
                  ? `"Thank you for registering! Your booking ID is ${registrationResult.bookingId}. We'll send you event details shortly via email or phone."` 
                  : `"Welcome to AutoNXT, ${registrationResult.data.name}! You're all set for the event, Aug 18 -20. Your Booking ID: ${registrationResult.bookingId}. Get ready for an amazing expo!"`
                }
              </p>
            </div>
            <button 
              onClick={handleClose} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105"
            >
                Done
            </button>
          </div>
        ) : (
          // Registration Form View
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Visitor Registration</h2>
            <p className="text-gray-400 mb-6">Secure your spot at the expo and get instant confirmation.</p>
            
            {error && (
              <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-lg">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  disabled={isLoading}
                  className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50" 
                  placeholder="e.g., John Doe" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  disabled={isLoading}
                  className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50" 
                  placeholder="you@example.com" 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number (with country code)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required
                  disabled={isLoading}
                  className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50" 
                  placeholder="+91 9876543210 or 9876543210" 
                />
              </div>
              <div>
                <label htmlFor="visitorType" className="block text-sm font-medium text-gray-300 mb-1">I am a...</label>
                <select 
                  id="visitorType" 
                  name="visitorType" 
                  disabled={isLoading}
                  className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none disabled:opacity-50"
                >
                  <option>General Visitor</option>
                  <option>Press / Media</option>
                  <option>Exhibitor Staff</option>
                  <option>Student</option>
                </select>
              </div>
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20 disabled:transform-none disabled:shadow-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Registering...</span>
                  </div>
                ) : (
                  'Complete Registration'
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
