import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container skills-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"SKILLS".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I have knowledge of Html5, Javascript, React, Monogodb, Nodejs, css, and Inkscape
                    </p>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Skills