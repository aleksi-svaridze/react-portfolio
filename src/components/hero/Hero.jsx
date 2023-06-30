import heroBg from '../../media/images/hero/hero-bg.svg';

const Home = () => {
    return (
        <div className="hero position-relative pt-5">
            <img src={heroBg} alt='' className='position-absolute hero-bg' />
            <div className="container pt-5">
                <div className="row pt-4">
                    <div className="offset-1">
                        <h1 className='fw-bold display-3 pt-5 ps-5 hero__title position-relative z-3'>
                            Creative UI Designer<br />
                            Maya Svaridze<br />
                            Based in Tbilisi
                        </h1>
                    </div>
                </div>
                <div className="row mt-5 pt-3 ps-5 ms-4">
                    <div className="d-flex column-gap-3 offset-2 ps-5 position-relative z-3">
                        <a href="" className='text-decoration-none hero__hireme-btn hero__btn'>Hire me</a>
                        <a href="" className='text-capitalize text-decoration-none hero__download hero__btn'>download CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;