import React from "react";
import "./experiences.css"
import { graphql } from "gatsby"
import Header from "../components/Header/header";
import Card from "../components/Card/card";
import Footer from "../components/Footer/footer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Seo from "../components/seo";


const Themes = ({ data }) => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
    };
    return (
        <>
            <Seo title="Tous les thèmes" />
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
            <main id="archive">
                <section id="introduction">
                    <h1>Thèmes</h1>
                    <ul className="card-list">
                        {(data.allWpThemes.nodes.length > 0 ) ? data.allWpThemes.nodes.map((element) => {
                            return (
                                <Card
                                    key={element.id}
                                    link={element.slug}
                                    label={element.title}
                                />
                            )
                        }) : <p>Aucun thème.</p>}
                    </ul>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export const query = graphql`
  {
    allWpThemes {
      nodes {
        slug
        id
        title
      }
    }
  }
`

export default Themes;