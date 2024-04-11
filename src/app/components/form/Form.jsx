import React from 'react'
import Btn from '../btn/Btn'
import { MdOutlineDoneAll } from "react-icons/md";
import SubmitBtn from '../submitBtn/SubmitBtn';

const Form = () => {
    return (
        <form 
        action="https://formspree.io/f/xbjnplpr"
        method='POST'>

            <div className='flex flex-wrap gap-1 gap-y-5'>

                <input type="text" name="text" id="text" placeholder='YOUR NAME' className='input bg-[#252525] outline-none border-none p-2.5 rounded-3xl' />
                <input type="email" name="email" id="email" placeholder='YOUR EMAIL' className='bg-[#252525] outline-none border-none p-2.5 rounded-3xl' />
                <input type="text" name="text" id="text" placeholder='YOUR SUBJECT' className='bg-[#252525] outline-none border-none p-2.5 rounded-3xl' />
                <textarea name="query" id="query" cols="40" rows="8" placeholder='YOUR MESSAGE' className='w-full bg-[#252525] outline-none border-none p-2.5 rounded-3xl'></textarea>
                
            </div>
            {/* <Btn icon=<MdOutlineDoneAll/>  title='SUBMIT'/> */}
            {/* <Contactbtn/> */}
            <SubmitBtn/>
        </form>
    )
}

export default Form