import React from 'react';
import '../../styles/index.scss';
import piechart from '../images/pie-chart.png';

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
      return(
      <section className="p50">
         <div className="container">
            <div className="row">
               <div className="products-heading col-md-12 wow fadeInUp">
                  <h2 className="heading-title text-center">Products</h2>
                <div className="flexslider">
                     <ul className="slides">
                        <li>
                           <div className="col-md-12">
                              <div className="col-md-7 company-page-middle zero-padding">
                                 <div className="row">
                                    <div className="col-md-6 varune-style">
                                       <h2>Varune</h2>
                                       <p>Smart water management</p>
                                       <h3>$69.00</h3>
                                    </div>
                                 </div>
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
            </div>
         </div>
      </section>
)
}
}
