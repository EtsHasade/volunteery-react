
//import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'

const Hero = ({ onScrollToList }) => {
    const showHero = true

    return (
        <div className={`hero full  ${showHero ? 'hero-page' : ''}`} >
            <div className='title flex-column'>
                <h1 className='mb10'>Looking for something meaningful?</h1>
                <p>volunteer your way and according to your unique talents</p>
                <h4
                    className='call-to-action'
                    onClick={onScrollToList}
                >
                    See our suggestions
                </h4>
            </div>
        </div >

    )
}

export default Hero
