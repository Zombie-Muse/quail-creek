import React from 'react';

const Nearby = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-8">Fun Stuff Nearby</h1>
      <div className="flex justify-center gap-6">
        <div className="rounded-lg shadow-lg bg-white max-w-xs">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1609134545248-1a41853280b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Claremont Colleges
            </h5>
            <p className="text-gray-500 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="rounded-lg shadow-lg bg-white max-w-xs">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Shopping</h5>
            <p className="text-gray-500 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="rounded-lg shadow-lg bg-white max-w-xs">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1605812911011-7fdfff97d762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Historic Pomona
            </h5>
            <p className="text-gray-500 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nearby;
