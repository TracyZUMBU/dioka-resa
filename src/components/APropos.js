import React from 'react'

import peigne from '../assets/icons/peigne_icone.png'
import avatar from '../assets/icons/avatar_icone.png'
import etoiles from '../assets/icons/etoiles_icone.png'
import charte from '../assets/pictures/charte_logo.png'
import HgsteaderGreen from './HeaderGreen'



export default function APropos() {
    return (
        <>
        <HeaderGreen />

        <div class="section-image">
            <div class="text-box--left">

            <div class='heading-primary'>
                <span class="heading-primary__main--white">NICE TO</span>
                <span class="heading-primary__main--white">MEET YOU !</span>
                <ul class="heading-primary__sub--white">
                    <li>- Notre histoire</li>
                    <li>- Notre philosophie</li>
                    <li>- Notre charte</li>
                </ul>
              
                
            </div>
            </div>
        </div>

        <div class="presentation">

            <div class="presentation-box">
            <div class="presentation__img"></div>

            <div class="presentation-box__story">
                {/* /*mixin heading*/ }
                <p>une histoire</p> 
                <p>de soeurs...</p>
                {/* /*mixin heading-sub*/ }
                <div class="presentation-box__story__content">
                <span>Depuis que nous sommes petites, nos cheveux crépus nous</span> <span>ont fait rire et pleurer. Les mauvaises expériences chez le </span>coiffeur  ou dans la salle de bain, on connait !Nous échangeons <span>produits, bonnes adresses et conseils depuis des années. </span>

                <span>C'est ainsi qu'est né Dioka, une plateforme à notre nom et à notre image.</span>

                <span>Grâce à une sélection pointue et qualitative de salons et de <span>produits, nous souhaitons en finir avec les galères capillaires.</span><span> Nous voulons que toutes les femmes, peu importe leurs boucleset leurs </span>origines, puissent accéder à la qualité et ce en toute confiance. </span>
                </div>

                <span class="name">Daba et Seynabou Diokhané</span>

            </div>
            </div>

            <div class="presentation__goal-box">
                <div class="presentation__goal">
                    {/* /*mixin heading-sub*/ }
                    <p>Notre objectif</p>
                    {/* créer une mixin avec Medium */}
                    <p>
                    <span>Que toutes les femmes aux</span>
                     <span>cheveux crépus, frisés et</span>
                      <span>bouclés puissent se faire </span>
                      <span>coiffer facilement et de </span>
                      <span>manière qualitative.</span>

                    </p>
                </div>


            </div>

        </div>
        
        <div class="section-image section-image--curly">
            <div class="text-box--center text-box--center--margin">

            <div class='heading-primary'>
                <span class="heading-primary__main--white heading-primary__main--white--center">nous sommes convaincues</span>
                <span class="heading-primary__main--white heading-primary__main--white--center">que des femmes bien coiffées</span>
                <span class="heading-primary__main--white heading-primary__main--white--center">sont des femmes capables de</span>
                <span class="heading-primary__main--white heading-primary__main--white--center">réaliser leurs rêves,</span>
                <span class="heading-primary__main--white heading-primary__main--white--center">hair is power !</span>
            </div>
            </div>
        

        </div>

        <div class="last-section">

            <div class="charte">
                <img class="charte__img" src={charte}></img>
            </div>


            <div class="assets">
                <div class="assets__box">
                    <img class="assets__logo" alt="logo of comb" src={peigne}></img>

                    <div class="heading-secondary">
                        <span class="heading-secondary__main">Un savoir-faire validé</span>
                        <span class="heading-secondary__sub">Réserver des prestations</span>
                        <span class="heading-secondary__sub">auprès de coiffeur.se.s aux</span>
                        <span class="heading-secondary__sub">techniques validées</span>
                    </div>
                </div>
                
               
                <div
                class="assets__box">
                    <img class="assets__logo" alt="logo of stars" src={etoiles}></img>
                    <div class="heading-secondary">
                        <span class="heading-secondary__main">Des salons entretenus</span>
                        <span class="heading-secondary__sub">Faites vous chouchoutez</span>
                        <span class="heading-secondary__sub">dans des salons</span>
                        <span class="heading-secondary__sub">propes et soignés</span>
                    </div>
                </div>

                <div
                class="assets__box">
                    <img class="assets__logo" alt="logo of avatar" src={avatar}></img>

                    <div class="heading-secondary">
                        <span class="heading-secondary__main">Un service client assuré</span>
                        <span class="heading-secondary__sub">Passez un agréable</span>
                        <span class="heading-secondary__sub">moment de par un véritable</span>
                        <span class="heading-secondary__sub">professionnalisme</span>
                    </div>
                </div>
            </div>

        </div>




            
        </>
    )
}
