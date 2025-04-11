
import { useEffect, useState } from 'react';

import CartItem from './CartItem';
import { Link } from 'react-router';
import { BsArrowRight } from 'react-icons/bs';


const CartItems = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/getcart")
            .then(response => response.json())
            .then(data => setItems(data))

    }, [])

    return (
        <div className='mt-6 w-11/12 mx-auto'>
            <Link to="/explore" className=' text-2xl font-bold text-[#2E86AB] '>Back to Home page <BsArrowRight className='inline'></BsArrowRight></Link>
            <div className='grid grid-cols-3 gap-5 mt-4 '>
                {
                    items.map((item, index) => <CartItem key={index} item={item}></CartItem>)
                }
            </div>
            

            
        </div>
    );
};

export default CartItems;