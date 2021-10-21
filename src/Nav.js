import React, { useEffect, useState } from 'react'
import './Nav.css'
import logo from './logo.png'
import SearchIcon from '@material-ui/icons/Search';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav-black"}`}>
            
                <div className="left-side">
                    <p><a href="#home" ><img className="hbo-logo"src={logo} alt=""/></a></p>
                    <p className="nav-hover"><a href="#seriale">SERIALE</a></p>
                    <p className="nav-hover"><a href="#filmy">FILMY</a></p>
                    <p className="nav-hover"><a href="#kids">KIDS</a></p>
                    <p className="nav-hover"><a href="#program">PROGRAM TV</a></p>
                    <p className="nav-hover"><a href="#lupa"><SearchIcon /></a></p>
                    
                </div>
                <div className="right-side">
                    <button className="nav-rejestracja">Rejestracja</button>
                    <button className="nav-logowanie">Logowanie</button>
                </div>
            

        </div>
    )
}

export default Nav
