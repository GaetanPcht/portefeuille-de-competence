import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Card from "../../components/Card/card";
import Scroll from "../../components/Scroll/scroll";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import Seo from "../../components/seo";

const SingleTheme = props => {
    const theme = props.pageContext
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
    };
    return (
        <>
            <Seo title={theme.title} />
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
                    <h1>{theme.title}</h1>
                    <Scroll
                        link="#content"
                    />
                </section>
                <section id="content" dangerouslySetInnerHTML={{ __html:"<h2>Description</h2><hr class=\"separator\" color=\"#8980F5\"/>" +theme.acf_themes.paragraphe}} />
                <section className="associate">
                    <h2>Expériences associées</h2>
                    <hr className="separator" color="#8980F5"/>
                    <ul className="card-list">
                        {(theme.acf_themes.experiencesAssociees) ? theme.acf_themes.experiencesAssociees.map((node) => {
                            return (
                                <Card
                                    key={node.experienceAssociee.id}
                                    label={node.experienceAssociee.title}
                                    link={"../experiences/" + node.experienceAssociee.slug}
                                />
                            )
                        }): <p>Aucune expérience associée à ce thème.</p>}
                    </ul>
                </section>
                <section className="associate">
                    <h2>Compétences associées</h2>
                    <hr className="separator" color="#8980F5"/>
                    <ul className="card-list">
                        {(theme.acf_themes.competencesAssociees) ? theme.acf_themes.competencesAssociees.map((node) => {
                            return(
                                <Card
                                    key={node.competenceAssociee.id}
                                    label={node.competenceAssociee.title}
                                    link={"../competences/" + node.competenceAssociee.slug}
                                />
                            )
                        }): <p>Aucune compétence associée à ce thème.</p>}
                    </ul>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default SingleTheme;