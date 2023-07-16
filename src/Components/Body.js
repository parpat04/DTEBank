import React from 'react'
import logo from "./images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Skill from './Skill'
import Work from './Work'
import Contact from './Contact'
import WorkArray from './WorkArray'

window.watsonAssistantChatOptions = {
  integrationID: "c63d0adf-131e-4d12-99ff-ccf3a0073ce1", // The ID of this integration.
  region: "au-syd", // The region your integration is hosted in.
  serviceInstanceID: "acff8452-f050-40bb-9053-7b38e61965d6", // The ID of your service instance.
  onLoad: function(instance) { instance.render(); }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});

const Body = () => {
  const collectionWork = WorkArray.map(item => <Work key={item.id} work={item} />)
  return (
    <div className='info'>
      <div className='header'>
        <div className='pfp'>
          <img src={logo} alt='face' />
        </div>
        <div className='text'>
          <p>Hello there! Welcome to</p>
          <h1><font color="white">DTE</font> Bank</h1>
          <p>An innovative financial institute <font color="white">committed to providing</font> a secure and simple  <font color="white">banking experience.</font></p>
        </div>
      </div>
      <div>
        <h4 className='some-info' id='about'> Some Info</h4>
        <h1 className='about-title'>About Us</h1>
        <div className='about-section'>At DTE Bank, we are committed to empowering our customers on their financial journey. With a focus on trust, innovation, and personalized service, we offer a comprehensive 
        range of banking solutions tailored to meet your needs. From traditional banking services to cutting-edge digital platforms, we strive to make managing your finances convenient, secure, and hassle-free. 
        Join us at DTE Bank and experience banking that puts your goals first.
        </div>
      </div>
    </div>
  )
}

export default Body