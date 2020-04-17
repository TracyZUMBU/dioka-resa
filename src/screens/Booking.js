import React from 'react'
import logodioka from '../assets/pictures/logo-dioka.svg'
import Button from '../components/ButtonPink'


export default function Booking() {
  
    return (
        <>
            

<div class="booking-confirmation">
    <div class="header-white">
        
            <img src={logodioka} alt="" class="header-white__logo"></img>
            
        
    </div>

        <div class="text-box--center">
            <h1 class="heading-primary">
                <span class=" heading-primary__main">merci pour ta réservation !</span>
                <span class="heading-primary__sub">Tu as reçu un mail de confirmation dans ta boîte mail</span>

            </h1>
        
        <Button text="Retour à la page d'accueil"/>
    </div>
    
</div>

        </>
    )
}
    
