import React from "react";
import { useNavigate } from "react-router-dom";
import eventImg from "../assets/images/box.png"

interface ProductCardProps {
  productId: string;
  title: string;
  imageUrl?: string; // optional custom image
}

const ProductCard: React.FC<ProductCardProps> = ({
  productId,
  title, // default image path
}) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    // Navigate to the product details page
    navigate(`/programs/holiday/product/${productId}`);
  };

  return (
    <div className="card text-center w-100 d-flex flex-column">
      <div className="card text-center shadow-md bg-white rounded-lg flex flex-col h-full p-4 transition hover:shadow-lg hover:-translate-y-1">
        {/* Product Image */}
        <img
          src={eventImg}
          alt={`${title} image`}
          className="mx-auto mb-4 object-contain max-w-2/6"
        />

        {/* Product Info */}
        <div className="flex-grow">
          <p className="text-gray-700 mt-1">{title}</p>
        </div>

        {/* Footer Button */}
        <div className="mt-4">
          <button
            onClick={handleViewDetails}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
          >
            View Product Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;