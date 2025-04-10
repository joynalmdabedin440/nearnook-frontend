
import { useEffect, useState } from 'react';
import ExploreNavbar from '../components/ExploreNavbar';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router';

const Explore = () => {

    const [merchants, setMerchants] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/merchant')
            .then(res => res.json())
            .then(data => {

                setMerchants(data)


            })
    }, [])


    return (
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
                    
                </div>

            </section>


        </div>
    );
};

export default Explore;