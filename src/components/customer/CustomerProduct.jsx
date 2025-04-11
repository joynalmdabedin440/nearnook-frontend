import React, { useContext, } from 'react';
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

        {/* Open the modal using document.getElementById('ID').showModal() method */ }

        console.log(item);


        document.getElementById('my_modal_5')?.showModal();

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

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box space-y-4">

                    <>
                        <h3 className="font-bold text-2xl text-[#2E86AB]">{item?.productName}</h3>
                        <img
                            src={item?.photoUrl}
                            alt={item?.productName}
                            className="w-full h-52 object-cover rounded-lg"
                        />
                        <p className="text-gray-700">{item.description}</p>
                        <p className="text-lg font-semibold text-[#2E86AB]">Price: {item.price} Tk</p>
                        <div className='flex justify-between'>
                            <p className="text-sm text-gray-500">Stock: {item.stock || 'N/A'}</p>
                            <p>Discount: 10%</p>
                            
                        </div>
                        <p>Shipment : <span className='text-[#2E86AB]  cursor-pointer'>Home</span> and <span  className='text-[#2E86AB]  cursor-pointer'>Vendor</span></p>

                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn btn-sm rounded bg-[#2E86AB] text-white">Close</button>
                            </form>
                        </div>
                    </>

                </div>
            </dialog>

        </div>
    );
};

export default CustomerProduct;