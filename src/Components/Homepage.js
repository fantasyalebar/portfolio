import React from "react";

import { HashLink as Link } from 'react-router-hash-link';
import "./Homepage.css";
import logo from "../Assets/logo.svg";
import menu from "../Assets/menu.svg";
import contacter from "../Assets/contact.svg";
import savoir from "../Assets/ensavoirplus.svg";
import voir from "../Assets/envoirplus.svg";
import doc1 from "../Assets/documentsclose.png";
import doc2 from "../Assets/piclandingpage.png";
import doc3 from "../Assets/picconnexion.png";
import language from "../Assets/language.png";

const Homepage = () => {

    const openMenu = () => {
        let menu = document.getElementById("menu");
        if(menu.style.display==="block") {
            menu.style.display="none"
        }
        else {
            menu.style.display="block"
        }
    }

  return (
     <> 
     <div className="menu" id="menu">
        <div className="homepage-menu" onClick={openMenu}>
            <img src={menu} alt="menu portfolio"/>
        </div>
        <div className="menu-content">
            <div>
                <p className="menu-title">
                    Menu
                </p>
                <Link to="#homepage-all">Accueil</Link>
                <Link to="#homepage-deux">Projets</Link>
                <Link to="#homepage-cinq">Services</Link>
                <Link to="#homepage-six">Nous contacter</Link>
            </div>
            <div>
                <p className="menu-title">
                   Projets
                </p>
                <Link to="#homepage-deux">Projet 1</Link>
                <Link to="#homepage-trois">Projet 2</Link>
                <Link to="#homepage-quatre">Projet 3</Link>
              
            </div>
            <div>

            </div>
        </div>
     </div>
    <div className="homepage-all" id="homepage-all">
      <div className="homepage-all-content">
        <div className="homepage-left">
          <div className="homepage-menu" onClick={openMenu}>
            <img src={menu} alt="menu portfolio" />
          </div>
          <div className="homepage-content">
            <div className="homepage-title">Créateurs d’expériences</div>
            <div className="homepage-undertitle">
              Nous sommes une équipe regroupant les compétences dont vous avez
              besoin pour votre projet. Développeurs, Designer et Product Owner.
            </div>
            <div className="homepage-contact">
              <img src={contacter} alt="contactez-nous" />
            </div>
            <div className="homepage-ensavoir">
              <img src={savoir} alt="en savoir plus" />
            </div>
          </div>
        </div>

        <div className="homepage-right">
          <div className="homepage-logo">
            <img src={logo} alt="logo portfolio" />
          </div>
          <div classNAme="homepage-right-content">
              <div className="carre1">

              </div>
              <div  className="carre2">

              </div>
          </div>
        </div>
      </div>

      <div className="homepage-deux" id="homepage-deux">
        <div className="homepage-all-deux-content">
          <div className="homepage-deux-left">
            <div className="homepage-deux-title">logo</div>
            <div className="homepage-deux-undertitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              sodales eleifend erat ut aliquet. Donec sodales nunc nec quam
              sodales volutpat. Duis auctor tempus.
            </div>
          </div>
          <div className="homepage-deux-right">
            <img src={doc1} alt="menu portfolio" />

            <div className="homepage-deux-envoir">
              <img src={voir} alt="en voir plus" />
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-trois" id="homepage-trois">
        <div className="homepage-all-trois-content">
          <div className="homepage-trois-left">
            <div className="homepage-trois-title">logo</div>
            <div className="homepage-trois-undertitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              sodales eleifend erat ut aliquet. Donec sodales nunc nec quam
              sodales volutpat. Duis auctor tempus.
            </div>
          </div>
          <div className="homepage-trois-right">
            <img src={doc2} alt="menu portfolio" />

            <div className="homepage-trois-envoir">
              <img src={voir} alt="en voir plus" />
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-quatre" id="homepage-quatre">
        <div className="homepage-all-quatre-content">
          <div className="homepage-quatre-left">
            <div className="homepage-quatre-title">logo</div>
            <div className="homepage-quatre-undertitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              sodales eleifend erat ut aliquet. Donec sodales nunc nec quam
              sodales volutpat. Duis auctor tempus.
            </div>
          </div>
          <div className="homepage-quatre-right">
            <img src={doc3} alt="menu portfolio" />

            <div className="homepage-quatre-envoir">
              <img src={voir} alt="en voir plus" />
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-cinq" id="homepage-cinq">
        <div className="homepage-all-quatre-content">
          <div className="homepage-cinq-left">
            <div>
              <div className="homepage-cinq-title">L’équipe</div>
              <div className="homepage-cinq-undertitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sodales eleifend erat ut aliquet. Donec sodales nunc nec quam
                sodales volutpat. Duis auctor tempus.
              </div>
            </div>
            <div>
              <div className="homepage-cinq-title">Notre vision</div>
              <div className="homepage-cinq-undertitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sodales eleifend erat ut aliquet. Donec sodales nunc nec quam
                sodales volutpat. Duis auctor tempus.
              </div>
            </div>
            <div>
              <div className="homepage-cinq-title">Une passion</div>
              <div className="homepage-cinq-undertitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sodales eleifend erat ut aliquet. Donec sodales nunc nec quam
                sodales volutpat. Duis auctor tempus.
              </div>
            </div>
          </div>
          <div className="homepage-cinq-right">
            <div className="homepage-cinq-right-title">
              We don’t think out the box, we are out the box
            </div>
            <img src={language} alt="all language" />
            <div className="homepage-cinq-right-underpic">
              Nous adaptons les technologies et les outils utilisés en fonction
              de vos besoins. Toujours curieux des dernières nouveautés nous ne
              compons pas sur nos positions et recherchons toujours le meilleur
              pour votre projet !
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-six" id="homepage-six">
        <div className="homepage-all-six-content">
            <div className="contact-form">
                <div className="inputs">
                <input type="text" className="input1"></input>
                <input type="text" className="input2"></input>
                </div>
                <textarea className="textarea"></textarea>
                <button className='button-envoyer'>ENVOYER</button>
            </div>
            <div className="homepage-six-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales eleifend erat ut aliquet. Donec sodales nunc nec quam sodales volutpat. Duis auctor tempus consequat. Sed dictum dapibus justo ut suscipit. Proin at mi turpis. Integer interdum dapibus finibus. Nunc elit mi, consectetur quis aliquet eget, mattis id enim. Mauris tincidunt pulvinar leo, in auctor purus ornare nec. Phasellus tristique nulla quis eros tempor pellentesque. Proin eu urna nulla. Proin fermentum diam et bibendum euismod. Nulla quam felis, blandit at eros ac, blandit imperdiet lectus. Maecenas porta metus enim, in iaculis metus vehicula feugiat. Suspendisse laoreet velit placerat arcu mattis vehicula. Duis orci nibh, faucibus sed ultrices non, dictum vel elit. Aenean consequat mauris ac porttitor fermentum. In sit amet elit dignissim, condimentum erat at, faucibus lacus.
            </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Homepage;
