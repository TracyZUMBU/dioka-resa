import React from "react";
import HeaderGreenStatic from "../components/HeaderGreenStatic";
import ButtonBlueBorder from "../components/ButtonBlueBorder";
import ButtonWhite from "../components/ButtonWhite";

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
              <hr></hr>
              <form action="" method="">
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
              </form>
              <a href="#" class="forget_pwd">j'ai oublié mon mot de passe</a>
              <ButtonWhite text="Se connecter" />
              <div class="sign-up">
                <p>vous n'avez pas encore de compte,</p>
                <a href="#">inscrivez-vous par ici</a>
                </div>

            </div>
            <div class="login__box__input"></div>
          </div>
        </div>
      </div>
    </>
  );
}
