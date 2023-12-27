import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar/TopBar';
import './contact.css';

const Contact = () => {
  return (
    <>
      <TopBar />
      <NavBar />
	  <div class="contact">
      <div class="container">
      <h2>Contact Us</h2>
      <div class="row100">
        <div class="col">
          <div class="inputBox">
            <input type="text" name="" required="required"/>
            <span class="text">First Name</span>
            <span class="line"></span>
          </div>
        </div>
        <div class="col">
          <div class="inputBox">
            <input type="text" name="" required="required"/>
            <span class="text">Last Name</span>
            <span class="line"></span>
          </div>
        </div>
      </div>
      <div class="row100">
        <div class="col">
          <div class="inputBox">
            <input type="text" name="" required="required"/>
            <span class="text">Email</span>
            <span class="line"></span>
          </div>
        </div>
        <div class="col">
          <div class="inputBox">
            <input type="text" name="" required="required"/>
            <span class="text">Number</span>
            <span class="line"></span>
          </div>
        </div>
      </div>
      <div class="row100">
        <div class="col">
          <div class="inputBox textarea">
            <textarea required="required"></textarea>
            <span class="text">Type your message Here...</span>
            <span class="line"></span>
          </div>
        </div>
      </div>
      
      <div class="row100">
        <div class="col">
          <input type="submit" value="Send"/>
        </div>
      </div>
    </div>
	</div>
      <Footer />
    </>
  );
};

export default Contact;
