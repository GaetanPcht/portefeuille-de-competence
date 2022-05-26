import React from "react"
import { graphql } from "gatsby"
import "./index.css";
// import  Cursor from "../components/Cursor/cursor"
import  Header from "../components/Header/header"
import Footer from "../components/Footer/footer";

const ComponentName = ({ data }) => {
    return (
        <>
            <Header />
            <main id="main">
                <section id="introduction">
                    <h1>{data.wpPage.accueil.introduction.titre}</h1>
                    <hr className="separator"/>
                    <h2>{data.wpPage.accueil.introduction.prenomEtNom}</h2>
                    <div className="scroll">
                        <a href="#portfolio">
                            <p>SCROLL</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17.703" height="40" viewBox="0 0 17.703 40">
                                <g id="Group_5" data-name="Group 5" transform="translate(-782.648 -802.5)">
                                    <line id="Line_3" data-name="Line 3" y2="40" transform="translate(791.5 802.5)" fill="none" stroke="#fff" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" x1="8" y2="13" transform="translate(791.5 828.5)" fill="none" stroke="#fff" stroke-width="2"/>
                                    <line id="Line_5" data-name="Line 5" x1="8" y1="13" transform="translate(783.5 828.5)" fill="none" stroke="#fff" stroke-width="2"/>
                                </g>
                            </svg>
                        </a>

                    </div>
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
                        <a href={data.wpPage.accueil.aProposDeMoi.cv.url} title={data.wpPage.accueil.aProposDeMoi.cv.title}>Télécharger mon CV</a>
                    </div>
                    <div>
                        <img src={data.wpPage.accueil.aProposDeMoi.photo.sourceUrl} alt={data.wpPage.accueil.aProposDeMoi.photo.altText}/>
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
