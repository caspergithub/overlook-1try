import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import Style from '../../styles/hotels.module.scss'
import RoomIcon from '../../images/room-icon.png'
import FamilyIcon from '../../images/family-icon.png'
import BedIcon from '../../images/bed-icon.png'
import Checkmark from '../../images/checkmark-icon.png'

function SuperiorPlus() {

    //fetch all rooms
    useEffect(() => {
        getSelectedAllRooms()
        getRoomData()
    }, [])

    const [AllRooms, setAllRooms] = useState("");
    const [RoomData, setRoomData] = useState("");

    const getSelectedAllRooms = () => {
        let url = `https://api.mediehuset.net/overlook/rooms/by_hotel/1`
        fetch(url)
            .then(response => response.json())
            .then(json => setAllRooms(json))
            .catch(error => console.log(error))
    }

    //Get the standard room

    const getRoomData = () => {
        let url = `https://api.mediehuset.net/overlook/rooms/3`
        fetch(url)
            .then(response => response.json())
            .then(json => setRoomData(json))
            .catch(error => console.log(error))
    }

    console.log(RoomData.items)

    return (
        <>
            <div className={Style.heroImageWrapper}>
                <div className={Style.heroImage} style={{ backgroundImage: `url(${AllRooms ? AllRooms.items[4].images[0].image : null})` }}></div>
                <div className={Style.heroText}><span>VÆRELSER</span></div>
            </div>
            <section className={Style.mainGridWrapper}>

                <div className={Style.mainGrid}>

                    <div>
                        <span><Link to="/">Værelser </Link> &rsaquo; {RoomData.item ? RoomData.item.title : null}</span>
                        <h2 className={Style.fontWeight200}>{RoomData.item ? RoomData.item.title : null}</h2>
                        <section className={Style.theSelectedRoomsImages}>
                            {AllRooms.items
                                ? AllRooms.items[4].images.map(({ name, description, id, image }) => (
                                    <div key={id}>
                                        <img src={image} className={Style.selectedRoomsImage} alt="" />
                                        <h3 className={Style.fontWeight200}>{name}</h3>
                                        <p className={Style.fontWeight200}>{description}</p>
                                    </div>
                                ))
                                : null}
                        </section>
                        <p className={Style.fontWeight200}>{RoomData.item ? RoomData.item.description : null}</p>
                        <div className={Style.facilitiesGrid1}>
                            <img src={RoomIcon} alt="" />
                            <p className={Style.fontWeight200}>{RoomData.item ? RoomData.item.area : null}.</p>
                        </div>
                        <div className={Style.facilitiesGrid1}>
                            <img src={FamilyIcon} alt="" />
                            <p className={Style.fontWeight200}>Plads til {RoomData.item ? RoomData.item.num_persons : null} personer.</p>
                        </div>
                        <div className={Style.facilitiesGrid1}>
                            <img src={BedIcon} alt="" />
                            <p className={Style.fontWeight200}>Sengetyper: {RoomData.item ? RoomData.item.facilities[15].title : null}</p>
                        </div>
                        <h3 className={Style.fontWeight200}>Værelset er ustyret med:</h3>
                        <div className={Style.facilitiesGrid2}>{RoomData.item ? RoomData.item.facilities.map(({ id, title }) => (
                            <div className={Style.facilitiesGrid3} key={id}>
                                <img src={Checkmark} alt="" />
                                <p className={Style.fontWeight200}>{title}</p>
                            </div>
                        )) : null}</div>
                        <h3 className={Style.fontWeight200}>Priser:</h3>
                        <div className={Style.priceGrid}>
                            <p className={Style.fontWeight200}>NORMAL Pris - inkl. morgenmad - kan ikke ændres eller afbestilles </p>
                            <span className={Style.price}>{RoomData.item ? RoomData.item.day_price_normal : null} DKK/nat</span>
                        </div>
                        <div className={Style.priceGrid}>
                            <p className={Style.fontWeight200}>FLEX Pris - inkl. morgenmad - kan ikke ændres eller afbestilles </p>
                            <span className={Style.price}>{RoomData.item ? RoomData.item.day_price_flex : null} DKK/nat</span>
                        </div>
                    </div>

                    <div className={Style.grid2}>
                        <p>Værelsestyper</p>

                        <Link to="/standardSingle">
                            <div className={Style.grid2selectRoomGrid}>
                                <img src={AllRooms ? AllRooms.items[0].images[0].image : null} alt="" className={Style.grid2roomImage} />
                                <p className={Style.grid2roomTitle}>{AllRooms ? AllRooms.items[0].room_title : null}</p>
                            </div>
                        </Link>

                        <Link to="/standardRoom">
                            <div className={Style.grid2selectRoomGrid}>
                                <img src={AllRooms ? AllRooms.items[2].images[0].image : null} alt="" className={Style.grid2roomImage} />
                                <p className={Style.grid2roomTitle}>{AllRooms ? AllRooms.items[2].room_title : null}</p>
                            </div>
                        </Link>

                        <Link to="/economyRoom">
                            <div className={Style.grid2selectRoomGrid}>
                                <img src={AllRooms ? AllRooms.items[1].images[0].image : null} alt="" className={Style.grid2roomImage} />
                                <p className={Style.grid2roomTitle}>{AllRooms ? AllRooms.items[1].room_title : null}</p>
                            </div>
                        </Link>

                        <Link to="/superiorRoom">
                            <div className={Style.grid2selectRoomGrid}>
                                <img src={AllRooms ? AllRooms.items[3].images[0].image : null} alt="" className={Style.grid2roomImage} />
                                <p className={Style.grid2roomTitle}>{AllRooms ? AllRooms.items[3].room_title : null}</p>
                            </div>
                        </Link>

                        <Link to="/superiorPlus">
                            <div className={Style.grid2selectRoomGrid}>
                                <img src={AllRooms ? AllRooms.items[4].images[0].image : null} alt="" className={Style.grid2roomImage} />
                                <p className={Style.grid2roomTitle}>{AllRooms ? AllRooms.items[4].room_title : null}</p>
                            </div>
                        </Link>

                        <Link to="/juniorSuite">
                            <div className={Style.grid2selectRoomGrid}>
                                <img src={AllRooms ? AllRooms.items[5].images[0].image : null} alt="" className={Style.grid2roomImage} />
                                <p className={Style.grid2roomTitle}>{AllRooms ? AllRooms.items[5].room_title : null}</p>
                            </div>
                        </Link>

                        <Link to="/presidentialSuite">
                            <div className={Style.grid2selectRoomGrid}>
                                <img src={AllRooms ? AllRooms.items[6].images[0].image : null} alt="" className={Style.grid2roomImage} />
                                <p className={Style.grid2roomTitle}>{AllRooms ? AllRooms.items[6].room_title : null}</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>
        </>
    )
}

export default SuperiorPlus