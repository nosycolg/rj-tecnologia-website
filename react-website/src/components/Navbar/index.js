import React from "react";
import { motion as m } from "framer-motion";

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
        <m.NavLink
          to="/"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <img src={require("../../images/logo.png")} style={{ height: 80 }} />
        </m.NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            Sobre
          </NavLink>
          <NavLink to="/services" activeStyle>
            Servicos
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contato
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Login
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/sigin" activestyle>
              {" "}
              Central do Cliente
            </NavBtnLink>
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
