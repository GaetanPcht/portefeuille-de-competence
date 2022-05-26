import React from "react";
import "./experiences.css"
import { graphql } from "gatsby"
import Header from "../components/Header/header";
import Card from "../components/Card/card";

const Experiences = ({ data }) => {
    return (
        <>
            <Header />
            <h1>Expériences</h1>
            <ul className="card-list">
                {data.allWpExperience.edges.map((element) => {
                    return (
                        <Card
                            link={element.node.slug}
                            label={element.node.title}
                        />
                    )
                })}
            </ul>
        </>
    );
}

export const query = graphql`
  {
    allWpExperience {
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

export default Experiences;