import React from 'react'


const Experience = (props) => {
  return (
    <div className='exp-sec'>
      <div className="v-linee">
        {props.logo}
      </div>
      <div className="subexp">
        <h6 className='year text-gray-400'>{props.year}</h6>
        <h1 className='py-3 font-bold text-lg'>{props.title}<span className='exp-line'></span> <span className='text-gray-400 font-medium'>{props.from}</span></h1>
        <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, possimus!</p>
      </div>
    </div>
  )
}

export default Experience