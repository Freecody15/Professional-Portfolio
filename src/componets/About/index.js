import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import imageA from '../../../src/assets/images/fam1.jpg'
import imageB from '../../../src/assets/images/fam2.jpg'
import imageC from '../../../src/assets/images/r1.jpg'
import imageD from '../../../src/assets/images/porsche.jpg'
import imageE from '../../../src/assets/images/truck.jpg'
import imageF from '../../../src/assets/images/s2k.jpg'
import './index.scss'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page"> 0
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"ABOUT".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a very ambitious front-end developer looking for a role in an
                        established company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p>
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my-self one problem at a time.
                    </p>
                    <p>
                        If I had to define myself in a few words it would be  that I am a
                        man devoted to my family. I am happily married and have two beautiful
                        daughters. I’m a game fanatic, car enthusiast, and tech-obsessed.
                    </p>
                </div>


                <div class="container-carousel">
                    <div class="carousel">
                        <div class="item aa" style={{ backgroundImage: `url(${imageA})` }}></div>
                        <div class="item ab" style={{ backgroundImage: `url(${imageD})` }}></div>
                        <div class="item ac" style={{ backgroundImage: `url(${imageB})` }}></div>
                        <div class="item ad" style={{ backgroundImage: `url(${imageE})` }}></div>
                        <div class="item ae" style={{ backgroundImage: `url(${imageC})` }}></div>
                        <div class="item af" style={{ backgroundImage: `url(${imageF})` }}></div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}


export default About