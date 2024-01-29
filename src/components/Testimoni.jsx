import React from 'react';

const Testimoni = () => {
  // Data testimoni
  const testimoniData = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      author: "John Doe"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      author: "Jane Doe"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      author: "Alice"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      author: "Bob"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      author: "Charlie"
    }
  ];

  return (
    <div className="flex flex-col bg-purple-900 h-fit gap-5 p-5">
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-bold text-4xl text-white">Testimoni</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {testimoniData.map((testimoni, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <p className="text-gray-800 text-lg font-semibold">
                  "{testimoni.text}"
                </p>
                <p className="text-gray-600 mt-2">- {testimoni.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
