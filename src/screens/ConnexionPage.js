import React from 'react'
import HeaderGreen from '../components/HeaderGreen'
import ButtonBlueBorder from '../components/ButtonBlueBorder'


export default function ConnexionPage() {
    return (
        <>
          <HeaderGreen/>  
        <div class="login">
            <div class="login__image"></div>
            <div class="login__box">
                <div class=""></div>
                <div class="login__box__social-media">
                <ButtonBlueBorder text="Continuer avec Facebook"/>
                <ButtonBlueBorder text="Continuer avec Google"/>
                </div>
                <div class="login__box__input"></div>
            </div>
        </div>
        </>
    )
}
