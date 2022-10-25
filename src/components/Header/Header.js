import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div>
            <nav className='nav'>
                <img src={logo} alt="" />
                <div>
                    <Link to={"/shop"}>Shop</Link>
                    <Link to={"/order"}>Order</Link>
                    <Link to={"/inventory"}>Manage Inventory</Link>
                    <Link to={"/about"}>About</Link>
                    {
                        user?.uid?
                            <Link onClick={logOut}>Log Out</Link>
                            :
                            <>
                                <Link to={"/login"}>Login</Link>
                                <Link to={"/signup"}>Sign Up</Link>
                            </>
                    }
                    <span className='welcome'>welcome {user?.email}</span>
                </div>
            </nav>
        </div>
    );
};

export default Header;