import React from 'react';
import '../../styles/index.scss';
import Header from '../generic/header';
import Footer from '../generic/footer';
import { removeHash } from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'
import ScrollableAnchor from 'react-scrollable-anchor'
import BodySection from '../components/bodySection';
import IotSection from '../components/iotSection';
import AppSection from '../components/appSection';
import FlexBox from '../components/flexBox';
import banner from '../images/banner.jpg';
import choose from '../images/choose.jpg';
import control from '../images/control.jpg';

import $ from 'jquery';

const TestData = require('../components/home.json');
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
    constructor(props) {
      super(props);
      this.state = {
        TestData: '',
      }
    }
    componentDidMount() {
      $("#banner-know-more-tab").click(function() {
        $('html, body').animate({
          scrollTop: $("#section2").offset().top
        }, 1000);
      });
    }
    render() {
      let BodySectionData = TestData.howItWorks.map((val, i) => {
        return (
          <div key={i} className="col-sm-4 col-md-4">
            <div className="col-md-12 how-it-work-heading">
              <h4 className=" text-center">{val.header}</h4>
              <img src={choose} className="img-width p20"></img>
              <p className="how-it-work-content">
                {val.content}
              </p>
            </div>
          </div>
        );
      });
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
                       <p>Chariot welcomes you to the world of possibilities where we take internet of
                          <br/> things to next level of inovation. Connect everything through our smart
                          <br/> products and manage resources like you have never done before.
                       </p>
                       <p className="p20">
                          <a
                             className="btn btn-primary btn-lg
                             border-radius-25"
                             data-animation="animated fadeInLeft"
                             id="banner-know-more-tab">
                          Let’s Explore
                          </a>
                       </p>
                    </div>
                 </div>
              </div>
           </section>
           <div id ='section2' >
              <div >
                 <section className="story-photo section-padding">
                    <div className="container">
                       <div className="row">
                          <div className="col-md-12 zero-padding wow fadeInUp">
                             <div className="col-md-12 zero-padding">
                                <h2 className="heading-title text-center">How it works</h2>
                                {BodySectionData}
                             </div>
                          </div>
                       </div>
                    </div>
                 </section>
              </div>
           </div>
           <IotSection/>
           <FlexBox/>
           <AppSection/>
           <Footer/>
          </div>
        )
      }
}
