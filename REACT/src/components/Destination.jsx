import data from '../data/markpoint.json';

export default function Destination(){

    const valuesWithKey3 = Object.keys(data).reduce((acc, key) => {
        if (data[key]["3"]) {
            acc[key] = data[key]["3"];
        }
        return acc;
    }, {});
    return (
        <div>
            <h2>Values with Key "3":</h2>
            <ul>
            {Object.entries(valuesWithKey3).map(([key, value]) => (
                <li key={key}>
                <strong>{key}:</strong> {value}
                </li>
            ))}
            </ul>
        </div>
        );
}