import React, { useState, useEffect } from "react";

const Table = () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-64">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center items-center h-64">
        <div className="text-red-500 text-lg">Error: {error}</div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {data.slice(0, 20).map(
            (
              item // Limit to 20 items for better performance
            ) => (
              <div
                key={item.id}
                className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <p className="text-sm text-gray-600 mb-1">ID: {item.id}</p>
                <p
                  className="text-xs text-gray-500 mb-2 truncate"
                  title={item.title}
                >
                  {item.title}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-xs break-all"
                >
                  View Image
                </a>
              </div>
            )
          )}
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {data.slice(0, 20).map(
            (
              item // Limit to 20 items for better performance
            ) => (
              <div
                key={item.id}
                className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <p className="text-sm text-gray-600 mb-1">ID: {item.id}</p>
                <p
                  className="text-xs text-gray-500 mb-2 truncate"
                  title={item.title}
                >
                  {item.title}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-xs break-all"
                >
                  View Image
                </a>
              </div>
            )
          )}
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {data.slice(0, 20).map(
            (
              item // Limit to 20 items for better performance
            ) => (
              <div
                key={item.id}
                className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <p className="text-sm text-gray-600 mb-1">ID: {item.id}</p>
                <p
                  className="text-xs text-gray-500 mb-2 truncate"
                  title={item.title}
                >
                  {item.title}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-xs break-all"
                >
                  View Image
                </a>
              </div>
            )
          )}
        </div>
      </div>
      <div className="w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.slice(0, 20).map(
          (
            item // Limit to 20 items for better performance
          ) => (
            <div
              key={item.id}
              className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                className="w-full h-32 object-cover rounded mb-3"
              />
              <p className="text-sm text-gray-600 mb-1">ID: {item.id}</p>
              <p
                className="text-xs text-gray-500 mb-2 truncate"
                title={item.title}
              >
                {item.title}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-xs break-all"
              >
                View Image
              </a>
            </div>
          )
        )}
      </div>
    </div>
    <div className="w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.slice(0, 20).map(
          (
            item // Limit to 20 items for better performance
          ) => (
            <div
              key={item.id}
              className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                className="w-full h-32 object-cover rounded mb-3"
              />
              <p className="text-sm text-gray-600 mb-1">ID: {item.id}</p>
              <p
                className="text-xs text-gray-500 mb-2 truncate"
                title={item.title}
              >
                {item.title}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-xs break-all"
              >
                View Image
              </a>
            </div>
          )
        )}
      </div>
    </div>
    <div className="w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.slice(0, 20).map(
          (
            item // Limit to 20 items for better performance
          ) => (
            <div
              key={item.id}
              className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                className="w-full h-32 object-cover rounded mb-3"
              />
              <p className="text-sm text-gray-600 mb-1">ID: {item.id}</p>
              <p
                className="text-xs text-gray-500 mb-2 truncate"
                title={item.title}
              >
                {item.title}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-xs break-all"
              >
                View Image
              </a>
            </div>
          )
        )}
      </div>
    </div>
    </>
  );
};

export default Table;
