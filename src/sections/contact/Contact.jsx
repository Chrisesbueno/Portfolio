import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { baseContact, buttons, cardContact } from '../../constants'
import { Card } from '../../components/index'
import './contact.css'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f3b4044', 'template_15991gm', form.current, 'L6mSh22730StRhgnj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="contact section" id='contact'>
      <h2 className="section__title">
        {baseContact.title}
      </h2>
      <p className="section__subtitle">
        {baseContact.subtitle}
      </p>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">
            {baseContact.contactTitle}
          </h3>

          <div className="contact__info">
            {cardContact.map((card) => (
              <Card title={card.title} data={card.data} icon={card.icon} key={card.id}/>
            ))}
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">
            {baseContact.contactSubtitle}
          </h3>

          <form className='contact__form' ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label className="contact__form-tag">
                {baseContact.name}
              </label>
              <input type="text" name={baseContact.name} className='contact__form-input' placeholder='Insert your name' />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">
                {baseContact.email}
              </label>
              <input type="email" name={baseContact.email} className='contact__form-input' placeholder='Insert your email' />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">
                {baseContact.message}
              </label>
              <textarea name={baseContact.message} id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>
            </div>
            <button className='button button--flex' >
              {buttons[2].title}
              <i className={`${buttons[2].icon} icon-social`}></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact