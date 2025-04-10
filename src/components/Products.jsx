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
    }, [shopName])


    const handleDelete = (itemId) => {
        console.log(itemId);
        
        if (window.confirm("Are you sure you want to delete this product?")) {
            // Call an API to delete the product from the database
            fetch(`http://localhost:5000/deleteProduct/${itemId}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(() => {
                    // Remove the product from the UI (local state)
                    setProducts(prevProducts => prevProducts.filter(product => product._id !== itemId));
                    alert('Product deleted successfully!');
                })
                .catch(err => console.error('Error deleting product:', err));
        }
    };





    return (
        <div className=' mx-auto my-10 grid grid-cols-3 gap-4 container '>
            {
                products.map(item => <Product key={item?._id} handleDelete={handleDelete} item={item}></Product>)
            }

        </div>
    );
};

export default Products;