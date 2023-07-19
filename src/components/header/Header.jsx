import HeroBg from '../../media/images/hero/hero_bg.svg';
import Hero from '../hero/Hero';
import Navbar from '../navbar/Navbar';


const Header = () => {
    return (
        <header className="position-relative">
            <div className='container'>
                <img src={HeroBg} alt="" className='position-relative' style={{width: 'calc(100% + 428px)', left: '-128px', right: '-300px'}} />
            </div>
            <Navbar />
            <Hero />
        </header>
    )
}

export default Header;