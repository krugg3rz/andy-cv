import * as React from 'react';
import styles from "../splash/splash.module.scss";

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
                    <h2>Front-end Developer</h2>
                </section>
            </article>
         );
    }
}
 
export default Splash;