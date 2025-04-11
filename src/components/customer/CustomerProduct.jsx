import React, { useContext } from 'react';
import { CartContext } from '../../pages/Explore';

const CustomerProduct = ({ item }) => {
    
    const { setCartItemNumber, cartItemNumber } = useContext(CartContext)
    
    

    const handleAddToCart = (item) => {
        if (cartItemNumber < 10) {
            setCartItemNumber(cartItemNumber + 1)
        }
        else {
            alert("No more Item you can add")
        }

        //add to cart items
        fetch("http://localhost:5000/addtocart",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                
            })    
        
    }

        
   
    
    const handleViewDetails = (item) => {
        // Logic to view product details (you could use React Router for navigation)
        console.log("Viewing details for:", item.productName);
        // Navigate to product details page or show a modal
    };
    return (
        <div className="card bg-white rounded-2xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg overflow-hidden">
            <figure className="w-full h-52 overflow-hidden">
                <img
                    className="object-cover w-full h-full"
                    src={item?.photoUrl}
                    alt={item?.productName}
                />
            </figure>

            <div className="card-body space-y-2">
                <h2 className="card-title text-lg font-semibold text-gray-800">
                    {item?.productName}
                </h2>
                <p className="text-sm text-gray-600">{item?.description}</p>

                <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-bold text-[#2E86AB]">{item?.price} Tk</span>
                    <button
                        className="btn btn-sm rounded-full bg-[#2E86AB] text-white hover:bg-[#226c8a] transition"
                        onClick={() => handleAddToCart(item)}  // Handle adding the item to the cart
                    >
                        Add to Cart
                    </button>
                </div>

                <div className="flex justify-between items-center mt-2">
                    <button
                        className="btn btn-sm rounded-full bg-[#2E86AB] text-white hover:bg-[#226c8a] transition"
                        onClick={() => handleViewDetails(item)} // Handle viewing the product details
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomerProduct;