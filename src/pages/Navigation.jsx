import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '/OIP.jpg'
import '../pages/Navigation.css'

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" className="" style={{ backgroundColor: 'black' }}>
        <Container className='container1'>
          <img src={logo} height={50} width={50} style={{ borderRadius: "50%" }}></img>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white', backgroundColor: "white" }}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto link" style={{ gap: '20px'}}>
              <NavLink to="/" className="nav-link hover" style={{ color: 'white' }}>Home</NavLink>
              <NavLink to="/product" className="nav-link" style={{ color: 'white' }}>Product</NavLink>
              <NavLink to="/contact" className="nav-link" style={{ color: 'white' }}>Contact</NavLink>
              <NavLink to="/create" className="nav-link" style={{ color: 'white' }}>Create</NavLink>
              <NavLink to="/login" className="nav-link" style={{ color: 'white' }}>Login</NavLink>
              <NavLink to="/cart" className="nav-link"> <img height={35} width={35} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB3ElEQVR4nO2XP0sDMRiHf4ro6izqB3ARHNpBFEG4okJvUsF20cniHxTEReUG0bwngpSaHH4AHfwAbq7iJDgJjlp111EhkquDhTrYJpcG7oEsBy/5PXnfBA5ISUlJaR9KhRmUClWsLUqEOxKCJDj7AmeP4LSNIOhCW7NcfEapKOO1vlgTqF8XcFxAQlAObcvywlQsocIf7TYW4HQOp4gORv/ohJ0VseH/CUjZAUFP1oOL+EG5aq4LnJWthxckcRpONicgwjHr4QW7j6ehKYKgE4K9WB6fIlqCs4q98FTFZdDdmsApG7cosIWWUWPE6dXC6Lzj5KQXWhCMWzj9Y2gjYhMJC3zijAb1CcSvUaKnfw7tJClQCUfcFeB0rT98kgLR4bS7Apwe4vvmrIBgS2bCJyLA3lAu97gpwKkKfuiZC99IwDmE6wKcvdcJlKkfTiHotn5u2RX4/gCcIaJV4y+RUdSfEac7dwUUlbDPqEQiqE4ItgJONxD04Z7AD0Ozs91ZLx9mvfxrJue/ZHJ5Ut9guFYbatNszpe/l/pmulYb6vTUxvObe3Juc68WxPPfTNdqQ7VebawCzG3UQmQ8v2q6VhuNx8Bnpmu1oS6dClK7hP+/xJkma1NSUlLQFnwDX7MckiLnGesAAAAASUVORK5CYII=" alt="shopping-cart--v1"></img> </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
