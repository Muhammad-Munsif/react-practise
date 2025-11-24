import React from "react";

const UserActions = ({ onEdit, onDelete }) => {
  return (
    
    <div className="flex gap-2">
  <button
    onClick={onEdit}
    className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-4 py-1 rounded-lg shadow-sm"
  >
    Edit
  </button>

  <button
    onClick={onDelete}
    className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-1 rounded-lg shadow-sm"
  >
    Delete
  </button>
</div>

  );
};

export default UserActions;
