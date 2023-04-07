import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartArrowDown } from 'react-icons/fa';
import '../css/header.css';

const Header = ({size, setIsHome}) => {

  return (
    <div className='sticky-header'>
        <div className='header'>
            <Navbar>
                <Container className="container-a">
                    <p>Lorem Dummy Store</p>
                    <ul className="justify-content-end">
                        <li><Nav.Link href="#home" onClick={() => setIsHome(true)}>Home</Nav.Link></li>
                        <li><Nav.Link href="#about">About</Nav.Link></li>
                        <li><Nav.Link href="#contact">Contact</Nav.Link></li>
                    </ul>
                </Container>
            </Navbar>
            <Navbar>
                <Container className="container-b">
                    <div>
                        <p className="fw-light">Thanks for checking us out. You are on the Lorem Dummy Store Tech closet!</p>
                    </div>
                    <div>
                        <Nav.Link onClick={() => setIsHome(false)}>
                            <div className='order-count text-white'>{size}</div>
                            <FaCartArrowDown className='shop-cart text-warning'/>                    
                        </Nav.Link>
                    </div>    
                </Container>
            </Navbar>
        </div>        
    </div>
    
  )
}

export default Header;