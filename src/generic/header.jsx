import React from 'react';
import logo from '../images/logo.png'
import '../../styles/index.scss';
import {hashHistory } from 'react-router'

export default class Header extends React.Component {
  render() {
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
                        <li><a href="" onClick={() => { hashHistory.push('app')}}>PRODUCTS</a></li>
                        <li><a href="#">TECHNOLOGY </a></li>
                        <li><a href="">BLOGS</a></li>
                        <li><a href="#">ABOUT US</a></li>
                     </ul>
                  </div>
               </div>
               <div className="col-md-1 col-sm-1 ">
                  <a href="#">
                    <button type="button" className="btn btn-warning border-radius-25"
                      id="header-top-login">Login</button>
                    </a>
               </div>
            </div>
         </div>
       </div>
      </div>
    )
  }
}
