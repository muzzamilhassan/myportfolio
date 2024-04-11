import Image from 'next/image'
import React from 'react'

const Notfound = () => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            overflow: 'hidden'
        }}>
            <img src="./notfound.gif" alt="missing" style={{
                width: '100%',
                height: '110vh',
            }} />
        </div>
    )
}

export default Notfound