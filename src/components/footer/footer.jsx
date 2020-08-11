import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import Style from '../../styles/footer.module.scss'

function Footer(props) {
    return (
        <section className={Style.footer}>
            <span>© 2019 Hotel Overlook. Alle rettigheder forbeholdt.</span>
            <div className={Style.sm}>
                <div><FaFacebook /></div>
                <div><FaTwitter /></div>
            </div>
            <div>
                <ul className={Style.links}>
                    <li><p>Hoteller og destinationer</p></li>
                    <li><p>Værelser</p></li>
                    <li><p>Reservation</p></li>
                    <li><p>Om Overlook</p></li>
                </ul>
            </div>
        </section>
    )
}

export default Footer