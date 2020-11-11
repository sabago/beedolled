import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/index.css';

export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                 <span ><h2 className="text-red" >
                        So how can we doll you up?
                    </h2></span>
                    <div className="footer-flex-div">
                        <div className="footer-col">
                            <p style={{ color: "white", writingMode: "vertical-rl", textOrientation: "mixed"}}>
                                <a className="footer-link" href="/#services">
                                    Services
                                </a>
                            </p>
                        </div>
                        <div className="footer-col2">
                        <p style={{color:"white", textAlign:"left"}}>
                                Contact<br/>
                                +(256)078-274-6341 <br/>
                                brendananj@gmail.com
                            </p>
                        </div>
                        <div className="footer-col3">
                        <p style={{color:"white", textAlign:"right"}}>
                                Krish Mall<br/>
                                6th Floor<br/>
                                Bugolobi
                            </p>
                        </div>
                    </div>
                <small style={{color:"white"}}>&copy; Copyright 2020, Beedolled</small>
          </footer>
        )
    }
}

