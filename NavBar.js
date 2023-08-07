import React from 'react';
import { Link } from 'react-router-dom';

const NavBar=()=>{
    return (
        <div>
            <ul className='nav-ul'>
            <li className='nav-box'><Link to = "/">Home Page</Link></li>
            <li><Link to = "/add">AddProduct</Link></li>
            <li><Link to = "/update">UpdateProduct</Link></li>
            <li><Link to = "/logout">Logout</Link></li>
            <li><Link to = "/profile">Profile</Link></li>
            <li><Link to = "/signup">SignUp</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;