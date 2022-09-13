import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    // stops false submits
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_lxn2lal', 'template_zz8kpmv', form.current, 'dtOu9cBVkcD48RtxW')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        To reach out to me please send a message.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Your Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Dakota Pope,
                    <br />
                    United States,
                    <br />
                    Cumming Georgia, 30041<br />
                    <span className='email-dakota'>Dakota_pope1996@hotmail.com</span>
                </div>
                <div className="google-map">
                    <iframe title="myLocoation" className='container' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4666.365972230547!2d-84.14171718472446!3d34.207209307450526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5858b3dfbd763%3A0xc6125a263da10677!2sVillage%20Burger!5e0!3m2!1sen!2sus!4v1663082537123!5m2!1sen!2sus" ></iframe>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Contact