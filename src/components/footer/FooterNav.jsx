import HomeIcon from '../../media/icons/footer/home_icon.svg';
import AboutIcon from '../../media/icons/footer/about_icon.svg';
import WorkIcon from '../../media/icons/footer/work_icon.svg';
import CallIcon from '../../media/icons/footer/call_icon.svg';

const FooterNav = () => {
    return (
        <nav className='d-flex flex-column row-gap-3 flex-md-row align-items-md-center justify-content-md-center column-gap-md-5 py-md-3'>
            <a href="/home" className='text-decoration-none d-flex align-items-center'>
                <img src={HomeIcon} alt="" className="w-24 h-24 me-3" />
                <span className='ps-1 fs-17 text-capitalize'>home</span>
            </a>
            <a href="/about" className='text-decoration-none d-flex align-items-center mx-0 mx-md-3'>
                <img src={AboutIcon} alt="" className="w-24 h-24 me-3" />
                <span className='ps-1 fs-17 text-capitalize'>about</span>
            </a>
            <a href="/works" className='text-decoration-none d-flex align-items-center mx-0 mx-md-3'>
                <img src={WorkIcon} alt="" className="w-24 h-24 me-3" />
                <span className='ps-1 fs-17 text-capitalize'>works</span>
            </a>
            <a href="/contact" className='text-decoration-none d-flex align-items-center'>
                <img src={CallIcon} alt="" className="w-24 h-24 me-3" />
                <span className='ps-1 fs-17 text-capitalize'>contact</span>
            </a>
        </nav>
    )
}

export default FooterNav;