import React from 'react'

import Style from '../../styles/hotels.module.scss'

function Selectionofrooms(props) {
    return (
        <>
            <div className={Style.heroImageWrapper}>
                <div className={Style.heroImage}></div>
                <div className={Style.heroText}><span>VÆRELSER</span></div>
            </div>
            <section className={Style.mainGridWrapper}>
                <h2 className={Style.h2fontWeight200}>Se vores udvalg af værelser</h2>
            </section>
        </>
    )
}

export default Selectionofrooms