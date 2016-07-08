import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/app-component';
import Lists from './components/lists-component';
import List from './components/list-component';
import ListEdit from './components/list-edit-component';
import ListItemDetails from './components/list-item-details-component';


export default (
    <Route path="/" component={App} >
        <IndexRoute component={Lists} />
        <Route path="lists/add" component={ListEdit}/>
        <Route path="lists/:listId" component={List}/>
        <Route path="lists/:listId/edit" component={ListEdit}/>
        <Route path="lists/:listId/:itemId" component={ListItemDetails}/>
    </Route>
);