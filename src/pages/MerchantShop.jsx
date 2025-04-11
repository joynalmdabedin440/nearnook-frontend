import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import ExploreNavbar from '../components/ExploreNavbar';
import ExploredShopNav from '../components/ExploredShopNav';

const MerchantShop = () => {
    const { shopName } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addProduct')
            .then(res => res.json())
            .then(data => {
                const filteredProducts = data.filter(item => item.shopName === shopName);
                setItems(filteredProducts);
            })
    }, [shopName])

    const handleAddToCart = (item) => {
        

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



    return (
        <div>
            <ExploredShopNav />
            <h2 className="text-2xl font-bold mb-4 text-center text-[#2E86AB] my-4">
                Welcome to {shopName}'s Shop
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto">
                {
                    items.length > 0 ? items.map(item => (
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
                                        // onClick={() => handleViewDetails(item)} // Handle viewing the product details
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) : <p>No items available for this merchant.</p>
                }
            </div>
        </div>
    );
};

export default MerchantShop;