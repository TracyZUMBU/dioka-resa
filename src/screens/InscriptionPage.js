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
          <div class="login__box__image login__box__image--pink"></div>
          <div class="login__box__content login__box__content--pink">
            
              <h1 class="heading-primary">
                <span class=" heading-primary__main">inscrivez-vous</span>
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
              
              <hr class="hr hr--pink"></hr>

              
              
              <form action="" method="">
              <p>
                  <input type="text" name="name" placeholder="Prénom" />
                </p>
                <p>
                  <input type="text" name="lastname" placeholder="Nom" />
                </p>
                <p>
                  <input type="text" name="email" placeholder="E-mail" />
                </p>
                <p>
                  <input 
                    type="text"
                    name="password"
                    placeholder="Mot de passe"
                  />
                </p>
                <p>
                  <input class="last-input" type="tel" name="email" placeholder="Téléphone" />
                </p>
              </form>

              <div class="termes roman_small">
              <p>En créant un compte, vous acceptez <a href="#">les termes d'utilisation</a> </p>
              <p>et <a href="#">politique de confidentialité.</a></p>
              </div>
              
              <div class="newsletter">
                  <div class="checkbox">
                  <input type="checkbox" id="newsletter" name="newsletter"></input>
                </div>

                  <div>

                <label class="roman_medium"><span>J'accepte de recevoir des e-mails sur les salons,</span>
                <span> nos nouveautés, nos enquêtes et nos événements.</span>
                </label>
                  </div>
                </div>
              <ButtonWhite text="Se connecter" />
            </div>

            <div class="login__box__input"></div>
          </div>
        </div>
      </div>
    </>
  );
}
