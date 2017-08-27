import React from 'react';
import banner from '../images/banner.jpg';
import '../../styles/index.scss';

var styles = {
  root: {
    display: "block"
  },
  section_1: {
      backgroundImage: `url(${banner})`,
      overflow: 'hidden',
      backgroundSize: "100% 100%",
      height: "732px"
  },
}
export default class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <section className="section-1" style={styles.section_1} >
        <div className="container">
          <div className="row">
            <div className="col-md-8 baner-inner-content">
              <h1>Smart World-Think IoT & beyond</h1>
              <p>Chariot welcomes you to the world of possibilities where we take internet of
                <br/> things to next level of inovation. Connect everything through our smart<br/>
                products and manage resources like you have never done before.</p>
                <p className="p20"> <a href="#" className="btn btn-primary btn-lg  border-radius-25"
                  data-animation="animated fadeInLeft" id="banner-know-more-tab">Let’s Explore</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      )
    }
}
