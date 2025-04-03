
import { useState } from 'react';
import { Search, Menu, User, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="container px-4 mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <div className="flex items-center">
            <svg 
              className="h-8 w-auto text-airbnb-red" 
              viewBox="0 0 32 32" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z">
              </path>
            </svg>
            <span className="text-airbnb-red font-bold text-xl ml-2 hidden sm:block">airbnb</span>
          </div>
        </Link>

        {/* Search */}
        <div 
          className={`hidden md:flex items-center justify-between border rounded-full py-2 px-4 shadow-sm transition-all ${
            isSearchFocused ? 'shadow-md' : ''
          }`}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        >
          <button className="font-medium text-sm px-4 py-1 border-r">Anywhere</button>
          <button className="font-medium text-sm px-4 py-1 border-r">Any week</button>
          <button className="text-gray-500 text-sm px-4 py-1">Add guests</button>
          <div className="bg-airbnb-red p-2 rounded-full text-white">
            <Search size={16} />
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-4 py-2 text-sm rounded-full hover:bg-gray-100 transition">
            Airbnb your home
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <Globe size={18} />
          </button>
          <div className="flex items-center border rounded-full p-2 shadow-sm hover:shadow-md transition cursor-pointer">
            <Menu size={18} className="mr-2" />
            <div className="bg-gray-500 rounded-full p-1 text-white">
              <User size={16} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
