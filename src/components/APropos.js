import React from 'react'
import logoDioka from '../assets/pictures/logo-dioka-blanc.svg'

export default function APropos() {
    return (
        <>
        <div class="header-green">
            <img src={logoDioka} alt='' class='header-green__logo'></img>
            <nav>
                <ul>
                    <li><a href='#'>A propos</a></li>
                    <li><a href='#'>Réservez</a></li>
                    <li><a href='#'>Connexion</a></li>
                </ul>
            </nav>
        </div>
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

            <div class="presentation__img-box">
                <img src={''} alt="picture of sisters" class="presentation__img"></img>
            </div>

            <div class="presentation__story">
                {/* /*mixin heading*/ }
                <span></span> 
                <span></span>
                {/* /*mixin heading-sub*/ }
                <span></span>
                <span></span>
            </div>

            <div class="presentation__goal-box">
                <div class="presentation__goal">
                    {/* /*mixin heading-sub*/ }
                    <span></span>
                    {/* créer une mixin avec Medium */}
                    <span></span>
                </div>


            </div>
        </div>

        <div class="section-image--curly">
            <div class="text-box--center">

            <div class='heading-primary'>
                <span class="heading-primary__main--white"></span>
                <span class="heading-primary__main--white"></span>
                <span class="heading-primary__main--white"></span>
                <span class="heading-primary__main--white"></span>
                <span class="heading-primary__main--white"></span>
            </div>
            </div>
        </div>




            
        </>
    )
}
