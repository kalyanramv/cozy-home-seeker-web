
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
  dates?: string;
}

const PropertyCard = ({ id, name, location, price, rating, images, dates }: PropertyCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Link to={`/property/${id}`} className="group block">
      {/* Image carousel */}
      <div className="relative aspect-square overflow-hidden rounded-xl mb-2">
        <div className="absolute inset-0 transition-opacity">
          <img
            src={images[currentImageIndex]}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Image navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Image pagination dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 w-1.5 rounded-full ${
                  currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Property details */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-base">{name}</h3>
          <p className="text-gray-500 text-sm">{location}</p>
          {dates && <p className="text-gray-500 text-sm">{dates}</p>}
          <p className="mt-1">
            <span className="font-semibold">${price}</span>{' '}
            <span className="text-gray-500">night</span>
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Star size={14} className="fill-current" />
          <span className="text-sm">{rating.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
