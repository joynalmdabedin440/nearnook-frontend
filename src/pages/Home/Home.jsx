import React, { useContext } from 'react';

import banner from "../../assets/banner.png"
import Navbar from '../../components/Navbar';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {

    const {name} = useContext(AuthContext)

    console.log(name);
    
    return (
        <div className=''>
            <div
                className=" bg-top bg-contain md:bg-cover h-screen bg-no-repeat  min-w-full "
                style={{
                    backgroundImage: `url(${banner})`,
                }}
            >


                <Navbar />

                <div className='flex'>
                    <div className=' mx-auto  w-1/3'>
                        <h2 className='font-bold text-[#2E86AB] text-xl mb-4'>Discover NearBy Shop</h2>
                        <input type="text" placeholder="Enter Location" className="input bg-[#2E86AB] " />
                    </div>

                </div>


            </div>

            <div className='w-1/3 mx-auto  mb-4'>
                <h1 className='font-bold text-xl'>Become a Merchant</h1>
                <p>Attract new customers and grow sales, starting with 0% commissions for up to one year.</p>
                <Link to='/merchant' className='text-[#2E86AB]   font-bold cursor-pointer'>Register As a Shop Owner <FaArrowRight className='inline'/> </Link>

            </div>
        </div>
    );
};

export default Home;