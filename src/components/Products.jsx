import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router';
import Product from './merchant/Product';

const Products = () => {

    const [products, setProducts] = useState([])

    const { merchantInfo } = useOutletContext()
    const shopName = merchantInfo?.shopName

    useEffect(() => {
        fetch('http://localhost:5000/addProduct')
            .then(res => res.json())
            .then(data => {
                const filteredProducts = data.filter(item => item.shopName === shopName);
                setProducts(filteredProducts);
        })
    },[shopName])
    
    
    


    return (
        <div className=' mx-auto my-10 grid grid-cols-3 gap-4 container '>
            {
                products.map(item=> <Product item={item}></Product>)
            }
            
        </div>
    );
};

export default Products;