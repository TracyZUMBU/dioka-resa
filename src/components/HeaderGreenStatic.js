
import React from 'react'
import logoDioka from '../assets/pictures/logo-dioka-blanc.svg'

function HeaderGreen() {
return (
    <>
            <div class="header-green header-green--static">
            <img src={logoDioka} alt='logo of dioka' class='header-green__logo'></img>
            <nav>
                <ul>
                    <li><a href='#'>A propos</a></li>
                    <li><a href='#'>Réservez</a></li>
                    <li><a href='#'>Connexion</a></li>
                </ul>
            </nav>
        </div>  
        </>
    )
}

export default HeaderGreen
