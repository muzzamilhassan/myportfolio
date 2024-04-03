import React from 'react'

const Title = (props) => {
  return (
    <div className='about-sec'>
      <h1 className='resume'>{props.bgname}</h1>
      <h1 className='resume about-title'>{props.name} <span>{props.me}</span></h1>
    </div>
  )
}

export default Title