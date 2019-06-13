import * as React from 'react';
import styles from './past.module.scss';
import pastBackground from "../../assets/images/pastBackground.svg";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Past extends React.Component<IProps, IState> {
    render() { 
        return ( 
            <section>
                <article className={styles.main}>
                    <h1>Past Experience</h1>
                    <ul>
                        <li className={styles.role}>Northstar - Front-end developer</li>
                        <p>Collaborative refactoring, design & production of web application into React.</p>
                        <li className={styles.role}>IMI Webber - Production operative</li>
                        <p>Assembly, testing, packaging & shipping of multiple solenoid valve products for a wide range of clients including automotive & industrial.</p>
                        <li className={styles.role}>Honda UK Manufacturing -Production operative</li>
                        <p>Assembly of all CRV & Civic vehicle models, attaching real suspension subframes to the vehicles within a strict time deadline & delivery target.</p>
                    </ul>
                </article>
                <img src={pastBackground}></img>
            </section>
         );
    }
}
 
export default Past;