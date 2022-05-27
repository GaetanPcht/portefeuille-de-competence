import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Card from "../../components/Card/card";
import Scroll from "../../components/Scroll/scroll";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

const SingleTheme = props => {
    const theme = props.pageContext
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
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
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
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
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
                    <h1>{theme.title}</h1>
                    <Scroll
                        link="#content"
                    />
                </section>
                <section id="content" dangerouslySetInnerHTML={{ __html:"<h2>Description</h2><hr class=\"separator\" color=\"#8980F5\"/>" +theme.acf_themes.paragraphe}} />
                <section>
                    <h2>Expériences associées</h2>
                    <hr className="separator" color="#8980F5"/>
                    <ul className="card-list">
                        {theme.experiences.nodes.map((node) => {
                            return (
                                <Card
                                    key={node.id}
                                    label={node.title}
                                    link={"../experiences/" + node.slug}
                                />
                            )
                        })}
                    </ul>
                </section>
                <section>
                    <h2>Compétences associées</h2>
                    <hr className="separator" color="#8980F5"/>
                    <ul className="card-list">
                        {theme.experiences.nodes.map((node) => {
                            return node.competences.nodes.map((n) => {
                                return(
                                    <Card
                                        key={n.id}
                                        label={n.name}
                                        link={"../competences/" + n.slug}
                                    />
                                )
                            })
                        })}
                    </ul>
                    {/*<pre>{JSON.stringify(theme, null, 2)}</pre>*/}
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default SingleTheme;