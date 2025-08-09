'use client';

import { useState, useEffect } from 'react';
import { XIcon, CheckCircleIcon } from '../icons/index';

const RegistrationModal = ({ isOpen, onClose }) => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // In a real app, you'd send this data to Supabase
    console.log("Form Submitted:", data);
    setSubmittedData(data);
  };

  // This function resets the modal state before closing
  const handleClose = () => {
    setSubmittedData(null);
    onClose();
  };
  
  // When the modal is closed, we should reset its state
  useEffect(() => {
    if (!isOpen) {
      // Add a small delay to allow the closing animation to finish
      setTimeout(() => {
        setSubmittedData(null);
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl shadow-blue-500/20 p-8 w-full max-w-md m-4 relative animate-fade-in-up">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
          <XIcon className="w-6 h-6" />
        </button>
        
        {submittedData ? (
          // Success Card View
          <div className="text-center">
            <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4"/>
            <h2 className="text-3xl font-bold text-white mb-2">Registration Successful!</h2>
            <p className="text-gray-400 mb-6">Thank you, <span className="font-bold text-white">{submittedData.name}</span>. Your spot is confirmed.</p>
            <div className="bg-gray-800 rounded-lg p-4 text-left space-y-2 border border-gray-700">
                <p className="text-sm text-gray-400">Registration ID:</p>
                <p className="font-mono text-lg text-blue-400">{`AE25-${Math.random().toString(36).substring(2, 10).toUpperCase()}`}</p>
                <p className="text-sm text-gray-400 pt-2">A confirmation has been sent to:</p>
                <p className="font-medium text-white">{submittedData.email}</p>
            </div>
            <button onClick={handleClose} className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105">
                Done
            </button>
          </div>
        ) : (
          // Registration Form View
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Visitor Registration</h2>
            <p className="text-gray-400 mb-6">Secure your spot at the expo.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input type="text" id="name" name="name" required className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="e.g., John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input type="email" id="email" name="email" required className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <label htmlFor="visitorType" className="block text-sm font-medium text-gray-300 mb-1">I am a...</label>
                <select id="visitorType" name="visitorType" className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none">
                  <option>General Visitor</option>
                  <option>Press / Media</option>
                  <option>Exhibitor Staff</option>
                  <option>Student</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20">
                Complete Registration
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
