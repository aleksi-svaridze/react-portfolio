// import HomeIcon from '../../media/icons/sideMenu/home_icon.svg';
// import AboutIcon from '../../media/icons/sideMenu/about_icon.svg';
// import WorkIcon from '../../media/icons/sideMenu/work_icon.svg';
// import ContactIcon from '../../media/icons/sideMenu/contact_icon.svg';
// import SearchIcon from '../../media/icons/sideMenu/search_icon.svg';

import {HomeIcon, AboutIcon, WorkIcon, ContactIcon, SearchIcon} from './SideMenuIcons';

import { useState } from 'react';


const SideMenu = () => {
    let [active, setActive] = useState(null);

    let menuLinks = [
        {id: 1, img: <HomeIcon fill={active ? 'white' : '#0F103F'} />, address: '/#home'},
        {id: 2, img: <AboutIcon fill={active ? 'white' : '#0F103F'} />, address: '/#about'},
        {id: 3, img: <WorkIcon fill={active ? 'white' : '#0F103F'} />, address: '/#work'},
        {id: 4, img: <ContactIcon fill={active ? 'white' : '#0F103F'} />, address: '/#contact'},
        {id: 5, img: <SearchIcon fill={active ? 'white' : '#0F103F'} />, address: '/#search'},
    ]
    return (
        <nav className="side_menu">
            <ul className='side_menu__ul'>
                {
                    menuLinks.map(link => (
                        <li key={link.id}>
                            <a 
                                href={link.address} 
                                onClick={() => setActive(link.id)}
                                className={`${active === link.id ? 'active' : ''}`}>
                                <span>{link.img}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default SideMenu;