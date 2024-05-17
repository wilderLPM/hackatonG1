import data from '../map.html';

export default function DestinationMap({setIsLoading}){
    
    return (
        <div>
        <iframe src={data} onLoad={() => setIsLoading(false)} ></iframe>
        </div>
    );
}