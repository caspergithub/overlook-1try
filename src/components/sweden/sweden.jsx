import React from 'react'
import Style from '../../styles/hotels.module.scss'

import { Link } from 'react-router-dom'


function Sweden(props) {
    return (
        <>
            <div className={Style.heroImageWrapper}>
                <div className={Style.heroImage}></div>
                <div className={Style.heroText}><span>HOTELLER OG DESTINATIONER</span></div>
            </div>
            <section className={Style.countryMainWrapper}>
                <ul className={Style.countryUl}>
                    <li><Link to="/denmark">Danmark</Link></li>
                    <li>Sverige</li>
                    <li><Link to="/norway">Norge</Link></li>
                    <li><Link to="/finland">Finland</Link></li>
                    <li><Link to="/iceland">Island</Link></li>
                    <li><Link to="/germany">Tyskland</Link></li>
                    <li><Link to="/poland">Polen</Link></li>
                </ul>
                <div className={Style.mainGrid}>
                    <div className={Style.grid1}>
                        <Link to='/' className={Style.bca}><span>Hotel Overlook</span></Link> &rsaquo; <span>Hoteller og Destinationer</span> &rsaquo; <span>Sverige</span>
                        <h2 className={Style.countryH2}>Vores hoteller i Sverige</h2>
                    </div>
                    <div className={Style.grid2}>
                        <p>Kort over Sverige</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sweden