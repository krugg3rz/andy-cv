import * as React from 'react';
import styles from './past.module.scss';
import pastBackground from "../../assets/images/pastBackground.svg";
import pastBackgroundMobile from "../../assets/images/pastBackgroundMobile.svg";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Past extends React.Component<IProps, IState> {
    render() { 
        return ( 
            <section>
                <article className={styles.main}>
                    <h1 className={styles.title}>Past Experience</h1>
                    <ul>
                        <li className={styles.role}>Northstar - Front-end developer</li>
                        <p>Collaborative refactoring, design & production of new feature for the web application 'Northstar' into React.</p>
                        <li className={styles.role}>IMI Webber - Production operative</li>
                        <p>Assembly, testing, packaging & shipping of multiple solenoid valve products for a wide range of clients including automotive & industrial.</p>
                        <li className={styles.role}>Honda UK Manufacturing - Production operative</li>
                        <p>Assembly of all CRV & Civic vehicle models, attaching real suspension subframes to the vehicles within a strict time deadline & delivery target.</p>
                    </ul>
                </article>
                <img className={styles.pastBackground} src={pastBackground} />
                <img className={styles.pastBackgroundMobile} src={pastBackgroundMobile} />
            </section>
         );
    }
}
 
export default Past;