import React, { useState, useEffect } from 'react'
import Style from '../../styles/hotels.module.scss'

import { Link } from 'react-router-dom'


function Finland(props) {

    //fetch cities
    useEffect(() => {
        getSelectedCities()
    }, [])

    const [cities, setCities] = useState("");

    const getSelectedCities = () => {
        let url = `https://api.mediehuset.net/overlook/countries/3`
        fetch(url)
            .then(response => response.json())
            .then(json => setCities(json))
            .catch(error => console.log(error))
    }

    console.log(cities)

    return (
        <>
            <div className={Style.heroImageWrapper}>
            <div className={Style.heroImage} style={{ backgroundImage: `url(${cities ? cities.item.image : null})` }}></div>
                <div className={Style.heroText}><span>HOTELLER OG DESTINATIONER</span></div>
            </div>
            <section className={Style.mainGridWrapper}>
                <ul className={Style.countryUl}>
                    <li><Link to="/denmark">Danmark</Link></li>
                    <li><Link to="/sweden">Sverige</Link></li>
                    <li><Link to="/norway">Norge</Link></li>
                    <li>Finland</li>
                    <li><Link to="/iceland">Island</Link></li>
                    <li><Link to="/germany">Tyskland</Link></li>
                    <li><Link to="/poland">Polen</Link></li>
                </ul>
                <div className={Style.mainGrid}>
                    <div className={Style.grid1}>
                        <Link to='/' className={Style.bca}><span>Hotel Overlook</span></Link> &rsaquo; <span>Hoteller og Destinationer</span> &rsaquo; <span>Finland</span>
                        <h2 className={Style.fontWeight200}>Vores hoteller i Finland</h2>
                        <p className={Style.countryDescription}>{cities ? cities.item.description : null}</p>
                        <section className={Style.theCities}>
                            {cities.item
                                ? cities.item.cities.items.map(({ name, description, id, image }) => (
                                    <div key={id}>
                                        <img src={image} className={Style.cityImage} alt="" />
                                        <h3 className={Style.fontWeight200}>{name}</h3>
                                        <p className={Style.fontWeight200}>{description}</p>
                                    </div>
                                ))
                                : null}
                        </section>
                    </div>
                    <div className={Style.grid2}>
                        <p>Kort over Finland</p>
                        <div className={Style.mapDiv}></div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Finland