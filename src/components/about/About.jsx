import circleImage from '../../media/images/about/background.svg';
// import CrystalImage from '../../media/images/about/crystal.svg';

const About = () => {
    return (
        <div className="container pb-5 mb-5">
            {/* <div className="mx-auto about-wrapper position-relative">
                <div className='rounded-circle about-circle position-relative mx-auto d-flex flex-column align-items-center justify-content-center text-center'>
                  <h3 className='fw-bold about__title mb-2'>About me</h3>
                  <p className='fw-normal about__desc w-75'>My name is Sourasith Phomhome. I’m a UI Designer and a instrutor based in Montreal. I’m curently working with Design+Code. I’m passionate about creating digital experiences and teaching design. My goal is to help beginners to grow their skills... <a href='/' className='fw-semibold about__read-more text-decoration-none'>read more</a></p>
                </div>
                <img src={AboutBg} alt="" width='950' className='about-circle__bg position-absolute' />
                <img src={CrystalImage} alt="" className='about-crystal position-absolute' />
            </div> */}
            <div className='about-bg'>
                <div className='text__content'>
                    <h2 className='text__content--title'>About me</h2>
                    <p className='text__content--desc'>My name is Graphic Designer. I’m a UI Designer and a instructor based in Montreal. I’m currently working with Design+Code. I’m passionate about creating digital experiences and teaching design. My goal is to help beginners to grow their skills...
                    <span className='text__content--more'>read more</span>
                    </p>
                </div>
            </div>
            <img src={circleImage} alt="" className='circle-image' />
        </div>
    )
}

export default About;