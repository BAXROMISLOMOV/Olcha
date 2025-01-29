import React from "react";

const ProductPage = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <img
              src="https://via.placeholder.com/300"
              alt="Samsung Galaxy A55"
              className="rounded-md border"
            />
            <div className="flex mt-4 space-x-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail"
                className="w-16 h-16 rounded-md border"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail"
                className="w-16 h-16 rounded-md border"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail"
                className="w-16 h-16 rounded-md border"
              />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold">Samsung Galaxy A55</h1>
            <p className="text-sm text-gray-500 mt-2">0 sharhlar</p>

            <div className="mt-4">
              <p className="font-semibold">Xotira:</p>
              <div className="flex space-x-4 mt-2">
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
                  8/128 GB
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
                  6/128 GB
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
                  8/256 GB
                </button>
              </div>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Rangi:</p>
              <div className="flex space-x-4 mt-2">
                <div className="w-12 h-12 rounded-md bg-yellow-300 border" />
                <div className="w-12 h-12 rounded-md bg-blue-800 border" />
                <div className="w-12 h-12 rounded-md bg-purple-500 border" />
                <div className="w-12 h-12 rounded-md bg-blue-400 border" />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xl font-bold text-gray-900">4 846 000 so'm</p>
              <p className="text-sm text-gray-500 mt-1">
                Manzilga qarab 5 soatdan 3 kungacha yetkazib beriladi
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="w-full py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600">
                  Savatchaga qo'shish
                </button>
                <button className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
                  Bir klikda sotib olish
                </button>
              </div>
            </div>

            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <p className="font-bold text-gray-700">568 000 so'm / 12 oy</p>
              <button className="mt-2 w-full py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600">
                Bo'lib to'lash
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
