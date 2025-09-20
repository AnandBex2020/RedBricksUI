import React, { useState } from 'react';
import { FiMail, FiLock, FiLogIn,FiUser  } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const LoginForm = () => {
  const { theme, themeClasses } = useTheme(); // get theme and themeClasses from context
  const currentThemeClasses = themeClasses[theme] || {}; // get classes for current theme

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className={`max-w-md mx-auto p-8 shadow-lg rounded-lg ${currentThemeClasses.form || 'bg-white'}`}>
      <h2 className="text-2xl font-semibold text-center mb-6 flex items-center justify-center gap-2">
  <FiUser className="text-xl" />
  Login
</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FiMail />
            </span>
            <input
              id="email"
              type="email"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FiLock />
            </span>
            <input
              id="password"
              type="password"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
           {/* Forgot Password Link */}
  <div className="text-right mt-1">
    <a href="/forgotpassword" className="text-sm hover:underline">
      Forgot Password?
    </a>
  </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`${currentThemeClasses.button}`}
          >
            <FiLogIn className="text-lg" />
            Log In
          </button>
        </div>
      </form>

      {/* Register Link */}
      <div className="mt-6 text-center">
        <p className="text-sm">
          Don’t have an account?{' '}
          <a href="/register" className="font-medium underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
