import React from 'react'
import Style from '../../styles/rooms.module.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Findroom from '../findroom/findroom';
import Selectionofrooms from '../selectionofrooms/selectionofrooms';
import StandardRoom from '../standardRoom/standardRoom';


function Rooms(props) {
    return (
        <>
            <Findroom />
            <section className={Style.roomsMainWrapper}>
            <Router>
                    <Switch>
                        <Route path="/standardRoom"><StandardRoom/></Route>
                        <Route path="/"><Selectionofrooms/></Route>
                    </Switch>
                </Router>
            </section>
        </>
    )
}

export default Rooms