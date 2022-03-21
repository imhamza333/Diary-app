import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import newPost from './containers/newPost';



const BaseRouter = () => (
    <div>
        <Route exact path="/" component={ArticleList} />
        <Route exact path="/:articleID/" component={ArticleList} />
        <Route exact path="/newpost/" component={newPost} />
        
    </div>
);

export default BaseRouter;
