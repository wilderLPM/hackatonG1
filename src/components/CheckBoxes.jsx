export default function CheckBoxes({setCheckedValue}){
    const destinations = ['Mer','Montagne','Forêt','Campagne']
    function handleChange(e) {
        setCheckedValue(e.target.id)
    }
    return(
        <fieldset>
            <legend>Choisissez la destination voulue</legend>
            {destinations.map(destination =>
            <div key={destination} >
                <input type='radio' id={destination} name="options" onChange={handleChange}/>
                <label htmlFor={destination}>{destination}</label>
            </div> 
            )}
        </fieldset>
    )
}