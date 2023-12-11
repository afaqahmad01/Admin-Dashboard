import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const adminDetails = {
    name: "Admin User",
    email: "admin@example.com",
    role: "Administrator",
    joinedSince: "Joined on January 1, 2022",
  };

  return (
    <div>
      <main className="flex-1 p-8">
        <nav className="bg-green-500 p-4 mb-8">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-xl">Flow Flicker</div>
            <div>
              <Link to="/dashboard" className="text-white">
                Dashboard
              </Link>
              <span> / </span>
              <Link to="/" className="text-white">
                Logout
              </Link>
            </div>
          </div>
        </nav>

        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-bold mb-2">Admin Details</h2>
            <p>
              <strong>Name:</strong> {adminDetails.name}
            </p>
            <p>
              <strong>Email:</strong> {adminDetails.email}
            </p>
            <p>
              <strong>Role:</strong> {adminDetails.role}
            </p>
            <p>
              <strong>{adminDetails.joinedSince}</strong>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
