import * as React from 'react';
import styles from "../splash/splash.module.scss";
import splashImage from "../../assets/images/splashBackground.png"

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Splash extends React.Component<IProps, IState> {
    render() { 
        return ( 
            <article>
                <section>
                    <h1 className={styles.name}>Andy Ford</h1>
                    <h2 className={styles.role}>Front-end Developer</h2>
                </section>
            </article>
         );
    }
}
 
export default Splash;