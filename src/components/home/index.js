import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BookOnline from '../book-online';
import { Navigation } from '../navigation';
import { HeroCarousel } from '../carousel';
import { Services } from "../services";
import { SpecialOffers } from '../special-offers';
import { About } from '../about';
import { Contact } from '../contact';
import { createMuiTheme } from '@material-ui/core/styles';
import { Footer } from '../footer';
import { colors } from '@material-ui/core';
import './styles/index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
//   faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";


export const theme = createMuiTheme({
    palette: {
      primary: {
          main:colors.blue[500]
        },
      secondary: {
          main: colors.green[500]
      }
    }
  });

function Home () {
    return (
        <div className="Home">
            <HeroCarousel/>

            <div className="treat-call">
                <h2>Treat Yourself!</h2>
                <h1>+(256) 078-274-6341</h1>
                <h3>CALL <span>BEEDOLLED</span> TODAY</h3>
                <h3><a href="#book-online" className="treat-call-book">BOOK ONLINE NOW</a></h3>
            </div>
                
            <Services />           
            <SpecialOffers/>
            <About />            
            <Contact />
            <MuiThemeProvider theme={theme}>
                <BookOnline/>
            </MuiThemeProvider> 
            <div id="socials">
                <h1> We Are Social! </h1>
                <a href="https://www.facebook.com/beetheboss-624059994769284"
                   className="facebook social">
                   <FontAwesomeIcon icon={faFacebook} size="6x" />
                </a>
                <a href="https://twitter.com/brendasessanga" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="6x" />
                </a>
                <a href="https://www.instagram.com/beetheboss/"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="6x" />
                </a>
                <a href="https://vm.tiktok.com/ZS4TnSdf/" className="tiktok social">
                    <FontAwesomeIcon icon={faTiktok} size="6x"/>
                </a>
                <h1> Follow Us! </h1>
            </div>
            <Footer />        
        </div>    
    )
}

export default Home;