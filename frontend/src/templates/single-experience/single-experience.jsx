import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Card from "../../components/Card/card";
import Scroll from "../../components/Scroll/scroll";
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";

const SingleExperience = props => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
    };
    const experience = props.pageContext
    return (
        <>
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
            <main>
                <section id="introduction">
                    <h1>{experience.title}</h1>
                    <Scroll
                        link="#content"
                    />
                </section>
                <section dangerouslySetInnerHTML={{ __html:"<h2>Description</h2><hr class=\"separator\" color=\"#8980F5\"/>" + experience.acf_experience.paragraphe}} id="content">
                </section>
                <section>
                    <h2>
                        Thèmes associés
                    </h2>
                    <hr className="separator" color="#8980F5"/>
                    <ul className="card-list">
                        {(experience.acf_experience.themeAssocies) ? experience.acf_experience.themeAssocies.map((element) => {
                            return (
                                <Card
                                    key={element.themeAssocie.id}
                                    label={element.themeAssocie.title}
                                    link={"../themes/" + element.themeAssocie.slug}
                                />
                            )
                        }) : <p>Aucun thème associé à cette expérience.</p>}
                    </ul>
                </section>
                <section>
                    <h2>
                        Compétences associées
                    </h2>
                    <hr className="separator" color="#8980F5"/>
                    <ul className="card-list">
                        {(experience.acf_experience.competencesAssociees) ? experience.acf_experience.competencesAssociees.map((element) => {
                            return (
                                <Card
                                    key={element.competenceAssociee.id}
                                    label={element.competenceAssociee.title}
                                    link={"../competences/" + element.competenceAssociee.slug}
                                />
                            )
                        }) : <p>Aucune compétence associée à cette expérience.</p>}
                    </ul>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default SingleExperience;