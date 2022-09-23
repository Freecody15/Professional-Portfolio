import LogoS from '../../../assets/images/logo-D.png'
import './index.scss'

const Logo = () => {

    return (
        <div className="logo-container" >
            <div className="solid-logo">
                <img className="solid-logo" src={LogoS} alt="Bounceing Logo" />
            </div>
            <div className='shadow'></div>
        </div>
    )
}

export default Logo