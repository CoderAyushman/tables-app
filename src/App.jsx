import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {


  return (
    <>
    
      
      {/* <Navbar  expand="lg" bg="primary" data-bs-theme="dark">
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="reponsive-navbar-nav">
          <Navbar.Brand href="/">Tables</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/single-table">singleTable</Nav.Link>
            <Nav.Link href="/multiples-tables">multipleTables</Nav.Link>

          </Nav>
          <Navbar.Toggle/>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Tables</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/single-table">singleTable <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/multiple-tables">multipleTables</a>

    </div>
  </div>
</nav>

     
      <Outlet/>
    </>
  )
}

export default App
