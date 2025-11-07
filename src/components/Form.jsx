import React from "react";

const Form = () => {
  return (
    // Added a subtle shadow and centered the max width better
    <div className="bg-white rounded-lg w-full mx-auto max-w-lg p-5 mt-10 shadow-xl">
      <h1 className="text-center font-bold text-2xl mb-5">Registration Form</h1>
      <form>
        {/* Added gap utilities for consistent spacing in flex containers */}
        <div className="flex items-center justify-between my-3 gap-4">
          <div className="flex flex-col w-1/2">
            {" "}
            {/* Explicitly defined width to ensure layout integrity */}
            <label className="text-md font-semibold" htmlFor="first-name">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-md font-semibold" htmlFor="last-name">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col w-1/2">
            <label className="text-md font-semibold" htmlFor="father-name">
              Father's Name
            </label>
            <input
              id="father-name"
              type="text"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="Enter your father's name"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-md font-semibold" htmlFor="cnic">
              CNIC No
            </label>
            <input
              id="cnic"
              type="number"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="Enter your CNIC number"
            />
          </div>
        </div>

        <div className="flex items-center justify-between my-3 gap-4">
          <div className="flex flex-col w-1/2">
            <label className="text-md font-semibold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-md font-semibold" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col w-1/2">
            <label className="text-md font-semibold" htmlFor="hobbies">
              Hobbies
            </label>
            <input
              id="hobbies"
              type="text"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="Enter your hobbies"
            />
          </div>
          {/* Corrected the gender field to use a standard <select> for a clean design */}
          <div className="flex flex-col w-1/2">
            <label className="text-md font-semibold" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 bg-white cursor-pointer transition duration-150"
            >
              <option value="">-- Select --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="w-full p-2 outline-none border border-indigo-500 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
