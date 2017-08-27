import React from 'react';

import Footer from '../generic/footer';

import '../../styles/index.scss';
import Header from '../generic/header';

import BodySection from '../components/bodySection';
import IotSection from '../components/iotSection';
import AppSection from '../components/appSection';
import FlexBox from '../components/flexBox';

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <div>
        <Header/>
        </div>
      <BodySection/>
      <IotSection/>
      <FlexBox/>
      <AppSection/>
      <Footer/>
      </div>
    )
  }
}
