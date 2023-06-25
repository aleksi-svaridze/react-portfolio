import Desktop from './Desktop';
import Mobile from './Mobile';
import { useWindowSize } from 'usehooks-ts';

const Work = () => {
    let {width} = useWindowSize();
    return (
        <>
        { width >= 1200 ? <Desktop /> :  <Mobile />}
        </>
    )
}

export default Work;