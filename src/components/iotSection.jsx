import React from 'react';
import computer from '../images/computer.jpg';

export default class IotSection extends React.Component {
  render() {
    return (
      <div>
<section className="story-photo section-padding">
   <div className="container">
      <div className="row">
         <div className="col-md-12 zero-padding wow fadeInUp">
            <div className="col-md-12 zero-padding iot-platform-headeing">
               <h2 className="heading-title text-center">IoT Platform</h2>
               <div className="col-sm-4 col-md-4">
                  <div className="col-md-12 iot-section-second-heading">
                     <h4 className=" text-center">Lorem Ipsum</h4>
                     <img src={computer} className="img-width p20"></img>
                     <p>Chariot welcomes you to the world of possibilities where we
                       take internet of things to next level of innovation. Connect
                       everything through our smart products ucts and manage resources
                       like you have never done before..
                     </p>
                  </div>
               </div>
               <div className="col-sm-4 col-md-4">
                  <div className="col-md-12 iot-section-second-heading">
                     <h4 className="text-center">Lorem Ipsum</h4>
                     <img src={computer} className="img-width p20"></img>
                     <p>Chariot welcomes you to the world of possibilities where we
                        take internet of things to next level of innovation.
                        Connect everything through our smart products ucts and manage resources
                        like you have never done before..
                     </p>
                  </div>
               </div>
               <div className="col-sm-4 col-md-4">
                  <div className="col-md-12 iot-section-second-heading">
                     <h4 className="text-center">Lorem Ipsum</h4>
                     <img src={computer} className="img-width p20"></img>
                     <p>Chariot welcomes you to the world of possibilities where we take
                        internet of things to next level of innovation. Connect everything
                        through our smart products ucts and manage resources like you have
                        never done before..
                     </p>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
</section>
</div>
)
}
}
