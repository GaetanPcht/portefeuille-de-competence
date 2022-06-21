import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Scroll from "../../components/Scroll/scroll";
import Card from "../../components/Card/card";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

import "./single-competence.css";
import Seo from "../../components/seo";

const SingleCompetence = props => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
    };
    const competence = props.pageContext
    return (
        <>
            <Seo title={competence.title} />
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
            <Header/>
            <main id="single">
                <section id="introduction">
                    <h1>{competence.title}</h1>
                    <Scroll
                        link="#content"
                    />
                </section>
                <section id="content" dangerouslySetInnerHTML={{ __html:"<h2>Description</h2><hr class=\"separator\" color=\"#8980F5\"/>" + competence.acf_competences.paragraphe }} />
                <section id="referentiel">
                    <h2>Référentiel européen des e-Compétences</h2>
                    <hr className="separator" color="#8980F5"/>
                    <ul>
                        <li><p>{ competence.acf_competences.dimensionReferentielEuropeen.dimension1 }</p></li>
                        <li><p>{ competence.acf_competences.dimensionReferentielEuropeen.dimension2 }</p></li>
                        <li><p>{ competence.acf_competences.dimensionReferentielEuropeen.dimension3 }</p></li>
                    </ul>
                </section>
                <section className="associate">
                    <h2>Expériences associées</h2>
                    <hr className="separator" color="#8980F5"/>
                    <ul className="card-list">
                        {(competence.acf_competences.experiencesAssociees) ? competence.acf_competences.experiencesAssociees.map((node) => {
                            return(
                                <Card
                                    key={node.experienceAssocie.id}
                                    label={node.experienceAssocie.title}
                                    link={"../experience/" + node.experienceAssocie.slug}
                                />
                            )
                        }) : <p>Aucune expérience associée à cette compétence.</p>}
                    </ul>
                </section>
                <section className="associate">
                    <h2>Thèmes associés</h2>
                    <hr className="separator" color="#8980F5"/>
                    <ul className="card-list">
                        {(competence.acf_competences.themeAssocies) ? competence.acf_competences.themeAssocies.map((node) => {
                            return(
                                <Card
                                    key={node.themeAssocie.id}
                                    label={node.themeAssocie.title}
                                    link={"../themes/" + node.themeAssocie.slug}
                                />
                            )
                        }) : <p>Aucun thème associé à cette compétence.</p>}
                    </ul>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default SingleCompetence;