import Logo from '../../media/icons/logo.svg';
import { useWindowSize } from 'usehooks-ts';

const Navbar = () => {
    const {width} = useWindowSize();

    let size = 0;

    if(width >= 768 && width < 992) {
        size = 50;
    }
    else if (width >= 992) {
        size = 100;
    }
    else {
        size = 20;
    }
    return (
        <div className="position-absolute top-0 start-0 end-0 z-3" style={{paddingTop: width >= 768 ? '40px' : '20px'}}>
            <nav style={{columnGap: size + 'px'}} className='d-flex align-items-center justify-content-center'>
                <a href="/#home" className='fw-medium text-decoration-none d-none d-sm-block' style={{fontSize: width >= 768 ? '17px' : '14px'}}>Home</a>
                <a href="/#about" className='fw-medium text-decoration-none d-none d-sm-block' style={{fontSize: width >= 768 ? '17px' : '14px'}}>About me</a>
                <img src={Logo} style={{width: width >= 768 ? '46px' : '32px'}} alt="" />
                <a href="/#work" className='fw-medium text-decoration-none d-none d-sm-block' style={{fontSize: width >= 768 ? '17px' : '14px'}}>Work</a>
                <a href="/#contact" className='fw-medium text-decoration-none d-none d-sm-block' style={{fontSize: width >= 768 ? '17px' : '14px'}}>Contact</a>
            </nav>
        </div>
    )
}


export default Navbar;