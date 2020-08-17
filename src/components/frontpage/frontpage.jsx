import React, { useState, useEffect } from 'react'
import Style from '../../styles/frontpage.module.scss'

import { Link } from 'react-router-dom'

import Findroom from '../findroom/findroom';


function Frontpage(props) {

    useEffect(() => {
        getNews()
        getSelectedRooms()
        getImagesForBanner()
    }, [])

    const [news, setNews] = useState("");
    const [rooms, setRooms] = useState("");
    const [bannerImg, setBannerImg] = useState("");

    const getNews = () => {
        let url = `https://api.mediehuset.net/overlook/news`
        fetch(url)
            .then(response => response.json())
            .then(json => setNews(json))
            .catch(error => console.log(error))
    }

    const getSelectedRooms = () => {
        let url = `https://api.mediehuset.net/overlook/rooms/by_hotel/1`
        fetch(url)
            .then(response => response.json())
            .then(json => setRooms(json))
            .catch(error => console.log(error))
    }

    const getImagesForBanner = () => {
        let url = `https://api.mediehuset.net/overlook/countries`
        fetch(url)
            .then(response => response.json())
            .then(json => setBannerImg(json))
            .catch(error => console.log(error))
    }

    // console.log(bannerImg)
    // console.log(news)
    // console.log(rooms)

    return (
        <>
            <Findroom />
            <div className={Style.heroImageWrapper}>
                <div className={Style.heroImage} style={{ backgroundImage: `url(${bannerImg && bannerImg.items[4].image})` }}></div>
                <div className={Style.heroText}><span className={Style.heroTextSpan}>VELKOMMEN TIL HOTEL OVERLOOK ONLINE</span></div>
            </div>
            <div className={Style.mainWrapper}>
                <h2>Se vores nyheder</h2>
                <section className={Style.ourNews}>
                    {news.items && news.items.map((item, index) => {
                        if (index < 3) {
                            return (<div key={index}>
                                <img src={item.image} className={Style.Img} alt="" />
                                <h3>{item.title}</h3>
                                <p>{item.teaser}</p>
                            </div>)
                        }
                    })}
                </section>

                <h2>Se udvalgte værelser</h2>
                <section className={Style.ourSelectedRooms}>
                    <Link to="/standardSingle">
                        <div>
                            <img src={rooms ? rooms.items[0].images[0].image : null} className={Style.Img} alt="" />
                            <h3>{rooms ? rooms.items[0].room_title : null}</h3>
                            <p>{rooms ? rooms.items[0].description : null}</p>
                        </div>
                    </Link>

                    <Link to="/economyRoom">
                        <div>
                            <img src={rooms ? rooms.items[1].images[0].image : null} className={Style.Img} alt="" />
                            <h3>{rooms ? rooms.items[1].room_title : null}</h3>
                            <p>{rooms ? rooms.items[1].description : null}</p>
                        </div>
                    </Link>

                    <Link to="/standardRoom">
                        <div>
                            <img src={rooms ? rooms.items[2].images[0].image : null} className={Style.Img} alt="" />
                            <h3>{rooms ? rooms.items[2].room_title : null}</h3>
                            <p>{rooms ? rooms.items[2].description : null}</p>
                        </div>
                    </Link>
                </section>
            </div>
        </>
    )
}

export default Frontpage