import * as React from 'react';
import styles from "../splash/splash.module.scss";
import splashImage from "../../assets/images/splashbackground.png";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Splash extends React.Component<IProps, IState> {
    render() { 
        return ( 
            <article>
                <section className={styles.header}>
                    <h1 className={styles.name}>Andy Ford</h1>
                    <h2 className={styles.role}>Front-end Developer</h2>
                </section>
                <img className={styles.splashImage} src={splashImage}></img>
            </article>
         );
    }
}
 
export default Splash;