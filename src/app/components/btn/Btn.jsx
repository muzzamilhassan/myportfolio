import React from 'react'
import { BsDownload } from "react-icons/bs";

const Btn = (props) => {
    return (
        <div>
            <button type='submit' className="learn-more mr-2">
                <span className="circle" aria-hidden="true">
                    <span className="arrow">{props.icon}</span>
                </span>
                <span className="button-text">{props.title}</span>
            </button>

        </div>
    )
}

export default Btn