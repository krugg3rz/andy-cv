import * as React from 'react';
import NavBar from "../navBar/navbar";
import AboutMe from "../aboutMe/aboutMe";
import Splash from "../splash/splash";
import Skills from "../skills/skills";
import styles from "./innerApp.module.scss";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class InnerApp extends React.Component<IProps, IState> {
    render() { 
        return ( 
            <Router>
            <section className={styles.main}>
            <NavBar />
            <Switch>
            <Route path="/" exact component={Splash} />
            <Route path="/aboutMe" component={AboutMe} />
            <Route path="/skills" component={Skills} />
            </Switch>
            </section>
            </Router>
         );
    }
}
 
export default InnerApp;