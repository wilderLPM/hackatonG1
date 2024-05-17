import styles from "./NavBar.module.css";
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <div className={styles.navBar} >
            <Link to="/"> 
            <h1>The Great Wild <p>White</p></h1>
            </Link>
        </div>
    );
}