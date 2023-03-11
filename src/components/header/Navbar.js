import { useState } from "react";
import { useClickOutside } from "./../../hooks/useClickOutside";
import { scrollToSection } from '../../utils/scrollToSection';
import { Button } from '@mui/material';
import './../../styles/navbar.css';

export const Navbar = () => {
    const [navigationActive, setNavigationActive] = useState(false);
    const nodeRef = useClickOutside(setNavigationActive, 'ham');
    const handleHamburgerClick = () => {
        setNavigationActive(!navigationActive);
    }

    const handleButtonClick = section => {
        setNavigationActive(!navigationActive);
        scrollToSection(section, -80);
    }

    return (
        <header className="header-wrapper">
            <div className="header">
                <div className="header__logo">
                </div>
                <div className="header__hamburger ham" onClick={handleHamburgerClick} >
                    <svg className={`hamburger__bars hamburger__rotate ham1 ham ${navigationActive && 'active'}`} viewBox="0 0 100 100" width="80" >
                        <path className="hamburger__line top ham" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                        <path className="hamburger__line middle ham" d="m 30,50 h 40" />
                        <path className="hamburger__line bottom ham" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                    </svg>
                </div>
                <nav className={`header__navigation ${navigationActive && 'navigation-active'}`} ref={nodeRef}>
                    <ul className="header__list">
                        <li className="navigation__item" style={{ flexGrow: 1 }}><Button sx={{ p: { xs: '27px', sm: 0 }, fontSize: { xs: '2rem', sm: '1rem' }, fontWeight: 700, width: '100%', height: '100%' }} onClick={() => handleButtonClick('treatment-section')} role="link"
                            aria-label="Go to treatment section">Treatment</Button>
                            <hr className='navigation__divider' />
                        </li>
                        <li className="navigation__item" style={{ flexGrow: 1 }}><Button sx={{ p: { xs: '27px', sm: 0 }, fontSize: { xs: '2rem', sm: '1rem' }, fontWeight: 700, width: '100%', height: '100%' }} onClick={() => handleButtonClick('about-section')} role="link"
                            aria-label="Go to about section">About</Button>
                            <hr className='navigation__divider' />
                        </li>
                        <li className="navigation__item" style={{ flexGrow: 1 }}><Button sx={{ p: { xs: '27px', sm: 0 }, fontSize: { xs: '2rem', sm: '1rem' }, fontWeight: 700, width: '100%', height: '100%' }} onClick={() => handleButtonClick('location-section')} role="link"
                            aria-label="Go to location & hours section">Location & Hours</Button>
                            <hr className='navigation__divider' />
                        </li>
                        <li className="navigation__item" style={{ flexGrow: 1 }}>
                            <Button sx={{ p: { xs: '27px', sm: 0 }, fontSize: { xs: '2rem', sm: '1rem' }, fontWeight: 700, width: '100%', height: '100%' }} onClick={() => handleButtonClick('contact-section')} role="link"
                            aria-label="Go to contact section">Contact</Button>

                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}