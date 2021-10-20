import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Artists from './components/artists';

const Routes = () => {
    return(
        <Switch>
            <Route path="/artists/:id" exact component={Artists} />
            <Route path="/" exact component={Home} />     
        </Switch>
    )
}

export default Routes;