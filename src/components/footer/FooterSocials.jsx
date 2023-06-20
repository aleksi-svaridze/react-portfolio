import LinkedinIcon from '../../media/icons/footer/linkedin_icon.svg';
import InstagramIcon from '../../media/icons/footer/Instagram_icon.svg';
import FacebookIcon from '../../media/icons/footer/facebook_icon.svg';
import TwitterIcon from '../../media/icons/footer/twitter_icon.svg';
import YoutubeIcon from '../../media/icons/footer/youtube_icon.svg';


const FooterSocials = () => {
    return (
        <div className='d-flex align-items-center justify-content-center column-gap-1 column-gap-sm-2 column-gap-md-3'>
            <img src={InstagramIcon} alt="" className='w-48 h-48' />
            <img src={TwitterIcon} alt="" className='w-48 h-48' />
            <img src={LinkedinIcon} alt="" className='w-48 h-48' />
            <img src={FacebookIcon} alt="" className='w-48 h-48'/>
            <img src={YoutubeIcon} alt="" className='w-48 h-48' />
        </div>
    )
}

export default FooterSocials;