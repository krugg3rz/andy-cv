import * as React from 'react';
import styles from "./skills.module.scss";
import skillsBackground from "../../assets/images/skillsBackground.svg";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Skills extends React.Component<IProps, IState> {
    render() { 
        return ( 
            <section className={styles.main}>
            <h1>Skills</h1>
            <ul>
                <li>HTML</li>
                <li>CSS, (Sass)</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>GitHub Flow</li>
                <li>React</li>
                <li>Continuous Integration</li>
                <li>Firebase</li>
                <li>Agile/SCRUM development</li>
                <li>Adobe CC, (InDesign, Illustrator, Photoshop, Premiere)</li>
            </ul>
            <img className={styles.background}src={skillsBackground}></img>
            </section>
         );
    }
}
 
export default Skills;