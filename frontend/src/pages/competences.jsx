import React from "react";
import "./experiences.css"
import { graphql } from "gatsby"
import Header from "../components/Header/header";
import Card from "../components/Card/card";
import Footer from "../components/Footer/footer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Competences = ({ data }) => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
    };
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
            <Header />
            <main>
                <section id="introduction">
                    <h1>Competences</h1>
                    <ul className="card-list">
                        {(data.allWpCompetence.edges.length > 0 ) ? data.allWpCompetence.edges.map((element) => {
                            return (
                                <Card
                                    key={element.node.id}
                                    link={element.node.slug}
                                    label={element.node.title}
                                />
                            )
                    }): <p>Aucune compétence.</p>}
                    </ul>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export const query = graphql`
  {
    allWpCompetence {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`

export default Competences;