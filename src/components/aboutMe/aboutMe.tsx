import * as React from 'react';
import styles from "./aboutMe.module.scss";
import aboutMeBackground from "../../assets/images/aboutMeBackground.svg";
import aboutMeBackgroundMobile from "../../assets/images/aboutMeBackgroundMobile.svg";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class AboutMe extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( 
            <section className={styles.main}>
                <h1 className={styles.title}>About Me</h1>
                <article className={styles.profile}>
                    <p>_nology bootcamp graduate experienced with JavaScript & React.</p>
                    <p>Experienced in a multitude of skills acquired over a range of diverse trades.</p>
                    <p>My best skills are communication & working under pressure.</p>
                    <p>Consistently demanded to produce quality products within strict time deadlines, maintaining clear, efficient communication to maintain delivery and safety in the workplace.</p>
                </article>
                <img className={styles.background} src={aboutMeBackground} />
                <img className={styles.backgroundMobile} src={aboutMeBackgroundMobile} />
            </section>
         );
    }
}
 
export default AboutMe;