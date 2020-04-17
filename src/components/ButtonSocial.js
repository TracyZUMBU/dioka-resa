import React from 'react'

import FBlogo from "../assets/icons/icone_facebook.png"
import Googlelogo from  "../assets/icons/icone_google.svg"
import ButtonBlueBorder from "../components/ButtonBlueBorder";

export default function ButtonSocial() {
    return (
        <>
            <div class="login__box__social-media">
              <div class="button_social">
                <div class="button_social__box-logo">
              <ButtonBlueBorder text="Continuer avec Facebook" />
              <img class="button_social__logo" src={FBlogo}></img>
                </div>
                <div class="button_social__box-logo">
              <ButtonBlueBorder text="Continuer avec Google" />
              <img class="button_social__logo" src={Googlelogo}></img>
                </div>
              </div>
              </div>
        </>
    )
}
