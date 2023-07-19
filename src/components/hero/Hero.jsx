import { useWindowSize } from "usehooks-ts";

const Hero = () => {
    const {width} = useWindowSize();
    let fontSize, top, paddingLeft, maxWidth;

    if(width <= 420) {
        fontSize = 20;
        top = 150;
        maxWidth = 90 + '%';
    }
    else if(width > 420 && width <= 576) {
        fontSize = 24;
        top = 190;
        maxWidth = 90 + '%';
    }
    else if(width > 576 && width <= 768) {
        fontSize = 36;
        top = 190;
        maxWidth = 520;
        paddingLeft = 130;
    }
    else if(width > 768 && width <= 992) {
        fontSize = 36;
        top = 230;
        maxWidth = 560;
        paddingLeft = 170;
    }
    else if(width > 992 && width <= 1200) {
        fontSize = 48;
        top = 280;
        maxWidth = 700;
        paddingLeft = 180;
    }
    else if(width > 1200 && width <=1400 ) {
        fontSize = 60;
        top = 310;
        maxWidth = 900;
        paddingLeft = 260;
    }
    else {
        fontSize = 60;
        top = 350;
        maxWidth = 900;
        paddingLeft = 260;
    }

    return (
        <div className="hero position-absolute start-0 end-0 top-0 bottom-0 vh-100 z-1">
            <div className="container position-absolute" style={{top}}>
                <div className="row">
                    <div className="col-12">
                        <div className="bg-primary" style={{paddingLeft, maxWidth}}>
                            <h1 className="mx-auto mx-sm-0 text-center text-sm-start fw-bold m-0 fst-normal" style={{fontSize, lineHeight: '130%'}}>  
                                Creative UI Designer
                                Maya Svaridze
                                Based in Tbilisi
                            </h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;