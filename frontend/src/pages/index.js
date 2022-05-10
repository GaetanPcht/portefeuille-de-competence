import React from "react"
import { graphql } from "gatsby"
import "./index.css";

const ComponentName = ({ data }) => {
    return (
        <>
            <header id="header"></header>
            <main id="main">
                <section id="introduction">
                    <h1>{data.wpPage.accueil.introduction.titre}</h1>
                    <hr className="separator"/>
                    <h2>{data.wpPage.accueil.introduction.prenomEtNom}</h2>
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
                        <a href="">Télécharger mon CV</a>
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
            <footer id="footer">

            </footer>
        </>
    )
}

export const query = graphql`
  {
    wpPage(id: {eq: "cG9zdDoyNQ=="}) {
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
