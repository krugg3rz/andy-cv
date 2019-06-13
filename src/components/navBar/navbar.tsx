import * as React from 'react';
import styles from "./navBar.module.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faGraduationCap, faUserCircle, faHome, faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(faHome)
library.add(faAddressBook)
library.add(faGraduationCap)
library.add(faBook)

export interface IProps {
    
}
 
export interface IState {
    
}
 
class NavBar extends React.Component<IProps, IState> {
    render() { 
        return ( 
            <section className={styles.bar}>
                <article className={styles.icons}>
                <Link to="/">
                <FontAwesomeIcon size="3x" className={styles.homeIcon} icon={faHome} />
                </Link>
                <Link to="/aboutMe">
                <FontAwesomeIcon size="3x" className={styles.aboutIcon} icon={faAddressBook} />
                </Link>
                <Link to="/skills">
                <FontAwesomeIcon size="3x" className={styles.skillsIcon} icon={faGraduationCap} />
                </Link>
                <Link to="/past">
                <FontAwesomeIcon size="3x" className={styles.pastIcon} icon={faBook} />
                </Link>
                </article>
            </section>
         );
    }
}
 
export default NavBar;