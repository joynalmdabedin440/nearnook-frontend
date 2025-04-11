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


    return (
        <div>
            <ExploredShopNav/>
            <h2 className="text-2xl font-bold mb-4 text-center text-[#2E86AB] my-4">
                Welcome to {shopName}'s Shop
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    items.length > 0 ? items.map(item => (
                        <div key={item._id} className="card bg-white rounded-xl p-4 shadow">
                            <img src={item.photoUrl} alt={item.productName} className="h-40 w-full object-cover rounded-md" />
                            <h3 className="text-lg font-semibold mt-2">{item.productName}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <p className="mt-1 font-bold text-[#2E86AB]">{item.price} Tk</p>
                        </div>
                    )) : <p>No items available for this merchant.</p>
                }
            </div>
        </div>
    );
};

export default MerchantShop;