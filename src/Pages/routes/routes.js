import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import exercise1 from '../workshop1/exercise1'
import exercise2 from '../workshop1/exercise2'
import exercise3 from '../workshop1/exercise3'
import exercise4 from '../workshop1/exercise4'
import exercise5 from '../workshop1/exercise5'
import algorithm1 from '../workshop2/algorithm1'
import algorithm2 from '../workshop2/algorithm2'
import NavBar from '../../Components/NavBar/NavBar'

function routes() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path='/Exercise1' component={exercise1} />
                <Route path='/Exercise2' component={exercise2} />
                <Route path='/Exercise3' component={exercise3} />
                <Route path='/Exercise4' component={exercise4} />
                <Route path='/Exercise5' component={exercise5} />
                <Route path='/Algorithm1' component={algorithm1} />
                <Route path='/Algorithm2' component={algorithm2} />
            </Switch>
        </Router>
    )
}

export default routes
