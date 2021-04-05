import React,{useEffect,useState} from 'react';
import   './Nav.css';
import logo from './image/Netflix_Logo_RGB.png';
import avatar from './image/Netflix-avatar.png';


const Nav = () => {
    const [show,handleShow] = useState(false)

    useEffect(() => {
window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
handleShow(true);
    } else handleShow(false);
});
return () =>{
    window.removeEventListener("scroll");
};
    }, []);
    return (
        <div className={`nav ${show && 'nav-black'}`}>
        <img className="nav__logo"
src={logo}
alt="logo netflix"
        />
        

        <img className="avatar__logo"
src={avatar}
alt="logo avatar"
        />
        </div>
       
    );
};

export default Nav;