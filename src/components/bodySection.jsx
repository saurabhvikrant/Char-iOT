import React from 'react';
import choose from '../images/choose.jpg';
import control from '../images/control.jpg';

export default class BodySection extends React.Component {
  render() {
    return (
<div>
<section className="story-photo section-padding">
   <div className="container">
      <div className="row">
         <div className="col-md-12 zero-padding wow fadeInUp">
            <div className="col-md-12 zero-padding">
               <h2 className="heading-title text-center">How it works</h2>
               <div className="col-sm-4 col-md-4">
                  <div className="col-md-12 how-it-work-heading">
                     <h4 className=" text-center">Choose</h4>
                     <img src={choose} className="img-width p20"></img>
                     <p className="how-it-work-content">Chariot welcomes you to the world of possibilities
                       where we take internet of things to next level of innovation.
                       Connect everything through our smart products ucts and manage resources
                        like you have never done before..
                     </p>
                  </div>
               </div>
               <div className="col-sm-4 col-md-4">
                  <div className="col-md-12 how-it-work-heading">
                     <h4 className=" text-center">Connect</h4>
                     <img src={choose} className="img-width p20"></img>
                     <p className="how-it-work-content">Chariot welcomes you to the world
                       of possibilities where we take internet of things to next level
                        of innovation. Connect everything through our smart products ucts
                        and manage resources like you have never done before..
                     </p>
                  </div>
               </div>
               <div className="col-sm-4 col-md-4">
                  <div className="col-md-12 how-it-work-heading">
                     <h4 className="text-center">Control</h4>
                     <img src={control} className="img-width p20"></img>
                     <p className="how-it-work-content">Chariot welcomes you to the world of possibilities
                       where we take internet of things to next level of innovation.
                       Connect everything through our smart products ucts and manage
                       resources like you have never done before..
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
