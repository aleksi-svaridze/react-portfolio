


const ContactForm = () => {
    return (
        <div className='ps-lg-5'>
            <h2 className='fw-bold fs-4 mb-3 text-center text-lg-start'>Send me a message</h2>

            <form className="d-flex flex-column align-items-center align-items-lg-start row-gap-20 w-100">
                <input type="text" placeholder="Name"  className="w-100 form-control text-white fs-15"/>
                <input type="email" placeholder="Email Address"  className="w-100 form-control text-white fs-15"/>
                <input type="text" placeholder="Subject"  className="w-100 form-control text-white fs-15"/>
                <textarea className="w-100 form-control text-white fs-15" placeholder="Your message"></textarea>
                <button>Send message</button>
            </form>
        </div>
    )
}

export default ContactForm;