import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";

const AdminDashboard = () => {
  // Fetch admin statistics
  const { data: stats, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/stats`
      );
      return result.data;
    },
  });

  const { data: lessons = [] } = useQuery({
    queryKey: ["lessons"],
    queryFn: async () => {
      const params = new URLSearchParams();

      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/lessons?${params.toString()}`
      );
      return result.data;
    },
  });

  const { data: users = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const params = new URLSearchParams();

      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/users?${params.toString()}`
      );
      return result.data;
    },
  });

  const { data: reports = [] } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const params = new URLSearchParams();

      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/reports?${params.toString()}`
      );
      return result.data;
    },
  });

  console.log(reports);

  return (
    <div className="min-h-screen bg-[#f9f5f6] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black mb-2 font2">👑 Admin Dashboard</h1>
          <p className="text-gray-600">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Users */}
          <div
            className="bg-white rounded-lg border-4 border-black p-6"
            style={{ boxShadow: "6px 6px 0px 0px #000" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">👥</div>
              <span className="text-sm font-bold text-gray-500">USERS</span>
            </div>
            <h3 className="text-3xl font-black mb-1">{users.length || 0}</h3>
            <p className="text-sm text-gray-600">Total registered users</p>
            <Link
              to="/dashboard/manage-users"
              className="mt-4 inline-block text-sm font-bold text-purple-600 hover:text-purple-700"
            >
              Manage Users →
            </Link>
          </div>

          {/* Total Public Lessons */}
          <div
            className="bg-white rounded-lg border-4 border-black p-6"
            style={{ boxShadow: "6px 6px 0px 0px #000" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">📚</div>
              <span className="text-sm font-bold text-gray-500">LESSONS</span>
            </div>
            <h3 className="text-3xl font-black mb-1">{lessons.length || 0}</h3>
            <p className="text-sm text-gray-600">Public lessons available</p>
            <Link
              to="/dashboard/manage-lessons"
              className="mt-4 inline-block text-sm font-bold text-purple-600 hover:text-purple-700"
            >
              Manage Lessons →
            </Link>
          </div>

          {/* Total Reported Lessons */}
          <div
            className="bg-white rounded-lg border-4 border-black p-6"
            style={{ boxShadow: "6px 6px 0px 0px #000" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">🚨</div>
              <span className="text-sm font-bold text-gray-500">REPORTS</span>
            </div>
            <h3 className="text-3xl font-black mb-1 text-red-600">
              {reports.length || 0}
            </h3>
            <p className="text-sm text-gray-600">Flagged for review</p>
            <Link
              to="/dashboard/reported-lessons"
              className="mt-4 inline-block text-sm font-bold text-red-600 hover:text-red-700"
            >
              View Reports →
            </Link>
          </div>

          {/* Today's New Lessons */}
          <div
            className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg border-4 border-black p-6 text-white"
            style={{ boxShadow: "6px 6px 0px 0px #000" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">✨</div>
              <span className="text-sm font-bold text-purple-100">TODAY</span>
            </div>
            <h3 className="text-3xl font-black mb-1">
              {stats?.todaysNewLessons || 0}
            </h3>
            <p className="text-sm text-purple-100">New lessons today</p>
            <div className="mt-4 text-sm font-bold text-purple-100">
              Keep it up! 🎉
            </div>
          </div>
        </div>

        {/* Most Active Contributors */}
        <div
          className="bg-white rounded-lg border-4 border-black p-6 mb-8"
          style={{ boxShadow: "8px 8px 0px 0px #000" }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black">🏆 Most Active Contributors</h2>
            <span className="text-sm text-gray-500">Top 5 creators</span>
          </div>

          {stats?.topContributors?.length === 0 ? (
            <p className="text-center text-gray-400 py-8">
              No contributors yet
            </p>
          ) : (
            <div className="space-y-4">
              {stats?.topContributors?.map((contributor, index) => (
                <div
                  key={contributor._id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-purple-400 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-black text-gray-400">
                      #{index + 1}
                    </div>
                    <img
                      src={contributor.photoURL || "https://i.pravatar.cc/150"}
                      alt={contributor.name}
                      className="w-12 h-12 rounded-full border-2 border-purple-500"
                    />
                    <div>
                      <p className="font-bold text-gray-900">
                        {contributor.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {contributor.email}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-purple-600">
                      {contributor.totalLessons}
                    </p>
                    <p className="text-xs text-gray-500">lessons created</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div
          className="bg-white rounded-lg border-4 border-black p-6"
          style={{ boxShadow: "8px 8px 0px 0px #000" }}
        >
          <h2 className="text-2xl font-black mb-6">⚡ Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/dashboard/manage-users"
              className="flex items-center gap-3 p-4 bg-purple-50 border-2 border-purple-200 rounded-lg hover:bg-purple-100 transition-all"
            >
              <span className="text-2xl">👥</span>
              <div>
                <p className="font-bold text-purple-900">Manage Users</p>
                <p className="text-xs text-purple-600">
                  View and edit user roles
                </p>
              </div>
            </Link>

            <Link
              to="/dashboard/manage-lessons"
              className="flex items-center gap-3 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg hover:bg-blue-100 transition-all"
            >
              <span className="text-2xl">📖</span>
              <div>
                <p className="font-bold text-blue-900">Manage Lessons</p>
                <p className="text-xs text-blue-600">
                  Review and moderate content
                </p>
              </div>
            </Link>

            <Link
              to="/dashboard/reported-lessons"
              className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-lg hover:bg-red-100 transition-all"
            >
              <span className="text-2xl">🚨</span>
              <div>
                <p className="font-bold text-red-900">View Reports</p>
                <p className="text-xs text-red-600">Handle flagged content</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
