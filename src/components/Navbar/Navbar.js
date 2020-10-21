import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon } from './Navbar.elements';


export const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon>
                                ULTRA
                        </NavIcon>
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                    </NavbarContainer>
                </Nav>
            </div>
        </IconContext.Provider>
    );
};

export default Navbar;