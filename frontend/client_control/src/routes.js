import React from 'react';
import { Route } from 'react-router-dom';
import ClientList from './containers/ClientListView';
import HistoryList from './containers/HistoryListView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ClientList} />
        <Route exact path='/:clientID' component={HistoryList} />
    </div>
);

export default BaseRouter;