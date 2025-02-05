import React, { useState, useEffect } from 'react';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Power Apps URL
  const powerAppsUrl =
    'https://apps.powerapps.com/play/e/f7c4f569-a259-e587-ac1e-ac8fb6878441/a/6adf4488-d472-4661-9d3d-5f44ac006b49?tenantId=4b7781c7-419e-4c9f-ad63-d0c39645491e';

  useEffect(() => {
    const session = localStorage.getItem('isLoggedIn');
    if (session) setIsLoggedIn(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600">
      {!isLoggedIn ? (
        <form
          onSubmit={handleLogin}
          className="bg-white p-10 rounded-2xl shadow-2xl w-96 flex flex-col items-center"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Joiner Portal Login
          </h2>

          <div className="w-full mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none text-center"
              required
            />
          </div>

          <div className="w-full mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none text-center"
              required
            />
          </div>

          <button
            type="submit"
            className="w-40 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300 flex justify-center items-center disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  d="M4 12a8 8 0 018-8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      ) : (
        <div className="w-full h-screen flex items-center justify-center p-4">
          <iframe
            title="Joiner Enrollment App"
            src={powerAppsUrl}
            className="w-full sm:w-[80%] h-[80vh] border rounded-lg shadow-lg"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default LoginPage;