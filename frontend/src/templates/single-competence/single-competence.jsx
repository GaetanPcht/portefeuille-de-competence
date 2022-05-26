import React from "react";
import Header from "../../components/Header/header";

const SingleCompetence = props => {
    const competence = props.pageContext
    return (
        <>
            <Header/>
            <h1>{competence.title}</h1>
            <pre>{JSON.stringify(competence, null, 2)}</pre>
        </>
    );
}

export default SingleCompetence;