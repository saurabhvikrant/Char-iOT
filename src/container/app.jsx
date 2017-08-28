import React from 'react';
import Footer from '../generic/footer';
import '../../styles/index.scss';
import {Router, Route, Link} from 'react-router'
import Header from '../generic/header';
import AppBodyComponent from './../components/app/appBodyComponent';

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
        <section className="section-1" >
          <div className="container">
            <div className="row">
              <AppBodyComponent/>
              </div>
            </div>
          </section>
        <Footer/>
      </div>
    )
  }
}
