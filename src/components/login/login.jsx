import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Style from '../../styles/login.module.scss'

function Login(props) {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [message, setMessage] = useState("")

    const sendLoginRequest = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('username', username)
        formData.append('password', password)

        let url = 'https://api.mediehuset.net/token';

        console.log(formData)
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(response => response.json())
            .then(json => handleSessionData(json))
            .catch(error => setMessage(error))
    }

    const handleSessionData = (key) => {
        if (!key.message) {
            props.setLoginData(key)
            console.log(key)
            localStorage.setItem('token', JSON.stringify(key))
        }

        if (key.message === "No authorization") {
            setMessage("Forkert brugernavn eller password - prøv igen")
        }
    }

    //Log out
    const logOut = () => {
        props.setLoginData(null)
        localStorage.removeItem("token")
    }

    //Get banner img
    useEffect(() => {
        getImageForBanner()
    }, [])

    const [bannerImg, setBannerImg] = useState("");

    const getImageForBanner = () => {
        let url = `https://api.mediehuset.net/overlook/hotels/by_city/15`
        fetch(url)
            .then(response => response.json())
            .then(json => setBannerImg(json))
            .catch(error => console.log(error))
    }

    // console.log(bannerImg)

    return (
        <div>
            <div className={Style.heroImageWrapper}>
                <div className={Style.heroImage} style={{ backgroundImage: `url(${bannerImg && bannerImg.items[1].image})` }}></div>
            </div>
            <div className={Style.loginWrapper}>
                <Link to='/' className={Style.bca}><span className={Style.loginSpan}>Hotel Overlook</span></Link> &rsaquo; <span>Login</span>
                <h2 className={Style.loginH2}>login</h2>
                <p className={Style.borderBottom}>Her kan du administrere dine reservationer</p>
                <section className={Style.form}>
                    <h4>{!props.loginData ? message : `Du er logget ind som ${props.loginData.username}`}</h4>
                    <>
                        <label>Brugernavn</label>
                        <input type="username" onChange={(e) => { setUsername(e.target.value) }} required placeholder="Indtast din email"></input>
                        <label>Adgangskode</label>
                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} required placeholder="Indtast din adgangskode"></input>
                        {!props.loginData &&
                            <button onClick={(e) => sendLoginRequest(e)}>Login</button>
                        }
                        {props.loginData &&
                            <button onClick={() => logOut()}>Log ud</button>
                        }
                        <button>Annuller</button>
                    </>
                </section>
            </div>
        </div>
    )
}

export default Login