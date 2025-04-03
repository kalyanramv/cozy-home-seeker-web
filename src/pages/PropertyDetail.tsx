
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Share, Heart, User, Calendar, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

// Mock property data (in a real app, you'd fetch this from an API)
const properties = [
  {
    id: 1,
    name: 'Modern Apartment with City View',
    location: 'New York, United States',
    price: 120,
    rating: 4.95,
    reviewCount: 120,
    host: {
      name: 'John Doe',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      isSuperhost: true,
    },
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1658&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ],
    description: 'This stylish apartment features floor-to-ceiling windows with breathtaking views of the city skyline. Enjoy the modern amenities, including a fully equipped kitchen, high-speed WiFi, and smart home features. Located in the heart of the city, you\'ll be steps away from restaurants, shops, and public transportation.',
    amenities: [
      'Wifi', 'Kitchen', 'Washer', 'Dryer', 'Air conditioning', 'Heating',
      'Dedicated workspace', 'TV', 'Hair dryer', 'Iron'
    ],
    beds: 2,
    baths: 1,
    guests: 4,
    reviews: [
      {
        id: 1,
        author: 'Sarah',
        date: 'March 2023',
        content: 'Amazing place with stunning views. Very clean and the host was very responsive.',
        rating: 5,
      },
      {
        id: 2,
        author: 'Michael',
        date: 'February 2023',
        content: 'Great location, comfortable beds, and all the amenities you need for a pleasant stay.',
        rating: 5,
      },
    ]
  },
  // ... more properties would be added here
];

const PropertyDetail = () => {
  const { id } = useParams();
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  // Find the property based on the ID from the URL
  const property = properties.find(p => p.id === Number(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container px-4 mx-auto py-8">
        {/* Property title */}
        <h1 className="text-2xl font-semibold mb-1">{property.name}</h1>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star size={16} className="fill-current mr-1" />
              <span className="font-medium">{property.rating}</span>
            </div>
            <span className="text-gray-500">·</span>
            <a href="#reviews" className="font-medium underline">{property.reviewCount} reviews</a>
            <span className="text-gray-500">·</span>
            <span>{property.location}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded-md">
              <Share size={16} className="mr-1" />
              <span className="underline font-medium">Share</span>
            </button>
            <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded-md">
              <Heart size={16} className="mr-1" />
              <span className="underline font-medium">Save</span>
            </button>
          </div>
        </div>
        
        {/* Photo gallery */}
        {showAllPhotos ? (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="container px-4 mx-auto py-4">
              <div className="flex justify-between items-center mb-4">
                <button 
                  onClick={() => setShowAllPhotos(false)}
                  className="flex items-center gap-1 p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded-md">
                    <Share size={16} className="mr-1" />
                    <span className="underline font-medium">Share</span>
                  </button>
                  <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded-md">
                    <Heart size={16} className="mr-1" />
                    <span className="underline font-medium">Save</span>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {property.images.map((image, index) => (
                  <div key={index} className="aspect-video">
                    <img 
                      src={image} 
                      alt={`${property.name} - photo ${index + 1}`} 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 aspect-[2/1] md:aspect-[3/1]">
              <div className="md:col-span-2 row-span-2 relative rounded-l-xl overflow-hidden">
                <img 
                  src={property.images[0]} 
                  alt={property.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block relative overflow-hidden">
                <img 
                  src={property.images[1]} 
                  alt={property.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block relative overflow-hidden rounded-tr-xl">
                <img 
                  src={property.images[2]} 
                  alt={property.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block relative overflow-hidden">
                <img 
                  src={property.images[3]} 
                  alt={property.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block relative overflow-hidden rounded-br-xl">
                <img 
                  src={property.images[4] || property.images[0]} 
                  alt={property.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <button 
              onClick={() => setShowAllPhotos(true)}
              className="absolute right-4 bottom-4 bg-white px-4 py-2 rounded-lg border border-gray-300 shadow-sm text-sm font-medium flex items-center"
            >
              Show all photos
            </button>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left column with property details */}
          <div className="lg:col-span-2">
            {/* Host information */}
            <div className="flex justify-between items-start border-b border-gray-200 pb-6 mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">
                  Entire apartment hosted by {property.host.name}
                </h2>
                <p>{property.guests} guests · {property.beds} beds · {property.baths} bath</p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img 
                    src={property.host.image} 
                    alt={property.host.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {property.host.isSuperhost && (
                  <div className="mt-1 text-xs text-center font-medium">Superhost</div>
                )}
              </div>
            </div>
            
            {/* Description */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>
            
            {/* Amenities */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <span className="text-lg">🔹</span>
                    </div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Reviews */}
            <div id="reviews" className="mb-6">
              <h2 className="text-xl font-semibold mb-4">
                <span className="flex items-center">
                  <Star size={20} className="fill-current mr-2" />
                  {property.rating} · {property.reviewCount} reviews
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {property.reviews.map(review => (
                  <div key={review.id} className="mb-4">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 mr-3">
                        <User size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium">{review.author}</h4>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column with booking widget */}
          <div>
            <div className="border border-gray-300 rounded-xl shadow-lg p-6 sticky top-28">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xl font-semibold">${property.price}</span>
                  <span className="text-gray-500"> night</span>
                </div>
                <div className="flex items-center">
                  <Star size={16} className="fill-current mr-1" />
                  <span className="font-medium">{property.rating}</span>
                  <span className="mx-1 text-gray-300">·</span>
                  <a href="#reviews" className="text-gray-500 underline">
                    {property.reviewCount} reviews
                  </a>
                </div>
              </div>
              
              {/* Date and guest selection */}
              <div className="border border-gray-300 rounded-t-lg mb-4">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-3">
                    <div className="text-xs font-bold uppercase">CHECK-IN</div>
                    <div className="mt-1">Add date</div>
                  </div>
                  <div className="p-3">
                    <div className="text-xs font-bold uppercase">CHECKOUT</div>
                    <div className="mt-1">Add date</div>
                  </div>
                </div>
                <div className="border-t border-gray-300 p-3">
                  <div className="text-xs font-bold uppercase">GUESTS</div>
                  <div className="mt-1 flex justify-between items-center">
                    <div>1 guest</div>
                    <div className="text-gray-500">▼</div>
                  </div>
                </div>
              </div>
              
              {/* Reserve button */}
              <Button className="w-full bg-airbnb-red hover:bg-airbnb-pink text-white py-3 font-medium text-lg transition-colors mb-4">
                Reserve
              </Button>
              
              <div className="text-center text-gray-500 text-sm mb-6">
                You won't be charged yet
              </div>
              
              {/* Price details */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="underline">${property.price} x 5 nights</div>
                  <div>${property.price * 5}</div>
                </div>
                <div className="flex justify-between">
                  <div className="underline">Cleaning fee</div>
                  <div>$60</div>
                </div>
                <div className="flex justify-between">
                  <div className="underline">Service fee</div>
                  <div>$85</div>
                </div>
                <div className="pt-4 border-t border-gray-300 flex justify-between font-semibold">
                  <div>Total before taxes</div>
                  <div>${property.price * 5 + 60 + 85}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
