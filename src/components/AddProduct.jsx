import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AddProduct = () => {
    const handleProductUpload = e => {
        e.preventDefault()

        const form = e.target

        const productName = form.productName.value
        const stock = form.stock.value
        const price = form.price.value
        const photoUrl = form.photoUrl.value
        const description = form.description.value

        const productDetails = { productName, stock, price, photoUrl, description };

        fetch("http://localhost:5000/addProduct", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast("✅ Product added successfully!");

                    form.reset()



                }

            })


    }



    return (
        <div>
            <form onSubmit={handleProductUpload} className="fieldset w-2xl bg-base-200 border border-base-300 p-4 rounded-box mx-auto">
                <legend className="fieldset-legend">Enter Product details</legend>

                <label className="fieldset-label">Product Name</label>
                <input type="text" name='productName'
                    className="input" placeholder="Enter Product name" required />

                <label className="fieldset-label">Product Stock</label>
                <input type="text" name="stock" className="input" placeholder="Enter stock" required />

                <label className="fieldset-label">Product Price</label>
                <input type="text" className="input" name="price" placeholder="Enter Price" required />

                <label className="fieldset-label">Photo Url</label>
                <input type="text" name="photoUrl" className="input" placeholder="Enter photo url" required />

                <label className="fieldset-label">Product Description</label>
                <input type="text" name="description" className="input" placeholder="Enter Description" required />
                <button type='submit' className='btn bg-[#2E86AB] hover:scale-105 text-white w-1/2'>Add Now +</button>
                <ToastContainer />
            </form>

        </div>
    );
};

export default AddProduct;