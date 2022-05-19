import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
      //removed apartment_listings_route
    } = this.props;
    console.log("logged_in:", logged_in);
    console.log("current_user:", current_user);
    return (
      <>
      <h1>Apartments for you!</h1>
        <Nav>
          <NavItem>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </NavItem>
          {logged_in && (
            <NavItem>
              <a href={sign_out_route} className="nav-link">
                Sign Out
              </a>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <a href={sign_in_route} className="nav-link">
                Sign In
              </a>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <a href={new_user_route} className="nav-link">
                Sign Up
              </a>
            </NavItem>
          )}
            <NavItem>
              <NavLink to="/apartmentindex" className="nav-link">
                View Apartment Listings 
              </NavLink>
            </NavItem>
        </Nav>  
      </>
    )
  }
}
export default Header









