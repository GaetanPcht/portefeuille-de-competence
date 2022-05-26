import React from "react";
import "./experiences.css"
import { graphql } from "gatsby"
import Header from "../components/Header/header";
import Card from "../components/Card/card";


const Themes = ({ data }) => {
    console.log(data)
    return (
        <>
            <Header />
            <h1>Thèmes</h1>
            <ul className="card-list">
                {data.allWpThemes.nodes.map((element) => {
                    return (
                        <Card
                            link={element.slug}
                            label={element.name}
                        />
                    )
                })}
            </ul>
        </>
    );
}

export const query = graphql`
  {
    allWpThemes {
      nodes {
        slug
        id
        name
      }
    }
  }
`

export default Themes;