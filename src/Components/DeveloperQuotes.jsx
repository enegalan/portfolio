import React, { useState, useEffect, useRef } from 'react';

const DeveloperQuotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState(null);
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            const fetchQuoteFromAPI = async () => {
                try {
                    const response = await fetch('http://api.quotable.io/random?tags=technology');
                    if (!response.ok) {
                        throw new Error('Failed to fetch');
                    }
                    const data = await response.json();
                    setQuote(data.content);
                    setAuthor(data.author);
                } catch (error) {
                    setError(error.message);
                    console.error('Error fetching quote:', error);
                }
            };

            fetchQuoteFromAPI();
            isMounted.current = true;
        }
    }, []);

    return (
        <div id="developer-quotes">
            <div id='quote'>
                <q>{quote}</q>
                <div id="author">
                    <p>- {author}</p>
                </div>
            </div>
        </div>
    );
};

export default DeveloperQuotes;
