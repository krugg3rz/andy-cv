import * as React from 'react';
import styles from "../splash/splash.module.scss";
import splashBackground from "../../assets/images/splashBackground.svg";
import splashBackgroundMobile from "../../assets/images/splashBackgroundMobile.svg";

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
                <img className={styles.splashBackground} src={splashBackground} />
                <img className={styles.splashBackgroundMobile} src={splashBackgroundMobile} />
            </article>
         );
    }
}
 
export default Splash;