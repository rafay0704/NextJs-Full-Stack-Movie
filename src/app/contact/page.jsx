import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from './contact.module.css'
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
    <div>
         <div className={styles.container }>
       <h1>Contact Us..</h1>
       <ContactCard/>
        <section className={styles.contact_section}>
           <h2>We` d love to hear <span>from you</span></h2>
           <ContactForm/>
        </section>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21807.67066992537!2d55.49369381071844!3d25.32818544381473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bd118591267%3A0x2f6157c92fbf23b3!2sSharjah%20International%20Airport!5e0!3m2!1sen!2sae!4v1694465404550!5m2!1sen!2sae" width={100} height={450} style={{border:0}} allowfullscreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>
  
    </div>
  )
}

export default Contact  