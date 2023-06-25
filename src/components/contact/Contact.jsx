import ContactTextContent from './ContactTextContent';
import ContactForm from './ContactForm';

import DesignerImage from '../../media/images/contact/working.png';


const Contact = () => {
    return (
        <div className="mb-5 py-5 position-relative z-3 container d-flex justify-content-center">

            <div className="my-5 conatct-form position-relative">
                <img src={DesignerImage} alt="" className='contact-designer-image position-absolute' />
                <div className="row gy-5">
                    <div className="col-12 col-lg-6">
                        <ContactTextContent />
                    </div>
                    <div className="col-12 col-lg-6">
                       <ContactForm />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;