import {useState} from 'react';
import {Link} from 'react-router-dom';

import Checkboxes from "../components/CheckBoxes";

export default function Home(){
    const [checkedValue, setCheckedValue] = useState(null)
    return(
        <>
            <Checkboxes setCheckedValue={setCheckedValue} />
            <Link to={`/map/${checkedValue}`} >Rechercher</Link>        
        </>
    );
}