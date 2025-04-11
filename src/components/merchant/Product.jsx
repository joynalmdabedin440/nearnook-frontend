import React from 'react';

const Product = ({ item,handleDelete }) => {
    
    return (
        <div className="card bg-white  rounded-2xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg overflow-hidden">
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
                    <button className="btn btn-sm rounded-full bg-[#2E86AB] text-white hover:bg-[#226c8a] transition">
                        {item?.price} Tk
                    </button>
                    <button className="btn btn-sm rounded-full bg-[#2E86AB] text-white hover:bg-[#226c8a] transition">
                        Stock: {item?.stock}
                    </button>
                </div>

                <div className="card-actions justify-end gap-2 mt-3">
                    <button className="badge badge-outline hover:badge-primary cursor-pointer transition">
                        Stock Update
                    </button>
                    <button onClick={()=>handleDelete(item?._id)} className="badge badge-outline hover:badge-error cursor-pointer transition">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;