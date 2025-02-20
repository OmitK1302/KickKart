import { useState } from "react";
import { hamburger, cross, cart } from "../assets/icons";
import { KickCartLogo } from "../assets/images";
import { navLinks } from "../constants";
// import { cross, cart } from "../assets/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {

    const[showNav, setShowNav] = useState(false);
    const {cartItems} = useSelector((state) => state.cart);

    // console.log(cartItems);

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
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
                <div>
                    <Link to="/login" className="font-montserrat text-lg text-slate-gray hover:text-black hover:font-semibold">
                        <div className="bg-coral-red text-white p-3 rounded-3xl">Login</div>
                    </Link>
                </div>
                <div>
                    <Link to="/cart" className="font-montserrat text-lg text-slate-gray hover:text-black hover:font-semibold flex"><img src={cart} width={35} alt="cart Logo" /><div className="font-bold text-coral-red">{cartItems.length > 0 && cartItems.length}</div></Link>
                </div>
                <button className="lg:hidden" onClick={() => setShowNav(!showNav)}><img src={(showNav)? cross : hamburger} alt="hamburger" width={25}/></button>
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