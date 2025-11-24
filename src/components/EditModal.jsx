import React, { useState } from "react";

const EditModal = ({ user, updateUser, close }) => {
  const [form, setForm] = useState(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-lg border">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Edit User</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full border p-3 rounded-lg  focus:ring-2 focus:ring-blue-400"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            className="w-full border p-3 rounded-lg my-3 focus:ring-2 focus:ring-blue-400"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            className="w-full border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={close}
              className="px-6 py-3 font-semibold bg-gray-300 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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
