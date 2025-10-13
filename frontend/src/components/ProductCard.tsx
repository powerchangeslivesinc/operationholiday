import React from "react";
import { useNavigate } from "react-router-dom";
import eventImg from "../assets/images/events.png";

interface ProductCardProps {
  productId: string;
  title: string;
  imageUrl?: string; // optional custom image
}

const ProductCard: React.FC<ProductCardProps> = ({
  productId,
  title,
  imageUrl = "/assets/images/events.png", // default image path
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
          className="mx-auto mb-4 object-contain"
          style={{ maxWidth: "75px", height: "140px" }}
        />

        {/* Product Info */}
        <div className="flex-grow">
          <h3 className="text-lg font-medium text-gray-800">{productId}</h3>
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