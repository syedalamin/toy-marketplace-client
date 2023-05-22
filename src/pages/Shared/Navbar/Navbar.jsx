import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    
    const handleLogoOut =()=>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }

    const [hover, setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover);
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <li><Link to='/myToys'>My Toys</Link></li>
        <li><Link to='/addAToy'>Add A Toy</Link></li>
        <li><Link to='/blog'>Blogs</Link></li> 
    </>
    return (
        <div className="w-10/12 mx-auto">
            <nav className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <h2 className="btn btn-ghost normal-case text-2xl">Syed Alamin</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {hover && <h2 className="mr-3 text-green-600 font-bold">{user.displayName}</h2>}
                    {
                        user && <img onMouseEnter={onHover} onMouseLeave={onHover} className="max-5 rounded-full mr-4 border-2" style={{width: '35px', height: '35px'}} src={user.photoURL} alt="" />
                    }
                    {
                        user ? <button onClick={handleLogoOut}  className="btn btn-sm bg-orange-400">Log Out</button> :
                        <Link to='/login' className="btn btn-sm bg-orange-400"><button>Login</button></Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;