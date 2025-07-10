import React, { useEffect, useState, useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { CategoriesContext } from "../../../context/categories.context";
import { CartContext } from "../../../context/cart.context";

const TopProducts = ({ handleOrderPopup }) => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { addItemToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const firstCategory = Object.keys(categoriesMap)[0];
    if (firstCategory) {
      setProducts(categoriesMap[firstCategory].slice(0, 5)); // top 5 products from first category
    }
  }, [categoriesMap]);

  const handleOrderNow = (product) => {
    addItemToCart(product);
    if (handleOrderPopup) handleOrderPopup(product);
  };

  return (
    <div className="py-16 ">
      <div className="container mx-auto px-6">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary font-semibold">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-extrabold tracking-wide">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-500 mt-2">
            Our most-loved products, all in one place for you to explore.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
          {products.length ? (
            products.map((data) => (
              <div
                key={data.id}
                data-aos="zoom-in"
                className="relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-400 ease-in-out max-w-xs w-full group cursor-pointer overflow-hidden"
              >
                {/* Image section */}
                <div className="flex justify-center items-center overflow-visible pt-6">
                  <img
                    src={data.imageUrl}
                    alt={data.name}
                    className="max-w-[140px] max-h-[160px] object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-xl"
                  />
                </div>

                {/* Details section */}
                <div className="p-6 text-center">
                  {/* Star rating */}
                  <div className="flex justify-center gap-1 mb-3 text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {data.name}
                  </h2>

                  <p className="text-gray-600 text-sm mb-5">
                    Rs. {data.price?.toFixed(2)}
                  </p>

                  <button
                    onClick={() => handleOrderNow(data)}
                    className="inline-block bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 focus:outline-none text-white font-semibold rounded-full px-6 py-2 transition-transform duration-300 hover:scale-105 shadow-lg"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
