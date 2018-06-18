import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import HeroesPage from './components/HeroesPage/HeroesPage';
import HomePage from './components/HomePage/HomePage';
import PostPage from './components/PostPage/PostPage';

export default (
  <Route path="/home" component={App}>
    <Route path="/" component={HomePage} />
    <Route   path="/heroes" component={HeroesPage} />
    <Route path="/post/:postID" component={PostPage} />
  </Route>
);
