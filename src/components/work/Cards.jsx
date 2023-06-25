const Card = ({content}) => {

    return (
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
    )
}

export default Card;