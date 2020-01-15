
import React,{ useState } from 'react'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Register from './Register'
import Login from './Login'
import App from '../App'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';



export default function Routing() {

    
    return (
        <Router>
        
        <div>
            <div className="Main">
        <Navbar light expand="md" >

        <Nav className="mr-auto Navbar" navbar>

            <NavItem ><Link style={{ textDecoration: 'none' }}  to= '/'>Home</Link></NavItem>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <NavItem><Link style={{ textDecoration: 'none'}}  to= '/about'>About</Link></NavItem>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <NavItem><Link  style={{ textDecoration: 'none'}} to= '/contact'>Contact</Link></NavItem>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <NavItem><Link style={{ textDecoration: 'none'}}  to= '#'>Blog</Link></NavItem>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
            <UncontrolledDropdown nav inNavbar className="dropdown">
              <DropdownToggle nav caret style={{ color: 'blue'}}>
                Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavItem><Link style={{ textDecoration: 'none'}}  to= '/Login'>Login</Link></NavItem>
                </DropdownItem>
                <DropdownItem>
                <NavItem><Link style={{ textDecoration: 'none'}}  to= '/Register'>Register</Link></NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>

           
            
            </Navbar>
            </div>

            <Switch>

                <Route exact path ='/'> <App /> </Route>

                <Route path ='/about'><About /></Route>

                <Route path = '/contact'> <Contact /></Route>

                <Route path = '/Register'> <Register /></Route>

                <Route path = '/Login'> <Login /></Route>
            </Switch>

        </div>

        </Router>
        
    )
}
