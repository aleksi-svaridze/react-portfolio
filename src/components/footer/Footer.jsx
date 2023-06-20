import FooterNav from "./FooterNav";
import FooterSocials from "./FooterSocials";
import PrivacyPolicy from "./PrivacyPolicy";
import PlanetImg from '../../media/icons/footer/planet_icon.svg';
import Illustration from '../../media/images/illustration.png';


const Footer = () => {
    return (
        <div className='bg-blue pt-5 px-5'> 
            <div className="container pt-5 position-relative z-1">
                <img src={PlanetImg} alt="" className="footer-bg position-absolute" />
                <img src={Illustration} alt="" className="position-absolute footer-illustration z-n1" />
                <div className="row gy-5">
                    <div className="col-12 col-sm-4 col-md-12 d-flex flex-column align-items-center d-sm-block">
                        <FooterNav />
                    </div>

                    <div className="col-12 col-sm-8 col-md-12">
                        <FooterSocials />
                    </div>
                </div>
            </div>
            <PrivacyPolicy />
        </div>
    )
}

export default Footer;