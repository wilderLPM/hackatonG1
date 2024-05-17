import data from '../map.html';
import styles from './DestinationMap.module.css';

export default function DestinationMap({setIsLoading}){
    
    return (
        <div className={styles.destinationMap} >
        <iframe src={data} onLoad={() => setIsLoading(false)} ></iframe>
        </div>
    );
}