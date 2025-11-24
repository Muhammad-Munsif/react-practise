import React from "react";

const UserActions = ({ onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-start gap-2 text-white">
      <button
        onClick={onEdit}
        className="px-4 py-2 bg-yellow-500  rounded-lg hover:bg-yellow-600 transition hover:cursor-pointer duration-300"
      >
        Edit
      </button>

      <button
        onClick={onDelete}
        className="px-4 py-2 bg-red-600  rounded-lg hover:bg-red-700 transition hover:cursor-pointer duration-300"
      >
        Delete
      </button>
    </div>
  );
};
export default UserActions;
