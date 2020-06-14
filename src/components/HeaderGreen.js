import React from 'react'
import {Link} from 'react-router-dom'
import logoDioka from '../assets/pictures/logo-dioka-blanc.svg'

function HeaderGreen() {
return (
    <>
            <div class="header-green ">
            <img src={logoDioka} alt='logo of dioka' class='header-green__logo'></img>
            <nav>
                <ul>
                    <Link to="/Apropos"><li>A propos</li></Link>
                    <Link to="/Booked"><li>Réservez</li></Link>
                    <Link to='/Connexion'><li>Connexion</li></Link>
                </ul>
            </nav>
        </div>  
    </>
    )
}

export default HeaderGreen
