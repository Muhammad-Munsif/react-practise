import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import EditModal from "./EditModal";

const HandleTable = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = () => {
    axios.get("http://localhost:5000/users")
      .then((res) => setUsers(res.data))
      .catch(() => toast.error("Failed to load users"));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = (newUser) => {
    axios.post("http://localhost:5000/users", newUser)
      .then(() => {
        toast.success("User added!");
        fetchUsers();
      })
      .catch(() => toast.error("Add failed"));
  };

  const updateUser = (updatedUser) => {
    axios.put(`http://localhost:5000/users/${updatedUser.id}`, updatedUser)
      .then(() => {
        toast.success("User updated!");
        setEditingUser(null);
        fetchUsers();
      })
      .catch(() => toast.error("Update failed"));
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        toast.success("User deleted!");
        fetchUsers();
      })
      .catch(() => toast.error("Delete failed"));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold text-center mb-6">User Management</h1>

      <UserForm addUser={addUser} />

      <UserTable 
        users={users}
        deleteUser={deleteUser}
        setEditingUser={setEditingUser}
      />

      {editingUser && (
        <EditModal
          user={editingUser}
          updateUser={updateUser}
          close={() => setEditingUser(null)}
        />
      )}
    </div>
  );
};

export default HandleTable;

import React, { useState } from "react";

const EditModal = ({ user, updateUser, close }) => {
  const [form, setForm] = useState(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(form);
  };

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 ">Edit User</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full border p-2 rounded my-3 bg-red-300"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            className="w-full border p-2 rounded mb-3"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            className="w-full border p-2 rounded mb-3"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={close}
              className="px-4 py-2 bg-gray-400 text-white rounded mb-3"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded mb-3"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;


import React from "react";

const UserActions = ({ onEdit, onDelete }) => {
  return (
    <div className="flex gap-2">
      <button
        className="bg-yellow-500 text-white px-4 py-1 rounded-lg"
        onClick={onEdit}
      >
        Edit
      </button>

      <button
        className="bg-red-600 text-white px-4 py-1 rounded-lg"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default UserActions;

import React, { useState } from "react";

const UserForm = ({ addUser }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(form);
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-4 rounded-lg mb-6"
    >
      <h2 className="text-xl font-semibold mb-3">Add New User</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="name"
          className="border p-2 rounded"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="email"
          name="email"
          className="border p-2 rounded"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          type="password"
          name="password"
          className="border p-2 rounded"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;

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
      {/* Search */}
      <input
        type="text"
        placeholder="Search by name..."
        className="border p-2 rounded w-full mb-4"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-400">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Password</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((u) => (
              <tr key={u.id} className="text-center">
                <td className="border p-2">{u.id}</td>
                <td className="border p-2">{u.name}</td>
                <td className="border p-2">{u.email}</td>
                <td className="border p-2">{u.password}</td>
                <td className="border p-2">
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

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-4 gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              page === i + 1 ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserTable;
