import React from 'react';
import logo from '../images/logo.png'
import '../../styles/index.scss';
import {hashHistory } from 'react-router'
import _ from 'lodash';
const TestData = require('./generic.json');
const baseUrl = 'http://localhost:8888';

export default class Header extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
    TestData: TestData.headData[0],
    }
  }
  render() {
    console.log(TestData, "DDSASASA");
    // let headerData = TestData.map((val, i) => {
    //   console.log(headerData, val, "dddsds");
    //   return (
    //     <li key={i}>{val}</li>
    //     );
    //   });

    return (
      <div className="container">
         <div className="row">
           <div className="col-md-12">
            <div className="navbar navbar-default navbar-fixed-top p10 ">
               <div className="logo-header col-md-1 text-center">
                    <a href=""> <img src={logo} className="img-width"></img></a>
               </div>
               <div className="col-md-8 col-sm-10 m15">
                  <div className="navigation">
                     <ul className="nav navbar-nav">
                        <li><a href="" onClick={() => { hashHistory.push('app')}}></a></li>
                        <li><a href="#"onClick={() => { hashHistory.push('app')}}></a></li>
                        <li><a href=""onClick={() => { hashHistory.push('app')}}></a></li>
                        <li><a href="#"onClick={() => { hashHistory.push('app')}}></a></li>
                     </ul>
                  </div>
               </div>
               <div className="col-md-1 col-sm-1 ">
                  <a href="#">
                    <button type="button" className="btn btn-warning border-radius-25"
                      id="header-top-login">{this.headerData.buttonL}</button>
                    </a>
               </div>
            </div>
         </div>
       </div>
      </div>
    )
  }
}
