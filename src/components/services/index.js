import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./styles/index.css";

export class Services extends React.Component{
    render() {
        return(
          <div id="services">
            <Container fluid={true} className="services-container">
              <Row className="services-row" style={{display:"flex", flexDirection:"column"}}>
                <Col md={6} className="services-col">
                  <div className="hex-image hex3" 
                    style={{background:`URL("https://res.cloudinary.com/sabago/image/upload/v1602633470/beedoll3_dgmgrv.jpg")`
                    }}>
                    <h2 >Eyebrow <br/>waxing</h2>
                  </div>
                </Col>
                <Col md={6} className="services-col">
                  <div className="hex-image hex3" 
                    style={{background:`URL("https://res.cloudinary.com/sabago/image/upload/v1602630526/beedoll1_hvrwsc.jpg")`,
                    backgroundSize:"cover"
                  }}>      
                  </div>
                </Col>
              </Row>
              <Row className="services-row hex" style={{display:"flex", flexDirection:"column", paddingLeft:"40%", marginTop:"-980px"}}>
                <Col md={4} className="services-col2">
                  <div className="hex-image hex2"
                    style={{
                      background: `URL("https://res.cloudinary.com/sabago/image/upload/v1602629788/beeMakeup_r1baiq.jpg")`,
                      backgroundSize: "cover"
                    }}>
                    <h2 id="makeup-h2">Casual&Bridal <br/>Makeup</h2>
                  </div>
                </Col>
                <Col md={4} className="services-col2">
                  <div className="hex-image hex3" 
                     style={{ background:`URL("https://res.cloudinary.com/sabago/image/upload/v1602628856/beeAtWork_bhw47v.jpg")`,
                      backgroundSize:"cover",
                      display: "flex",
                      alignItems:"center",
                      justifyContent:"center"
                    }}>
                    <h2 id="services-h2">SERVICES</h2>
                  </div>
                </Col>
                <Col md={4} className="services-col2">
                  <div className="hex-image hex3" 
                    style={{background:`URL("https://res.cloudinary.com/sabago/image/upload/v1602631315/beeMicroblade_dwnppf.jpg")`,
                    backgroundSize:"cover",
                    display: "flex",
                    justifyContent:"center"
                  }}>
                    <h2 id="microblading-h2">Miroblading</h2>
                  </div>
                </Col>
              </Row>
              <Row className="services-row hex" id="argh" style={{display:"flex", flexDirection:"column", marginRight:'-210%', marginTop:"-980px"}}>
                <Col md={6} className="services-col2">
                  <div className="hex-image hex4" 
                    style={{background:`URL("https://res.cloudinary.com/sabago/image/upload/v1602633906/beedoll4_ilb2oh.jpg")`
                    }}>
                    <h2>Eyebrow <br/> Tinting</h2>
                  </div>
                </Col>
                <Col md={6} className="services-col2">
                  <div className="hex-image hex3" 
                    style={{background:`URL("https://res.cloudinary.com/sabago/image/upload/v1602630540/beedoll2_malcj1.jpg")`,
                    backgroundSize: "cover"
                  }}></div>
                </Col>
              </Row>
            </Container>
      
            <Container fluid={true} className="services-container2">
              <Row>
                <Col md={4} lg={4} >
                  <div className="services-container2-div">
                    <h2 className="before-h2">BEFORE</h2>
             
                    <img
                      id="before-microblade-img"
                      src="https://res.cloudinary.com/sabago/image/upload/v1602635927/beforemicroblade_px7auu.jpg"
                      alt="before microblading"
                      />
                    </div>
                </Col>
                <Col md={3} lg={3} className="microblade-experts-col">
                  <h2 className="experts-h2">We are <br/>experts at <br/> Microblading</h2>
                </Col>
                <Col md={5} lg={5}>
                  <div className="services-container2-div">
                    <h2 className="after-h2">AFTER</h2>
                    <img 
                      src="https://res.cloudinary.com/sabago/image/upload/v1602636365/aftermicroblade_riz7mc.jpg"
                      alt="after microblading"
                      />
                  </div>
                </Col>
              </Row>
            </Container>
            <h2 className="services-book-h2"><a href="#book-online" className="services-book"> BOOK NOW</a></h2>   
          </div>
        );
    }
}
