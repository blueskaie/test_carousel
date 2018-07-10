import React, { Component } from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

class MyCarousel extends Component {
  render() {
    return (
        <div className="my_carousel">
          <Carousel autoPlay>
                  <div>
                      <img src="assets/1.jpg" />
                      <p className="legend">Legend 1</p>
                  </div>
                  <div>
                      <img src="assets/2.jpg" />
                      <p className="legend">Legend 2</p>
                  </div>
                  <div>
                      <img src="assets/3.jpg" />
                      <p className="legend">Legend 3</p>
                  </div>
                  <div>
                      <img src="assets/4.jpg" />
                      <p className="legend">Legend 3</p>
                  </div>
                  <div>
                      <img src="assets/5.jpg" />
                      <p className="legend">Legend 3</p>
                  </div>                                    
          </Carousel>
        </div>
    );
  }
}
export default MyCarousel;
