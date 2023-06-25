import WorkBgMedium from '../../media/images/work/bg-medium.svg';
import WorkBgBig from '../../media/images/work/bg-big.svg';

import Card from './Cards';

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
                    { cardContent.map(content => <Card content={content} />) }
                </div>
            </div>
        </div>
    )
}

export default Desktop;