import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import Post from './components/Post';

export function Routing() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post/:title" component={Post} />
            {/* <Route path="/about" component={About} /> */}
        </Switch>
    );
}