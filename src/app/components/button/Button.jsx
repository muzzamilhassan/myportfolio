'use client'

import { useState } from "react"

const Button = (props) => {
    const [active,setActive]=useState(0)
    return (
        <button className="Btn">
            <svg className="logoIcon" height="1em" viewBox="0 0 576 512"><path d={props.path}></path></svg>
            <span className="tooltip">{props.title}</span> 
        </button>
    )
}

export default Button

// onClick={()=>{
    // setActive(0)
// }} className={`Btn ${active===0 && 'activee'}`} 