import React from 'react'
import data from '../data/poi.json';
import styles from "./Destination.module.css";

export default function Destination({destination}){

const cityKeyMappings = {
    Annecy: [1, 2, 3, 4],
    Chambéry: [5, 6, 7, 8],
    Chamonix: [15, 11, 10, 9],
    Grenoble: [12, 14, 16, 18],
    };
    return (
        <div >
          {cityKeyMappings[destination].map((keyValue) => (
            <div key={keyValue} className={styles.destinationBanner}>
              <ul>
                {Object.entries(data).map(([key, value], index) => (
                  index === 0 ? (
                    <h2>{value[keyValue]}</h2>
                  ) : index === 1 ? (
                    <img src={value[keyValue]} alt={key} className={styles.destinationImg} />
                  ) : (
                    <li key={key}>
 {value[keyValue]}
                    </li>
                  )
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
  
