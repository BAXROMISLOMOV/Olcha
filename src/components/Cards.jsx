import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Cards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://mobile.olcha.uz/api/v2/products?is_sale=true")
      .then((res) => {
        setCards(res.data.data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      });
  }, []);

  console.log(cards);

  if (loading) {
    return <p className="text-center mt-20">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-20">{error}</p>;
  }

  return (
    <div className="card container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      {cards.map((item) => (
        <NavLink
          to={`/product/${item.id}`}
          key={item.id}
          className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
        >
          <img
            className="h-60 object-cover w-full rounded"
            src={item.main_image || "https://via.placeholder.com/150"}
            alt={`${item.name_oz || "Product"} image`}
          />
          <div className="p-3">
            <h2 className="font-bold text-lg truncate">
              {item.name_oz || "No name available"}
            </h2>
          </div>
          <div className="mb-5">
            <p className="text-gray-600">
              {item.total_price
                ? `${item.total_price} sum`
                : "Price not available"}
            </p>
            {item.monthly_repayment ? (
              <button
                className="bg-blue-500 text-white py-1 px-4 rounded mt-2 w-full"
                type="button"
              >
                {item.monthly_repayment} som x 12 oy
              </button>
            ) : (
              <button
                className="bg-gray-300 text-gray-600 py-1 px-4 rounded mt-2 w-full"
                type="button"
                disabled
              >
                Not available
              </button>
            )}
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Cards;
