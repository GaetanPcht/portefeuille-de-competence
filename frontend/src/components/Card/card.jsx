import * as React from "react"
import "./card.css"

const Card = (props) => {

    return(
        <li className="card">
            <a href={props.link}>
                <span>{props.label}</span>
            </a>
        </li>
    )
}

export default Card