import React from 'react'

const Contactbtn = (props) => {
    return (
        <button class="ContactBtn">
            <span class="svgContainer">
                <svg fill="black" viewBox="0 0 496 512" height="1.6em"><path d={props.path}></path></svg>
            </span>
            <span class="BG"></span>
        </button>
    )
}

export default Contactbtn