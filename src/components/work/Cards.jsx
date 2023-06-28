const Card = ({content}) => {

    let {id, imgSrc, desc} = content;

    return (
        <div 
            style={{
                width: `${id === 2 ? '440px' : '380px'}`, 
                height: `${id === 2 ? '330px' : '280px'}`, 
                zIndex: `${id === 2 ? '10' : '5'}`,
                backdropFilter: 'blur(10px)', 
                marginLeft: `${id === 3 && '-30px'}`, 
                marginRight: `${id === 1 && '-30px'}`}} 
            key={id}
            className="overflow-hidden position-relative py-4 pt-2 rounded-5 bg-white-40">
            <div 
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: `100% ${id === 2 ? '90%' : '100%'}`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `${id === 2 ? '0% 0%' : 'center'}`,
                }} 
                className="w-100 h-100"></div>

            <a href="/" className="text-decoration-none rounded-bottom-5 py-3 mb-0 text-white text-center position-absolute start-0 bottom-0 end-0 fw-bold fs-4 bg-black-30">
                {desc}
            </a>
        </div>
    )
}

export default Card;