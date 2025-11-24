import React from "react";

const UserActions = ({ onEdit, onDelete }) => {
  return (
    <div className="flex gap-2 mt-4">
      <button
        onClick={onEdit}
        className="px-4 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
      >
        Edit
      </button>

      <button
        onClick={onDelete}
        className="px-4 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Delete
      </button>
    </div>
  );
};
export default UserActions;
