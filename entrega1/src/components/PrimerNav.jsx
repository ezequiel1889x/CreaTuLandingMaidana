
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';



function PrimerNav(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light style={ { backgroundColor: '#966', borderRadius: 15 } }>
        <NavbarBrand href="/" className="me-auto">
          <a href="#" style={{color: 'green'}}> {props.titulo} </a>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar >
          <Nav navbar >
            <NavItem>
              <NavLink style={ {color: 'green'}} href="/components/">{props.html1}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={ {color: 'green'}}   href="https://github.com/reactstrap/reactstrap">
                {props.html2}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default PrimerNav;