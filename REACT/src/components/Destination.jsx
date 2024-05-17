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
        <div>
          {cityKeyMappings[destination].map((keyValue) => (
            <div key={keyValue}>
              <ul>
                {Object.entries(data).map(([key, value]) => (
                  <React.Fragment key={key}>
                    {value[keyValue].includes("https://") ? (
                      <img src={value[keyValue]} alt={key} className={styles.destinationImg}/>
                    ) : (
                      <li>
                        <strong>{key}:</strong> {value[keyValue]}
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
}
