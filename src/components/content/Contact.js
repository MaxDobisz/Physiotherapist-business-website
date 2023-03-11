import './../../styles/contact.css';

import { ContactForm } from './ContactForm';

export const Contact = () => {
    return (
        <section className="contact-wrapper" id='contact-section'>
            <div className="contact">
                <h2 className="contact__title">GET IN TOUCH</h2>
                <div className="contact__icons">
                    <a href="tel:07752568236"><i className="fa-solid fa-square-phone-flip"></i></a>
                    <a href="mailto:alejandro.physiotherapy@gmail.com"><i className="fa-solid fa-square-envelope"></i></a>
                    <a href="https://www.facebook.com/alejandrotorresphysiotherapy"><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="https://instagram.com/alejandrotphysiotherapy"><i className="fa-brands fa-square-instagram"></i></a>
                </div>
                <h3 className='contact__form-title'>If you have a question just drop a message.</h3>
                <ContactForm />
            </div>
        </section>
    )
}
