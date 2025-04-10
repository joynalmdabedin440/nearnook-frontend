
import { createContext, useEffect, useState } from 'react';
import ExploreNavbar from '../components/ExploreNavbar';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router';
import Product from '../components/merchant/Product';
import CustomerProduct from '../components/customer/CustomerProduct';


export const CartContext = createContext(null)

const Explore = () => {



    const [merchants, setMerchants] = useState([])

    const [products, setProducts] = useState([])

    const [cartItemNumber,setCartItemNumber] = useState(0)

    useEffect(() => {
        fetch('http://localhost:5000/merchant')
            .then(res => res.json())
            .then(data => {

                setMerchants(data)


            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/addProduct')
            .then(res => res.json())
            .then(data => {

                setProducts(data);
            })
    }, [])


    const cartInfo = {
        cartItemNumber,
        setCartItemNumber
    }





    return (
        <CartContext.Provider value={cartInfo} >
            <div>
                <ExploreNavbar />

                <section className='mt-10 w-11/12 mx-auto'>
                    {/* shop name showcase */}
                    <div>
                        <h1 className='text-[#2E86AB] font-bold text-2xl m-4'>Popular Shop</h1>
                        <div className="flex justify-between gap-2 flex-wrap">

                            {
                                merchants.map(merchant => (
                                    <Link
                                        to={`/${merchant?.shopName}`}
                                        className="border-2 rounded-full px-6 py-2 bg-[#2E86AB] text-white font-semibold text-lg hover:bg-[#1c6e8a] transition-colors duration-300"
                                    >
                                        {merchant?.shopName}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    {/* popular product */}

                    <div>
                        <h1 className='text-[#2E86AB] font-bold text-2xl m-4'>Popular Product</h1>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                            {
                                products.map(item => <CustomerProduct key={item._id} item={item} />)

                            }
                        </div>
                    </div>

                </section>


            </div>
        </CartContext.Provider>
    );
};

export default Explore;