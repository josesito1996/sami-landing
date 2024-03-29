import React from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logoTipoIcon from '../images/logo-tipo.svg'

function NavBar() {
  // cambio de color del navbar con Jquery
  $(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 10) {
        $(".navbar").css("background" , "#8E122E");
      }
      else{
        $(".navbar").css("background" , "transparent");  	
      }
    })
  })

  return (
    <div className="container-navbar">
    <Navbar clasName="navbar" id="navbar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img src={logoTipoIcon} alt="logo Sami" />
        </Navbar.Brand>
        <button className="btnLogin">Iniciar sesión</button>
        <Navbar.Toggle className="btnMenu" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink exact to="/404">¿Por qué Sami?</NavLink>
            <NavLink exact to="/404">Sami Insights</NavLink>
            <NavLink exact to="/404">Solicita un Demo</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
};

export default NavBar;
