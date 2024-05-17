import styles from "./CheckBoxes.module.css";

export default function CheckBoxes({ setCheckedValue, checkedValue }) {
    const destinations = [
      { name: 'Annecy', image: '/annecy.jpg' },
      { name: 'Chambéry', image: '/chambery2.jpg' },
      { name: 'Chamonix', image: '/Chamonix.webp' },
      { name: 'Grenoble', image: '/Grenoble.webp' }
    ];
  
    const handleButtonClick = (destination) => {
      destination === checkedValue ? setCheckedValue(null) : setCheckedValue(destination);
    };
  
    return (
      <fieldset className={styles.customFieldset}>
        <legend className={styles.customLegend}>Choisissez la destination voulue</legend>
          {destinations.map((destination, index) => (
            <div key={index} className={styles.buttonsContainer}>
              <button
                type="button"
                className={`${styles.selectButton} ${checkedValue === destination.name ? styles.selected : ''}`}
                onClick={() => handleButtonClick(destination.name)}
              >
                <img src={destination.image} alt={destination.name} className={styles.buttonImage} />
              </button>
              <span className={styles.buttonText}>{destination.name}</span>
            </div>
          ))}
      </fieldset>
    );
  }