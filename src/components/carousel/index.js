import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

import "./styles/index.css";

export class HeroCarousel extends React.Component {
    render(){
        return(
        <div className="carousel-images">
      <Carousel controls={true} indicators={false} fade={true}>
      <Carousel.Item>
                <img src="https://res.cloudinary.com/sabago/image/upload/c_scale,h_1350,w_1600/v1602600067/bee6_dh1m99.jpg"
                      alt="beedolled model 6"
                      className="carousel-img"
                      />
              </Carousel.Item>
              <Carousel.Item>
                <Image fluid 
                  src="https://res.cloudinary.com/sabago/image/upload/c_scale,h_1350,w_1600/v1602599634/bee5_iwcjlq.jpg"
                  alt="beedolled model 5"
                  className="carousel-img"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img 
                    src="https://res.cloudinary.com/sabago/image/upload/c_scale,h_1350,w_1600/v1602543125/bee2_l36ays.jpg"
                    alt="beedolled model 2"
                    className="carousel-img"
                  />
              </Carousel.Item>             
              <Carousel.Item>
                <img 
                    src="https://res.cloudinary.com/sabago/image/upload/c_scale,h_1350,w_1600/v1602542943/bee1_raozpg.jpg"
                    alt="beedolled model 1"
                    className="carousel-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://res.cloudinary.com/sabago/image/upload/c_scale,h_1350,w_1600/v1602543329/bee3_hesswb.jpg"
                      alt="beedolled model 3"
                      style={{maxHeight: 1200, minHeight: 360, minWidth:360, width:"100%"}}
                      />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://res.cloudinary.com/sabago/image/upload/c_scale,h_1350,w_1600/v1602534702/75305207_2418850715048694_1220289069395566110_n_qgjotx.jpg"
                      alt="beedolled model 4"
                      className="carousel-img"
                      />
              </Carousel.Item>                         
          </Carousel>
          </div>
        );
    }
}

