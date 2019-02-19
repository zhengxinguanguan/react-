import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from "./home/home";
import Open from "./open/open";
import Day from "./day/day";
import User from "./user/user";
import Order from "./order/order";
import FootBar from "../common/Footer/Footer";
import Rule from "./rule/rule";
import Goods from "./goods/goods";

class App extends React.Component{
    render() {
        return (
            <>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/open' component={Open}/>
                    <Route path='/day' component={Day}/>
                    <Route path='/user' component={User}/>
                    <Route path='/order' component={Order}/>
                    <Route path='/rule' component={Rule}/>
                    <Route path='/goods' component={Goods}/>
                    <Redirect exact from='/' to='/home'/>
                </Switch>
                <FootBar/>
            </>
        )
    }
}

export default App;