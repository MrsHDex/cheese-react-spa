import React from "react";
import { Switch, Route } from "react-router-dom";
// TODO: import View components from their files
import CheesesView from './views/CheesesView';
import CategoriesView from './views/CategoriesView';
import MenusView from './views/MenusView';
import HomeView from './views/HomeView';
import MenuView from './views/MenuView';



const Routes = () => (
  <Switch>
    {/* TODO: create Routes for each view */}
    <Route exact path='/cheeses' component={CheesesView} />
    <Route exact path='/categories' component={CategoriesView} />
    <Route exact path='/menus' component={MenusView} />
    <Route exact path='/' component={HomeView} />}
    <Route exact path='/menus/:menuID' component={MenuView} />
    
  </Switch>
);

export default Routes;