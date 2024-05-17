import {useState, useEffect} from 'react';

export default function DestinationMap({setIsLoading}){
    const [htmlContent, setHtmlContent] = useState('');
    useEffect(() => {
        console.log('fetching...');
        fetch('../map.html')
        .then(response => response.text())
        .then(data => {
            setHtmlContent(data);
            setIsLoading(false);
        })
        .catch(error => console.error('Error fetching HTML:', error));
    }, []);
    
    return (
        <div>
        <h1>Loaded HTML Content</h1>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
}