import React, { useState, useEffect } from 'react'
import Style from '../../styles/hotels.module.scss'

import { Link } from 'react-router-dom'


function Denmark(props) {

    //fetch cities
    useEffect(() => {
        getSelectedCities()
    }, [])

    const [cities, setCities] = useState("");

    const getSelectedCities = () => {
        let url = `https://api.mediehuset.net/overlook/countries/1`
        fetch(url)
            .then(response => response.json())
            .then(json => setCities(json))
            .catch(error => console.log(error))
    }

    console.log(cities)

    //Get banner img
    useEffect(() => {
        getImageForBanner()
    }, [])

    const [bannerImg, setBannerImg] = useState("");

    const getImageForBanner = () => {
        let url = `https://api.mediehuset.net/overlook/countries`
        fetch(url)
            .then(response => response.json())
            .then(json => setBannerImg(json))
            .catch(error => console.log(error))
    }

    // console.log(bannerImg)

    return (
        <>
            <div className={Style.heroImageWrapper}>
                <div className={Style.heroImage} style={{ backgroundImage: `url(${bannerImg && bannerImg.items[0].image})` }}></div>
                <div className={Style.heroText}><span>HOTELLER OG DESTINATIONER</span></div>
            </div>
            <section className={Style.mainGridWrapper}>
                <ul className={Style.countryUl}>
                    <li>Danmark</li>
                    <li><Link to="/sweden">Sverige</Link></li>
                    <li><Link to="/norway">Norge</Link></li>
                    <li><Link to="/finland">Finland</Link></li>
                    <li><Link to="/iceland">Island</Link></li>
                    <li><Link to="/germany">Tyskland</Link></li>
                    <li><Link to="/poland">Polen</Link></li>
                </ul>
                <div className={Style.mainGrid}>
                    <div className={Style.grid1}>
                        <Link to='/' className={Style.bca}><span>Hotel Overlook</span></Link> &rsaquo; <span>Hoteller og Destinationer</span> &rsaquo; <span>Danmark</span>
                        <h2 className={Style.h2fontWeight200}>Vores hoteller i Danmark</h2>

                        <section className={Style.ourSelectedRooms}>
                            {cities.items && cities.items.map((item, index) => {
                                if (index < 3) {
                                    return (<div key={index}>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>)
                                }
                            })}
                        </section>

                    </div>
                    <div className={Style.grid2}>
                        <p>Kort over Danmark</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Denmark