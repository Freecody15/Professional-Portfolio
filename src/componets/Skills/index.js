import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact, } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                        I have extensive knowledge in  Html5, CSS, and Javascript
                        I'm also experienced in  Angular, React, and MongoDB.
                        I've been told I am a  critical thinker and a very organized
                        person, while also loving new challeneges that push my limits.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div class='wrap'>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                        <div class='c'></div>
                    </div>
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Skills