import React from 'react'
import './style.css'
import Icons from '../../components/icons/index.js'
import { useSpring,animated } from 'react-spring'


function Intro(){
    const fadeIn = useSpring({opacity: 1, from:{opacity: 0}, delay: 300})

    return(
        <div className='intro'>
            <div className='titles'> 
                <h1>
                    Eduardo Prates
                    <Icons /> 
                </h1>                
                <h2>Desenvolvedor <animated.strong style={fadeIn}>Full Stack</animated.strong></h2>
            </div>
        </div>
    )
}

export default Intro;