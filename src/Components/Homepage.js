import React from "react";
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
  return (
    <div className="homepage-all">
      <div className="homepage-all-content">
        <div className="homepage-left">
          <div className="homepage-menu">
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
        </div>
      </div>

      <div className="homepage-deux">
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
      <div className="homepage-trois">
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
      <div className="homepage-quatre">
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
      <div className="homepage-cinq">
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
    </div>
  );
};
export default Homepage;
