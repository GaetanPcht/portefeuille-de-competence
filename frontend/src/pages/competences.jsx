import React from "react";
import "./experiences.css"
import { graphql } from "gatsby"
import Header from "../components/Header/header";
import Card from "../components/Card/card";

const Competences = ({ data }) => {
    console.log(data)
    return (
        <>
            <Header />
            <h1>Competences</h1>
            <ul className="card-list">
                {data.allWpCompetences.edges.map((element) => {
                    return (
                        <Card
                            link={element.node.slug}
                            label={element.node.name}
                        />
                    )
                })}
            </ul>
        </>
    );
}

export const query = graphql`
  {
    allWpCompetences {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`

export default Competences;