import React from "react";
import HeaderGreenStatic from "../components/HeaderGreenStatic";
import ButtonBlueBorder from "../components/ButtonBlueBorder";
import ButtonWhite from "../components/ButtonWhite";

import FBlogo from "../assets/icons/icone_facebook.png"
import Googlelogo from  "../assets/icons/icone_google.svg"

export default function ConnexionPage() {
  return (
    <>
      <div class="login">
        <HeaderGreenStatic />
        <div class="login__box">
          <div class="login__box__image"></div>
          <div class="login__box__content">
            
              <h1 class="heading-primary">
                <span class=" heading-primary__main">connectez-vous</span>
              </h1>
            
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
              
              <hr class="hr"></hr>

              
              
              <form action="" method="">
                <p>
                  <input class type="text" name="email" placeholder="E-mail" />
                </p>
                <p>
                  <input class="last-input"
                    type="text"
                    name="password"
                    placeholder="Mot de passe"
                  />
                </p>
              </form>
              <a href="#" class="roman_small margin">j'ai oublié mon mot de passe</a>
              <ButtonWhite text="Se connecter" />
              <div class="sign-up">
                <p class="roman_medium">vous n'avez pas encore de compte,</p>
                <a class="medium_medium" href="#">inscrivez-vous par ici</a>
                </div>
            </div>

            <div class="login__box__input"></div>
          </div>
        </div>
      </div>
    </>
  );
}
