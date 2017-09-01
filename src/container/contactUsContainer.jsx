import React from 'react';
import Footer from '../generic/footer';
import '../../styles/index.scss';
import Header from '../generic/header';
import ContactUsComponent from './../components/contactsUs/contactUsComponent';
import SendMessageComponent from './../components/contactsUs/sendMessageComponent';

export default class ContactUsContainer extends React.Component {
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
            <ContactUsComponent/>
              </div>
              <SendMessageComponent/>
            </div>
          </section>
        <Footer/>
      </div>
    )
  }
}
