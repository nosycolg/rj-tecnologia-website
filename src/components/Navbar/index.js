/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink
          to="/"
          activeStyle
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <img src={require("../../images/logo.png")} style={{ height: 80 }} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            Sobre
          </NavLink>
          <NavLink to="/services" activeStyle>
            Serviços
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contato
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Login
          </NavLink>
          <NavBtn>
            <NavBtnLink activestyle>
              {" "}
              Central do Cliente
            </NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
