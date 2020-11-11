import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Form, FormControl, NavDropdown } from 'react-bootstrap';
import {Navbar, Nav, Container } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Link as NextLink } from 'next/link'
import './styles/index.css';

export function Navigation() {
    const [bg, setBg] = useState("transparent");
    const [linkColor, setLinkColor] =useState("white");
  
    const listenScrollEvent = (e: any) => {
      if (window.scrollY > 50) {
        setBg("white");
        setLinkColor("black");
      } else {
        setBg("transparent");
        setLinkColor("white")
      }
    };
    useEffect(()=>{
      window.addEventListener("scroll", listenScrollEvent);
    }, []);

    const scrollWithOffset = (el: any ) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -100; 
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }
    return(
      <div className="center-navbar">
        <Navbar expand="lg" id="navbar-wrapper" fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="order-md-1 order-0">
            <Nav id="nav-wrapper" style={{backgroundColor: bg, width:"100%"}}>
                <NavHashLink key="services" smooth to="/#services" style={{color: linkColor}} activeStyle={{color:"red"}} className="menu-link">SERVICES</NavHashLink>
                <NavHashLink key="special-offers" smooth to="/#special-offers" style={{color: linkColor}} activeStyle={{color:"red"}} className="menu-link" scroll={el => scrollWithOffset(el)}>SPECIAL OFFERS</NavHashLink>
                <NavHashLink key="about" smooth to="/#about" style={{color: linkColor}} activeStyle={{color:"red"}} className="menu-link" >ABOUT</NavHashLink>
                <NavHashLink key="reviews" smooth to="/#" style={{color: linkColor}} activeStyle={{color:"red"}} className="menu-link">REVIEWS</NavHashLink>
                <Navbar.Brand id="brand-logo" className="order-md-0 mx-auto order1" href="/">
                <img
                src="https://res.cloudinary.com/sabago/image/upload/v1602533237/beedolledlogo2_rig4zr.png"
                width="110"
                margin-left="10em"
                padding-top="1rem"
                height="25"               
                className="d-inline-block align-top"
                alt="Beedolled logo"
                />
              </Navbar.Brand>
              <NavHashLink key="contact-us" smooth to="/#contact" style={{color: linkColor}} activeStyle={{color:"red"}} className="menu-link">CONTACT</NavHashLink>
              <NavHashLink key="book-online" smooth to="/#book-online" style={{color: linkColor}} activeStyle={{color:"red"}} className="menu-link" scroll={el => scrollWithOffset(el)}>BOOK ONLINE</NavHashLink>
              <Link to="/blog" style={{color: linkColor}} className="menu-link">BLOG</Link>
              <Link to="/accessories" style={{color: linkColor}} className="menu-link" >ACCESSORIES</Link>               
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        
        </div>
    )
}
