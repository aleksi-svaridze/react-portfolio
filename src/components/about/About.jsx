import circleImage from '../../media/images/about/background.svg';
// import CrystalImage from '../../media/images/about/crystal.svg';

const About = () => {
    return (
        <div className="container py-5 mb-5">
            <div className='about-bg'>
                <div className='text__content'>
                    <h2 className='text__content--title'>About me</h2>
                    <p className='text__content--desc'>My name is Graphic Designer. I’m a UI Designer and a instructor based in Montreal. I’m currently working with Design+Code. I’m passionate about creating digital experiences and teaching design. My goal is to help beginners to grow their skills...
                    <a href='/read-more' className='text__content--more'>read more</a>
                    </p>
                </div>
            </div>
            <img src={circleImage} alt="" className='circle-image d-none d-md-block' />
        </div>
    )
}

export default About;