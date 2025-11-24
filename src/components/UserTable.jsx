import React, { useState } from "react";
import UserActions from "./UserActions";

const UserTable = ({ users, deleteUser, setEditingUser }) => {
  const [search, setSearch] = useState("");

  // Pagination
  const [page, setPage] = useState(1);
  const recordsPerPage = 5;
  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / recordsPerPage);
  const start = (page - 1) * recordsPerPage;
  const paginated = filtered.slice(start, start + recordsPerPage);

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="border p-3 rounded-lg w-full mb-4 shadow-sm focus:ring-2 focus:ring-blue-400"
      />

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl border">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700 border-b">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Password</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((u) => (
              <tr key={u.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{u.id}</td>
                <td className="p-3 font-semibold">{u.name}</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
