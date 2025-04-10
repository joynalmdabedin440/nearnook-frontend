
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

const ExploreNavbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-bold text-[#2E86AB]">
          NearNook
        </Link>
  
        {/* Right: Search, Cart, Login */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search products"
            className="px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-60"
          />
  
          {/* Cart */}
          <Link to="/cart" className="text-xl text-gray-700 hover:text-blue-600">
            <FaShoppingCart />
          </Link>
  
          {/* Login */}
          <Link
            to="/signIn"
            className="px-4 py-1 bg-[#2E86AB] text-white rounded-md hover:bg-blue-700 text-sm"
          >
            Login
          </Link>
        </div>
      </nav>
    );
};

export default ExploreNavbar;
