import React from "react";
import "./scroll.css";

const Scroll = (props) => {
    return (
        <div className="scroll">
            <a href={props.link}>
                <p>SCROLL</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="17.703" height="40" viewBox="0 0 17.703 40">
                    <g id="Group_5" data-name="Group 5" transform="translate(-782.648 -802.5)">
                        <line id="Line_3" data-name="Line 3" y2="40" transform="translate(791.5 802.5)" fill="none" stroke="#fff" strokeWidth="2"/>
                        <line id="Line_4" data-name="Line 4" x1="8" y2="13" transform="translate(791.5 828.5)" fill="none" stroke="#fff" strokeWidth="2"/>
                        <line id="Line_5" data-name="Line 5" x1="8" y1="13" transform="translate(783.5 828.5)" fill="none" stroke="#fff" strokeWidth="2"/>
                    </g>
                </svg>
            </a>
        </div>
    )
}

export default Scroll;