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
