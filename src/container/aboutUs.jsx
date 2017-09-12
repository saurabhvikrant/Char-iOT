import React from 'react';
import Footer from '../generic/footer';
import '../../styles/index.scss';
import {Router, Route, Link} from 'react-router'
import Header from '../generic/header';
import AboutUs from './../components/aboutUs/aboutUs';

export default class AboutUsContainer extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <div>
          <Header/>
        </div>
        <div className="p50">
          <AboutUs/>
        </div>
      <Footer/>
      </div>
    )
  }
}
