import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import exercise1 from '../exercises/exercise1'
import exercise2 from '../exercises/exercise2'
import exercise3 from '../exercises/exercise3'
import exercise4 from '../exercises/exercise4'
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
            </Switch>
        </Router>
    )
}

export default routes
