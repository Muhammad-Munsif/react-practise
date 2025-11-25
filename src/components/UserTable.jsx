import React, { useState } from "react";
import UserActions from "./UserActions";

const UserTable = ({ users, deleteUser, setEditingUser }) => {
  const [search, setSearch] = useState("");

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-6">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 rounded-lg w-full mb-4 shadow focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow-xl border overflow-hidden">
        {/* Scrollable Table Body */}
        <div className="max-h-[350px] overflow-y-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-gray-100 sticky top-0 z-20 shadow-sm">
              <tr className="text-gray-700 text-sm">
                <th className="p-3 text-left font-semibold">ID</th>
                <th className="p-3 text-left font-semibold">Name</th>
                <th className="p-3 text-left font-semibold">Email</th>
                <th className="p-3 text-left font-semibold">Password</th>
                <th className="p-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((u) => (
                <tr key={u.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3">{u.id}</td>
                  <td className="p-3 font-medium">{u.name}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3">{u.password}</td>
                  <td className="p-3">
                    <UserActions
                      onEdit={() => setEditingUser(u)}
                      onDelete={() => deleteUser(u.id)}
                    />
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center text-gray-500 p-6 italic font-semibold"
                  >
                    No users found...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
