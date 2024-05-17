import {useState} from 'react';
import {Link} from 'react-router-dom';

import Checkboxes from "../components/CheckBoxes";
import styles from "./Home.module.css";

export default function Home(){
    const [checkedValue, setCheckedValue] = useState(null)
    return(
        <div className={styles.home} >
            <Checkboxes setCheckedValue={setCheckedValue} checkedValue={checkedValue} />
            <Link to={checkedValue !== null ? `/map/${checkedValue}` : `/`} >Rechercher</Link>        
        </div>
    );
}