import React from 'react';
import '../../styles/index.scss';
import piechart from '../images/pie-chart.png';
import {hashHistory } from 'react-router'
const TestData = require('./home.json');

export default class FlexBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    TestData: '',
    }
  }
  render() {
    let FlexBoxData = TestData.body.map((val, i) => {
      return (
        <div key={i} className=" list-section col-md-12 zero-padding">
           <ul >
             <li>{val.name}</li>
           </ul>
         </div>
        );
      });
      let FlexBoxHead = TestData.head.map((data, k) => {
        return (
          <div key={k} className="row">
             <div className="col-md-6 varune-style">
                <h2>{data.head}</h2>
                <h4>{data.subhead}</h4>
                <h3>{data.price}</h3>
             </div>
          </div>
          );
        });
      return(
        <section id ="myproduct" className="p50">
     <div className="container">
        <div className="row">
           <div className="products-heading col-md-12 wow fadeInUp">
              <h2 className="heading-title text-center">Products</h2>
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                 <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                 </ol>
                 <div className="carousel-inner">
                    <div className="item active">
                       <ul className="slides">
                          <li>
                             <div className="col-md-12">
                                <div className="col-md-7 company-page-middle zero-padding">
                                   {FlexBoxHead}
                                   <ul className="navigation-tab nav nav-tabs">
                                      <li className="active"><a data-toggle="tab" href="#created">FEATURES</a></li>
                                      <li><a data-toggle="tab" href="#give"> SPECIFICATION</a></li>
                                   </ul>
                                   <div className="tab-content">
                                      <div id="created" className="tab-pane fade in active">
                                         {FlexBoxData}
                                      </div>
                                      <div id="give" className="tab-pane fade">
                                         {FlexBoxData}
                                      </div>
                                   </div>
                                </div>
                                <div className="col-md-5 chart-section">
                                   <div id="demo-pie-2" className="pie-title-center"
                                      data-percent="80"> <span className="pie-value"></span> </div>
                                   <img src={piechart}></img>
                                </div>
                             </div>
                          </li>
                       </ul>
                    </div>
                    <div className="item">
                       <ul className="slides">
                          <li>
                             <div className="col-md-12">
                                <div className="col-md-7 company-page-middle zero-padding">
                                   {FlexBoxHead}
                                   <ul className="navigation-tab nav nav-tabs">
                                      <li className="active"><a data-toggle="tab" href="#created">FEATURES</a></li>
                                      <li><a data-toggle="tab" href="#give"> SPECIFICATION</a></li>
                                   </ul>
                                   <div className="tab-content">
                                      <div id="created" className="tab-pane fade in active">
                                         {FlexBoxData}
                                      </div>
                                      <div id="give" className="tab-pane fade">
                                         {FlexBoxData}
                                      </div>
                                   </div>
                                </div>
                                <div className="col-md-5 chart-section">
                                   <div id="demo-pie-2" className="pie-title-center"
                                      data-percent="80"> <span className="pie-value"></span> </div>
                                   <img src={piechart}></img>
                                </div>
                             </div>
                          </li>
                       </ul>
                    </div>
                    <div className="item">
                       <ul className="slides">
                          <li>
                             <div className="col-md-12">
                                <div className="col-md-7 company-page-middle zero-padding">
                                   {FlexBoxHead}
                                   <ul className="navigation-tab nav nav-tabs">
                                      <li className="active"><a data-toggle="tab" href="#created">FEATURES</a></li>
                                      <li><a data-toggle="tab" href="#give"> SPECIFICATION</a></li>
                                   </ul>
                                   <div className="tab-content">
                                      <div id="created" className="tab-pane fade in active">
                                         {FlexBoxData}
                                      </div>
                                      <div id="give" className="tab-pane fade">
                                         {FlexBoxData}
                                      </div>
                                   </div>
                                </div>
                                <div className="col-md-5 chart-section">
                                   <div id="demo-pie-2" className="pie-title-center"
                                      data-percent="80"> <span className="pie-value"></span> </div>
                                   <img src={piechart}></img>
                                </div>
                             </div>
                          </li>
                       </ul>
                    </div>
                 </div>
                 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                 <span className="glyphicon glyphicon-chevron-left"></span>
                 <span className="sr-only">Previous</span>
                 </a>
                 <a className="right carousel-control" href="#myCarousel" data-slide="next">
                 <span className="glyphicon glyphicon-chevron-right"></span>
                 <span className="sr-only">Next</span>
                 </a>
              </div>
           </div>
        </div>
     </div>
  </section>
)
}
}
