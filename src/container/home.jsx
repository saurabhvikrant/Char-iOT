import React from 'react';
import Footer from '../generic/footer';
import '../../styles/index.scss';
import { hashHistory } from 'react-router'
import Header from '../generic/header';
import BodySection from '../components/bodySection';
import IotSection from '../components/iotSection';
import AppSection from '../components/appSection';
import FlexBox from '../components/flexBox';
import banner from '../images/banner.jpg';

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
export default class Home extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <div>
          <Header/>
        </div>
        <section className="section-1" style={styles.section_1} >
          <div className="container">
            <div className="row">
              <div className="col-md-8 baner-inner-content">
                <h1>Smart World-Think IoT & beyond</h1>
                <p>Chariot welcomes you to the world of possibilities where we take internet of<br/> things to next level of inovation. Connect everything through our smart<br/> products and manage resources like you have never done before.</p>
                <p className="p20">
                  <a  className="btn btn-primary btn-lg
                    border-radius-25"
                    onClick={() => { hashHistory.push('app') }}
                    data-animation="animated fadeInLeft"
                    id="banner-know-more-tab">Let’s Explore</a></p>
                            </div>
                        </div>
                    </div>
          </section>
        <BodySection/>
        <IotSection/>
        <FlexBox/>
        <AppSection/>
        <Footer/>
      </div>
    )
  }
}
