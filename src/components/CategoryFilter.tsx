
import { useState } from 'react';
import { Home, Building, Bed, Image, Star } from 'lucide-react';

type Category = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

const categories: Category[] = [
  { id: 1, name: 'Iconic Cities', icon: <Building size={20} /> },
  { id: 2, name: 'Beach', icon: <Image size={20} /> },
  { id: 3, name: 'Amazing Views', icon: <Image size={20} /> },
  { id: 4, name: 'Cabins', icon: <Home size={20} /> },
  { id: 5, name: 'OMG!', icon: <Star size={20} /> },
  { id: 6, name: 'Mansions', icon: <Building size={20} /> },
  { id: 7, name: 'Trending', icon: <Star size={20} /> },
  { id: 8, name: 'Luxe', icon: <Star size={20} /> },
  { id: 9, name: 'Beachfront', icon: <Image size={20} /> },
  { id: 10, name: 'Design', icon: <Home size={20} /> },
  { id: 11, name: 'Countryside', icon: <Image size={20} /> },
  { id: 12, name: 'Rooms', icon: <Bed size={20} /> },
];

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <div className="border-b border-gray-200 py-4">
      <div className="container px-4 mx-auto">
        <div className="flex items-center space-x-8 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex flex-col items-center justify-center min-w-[60px] text-sm opacity-70 hover:opacity-100 pb-2 border-b-2 transition-all ${
                selectedCategory === category.id
                  ? 'opacity-100 border-airbnb-black font-medium'
                  : 'border-transparent'
              }`}
              onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
            >
              <div className="mb-1">{category.icon}</div>
              <span className="whitespace-nowrap text-xs">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
