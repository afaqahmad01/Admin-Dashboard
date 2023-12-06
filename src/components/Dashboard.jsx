// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Dummy data for Users and Admin Posts
  const users = [
    { username: 'user1', email: 'user1@example.com', posts: 3, status: 'Active' },
    { username: 'user2', email: 'user2@example.com', posts: 5, status: 'Blocked' },
    { username: 'user3', email: 'user3@example.com', posts: 2, status: 'Active' },
  ];

  const adminPosts = [
    { postType: 'Image', postTag: 'Relaxing', uploadedSince: '2 days ago', likes: 15, comments: 3 },
    { postType: 'Video', postTag: 'Motivational', uploadedSince: '1 week ago', likes: 20, comments: 5 },
    { postType: 'Video', postTag: 'Happy', uploadedSince: '1 month and 2 days ago', likes: 172, comments: 52 },

  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Navbar */}
        <nav className="bg-green-500 p-4 mb-8">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-xl">FlowFlicker</div>
            <div>
              <Link to="/profile" className="text-white">
                Profile
              </Link>
              <span> / </span>
              <Link to="/" className="text-white">
                Logout
              </Link>
            </div>
          </div>
        </nav>

        {/* Dashboard Blocks */}
        <div className="grid grid-rows-2 gap-8">
          {/* Users Block */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Users</h2>
            {/* Dummy Users Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2">#</th>
                    <th className="border border-gray-300 p-2">Username</th>
                    <th className="border border-gray-300 p-2">Email</th>
                    <th className="border border-gray-300 p-2">Posts</th>
                    <th className="border border-gray-300 p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td className="border border-gray-300 p-2">{index + 1}</td>
                      <td className="border border-gray-300 p-2">{user.username}</td>
                      <td className="border border-gray-300 p-2">{user.email}</td>
                      <td className="border border-gray-300 p-2">{user.posts}</td>
                      <td className={`border border-gray-300 p-2 ${user.status === 'Blocked' ? 'text-red-500' : 'text-green-500'}`}>
                        {user.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Admin Posts Block */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Admin Posts</h2>
            {/* Dummy Admin Posts Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2">#</th>
                    <th className="border border-gray-300 p-2">Post Type</th>
                    <th className="border border-gray-300 p-2">Post Tag</th>
                    <th className="border border-gray-300 p-2">Uploaded Since</th>
                    <th className="border border-gray-300 p-2">Likes</th>
                    <th className="border border-gray-300 p-2">Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {adminPosts.map((post, index) => (
                    <tr key={post.id}>
                      <td className="border border-gray-300 p-2">{index + 1}</td>
                      <td className="border border-gray-300 p-2">{post.postType}</td>
                      <td className="border border-gray-300 p-2">{post.postTag}</td>
                      <td className="border border-gray-300 p-2">{post.uploadedSince}</td>
                      <td className="border border-gray-300 p-2">{post.likes}</td>
                      <td className="border border-gray-300 p-2">{post.comments}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;