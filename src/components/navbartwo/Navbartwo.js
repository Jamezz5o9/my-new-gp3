import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import classes from './navbartwo.css'



const Navbartwo = () => {
  return (    
    <nav className='NavBar'>
        <MobileNavigation />
        <Navigation />
     </nav>
    
  )
}

export default Navbartwo