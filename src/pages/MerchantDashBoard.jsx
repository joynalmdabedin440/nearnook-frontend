
import { Outlet } from 'react-router';
import VendorNavbar from '../components/VendorNavbar';
import { useState } from 'react';


const MerchantDashboard = () => {

    const [merchantInfo, setMerchantInfo] = useState(null)


    return (
        <div>
            <VendorNavbar setMerchantInfo={setMerchantInfo} />

            <Outlet context={{merchantInfo} } />



           

        </div>
    );
};

export default MerchantDashboard;