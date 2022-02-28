import { Link ,NavLink,withRouter} from "react-router-dom";
import styles from './css/Navigation.module.css'

const Navigation = (props) => {
    // console.log(props);
    return (
        <nav>
            <ul className={styles.ul}>
                <li>
                    <NavLink to='/' activeClassName={styles.activeColor} exact={true}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about-us' activeClassName={styles.activeColor} >About-us</NavLink>
                </li>
                <li>
                    <NavLink to='/profile' activeClassName={styles.activeColor} >Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/blogs' activeClassName={styles.activeColor} >blogs</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default withRouter(Navigation);