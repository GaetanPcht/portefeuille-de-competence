import React from "react";
import Header from "../../components/Header/header";

const SingleExperience = props => {
    const experience = props.pageContext
    // console.log(experience.themes.nodes[0].name);
    return (
        <>
            <Header/>
            <h1>{experience.title}</h1>
            <div dangerouslySetInnerHTML={{ __html:experience.content}} />
            <ul>
                {experience.themes.nodes.map((node) => {
                    return <li>{node.name}</li>
                })}
            </ul>

            <ul>
                {experience.competences.nodes.map((node) => {
                    return <li>{node.name}</li>
                })}
            </ul>

            <pre>{JSON.stringify(experience, null, 2)}</pre>
        </>
    );
}

export default SingleExperience;