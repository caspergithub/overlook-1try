import React from 'react'
import Style from '../../styles/rooms.module.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Findroom from '../findroom/findroom';
import Selectionofrooms from '../selectionofrooms/selectionofrooms';
import StandardSingle from '../standardSingle/standardSingle';
import StandardRoom from '../standardRoom/standardRoom';
import EconomyRoom from '../economyRoom/economyRoom';
import SuperiorRoom from '../superiorRoom/superiorRoom';
import SuperiorPlus from '../superiorPlus/superiorPlus';
import JuniorSuite from '../juniorSuite/juniorSuite';
import PresidentialSuite from '../presidentialSuite/presidentialSuite';


function Rooms(props) {
    return (
        <>
            <Findroom />
            <section className={Style.roomsMainWrapper}>
            <Router>
                    <Switch>
                        <Route path="/standardSingle"><StandardSingle/></Route>
                        <Route path="/standardRoom"><StandardRoom/></Route>
                        <Route path="/economyRoom"><EconomyRoom/></Route>
                        <Route path="/superiorRoom"><SuperiorRoom/></Route>
                        <Route path="/superiorPlus"><SuperiorPlus/></Route>
                        <Route path="/juniorSuite"><JuniorSuite/></Route>
                        <Route path="/presidentialSuite"><PresidentialSuite/></Route>
                        <Route path="/"><Selectionofrooms/></Route>
                    </Switch>
                </Router>
            </section>
        </>
    )
}

export default Rooms