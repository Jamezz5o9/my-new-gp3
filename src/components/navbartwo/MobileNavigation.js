import NavLinks from "./Navlinks"
import './navbartwo.css';
import {CgMenuRound} from "react-icons/cg";
import {ueState} from 'react'


const MobileNavigation = () => {

    const [open, setOpen] = useState(false);


    return (
        <nav className='MobileNavigation'>
            <CgMenuRound className="Hamburger" size='40px' color='white'
            onClick={() => setOpen(!open)} />
            <NavLinks />
        </nav>
    )
}

export default MobileNavigation;