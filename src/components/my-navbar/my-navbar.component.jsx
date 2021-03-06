import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/myPortfoliLogo4.png";
import Logo2 from "../../assets/icons/portfolioLogo.png";
import openCodeBlockImage from "../../assets/icons/openCodeBlockImage.png";
import "./my-navbar.styles.css";
  
const imagesPath = {
    minus: openCodeBlockImage,
    plus: Logo
  }
class MyNavbar extends React.Component {
  state={
    open: true
  }
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  }

  getImageName = () => this.state.open ? 'plus' : 'minus'

  render() {
    const imageName = this.getImageName();
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo2} alt="Portfolio Icon" />
            <img className="logo" src={imagesPath[imageName]} onClick={this.toggleImage} alt="Portfolio Icon" />
            
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};
}

export default MyNavbar;
