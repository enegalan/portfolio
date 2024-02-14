import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';

const DeveloperQuotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const isMounted = useRef(false);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);
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
                    console.error('Error fetching quote:', error);
                }
            };

            fetchQuoteFromAPI();
            isMounted.current = true;
        }
    }, []);

    return (
        <div data-aos="fade-down" id="developer-quotes">
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
