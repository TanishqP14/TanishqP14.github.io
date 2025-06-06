import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { forwardRef } from 'react';

const NavBar = forwardRef((prop, ref) => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const updateLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Navbar ref={ref} expand="lg" className={scrolled ? "scrolled" : ""} style={{padding: "0px 0", backgroundColor: "#121212"}}>
        <Container>

            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-top" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => updateLink("home")}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => updateLink("skills")}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => updateLink("projects")}>Projects</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href="#"><img src={navIcon1} alt="f" /></a>
                        <a href="#"><img src={navIcon2} alt="i" /></a>
                        <a href="#"><img src={navIcon3} alt="g" /></a>
                    </div>
                    <button className="vvd" onClick={() => console.log(ref)}><span>Contact</span></button>
                </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
});

export default NavBar;