
import  { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const VendorNavbar = () => {

    const [merchant, setMerchant] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/merchant')
            .then(res => res.json())
            .then(data => setMerchant(data))
    }, [])

    return (
        <header className="p-4 bg-gray-100 text-gray-800">
            <div className="container flex justify-between  h-16 mx-auto text-[#2E86AB] ">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <h1 className='font-bold text-xl '>{ merchant?.shopName?.toUpperCase() || "Shop Name"}</h1>
                </a>
                <ul className=" hidden space-x-3 md:flex items-center">
                    <li className="flex">
                        <NavLink to="analytics" rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Analytics</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="products" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Products</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="orders" className="flex items-center px-4 -mb-1 border-b-2 border-transparent ">Orders</NavLink>
                    </li>
                    <li className="flex ">
                        <NavLink to="add-product"  className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white bg-[#2E86AB] rounded-4xl h-1/2 ">Add Product</NavLink>
                    </li>
                    <li className="flex ">
                        <h1 className="flex items-center px-4 -mb-1 border-b-2 border-transparent   rounded-4xl h-1/2 font-bold text-xl">{ merchant?.name?.toUpperCase()}</h1>
                    </li>
                </ul>
                <button className="flex justify-end p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default VendorNavbar;