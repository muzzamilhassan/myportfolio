import React from 'react'

const Cards = (props) => {
    return (
        <div className="card">
            <a className="card1 " href="#">
                <h1 className='font'>{props.exp}<sup>+</sup></h1>
                <h3><span></span>{props.first}<br />{props.last}</h3>
                <div className="go-corner" href="#">
                    <div className="go-arrow">
                        →
                    </div>
                </div>
                
            </a>
        </div>
    )
}

export default Cards