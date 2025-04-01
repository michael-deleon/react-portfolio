'use client'; // Ensures this runs on the client side

import { useState, ReactNode } from "react";

interface ProtectedPageProps {
  children: ReactNode;
}

export default function ProtectedPage({ children }: ProtectedPageProps) {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load password from environment variable
  const correctPassword = process.env.NEXT_PUBLIC_PASSWORD; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredPassword === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Enter Password</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="password"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
              className="border p-2 rounded"
              placeholder="Enter password"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
