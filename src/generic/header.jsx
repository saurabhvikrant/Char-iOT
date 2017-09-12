import React from 'react';
import logo from '../images/logo.png'
import '../../styles/index.scss';
window.jQuery = require('jquery');
window.$ = require('jquery');
import $ from 'jquery';
const baseUrl = 'http://localhost:8888';

const TestData = require('./generic.json');


export default class Header extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
    TestData: '',
    }
  }

  render() {
    $(window).scroll(function(){
      let scrollAmount = $(window).scrollTop();
      if (scrollAmount > 10 ){
        $('#header').addClass('header-sticker box-shadow');
      } else {
        $('#header').removeClass('header-sticker box-shadow');
      }
    })
    let headerData = TestData.header.map((val, i) => {
      return (
        <li key={i}><a href={val.link}>{val.name}</a></li>
        );
      });

    return (
      <div className="container">
         <div className="row">
           <div className="col-md-12">
            <div className="navbar navbar-default navbar-fixed-top p10 " id="header">
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
