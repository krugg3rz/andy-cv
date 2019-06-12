import * as React from 'react';
import styles from "./navBar.module.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faGraduationCap, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(faUserCircle)
library.add(faAddressBook)
library.add(faGraduationCap)

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
                <FontAwesomeIcon size="3x" className={styles.splashIcon} icon={faUserCircle} />
                </Link>
                <Link to="/aboutMe">
                <FontAwesomeIcon size="3x" className={styles.aboutMeIcon} icon={faAddressBook} />
                </Link>
                <Link to="/skills">
                <FontAwesomeIcon size="3x" className={styles.skillsIcon} icon={faGraduationCap} />
                </Link>
                </article>
            </section>
         );
    }
}
 
export default NavBar;