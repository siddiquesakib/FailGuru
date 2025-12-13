import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

const ManageUsers = () => {
  //fetch all users
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const params = new URLSearchParams();

      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/users?${params.toString()}`
      );
      return result.data;
    },
  });

  const handleUsertoAdmin = async (temail) => {
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/users/update/admin/${temail}`
      );
      refetch();
      toast.success(`${`${temail} are admin now`}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="py-2 sm:py-4">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 font2">
          Manage Users
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          View and manage all users
        </p>
      </div>

      {/* Table */}
      <div
        className="bg-white border-2 border-black overflow-hidden"
        style={{ boxShadow: "4px 4px 0px 0px #000" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead className="bg-gray-100 border-b-2 border-black">
              <tr>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-black">
                  Name
                </th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-black">
                  Role
                </th>

                <th className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-black">
                  Total Lessons
                </th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-black">
                  Created
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((lesson) => (
                <tr
                  key={lesson._id}
                  className="border-b-2 border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-3 sm:px-4 py-3 sm:py-4">
                    <p className="font-bold text-sm sm:text-base text-gray-900">
                      {lesson.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate max-w-[150px] sm:max-w-none">
                      {lesson.email}
                    </p>
                  </td>
                  <td className="px-3 sm:px-4 py-3 sm:py-4">
                    <button
                      onClick={() => handleUsertoAdmin(lesson.email)}
                      className="px-2 py-2 sm:py-3 bg-purple-100 text-purple-700 text-xs font-medium border-2 btn btn-xs"
                    >
                      {lesson.role}
                    </button>
                  </td>
                  <td className="px-3 sm:px-4 py-3 sm:py-4">
                    <p className="text-lg sm:text-xl text-center text-gray-600">
                      {lesson.totalLessonsCreated}
                    </p>
                  </td>
                  <td className="px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm text-gray-600">
                    {new Date(lesson.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
