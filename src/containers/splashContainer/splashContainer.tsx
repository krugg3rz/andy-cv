import * as React from 'react';
import Splash from "../../components/splash/splash";
import SplashImage from "../../assets/images/splashbackground.png";
import styles from "./splashContainer.module.scss";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class SplashContainer extends React.Component<IProps, IState> {
    render() { 
        return ( 
            <section>
            <Splash />
            <img src={SplashImage} className={styles.image}></img>
            </section>
         );
    }
}
 
export default SplashContainer;