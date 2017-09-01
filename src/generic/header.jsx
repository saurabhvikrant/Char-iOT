import React from 'react';
import logo from '../images/logo.png'
import '../../styles/index.scss';
import {hashHistory } from 'react-router'
import $ from 'jquery';
const TestData = require('./generic.json');

const baseUrl = 'http://localhost:8888';

export default class Header extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
    TestData: '',
    }
  }

  toggleCollapse () {
    if ($(window).scrollTop() > 100 ){
       $('header').addClass('header-sticker');
     } else {
       $('header').removeClass('header-sticker');

     }
  }
  render() {
    let headerData = TestData.header.map((val, i) => {
      return (
        <li key={i}><a href={val.link}>{val.name}</a></li>
        );
      });

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
                       {headerData}
                     </ul>
                  </div>
               </div>
               <div className="col-md-1 col-sm-1 ">
                  <a href="#">
                    <button type="button" className="btn btn-warning border-radius-25"
                      id="header-top-login">{'Login'}</button>
                    </a>
               </div>
            </div>
         </div>
       </div>
      </div>
    )
  }
}
