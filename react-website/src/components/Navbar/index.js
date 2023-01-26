import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <img src={require('../../images/logo.png')} style={{height: 80}}/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    Sobre
                </NavLink>
                <NavLink to="/services" activeStyle>
                    Servicos
                </NavLink>
                <NavLink to="/contact-us" activeStyle>
                    Contato
                </NavLink>
                <NavLink to="/sign-up" activeStyle>
                    piroca
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sigin" activestyle> Central do Cliente</NavBtnLink>
                </NavBtn>
            </NavMenu>
            {/* <NavBtn>
                <NavBtnLink to="/sigin">Central do Cliente</NavBtnLink>
            </NavBtn> */}
        </Nav>
    </>
  );
};

export default Navbar;