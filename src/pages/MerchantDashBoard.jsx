import React from 'react';
import VendorNavbar from '../components/VendorNavbar';

const MerchantDashboard = () => {
    return (
        <div>
            <VendorNavbar />

            <fieldset className="fieldset w-2xl bg-base-200 border border-base-300 p-4 rounded-box mx-auto">
                <legend className="fieldset-legend">Enter Product details</legend>

                <label className="fieldset-label">Product Name</label>
                <input type="text" className="input" placeholder="Enter Product name" />

                <label className="fieldset-label">Product Stock</label>
                <input type="text" className="input" placeholder="Enter stock" />

                <label className="fieldset-label">Product Price</label>
                <input type="text" className="input" placeholder="Enter Price" />

                <label className="fieldset-label">Photo Url</label>
                <input type="text" className="input" placeholder="Enter photo url" />

                <label className="fieldset-label">Product Description</label>
                <input type="text" className="input" placeholder="Enter Description" />
                <button type='submit' className='btn bg-[#2E86AB] hover:scale-105 text-white w-1/2'>Add Now +</button>
            </fieldset>

        </div>
    );
};

export default MerchantDashboard;