import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router';

const ExploredShopNav = () => {
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

                
                <Link to="/cart" className="relative text-xl text-gray-700 hover:text-blue-600">
                    <FaShoppingCart />
                    <h3 className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        0
                    </h3>
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

export default ExploredShopNav;