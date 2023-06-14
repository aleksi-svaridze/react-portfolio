import Logo from '../media/icons/logo.svg';
import NavbarBg from '../media/images/navbar-sphare.png';

const Navbar = () => {
    return (
        <div className="container d-flex justify-content-end align-items-center justify-content-lg-center position-relative">
            <img src={NavbarBg} alt="" className='position-absolute top-0 start-res-110 w-res-372'/>
            <nav className="d-flex align-items-center py-3 py-md-4 column-gap-3 column-gap-md-4 column-gap-lg-0">
                <a href="/" className="text-capitalize fs-res-17 fw-medium text-decoration-none px-xl-5 px-lg-3 py-2 py-md-3 m-0 me-xxl-3">home</a>
                <a href="about" className="text-capitalize fs-res-17 fw-medium text-decoration-none px-xl-5 px-lg-3 py-2 py-md-3 m-0 mx-xxl-3">about</a>
                <img src={Logo} alt="" className='w-46 h-46 mx-lg-3 mx-xxl-5 d-none d-lg-block ' />
                <a href="/portfolio" className="text-capitalize fs-res-17 fw-medium text-decoration-none px-xl-5 px-lg-3 py-2 py-md-3 m-0 mx-xxl-3">portfolio</a>
                <a href="/contact" className="text-capitalize fs-res-17 fw-medium text-decoration-none px-xl-5 px-lg-3 py-2 py-md-3 m-0 ms-xxl-3">contact</a>
            </nav>
        </div>
    )
}


export default Navbar;