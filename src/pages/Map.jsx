import {useParams} from 'react-router-dom';

export default function Map(){
    const {destination} = useParams();
    return(
        <>
        <p>{destination}</p>
        </>
    );
}