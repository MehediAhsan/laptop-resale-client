import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import logo from '../../assets/logo.png';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }

    const menu = <React.Fragment>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
        <li className='font-semibold'><Link to='/dashboard'>Dashboard</Link></li>
        { user?.uid ? 
            <>
            
            <li><button className='btn btn-primary rounded text-white btn-outline' onClick={handleLogOut}>SignOut</button></li>
            </>
            :
            <li><Link className='btn btn-primary rounded text-white btn-outline' to='/login'>Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 w-full sticky top-0 z-50 flex justify-between shadow-[0_2px_1px_0px_rgb(0,0,0,0.1)]">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {menu}
            </ul>
            </div>
            <Link to='/' className="flex justify-center items-center normal-case text-xl">
                <img className='w-8 md:w-14' src={logo} alt="" />
                <span className="ml-2 text-lg md:text-2xl font-bold text-primary font-Berkshire">
                Laptop<span className='text-neutral'>ResaleZ.</span>
                </span>
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                {menu}
            </ul>
        </div>
        <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        </div>
    );
};

export default Header;