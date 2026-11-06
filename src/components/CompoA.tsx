import React from 'react'
import CompoB from './CompoB'

function compoA() {
    const user={
        name:"Soumik"
    }
    return (
        <div className='max-w-5xl mx-auto'>
            <h1>CompoA</h1>
            <CompoB/>
        </div>
        
    )
}

export default compoA