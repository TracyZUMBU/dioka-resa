import React from 'react'
import logodioka from '../assets/pictures/logo-dioka.svg'

export default function Booking() {
    return (
        <>
            

<div class="booking-confirmation">
    <div class="header-white">
        
            <img src={logodioka} alt="" class="header-white__logo"></img>
            
        
    </div>

        <div class="text-box">
            <h1 class="heading-primary">
                <span class=" heading-primary--main">merci pour ta réservation</span>
                <span class="heading-primary--sub">tu as reçu un mail de confirmation dans ta boite mail</span>

            </h1>
        
        <a href="" class="btn btn--pink">Retour à la page d'accueil</a>
    </div>
    
</div>

        </>
    )
}
    
