import React, { useState } from 'react';
import logo from '../../asset/images/logo_without_bg.png';
import {NavLink} from 'react-router-dom';


const MenuItem = () => {
    return(
        <>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/search-blood">Blood Search</NavLink>
            <NavLink to="/about">About Donation</NavLink>
            <NavLink to="/login">Log-in</NavLink>
            <NavLink to="/signup">Sign-Up</NavLink>
        </>
    )
}

export const Navigation = () => {
    const [menuStatus , updateMenuStatus] = useState(false);
    return ( 
        <React.StrictMode>
            <div className="nav">
                <div className="nav-logo">
                    <NavLink to="/"><img src={logo} alt="logo" /></NavLink> 
                </div>
                
                <div className="nav-items">

                    {
                        (window.innerWidth <= 768) ?

                        <div className={(menuStatus)? "menu open" : "menu" } onClick={()=>{updateMenuStatus(!menuStatus)}}>
                            <div className="menu-bar bar1"></div>
                            <div className="menu-bar bar2"></div>
                            <div className="menu-bar bar3"></div>
                        </div>

                        :
                        
                        <MenuItem />
                    }
                </div>
            </div>
            {/* menu item for smaller size */}
            
            { 
                (menuStatus)?
                    <div className='menu-items-sm'>
                        <MenuItem />
                    </div>
                : <></> 
            }
            
        </React.StrictMode>
    );
}

export default Navigation;