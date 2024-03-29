import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'
import Pdf from "../Yash-Kelkar-Resume.pdf";
import profilePicture from '../images/portfolio/profile/yash.jpg';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          <div className="container">
            <a className="btn btn-primary"href = {Pdf} target = "_blank" rel="noopener noreferrer">Resume</a>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                           items={["page-top", "about", "services", "portfolio", "contact"]}
                           currentClassName="active" rootEl={"#mainNav"} offset={-75}>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#page-top" onClick={Scroller.handleAnchorScroll}>Home</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#about" onClick={Scroller.handleAnchorScroll}>About</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#services" onClick={Scroller.handleAnchorScroll}>Skills</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#experience" onClick={Scroller.handleAnchorScroll}>Professional Projects</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#portfolio" onClick={Scroller.handleAnchorScroll}>Side Projects</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#contact" onClick={Scroller.handleAnchorScroll}>Contact</Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead" id="page-top">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">Yash Kelkar</h1>
                <hr className="divider my-4"/>
                <img className="img-profile" src={profilePicture} alt="loading..." style={{ height: '311px', width: '345px', marginBottom: '20px' }}></img>
              </div>
              <div className="col-lg-8 align-self-baseline">
                <h4 className="text-white font-weight-light mb-5">Full Stack Software Engineer</h4>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about" onClick={Scroller.handleAnchorScroll}>About Me</a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
