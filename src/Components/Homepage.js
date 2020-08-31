import React from 'react'
import './Homepage.css';
import logo from '../Assets/logo.svg'
import menu from '../Assets/menu.svg'
import contacter from '../Assets/contact.svg'
import savoir from '../Assets/ensavoirplus.svg'

const Homepage = () => {
    return (
        <div className="homepage-all">
            <div className="homepage-all-content">
                <div className="homepage-left">
                    <div className="homepage-menu">
                        <img src={menu} alt="menu portfolio" />
                    </div>
                    {/* <div className="homepage-logo">
                    <img src={logo} alt="logo portfolio" />
                </div> */}
                    <div className="homepage-title">
                        Créateurs d’expériences
            </div>
                    <div className="homepage-undertitle">
                        Nous sommes une équipe regroupant les compétences dont vous avez besoin pour votre projet. Développeurs, Designer et Product Owner.
                </div>
                    <div className="homepage-contact">
                        <img src={contacter} alt="contactez-nous" />
                    </div>
                    <div className="homepage-ensavoir">
                        <img src={savoir} alt="en savoir plus" />
                    </div>
                </div>
                <div className="homepage-right">
                    <div className="homepage-logo">
                        <img src={logo} alt="logo portfolio" />
                    </div>
                </div>

            </div>
                <div className="homepage-deux">
                    <div className="homepage-deux-left">
                        <div className="homepage-deux-title">
                            logo
                        </div>
                        <div className="homepage-deux-undertitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales eleifend erat ut aliquet. Donec sodales nunc nec quam sodales volutpat. Duis auctor tempus.
                        </div>
                    </div>
                </div>

        </div>
    )
}
export default Homepage;
