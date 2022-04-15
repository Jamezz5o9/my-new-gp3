import NavLinks from "./Navlinks"
import './navbartwo.css';
import { CgMenuRound } from "react-icons/cg";
import { useState } from 'react';
import {CgCloseO} from 'react-icons/cg'


const MobileNavigation = () => {
   

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenuRound className="Hamburger" size='40px' color='white'
                             onClick={() => setOpen(!open)} />
    const closeIcon = <CgCloseO className="Hamburger" size='40px' color='white'
                             onClick={() => setOpen(!open)} />
    const closeMobileMenu = () => setOpen(false);

    return (
        <nav className='MobileNavigation'>
          {open ? closeIcon : hamburgerIcon }
          {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
    )
}

export default MobileNavigation;