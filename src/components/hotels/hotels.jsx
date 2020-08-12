import React from 'react'
import Style from '../../styles/hotels.module.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Findroom from '../findroom/findroom';
import Denmark from '../denmark/denmark';
import Sweden from '../sweden/sweden';
import Norway from '../norway/norway';
import Finland from '../finland/finland';
import Iceland from '../iceland/iceland';
import Germany from '../germany/germany';
import Poland from '../poland/poland';

function Hotels(props) {
    return (
        <>
            <Findroom />
            <section className={Style.hotelsMainWrapper}>
                <Router>
                    <Switch>
                        <Route path="/sweden"><Sweden /></Route>
                        <Route path="/norway"><Norway /></Route>
                        <Route path="/finland"><Finland /></Route>
                        <Route path="/iceland"><Iceland /></Route>
                        <Route path="/germany"><Germany /></Route>
                        <Route path="/poland"><Poland /></Route>
                        <Route path="/"><Denmark /></Route>
                    </Switch>
                </Router>
            </section>
        </>
    )
}

export default Hotels