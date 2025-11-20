import React, { useState, useEffect } from "react";

const Table = () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Rest of the component remains the same...
  if (loading) {
    return <div className="w-full flex justify-center items-center h-64">Loading...</div>;
  }

  if (error) {
    return <div className="w-full flex justify-center items-center h-64">Error: {error}</div>;
  }

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.slice(0, 20).map((item) => (
          <div key={item.id} className="bg-white p-4 border border-gray-200 rounded-lg">
            <img 
              src={item.thumbnailUrl} 
              alt={item.title}
              className="w-full h-32 object-cover rounded mb-3"
            />
            <p className="text-sm text-gray-600">ID: {item.id}</p>
            <p className="text-xs text-gray-500 truncate" title={item.title}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;