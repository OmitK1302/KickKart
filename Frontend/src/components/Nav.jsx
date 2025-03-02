import { useState } from "react";
import { hamburger, cross, cart } from "../assets/icons";
import { KickCartLogo } from "../assets/images";
import { navLinks } from "../constants";
// import { cross, cart } from "../assets/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice"

const Nav = () => {

    const[showNav, setShowNav] = useState(false);
    const {cartItems} = useSelector((state) => state.cart);
    const {userInfo} = useSelector((state) => state.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [logoutApiCall] = useLogoutMutation();
    console.log(userInfo);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = async () => {
        // localStorage.removeItem("userInfo"); // Clear user data from local storage
        // window.location.reload(); // Refresh to apply changes
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login');

        } 
        catch (error) {
            console.log(error);
        }
        
    };

    // console.log(cartItems);

  return (
    <header className="px-2 sm:padding-x py-8 absolute z-20 w-full">
        <nav className="flex justify-between items-center max-container">
            <Link to="/" >
                <img src={KickCartLogo} alt="Logo" width={260} height={29}></img>
            </Link>

            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map(navItem => 
                    <li key={navItem.label} >
                        <Link to={navItem.href} className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black hover:font-semibold">
                            {navItem.label}
                        </Link>
                    </li>
                )}
            </ul>

            
            <div className="flex items-center gap-5">
                {userInfo ? (
                    <div className="relative">
                        {/* User Name as a Clickable Button */}
                        <button 
                            onClick={() => setDropdownOpen(!dropdownOpen)} 
                            className="font-montserrat text-lg text-slate-gray hover:text-black hover:font-semibold"
                        >
                            {userInfo.name.split(" ")[0]}
                        </button>

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                    Profile
                                </Link>
                                <button 
                                    onClick={handleLogout} 
                                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <Link to="/login" className="font-montserrat text-lg text-slate-gray hover:text-black hover:font-semibold">
                            <div className="border-2 border-coral-red text-coral-red font-bold p-1 text-sm sm:text-lg rounded-3xl">Login</div>
                        </Link>
                    </div>
                )}

                
                <div>
                    <Link to="/cart" className="font-montserrat text-lg text-slate-gray hover:text-black hover:font-semibold flex"><img src={cart} width={35} alt="cart Logo" /><div className="font-bold text-coral-red">{cartItems.length > 0 && cartItems.length}</div></Link>
                </div>
                <button className="lg:hidden w-6" onClick={() => setShowNav(!showNav)}><img src={(showNav)? cross : hamburger} alt="hamburger" /></button>
            </div>
            
            <ul className={`absolute right-0 top-20 flex flex-col gap-5 w-32 bg-coral-red justify-center items-center py-5 rounded-md text-primary list-none lg:hidden ${showNav ? "block" : "hidden"}`}>
                {navLinks.map(navItem => 
                    <li key={navItem.label}>
                        <Link to={navItem.href} className="font-montserrat leading-normal text-lg">
                            {navItem.label}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    </header>
  )
};

export default Nav;