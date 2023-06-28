import WorkBgMedium from '../../media/images/work/bg-medium.svg';
import WorkBgBig from '../../media/images/work/bg-big.svg';

import { useWindowSize } from 'usehooks-ts';

import CardImageDesigns from '../../media/images/work/designs.svg';
import CardImageUiDesigns from '../../media/images/work/uiDesigns.svg';
import CardImageMockups from '../../media/images/work/mockups.svg';


const Desktop = () => {
    const { width } = useWindowSize();
    const cardContent = [
        {id: 1, imgSrc: CardImageDesigns, desc: 'Designs'},
        {id: 2, imgSrc: CardImageUiDesigns, desc: 'UI Designs'},
        {id: 3, imgSrc: CardImageMockups, desc: 'Mockups'},
    ]

    return (
        <div className='position-relative' style={{height: `${width >= 1400 ? '995px' : '1130px'}`}}>
            <img src={ width >= 1400 ? WorkBgBig : WorkBgMedium} alt="" style={{maxWidth: '1400px'}} className='w-100 d-block mx-auto position-absolute top-50 start-50 translate-middle' />
            
            <div className="container position-absolute top-50 start-50 translate-middle">
                <div className="row justify-content-center align-items-center">

                { cardContent.map(content => ( 
                    <div 
                        style={{
                            width: `${content.id === 2 ? '440px' : '380px'}`, 
                            height: `${content.id === 2 ? '330px' : '280px'}`, 
                            zIndex: `${content.id === 2 ? '10' : '5'}`,
                            backdropFilter: 'blur(10px)', 
                            marginLeft: `${content.id === 3 && '-30px'}`, 
                            marginRight: `${content.id === 1 && '-30px'}`}} 
                        key={content.id}
                        className="overflow-hidden position-relative py-4 pt-2 rounded-5 bg-white-40">
                        <div 
                            style={{
                                backgroundImage: `url(${content.imgSrc})`,
                                backgroundSize: `100% ${content.id === 2 ? '90%' : '100%'}`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: `${content.id === 2 ? '0% 0%' : 'center'}`,
                            }} 
                            className="w-100 h-100"></div>

                        <a href="/" className="text-decoration-none rounded-bottom-5 py-3 mb-0 text-white text-center position-absolute start-0 bottom-0 end-0 fw-bold fs-4 bg-black-30">
                            {content.desc}
                        </a>
                    </div>
                    ) )} 
                </div>
            </div>
        </div>
    )
}

export default Desktop;