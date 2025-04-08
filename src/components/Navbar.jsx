
import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <header className="p-4 w-3/4 px-20 mx-auto lg:px-32 ">
            <div className="container flex justify-between items-center h-16 mx-auto ">
                <NavLink to="/" className="flex justify-center items-center  p-2">

                    <p className="font-bold text-2xl text-[#2E86AB]">NearNook</p>
                </NavLink>
                <ul className="items-stretch  space-x-3 md:flex">



                    <NavLink to="/signIn">
                        <button className="btn bg-[#2E86AB] text-white rounded-full max-h-8">Sign In</button>
                    </NavLink>
                    <NavLink to="/signUp">
                        <button className="btn bg-[#2E86AB] text-white rounded-full max-h-8">Sign Up</button>
                    </NavLink>
                </ul>

            </div>
        </header>
    );
};

export default Navbar;