import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7gs2ogd', 'template_mxt549p', form.current, 'vrka958r8_ORFPIqd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__option">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href="mailtto:dummyemail@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>egartutorials</h5>
            <a href="https://m.me/ernest.achiever" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91 9414173314</h5>
            <a href="https://api.whatsapp.com/send?phone=+919414173314" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact