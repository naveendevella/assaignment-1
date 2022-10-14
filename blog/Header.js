import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar'
const Header=()=>{
    return(
        <div>
            <div className='header'>
                <Navbar/>
                <Logo/>
            </div>
        </div>
    )
}
export default Header;