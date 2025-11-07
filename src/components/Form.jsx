import React from "react";

const Form = () => {
  return (
    <div className="bg-white rounded-lg w-full max-w-xl mx-auto p-5 mt-5 shadow-xl">
      <h1 className="text-center font-bold text-2xl mb-5">Registration Form</h1>
      <form>
        <div className="flex flex-col sm:flex-row gap-4 mb-3">
          <div className="flex flex-col w-full sm:w-1/2">
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
          <div className="flex flex-col w-full sm:w-1/2">
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

        <div className="flex flex-col sm:flex-row gap-4 mb-3">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-md font-semibold" htmlFor="father-name">
              Father's Name
            </label>
            <input
              id="father-name"
              type="text"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="Father's name"
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-md font-semibold" htmlFor="cnic">
              CNIC No
            </label>
            <input
              id="cnic"
              type="number"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="CNIC number"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-3">
          <div className="flex flex-col w-full sm:w-1/2">
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
          <div className="flex flex-col w-full sm:w-1/2">
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

        <div className="flex flex-col sm:flex-row gap-4 mb-5">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-md font-semibold" htmlFor="hobbies">
              Hobbies
            </label>
            <input
              id="hobbies"
              type="text"
              value="cricket, volleyball, hockey, table tennis"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="Enter your hobbies"
              readOnly
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
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

        <div>
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
