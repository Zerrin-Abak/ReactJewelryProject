import React from 'react'
import ContactImage from "../assets/photo_2.jpg"
import "../styles/Contact.css"

function Contact() {
  return (
    <div className='contact'>
      <div className='left-side'>
        <img src={ContactImage} alt='Error'/>
      </div>
      <div className='right-side'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input type='text' name='name' placeholder='Lütfen adınızı ve soyadınızı giriniz.'/>
          <label>Email</label>
          <input type='email' name='email' placeholder='Lütfen e-postanızı giriniz.'/>
          <label>Mesajınız</label>
          <textarea rows={"6"} name='message' placeholder='Lütfen mesajınızı giriniz.'></textarea>
        </form>
      </div>
    </div>
  )
}

export default Contact