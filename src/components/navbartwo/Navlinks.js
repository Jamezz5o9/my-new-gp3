import './navbartwo.css';
import {motion} from "framer-motion"



const NavLinks = ({isMobile, closeMobileMenu}) => {

    const animateFrom = {opacity: 0, y:-40}
    const animateTo = {opacity: 1, y: 0}

    return (
        <nav>
            <ul>
                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.20}}
                    onClick={() =>isMobile && closeMobileMenu() }>
                    <a href="#about">About</a>
                </motion.li>
                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.40}}
                    onClick={() =>isMobile && closeMobileMenu() }>
                    <a href="#food">Food</a>
                </motion.li>
            </ul>
        </nav>
        
    )
}

export default NavLinks;