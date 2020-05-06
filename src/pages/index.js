import React from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
//import DemoModal from "../components/portfolio/demo";
import FlipCard from "../components/portfolio/flipcard";
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
//import Content from '../components/content';
import Axios from 'axios';

export default class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
    this.state = {
      modalShow: false,
      modalCurrent: 0,
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
    this.project = {
      employeeBenefits: {
        index: 1,
        name: 'Employee Benefits Calculator',
        tech: ['Angular', 'Angular Material UI', 'Express | NodeJS', 'MongoDB'],
        source: 'https://github.com/ykelkar/employee-benefits-calculator',
        site: 'https://benefitscostcalculator.netlify.app/',
        desc: 'Calculator for the cost of employee benefits which is stored in MongoDB'
      },
      fillMyPlate: {
        index: 2,
        name: 'Fill My Plate',
        tech: ['VanillaJS', 'Webpack | Babel', 'CSS3', 'HTML5'],
        source: 'https://github.com/ykelkar/fill-my-plate',
        site: 'https://fillmyplate.netlify.app/',
        desc: 'Find and record cooking recipes with recipe data pulled from the Forkify API'
      },
      moneyMonitor: {
        index: 3,
        name: 'Money Monitor',
        tech: ['VanillaJS', 'Webpack | Babel', 'CSS3', 'HTML5'],
        source: 'https://github.com/ykelkar/money-monitor',
        site: 'https://monitormymoney.netlify.app/',
        desc: 'Budget tracker application to keep track of your income and expenses'
      }
    }
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
    console.log(this.props);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    })
  }

  handleSubmit = (event) => {
    
    event.preventDefault();

    console.log(event.target);

    this.setState({
        disabled: true
    });

    Axios.post('http://localhost:3030/api/email', this.state)
      .then(res => {
        console.log(res);
        console.log(res.data.success);
        if(res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false
          });
        }
      })
      .catch(err => {

        console.log(err.response);

        this.setState({
          disabled: false,
          emailSent: false
        });
      });
  }
  
  render() {
    return (
      <Layout>
        <SEO title="Yash Kelkar"/>
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">About Me</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50 mb-4">I am a Front End Software Engineer with Full Stack experience based in Orange County, CA. 
                I enjoy creating web and mobile applications as well as experiementing with new technologies to advance my skills. 
                My goal is to always build products that provide users with a satisfying experience.
                In my free time I like playing sports and catching up on movies and shows.</p>
                <div className="row">
                  <i className="fab col-md-4 fa-8x fa-js-square mb-4"></i>
                  <i className="fab col-md-4 fa-8x fa-angular mb-4"></i>
                  <i className="fab col-md-4 fa-8x fa-node mb-4"></i>
                </div>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services" onClick={Scroller.handleAnchorScroll}>See my skills</a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">Skills</h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Front End</h3>
                  <p className="text-muted mb-0">Angular 2+</p>
                  <p className="text-muted mb-0">JavaScript</p>
                  <p className="text-muted mb-0">TypeScript</p>
                  <p className="text-muted mb-0">HTML5</p>
                  <p className="text-muted mb-0">CSS3 | SASS</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-server text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Back End</h3>
                  <p className="text-muted mb-0">NodeJS</p>
                  <p className="text-muted mb-0">Express</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-database text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Databases</h3>
                  <p className="text-muted mb-0">Microsoft SQL Server</p>
                  <p className="text-muted mb-0">MongoDB</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-cloud text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Deployment</h3>
                  <p className="text-muted mb-0">Git</p>
                  <p className="text-muted mb-0">Team Foundation Server (TFS)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-center">
            <a className="btn btn-primary btn-xl js-scroll-trigger align-self-baseline align-center" href="#portfolio" onClick={Scroller.handleAnchorScroll}>See my projects</a>
          </div>
        </section>

        <section className="page-section bg-dark" id="portfolio">
          <div className="container-fluid p-0">
            <h2 className="text-white text-center mt-0">Projects</h2>
            <hr className="divider light my-4"/>
            <div className="row no-gutters">
              {/*<div className="col-lg-4 col-sm-6">
                <div className="project-name text-white text-center">
                  Employee Benefits Calculator
                </div>
                <div className="portfolio-box">
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <DemoModal project={this.project.employeeBenefits}></DemoModal> 
                    <a className="btn-project" href="https://github.com/ykelkar/employee-benefits-calculator" target = "_blank" rel="noopener noreferrer">
                      <p className="btn btn-light js-scroll-trigger align-self-baseline align-center">Source Code</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="project-name text-white text-center">
                  Fill My Plate
                </div>
                <div className="portfolio-box">
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <DemoModal project={this.project.fillMyPlate}></DemoModal> 
                    <a className="btn-project" href="https://github.com/ykelkar/fill-my-plate" target = "_blank" rel="noopener noreferrer">
                      <p className="btn btn-light js-scroll-trigger align-self-baseline align-center">Source Code</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="project-name text-white text-center">
                  Budget Application
                </div>
                <div className="portfolio-box">
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <DemoModal project={this.project.moneyMonitor}></DemoModal> 
                    <a className="btn-project" href="https://github.com/ykelkar/money-monitor" target = "_blank" rel="noopener noreferrer">
                      <p className="btn btn-light js-scroll-trigger align-self-baseline align-center">Source Code</p>
                    </a>
                  </div>
                </div>
              </div>*/}
              <div className="col-lg-4 col-sm-6">
                <FlipCard project={this.project.employeeBenefits}></FlipCard>
              </div>
              <div className="col-lg-4 col-sm-6">
                <FlipCard project={this.project.fillMyPlate}></FlipCard>
              </div>
              <div className="col-lg-4 col-sm-6">
                <FlipCard project={this.project.moneyMonitor}></FlipCard>
              </div>
            </div>
          </div>
          <div className="container text-center">
            <br/>
            <a className="btn btn-light btn-xl js-scroll-trigger" href="#contact" onClick={Scroller.handleAnchorScroll}>Get in Touch </a>
          </div>
        </section>

        
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch</h2>
                <hr className="divider my-4"/>
                <p className="mb-5">
                  I am currently looking for Front End or Full Stack Software Engineer opportunities. 
                  To contact me, please email me at: ykelk002@gmail.com.
                  </p>
              </div>
            </div>  

              {/* <Content>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                    </Form.Group>

                    <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                        Send
                    </Button>

                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                </Form>
            </Content> */}

          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
