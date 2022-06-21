import React from "react"
import { graphql } from "gatsby"
import "./index.css";
// import  Cursor from "../components/Cursor/cursor"
import  Header from "../components/Header/header"
import Footer from "../components/Footer/footer";
import Scroll from "../components/Scroll/scroll";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Seo from "../components/seo";


const ComponentName = ({ data }) => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
    };

    return (
        <>
            <Seo title="Portefeuille de compétences" />
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#000",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 0,
                            },
                            repulse: {
                                distance: 0,
                                duration: 0,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#8980F5",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "out",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Header />

            <main id="main">

                <section id="introduction">
                    <h1>{data.wpPage.accueil.introduction.titre}</h1>
                    <hr className="separator"/>
                    <h2>{data.wpPage.accueil.introduction.prenomEtNom}</h2>
                    <Scroll
                        link="#portfolio"
                    />
                </section>
                <section id="portfolio">
                    <div id="purpose">
                        <h2>{data.wpPage.accueil.butDuPortefeuilleDeCompetence.titre}</h2>
                        <hr className="separator" color="#8980F5"/>
                        <div dangerouslySetInnerHTML={{ __html:data.wpPage.accueil.butDuPortefeuilleDeCompetence.paragraphe}} />
                    </div>
                    <div id="structuration">
                        <h2>{data.wpPage.accueil.structurationDuPortefeuilleDeCompetence.titre}</h2>
                        <hr className="separator" color="#8980F5"/>
                        <div dangerouslySetInnerHTML={{ __html:data.wpPage.accueil.structurationDuPortefeuilleDeCompetence.paragraphe}} />
                    </div>
                </section>
                <section id="about">
                    <div>
                        <h2>{data.wpPage.accueil.aProposDeMoi.titre}</h2>
                        <hr className="separator" color="#8980F5"/>
                        <div dangerouslySetInnerHTML={{ __html:data.wpPage.accueil.aProposDeMoi.paragraphe}} />
                        <a href={`../../CV_GAETAN-PICHOUT-PDC_min.pdf`} title="CV de Gaétan Pichout" download>Télécharger mon CV</a>
                    </div>
                    <div>
                        <img src={`../../Profile_Gaetan-Pichout.jpeg`} alt="Photo de Gaétan Pichout" />
                    </div>
                </section>
                <section id="contact">
                    <h2>{data.wpPage.accueil.pourMeContacter.titre}</h2>
                    <hr className="separator" color="#8980F5"/>
                    <a href={"mailto:" + data.wpPage.accueil.pourMeContacter.email}>Envoyer moi un <span>email</span></a>
                </section>
            </main>
            <Footer />

        </>
    )
}

export const query = graphql`
  {
    wpPage(accueil: {}) {
      id
      title
      slug
      uri
      accueil {
        fieldGroupName
        butDuPortefeuilleDeCompetence {
          fieldGroupName
          paragraphe
          titre
        }
        aProposDeMoi {
          paragraphe
          titre
          fieldGroupName
          photo {
            altText
            sourceUrl
          }
          cv {
            title
            url
          }
        }
        introduction {
          fieldGroupName
          prenomEtNom
          titre
        }
        pourMeContacter {
          email
          titre
          fieldGroupName
        }
        structurationDuPortefeuilleDeCompetence {
          fieldGroupName
          paragraphe
          titre
        }
      }
    }
  }
`

export default ComponentName
