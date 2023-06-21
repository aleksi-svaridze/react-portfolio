import PhoneIcon from '../../media/icons/contact/phone_icon.svg';
import EmailIcon from '../../media/icons/contact/email_icon.svg';



const ContactTextContent = () => {
    return (
        <div className='pe-lg-5 d-flex flex-column align-items-center d-lg-block'>
            <h2 className='fw-bold fs-4 mb-3 text-center text-lg-start'>Get in touch</h2>
            <p className='fs-17 mb-5 text-center text-lg-start'>
            I'm very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.
            </p>
            <div className='d-flex flex-column row-gap-3 pt-3'>
                <div className='d-flex align-items-center column-gap-3'>
                    <img src={PhoneIcon} alt="" className='rounded-circle' />
                    <a href='tel:15144562753' className='fs-15 text-decoration-none'>1-514-456-2753</a>
                </div>
                <div className='d-flex align-items-center column-gap-3'>
                    <img src={EmailIcon} alt="" className='rounded-circle' />
                    <a href="mailto:Sou12@gmail.com" className='fs-15 text-decoration-none'>Sou12@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default ContactTextContent;