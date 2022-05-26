import React from "react";
import Header from "../../components/Header/header";

const SingleTheme = props => {
    const theme = props.pageContext
    return (
        <>
            <Header/>
            <h1>{theme.title}</h1>
            <pre>{JSON.stringify(theme, null, 2)}</pre>
        </>
    );
}

export default SingleTheme;