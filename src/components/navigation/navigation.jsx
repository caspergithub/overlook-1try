import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../../styles/navigation.module.scss'
import Logo from '../../images/overlook-logo.png'

function Navigation(props) {

    const logOut = () => {
        props.setLoginData(null)
        localStorage.removeItem("token")
    }

    return (
        <nav className={Style.topnav}>
            <div className={Style.topnavLogo}>
                <img src={Logo} alt="logo" />
            </div>
            <ul className={Style.links}>
                <li><Link to='/'><p>Forside</p></Link></li>
                <li><Link to='/hotels'><p>Hoteller og destinationer</p></Link></li>
                <li><Link to='/rooms'><p>Værelser</p></Link></li>
                <li><Link to='/reservation'><p>Reservation</p></Link></li>
                {!props.loginData &&
                    <li><Link to="/login"><p>Login</p></Link></li>
                }
                {props.loginData &&
                    <li><p className={Style.cursorPointer} onClick={() => logOut()}>Log ud</p></li>
                }
            </ul>
        </nav>
    )
}

export default Navigation