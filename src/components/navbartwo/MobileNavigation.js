import NavLinks from "./Navlinks"
import './navbartwo.css';
import {CgMenuRound} from "react-icons/cg";
import {ueState} from 'react'


const MobileNavigation = () => {
    return (
        <nav className='MobileNavigation'>
            <CgMenuRound className="Hamburger" size='40px' color='white'
            onClick={() => {
               console.log(`You clicked on this icon my friend`) 
            }}></CgMenuRound>
            <NavLinks />
        </nav>
    )
}

export default MobileNavigation;