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
//import Content from '../components/content';
import { Col, Row, Button } from 'react-bootstrap';
import Axios from 'axios';
import AppStoreDownload from '../images/portfolio/demos/downloadOn_appStore.png';
import PlayStoreDownload from '../images/portfolio/demos/downloadOn_playStore.png';
import './styles.css';

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
                <p className="text-white mb-4">I am a Full Stack Software Engineer based in Los Angeles, CA. 
                I enjoy creating web and mobile applications as well as experiementing with new technologies to advance my skills. 
                My goal is to always build products that provide users with a satisfying experience.
                I currently work in the EdTech space working on the web and mobile application Spatial Vis.</p>
                <div className="row">
                  <i className="fab col-md-4 fa-8x fa-js-square mb-4"></i>
                  <i className="fab col-md-4 fa-8x fa-react mb-4"></i>
                  <i className="fab col-md-4 fa-8x fa-angular mb-4"></i>
                  <i className="fab col-md-4 fa-8x fa-node mb-4"></i>
                  <i className="fab col-md-4 fa-8x fa-apple mb-4"></i>
                  <i className="fab col-md-4 fa-8x fa-android mb-4"></i>
                </div>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services" onClick={Scroller.handleAnchorScroll}>My skills</a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">Skills</h2>
            <hr className="divider my-4"/>
            <Row style={{ textAlign: 'center', marginBottom: '25px' }}>
              <Col><i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Front End</h3>
                  <p className="text-muted mb-0">React.js</p>
                  <p className="text-muted mb-0">Angular/AngularJS</p>
                  <p className="text-muted mb-0">JavaScript</p>
                  <p className="text-muted mb-0">TypeScript</p></Col>
              <Col><i className="fas fa-4x fa-server text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Back End</h3>
                  <p className="text-muted mb-0">Node.js</p>
                  <p className="text-muted mb-0">Go</p>
                  <p className="text-muted mb-0">Express</p></Col>
              <Col><i className="fas fa-4x fa-mobile-alt text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Mobile</h3>
                  <p className="text-muted mb-0">Swift</p>
                  <p className="text-muted mb-0">Kotlin</p>
                  <p className="text-muted mb-0">Xamarin.Forms</p>
                  <p className="text-muted mb-0">React Native</p></Col>
            </Row>
            <Row style={{ textAlign: 'center' }}>
              <Col><i className="fas fa-4x fa-database text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Database</h3>
                  <p className="text-muted mb-0">PostgreSQL</p>
                  <p className="text-muted mb-0">SQL</p>
                  <p className="text-muted mb-0">Microsoft SQL Server</p>
                  <p className="text-muted mb-0">MongoDB</p></Col>
              <Col><i className="fas fa-4x fa-cloud text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Cloud</h3>
                  <p className="text-muted mb-0">AWS (S3, Elastic Beanstalk, CloudFront)</p>
                  <p className="text-muted mb-0">Microsoft Azure</p></Col>
              <Col><i className="fas fa-4x fa-terminal text-primary mb-4"></i>
                  <h3 className="h4 mb-2">CI/CD</h3>
                  <p className="text-muted mb-0">Git</p>
                  <p className="text-muted mb-0">Azure DevOps Server</p></Col>
            </Row>
          </div>
          <div className="container text-center mt-4">
            <a className="btn btn-primary btn-xl js-scroll-trigger align-self-baseline align-center" href="#experience" onClick={Scroller.handleAnchorScroll}>My Professional Projects</a>
          </div>
        </section>

        <section className="page-section bg-primary" id="experience">
          <div className="container" style={{ textAlign: 'center' }}>
            <Row>
              <Col>
                <h2 className="text-white mt-0" style={{ textAlign: 'center' }}>Professional Projects</h2>
                <hr className="divider light my-4"/>
              </Col>
            </Row>
            <Row style={{ placeContent: 'start', marginBottom: '30px' }}>
              <div>
                <div style={{ display: 'flex', placeContent: 'start' }}>
                  <h4 className="text-white">Spatial Vis (React.js, Swift, Kotlin, Go)</h4>
                </div>
                <div style={{ textAlign: 'start' }}>
                  <h5 className="text-white">is a 2D and 3D sketching app with a grading algorithm that gives helpful feedback.</h5>
                  <li className="text-white">Lead engineer for Spatial Vis across all three platforms (Web, iOS & Android) using React, Swift, and Kotlin.</li>
                  <div style={{ display: 'inline' }}>
                    <Button style={{ backgroundColor: 'hsl(103, 79%, 47%)', marginLeft: '15px' }} className="web-app-button" onClick={() => { window.open('https://spatialvis.egrove.education/', '_blank', 'noopener noreferrer'); }}>
                      Spatial Vis Web
                    </Button>
                    <Button className="mobile-app-link" onClick={() => { window.open('https://apps.apple.com/us/app/spatial-vis/id1495249170', '_blank', 'noopener noreferrer'); }}>
                      <img src={AppStoreDownload} width="312" height="102" alt="AppStore" />
                    </Button>
                    <Button className="mobile-app-link" onClick={() => { window.open('https://play.google.com/store/apps/details?hl=en_US&id=education.egrove.spatialvis', '_blank', 'noopener noreferrer'); }}>
                      <img src={PlayStoreDownload} width="312" height="102" alt="PlayStore" />
                    </Button>
                  </div>
                </div>
              </div>
            </Row>
            <Row style={{ placeContent: 'start', marginBottom: '30px' }}>
              <div>
                <div style={{ display: 'flex', placeContent: 'start' }}>
                  <h4 className="text-white">Wordable (Xamarin.Forms)</h4>
                </div>
                <div style={{ textAlign: 'start' }}>
                  <h5 className="text-white">connects via Bluetooth to a wearable device to collect, store and visualize user data.</h5>
                  <li className="text-white">Leading development of the cross-platform (iOS & Android) mobile application using Xamarin.Forms with C#.</li>
                  <div style={{ display: 'inline' }}>
                    <Button className="mobile-app-link" disabled onClick={() => { window.open('https://apps.apple.com/us/app/spatial-vis/id1495249170', '_blank', 'noopener noreferrer'); }}>
                      <img src={AppStoreDownload} width="312" height="102" alt="AppStore" />
                    </Button>
                    <Button className="mobile-app-link" disabled onClick={() => { window.open('https://play.google.com/store/apps/details?hl=en_US&id=education.egrove.spatialvis', '_blank', 'noopener noreferrer'); }}>
                      <img src={PlayStoreDownload} width="312" height="102" alt="PlayStore" />
                    </Button>
                    <div style={{ marginLeft: '15px' }}>Currently offline</div>
                  </div>
                </div>
              </div>
            </Row>
            <Row style={{ placeContent: 'start', marginBottom: '30px' }}>
              <div>
                <div style={{ display: 'flex', placeContent: 'start' }}>
                  <h4 className="text-white">AVEVA Insight (Angular, .NET Core, Microsoft SQL Server)</h4>
                </div>
                <div style={{ textAlign: 'start' }}>
                  <h5 className="text-white">is a secure, managed software-as-a-service (SaaS) solution for collecting, storing, and visualizing industrial data for faster, smarter business decisions.</h5>
                  <li className="text-white">Designed, developed, and maintained the company’s cross-browser, cross-platform, and cloud-based website.</li>
                  <div style={{ display: 'inline' }}>
                    <Button style={{ backgroundColor: '#4d5ee0', marginTop: '15px', marginLeft: '15px' }} className="web-app-button" onClick={() => { window.open('https://online.wonderware.com/', '_blank', 'noopener noreferrer'); }}>
                      AVEVA Insight
                    </Button>
                  </div>
                </div>
              </div>
            </Row>
          </div>
          <div className="container text-center mt-4">
            <a className="btn btn-light btn-xl js-scroll-trigger" href="#portfolio" onClick={Scroller.handleAnchorScroll}>My Side Projects</a>
          </div>
        </section>

        <section className="page-section bg-dark" id="portfolio">
          <div className="container-fluid p-0">
            <h2 className="text-white text-center mt-0">Side Projects</h2>
            <hr className="divider light my-4"/>
            <div className="row no-gutters">
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
            <a className="btn btn-light btn-xl js-scroll-trigger" href="#contact" onClick={Scroller.handleAnchorScroll}>Contact Me</a>
          </div>
        </section>

        
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch</h2>
                <hr className="divider my-4"/>
                <p className="mb-5">
                  I am currently looking for Full Stack Software Engineer opportunities. 
                  To contact me, please email me at: yashkelkar01@gmail.com.
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
