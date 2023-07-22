import ContactTextContent from './ContactTextContent';
import ContactForm from './ContactForm';

import DesignerImage from '../../media/images/contact/working.png';
import { useWindowSize } from 'usehooks-ts';


const Contact = () => {
    let {width} = useWindowSize();

    let customMargin;
    if(width <= 768) {
        customMargin = 250;
    }
    else {
        customMargin = 0;
    }
    return (
        <div style={{marginTop: customMargin}} className='mb-5 py-5 position-relative z-3 container d-flex justify-content-center' id='contact'>

            <div className="my-5 contact-form position-relative">
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