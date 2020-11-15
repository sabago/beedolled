import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/index.css";

export class SpecialOffers extends React.Component {
    render(){
        return(
          <div id="special-offers">
            <h2 className="special-offers-h2">SPECIAL OFFERS</h2>
            <Container fluid={true} className="offers-container">
              <Row>
                <Col lg={4}>
                  <img className="special-offers-img" src="https://res.cloudinary.com/sabago/image/upload/c_scale,h_388,w_600/v1602697447/newdoll_ryyshu.jpg"/>
                  <h2 className="heavy-text"><span className="black-text">5% OFF NEW </span>GUEST OFFER</h2>
                  <h2 className="black-text"> New to Beedolled? Call or book an appointment today and get 5% OFF!</h2>
                </Col>
                <Col lg={4} className="refer-col">
                  <img  className="special-offers-img" src="https://res.cloudinary.com/sabago/image/upload/c_scale,w_560/v1602697788/beefriend_ldxlyr.jpg"/>
                  <h2 className="heavy-text"><span className="black-text">REFER</span> A FRIEND</h2>
                  <h2 className="black-text">We love our guests and want more just like you! When you refer a friend to Beedolled, we’ll give you a 5% off as our way of saying thanks.</h2>
                </Col>
                <Col lg={4}>
                  <img  className="special-offers-img" src="https://res.cloudinary.com/sabago/image/upload/c_scale,h_388,w_600/v1602698126/beeworking_evbriu.jpg"/>
                  <h2 className="heavy-text"><span className="black-text">BOOK ONLINE</span> & GIFT CARDS</h2>
                  <h2 className="black-text">Ready to book? Use our app to schedule your next service. We look forward to taking care of you! </h2>
                </Col>
              </Row>
            </Container>
          </div> 
        )
    }  
}