import React, { useContext } from 'react';
import { BsPass } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../providers/AuthProvider';

const MerchantLogin = () => {
    const { loginMerchant } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleMerchantSignIn = e => {
        e.preventDefault()

        const email= e.target.email.value
        const password = e.target.password.value
        
        //console.log(email,password);
        


        loginMerchant(email, password)
            .then(() => {
            navigate('/dashboard')
            })
            .catch(error =>
            console.log(error)
            
        )
    }




    return (
        <div className=''>
            <header>
                <Link to="/" className="flex justify-center items-center  p-2">

                    <p className="font-bold text-2xl text-[#2E86AB]">NearNook</p>
                </Link>
            </header>
            <hr />

            <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center text-[#2E86AB] ">Login to your account</h2>
                <p className="text-sm text-center text-gray-600">Dont have account?
                    <Link to='/merchant' rel="noopener noreferrer" className="focus:underline hover:underline text-[#2E86AB]">Sign up here</Link>
                </p>
               
                
                <form onSubmit={handleMerchantSignIn} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="joynal@gmail.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-lime-600" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-lime-600" />
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold hover:scale-105 cursor-pointer  bg-[#2E86AB] rounded-full text-gray-50">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default MerchantLogin;