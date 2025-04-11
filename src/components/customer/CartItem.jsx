import React from 'react';


const CartItem = ({ item,handleRemove }) => {
   


    return (
        <div>
            
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
                        // Handle adding the item to the cart
                        >
                            Order Now
                        </button>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                        <button onClick={() => {
                            handleRemove(item?._id)
                        }}
                            className="btn btn-sm rounded-full bg-[#2E86AB] text-white hover:bg-[#226c8a] transition"

                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;