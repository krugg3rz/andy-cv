import * as React from 'react';
import styles from "./aboutMe.module.scss";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class AboutMe extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( 
            <section>
                <h1 className={styles.title}>About Me</h1>
                <article className={styles.profile}>
                    <p>_nology bootcamp grtaduate working with JavaScript & React.</p>
                    <p>Experienced in a multitude of skills acquired over a range of diverse trades.</p>
                    <p>My best skills are communication & working under pressure.</p>
                    <p>Consistently demanded to produce quality products within strict time deadlines, maintaining clear, efficient communication to maintain delivery and safety in the workplace.</p>
                </article>
            </section>
         );
    }
}
 
export default AboutMe;