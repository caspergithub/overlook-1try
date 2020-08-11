import React from 'react'
import Style from '../../styles/findroom.module.scss'

function Findroom(props) {
    return (
        <section className={Style.findRoom}>
            <div className={Style.findroomfirstbox}>
                <h3>Find dit værelse</h3>
                <p>Hvor vil du hen og hvornår vil du det?</p>
            </div>
            <div className={Style.theformiguess}>
                <div>
                    <p>Destination:</p>
                    <select name="destination" id="destination">
                        <option value="">Vælg destination</option>
                        <option value="Danmark">Danmark</option>
                        <option value="Sverige">Sverige</option>
                        <option value="Norge">Norge</option>
                        <option value="Finland">Finland</option>
                        <option value="Island">Island</option>
                        <option value="Tyskland">Tyskland</option>
                        <option value="Polen">Polen</option>
                    </select>
                </div>
                <div>
                    <p>Check-in:</p>
                    <input type="date" id="checkin" name="checkin" />
                </div>
                <div>
                    <p>Check-ud:</p>
                    <input type="date" id="checkout" name="checkout" />
                </div>
                <div>
                    <p>Antal personer:</p>
                    <select name="persons" id="persons">
                        <option value="">0</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </select>
                </div>
                <button>Søg</button>
            </div>
        </section>
    )
}

export default Findroom