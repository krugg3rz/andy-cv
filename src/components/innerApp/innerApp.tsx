import * as React from 'react';
import NavBar from "../navBar/navbar";
import AboutMe from "../aboutMe/aboutMe";
import Splash from "../splash/splash";
import styles from "./innerApp.module.scss";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class InnerApp extends React.Component<IProps, IState> {
    render() { 
        return ( 
            <section className={styles.main}>
            <NavBar />
            <Splash />
            </section>
         );
    }
}
 
export default InnerApp;