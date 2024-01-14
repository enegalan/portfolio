import React, { useState, useEffect, useRef } from 'react';

const DeveloperQuotes = () => {
    const [quote, setQuote] = useState('');
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            const fetchQuoteFromAPI = async () => {
                try {
                    const response = await fetch('https://api.quotable.io/random?tags=technology');
                    const data = await response.json();
                    setQuote(data.content);
                } catch (error) {
                    console.error('Error fetching quote:', error);
                }
            };

            fetchQuoteFromAPI();
            isMounted.current = true;
        }
    }, []);

    return (
        <div>
            <h1>Developer Quotes</h1>
            <p>{quote}</p>
        </div>
    );
};

export default DeveloperQuotes;
