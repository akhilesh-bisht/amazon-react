import React, { useState } from "react";

const ProductCard = ({ product, setCartItems, cartItems }) => {
  const { title, price, description, image, category } = product;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };
  const handleCartCount = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-56 object-contain object-center "
          src={image}
          alt={title}
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-500 mb-2">Category: {category}</p>
          <p className="text-gray-600 mb-4">${price.toFixed(2)}</p>
          <p className="text-gray-700">
            {showFullDescription
              ? description
              : `${description.slice(0, 100)}...`}
            {!showFullDescription && (
              <button className="text-blue-500" onClick={toggleDescription}>
                Read More
              </button>
            )}
          </p>
          {showFullDescription && (
            <button className="text-blue-500" onClick={toggleDescription}>
              Read Less
            </button>
          )}
          <button
            className="border px-5 rounded-md mt-3 bg-blue-300"
            onClick={handleCartCount}
          >
            add to bag
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
