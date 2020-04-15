import React from "react";
import HeaderGreenStatic from "../components/HeaderGreenStatic";
import ButtonBlueBorder from "../components/ButtonBlueBorder";

export default function ConnexionPage() {
  return (
    <>
      <div class="login">
        <HeaderGreenStatic />
       <div class="login__box">
          <div class="login__box__image">salut</div>
          <div class="login__box__content">
            <div class="text-box--center">
              <h1 class="heading-primary">
                <span class=" heading-primary__main">connectez-vous</span>
              </h1>
            </div>
            <div class=""></div>
            <div class="login__box__social-media">
              <ButtonBlueBorder text="Continuer avec Facebook" />
              <ButtonBlueBorder text="Continuer avec Google" />
            </div>
            <div class="login__box__input"></div>
          </div>
          </div>
      </div>
    </>
  );
}
