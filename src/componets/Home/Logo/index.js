import { useRef } from 'react'
import LogoS from '../../../assets/images/logo-D.png'
import './index.scss'

const Logo = () => {
    const bgRef = useRef()

    return (
        <div className="logo-container" ref={bgRef}>
            <div className="solid-logo">
                <img
                    className="solid-logo"
                    src={LogoS}
                    alt="Bounceing Logo"
                />
            </div>
            <div className='shadow'></div>
        </div>
    )
}

export default Logo