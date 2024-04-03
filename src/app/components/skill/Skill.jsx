'use client'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Skill = () => {
    const percentage = 54;
    return (
        <div className="skilll">
            <div className='skillbar'>
                <CircularProgressbar value={80} text={`${80}%`} />
                <h4 className='text-center pt-4 text-l'>HTML</h4>
            </div> 
            <div className='skillbar'>
                <CircularProgressbar value={70} text={`${70}%`} />
                <h4 className='text-center pt-4 text-l'>CSS</h4>
            </div> 
            <div className='skillbar'>
                <CircularProgressbar value={50} text={`${50}%`} />
                <h4 className='text-center pt-4 text-l'>JAVASCRIPT</h4>
            </div> 
            <div className='skillbar'>
                <CircularProgressbar value={55} text={`${55}%`} />
                <h4 className='text-center pt-4 text-l'>TAILWINT</h4>
            </div> 
            <div className='skillbar'>
                <CircularProgressbar value={60} text={`${60}%`} />
                <h4 className='text-center pt-4 text-l'>BOOTSTRAP</h4>
            </div> 
            <div className='skillbar'>
                <CircularProgressbar value={70} text={`${70}%`} />
                <h4 className='text-center pt-4 text-l'>MATERIAL UI</h4>
            </div> 
            <div className='skillbar'>
                <CircularProgressbar value={65} text={`${65}%`} />
                <h4 className='text-center pt-4 text-l'>REACT</h4>
            </div> 
            <div className='skillbar'>
                <CircularProgressbar value={60} text={`${60}%`} />
                <h4 className='text-center pt-4 text-l'>NEXT</h4>
            </div>
            
        </div>

    )
}

export default Skill