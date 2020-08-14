import React, { useState, useEffect } from 'react'

import Style from '../../styles/hotels.module.scss'

function Selectionofrooms(props) {

    //fetch Junior Suite
    useEffect(() => {
        getSelectedJuniorSuite()
    }, [])

    const [JuniorSuite, setJuniorSuite] = useState("");

    const getSelectedJuniorSuite = () => {
        let url = `https://api.mediehuset.net/overlook/rooms/by_hotel/1`
        fetch(url)
            .then(response => response.json())
            .then(json => setJuniorSuite(json))
            .catch(error => console.log(error))
    }

    console.log(JuniorSuite.items)

    return (
        <>
            <div className={Style.heroImageWrapper}>
                <div className={Style.heroImage} style={{ backgroundImage: `url(${JuniorSuite ? JuniorSuite.items[5].images[1].image : null})` }}></div>
                <div className={Style.heroText}><span>VÆRELSER</span></div>
            </div>
            <section className={Style.mainGridWrapper}>
                <div className={Style.mainGrid}>
                    <div>
                        <span>breadcrumbs</span>
                        <h2 className={Style.fontWeight200}>Se vores udvalg af værelser</h2>
                        <p className={Style.fontWeight200}>Hos Overlook handler den gode hoteloplevelse helt enkelt om at give dig en bedre service, en bedre søvn og en bedre start på dagen, så du tager videre med en god fornemmelse og får lyst til at komme tilbage.

                        Når du træder indenfor på Overlooks hoteller, oplever du det med det samme. Det er her, store øjeblikke deles med venner og familie, og nye relationer opstår. Hvor fremtiden formes, vigtige møder finder sted, og en god middag måske fører til kærlighed. Her sker altid noget.

                        Med 31 hoteller på 29 destinationer i syv lande har alle vores hoteller deres egen unikke personlighed og atmosfære. Men nogle ting er en selvfølge, når du vælger at bo hos os.

                        Du vil opleve værelser af god komfort og høj kvalitet når du bor på et af vores hoteller. Vi har nemlig hentet hjælp fra de bedste eksperter på området.  Overlook har et tæt samarbejde med den legendariske hotelkonge, Bjarne Rother, som anses for at være en af verdens mest erfarne indenfor værelsesudlejning omkring Østersøen. Og han har flere gange givet Overlook’s hoteller mere end fem stjerner.

                        Du kan se de forskellige værelsestyper ved at klikke dig rundt i menuen til højre.</p>
                        <section className={Style.theSelectedRoomsImages}>
                            {JuniorSuite.items
                                ? JuniorSuite.items[5].images.map(({ name, description, id, image }) => (
                                    <div key={id}>
                                        <img src={image} className={Style.selectedRoomsImage} alt="" />
                                        <h3 className={Style.fontWeight200}>{name}</h3>
                                        <p className={Style.fontWeight200}>{description}</p>
                                    </div>
                                ))
                                : null}
                        </section>
                    </div>
                    <div className={Style.grid2}>
                        <p>Værelsestyper</p>
                        <section className={Style.theSelectedRoomsImages}>
                            {JuniorSuite.items
                                ? JuniorSuite.items.map(({ room_title, id, image }) => (
                                    <div key={id}>
                                        <img src={image} className={Style.selectedRoomsImage} alt="" />
                                        <h3 className={Style.fontWeight200}>{room_title}</h3>
                                    </div>
                                ))
                                : null}
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Selectionofrooms