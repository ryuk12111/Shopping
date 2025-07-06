import React, { useEffect, useState, useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { CategoriesContext } from "../../../context/categories.context";
import { CartContext } from "../../../context/cart.context";

const Products = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { addItemToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoriesMap) {
      const productIdsToSelect = [21, 2, 7, 17, 12]; // example IDs from any category
      let combinedProducts = [];

      Object.values(categoriesMap).forEach((productsArray) => {
        combinedProducts = combinedProducts.concat(
          productsArray.filter((product) => productIdsToSelect.includes(product.id))
        );
      });

      setProducts(combinedProducts);
    }
  }, [categoriesMap]);

  const handleOrderNow = (product) => {
    addItemToCart(product);
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary font-semibold">
            Top Selling Products for You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-extrabold tracking-wide">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-500 mt-2">
            Discover our selection of top-selling products carefully curated for you.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 place-items-center">
          {products.map((data, idx) => (
            <div
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              key={data.id}
              className="flex flex-col items-center border border-gray-200 rounded-lg shadow-lg p-5 bg-white hover:shadow-xl transition-shadow duration-300 w-full max-w-[300px]"
            >
              <div className="flex justify-center items-center overflow-visible pt-6">
                <img
                  src={data.imageUrl}
                  alt={data.name}
                  className="max-w-[220px] max-h-[250px] object-contain rounded-md mb-3"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg text-gray-800">{data.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{data.color || "Various Colors"}</p>
                <div className="flex items-center justify-center gap-1 mt-1 text-yellow-400">
                  <FaStar />
                  <span className="font-semibold text-gray-700">{data.rating || 4.5}</span>
                </div>
                <button
                  onClick={() => handleOrderNow(data)}
                  className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md shadow-md transition duration-300 ease-in-out"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
          {products.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
