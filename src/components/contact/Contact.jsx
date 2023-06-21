import DesignerImage from '../../media/images/contact/working.png';


const Contact = () => {
    return (
        <div className="my-5 py-5 position-relative z-3 container d-flex justify-content-center">

            <div className="my-5 conatct-form position-relative">
                <img src={DesignerImage} alt="" className='contact-designer-image position-absolute' />
                <div className="row gx-5">
                    <div className="col-12 col-lg-6">
                        <div>
                            <h2 className='fw-bold fs-4 mb-3'>Get in touch</h2>
                            <p className='fs-17 mb-5'>
                            I'm very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.
                            </p>
                            <div className='d-flex flex-column row-gap-3 pt-3'>
                                <div>helo</div>
                                <div>world</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div>
                            <h2 className='fw-bold fs-4 mb-3'>Send me a message</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;