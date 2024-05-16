import styles from "./CheckBoxes.module.css";

export default function CheckBoxes({ setCheckedValue, checkedValue }) {
    const destinations = [
      { name: 'Mer', image: '/beach.webp' },
      { name: 'Montagne', image: '/mountain.webp' },
      { name: 'Forêt', image: '/forest.webp' },
      { name: 'Campagne', image: '/countryside.webp' }
    ];
  
    const handleButtonClick = (destination) => {
      destination === checkedValue ? setCheckedValue(null) : setCheckedValue(destination);
    };
  
    return (
      <fieldset className={styles.customFieldset}>
        <legend className={styles.customLegend}>Choisissez la destination voulue</legend>
        <div className={styles.buttonsContainer}>
          {destinations.map((destination, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.selectButton} ${checkedValue === destination.name ? styles.selected : ''}`}
              onClick={() => handleButtonClick(destination.name)}
            >
              <img src={destination.image} alt={destination.name} className={styles.buttonImage} />
              <span className={styles.buttonText}>{destination.name}</span>
            </button>
          ))}
        </div>
      </fieldset>
    );
  }