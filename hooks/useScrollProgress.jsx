import { useState, useEffect } from 'react';

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                // Calculate the scroll percentage and update state
                setCompletion((currentProgress / scrollHeight) * 100);
            }
        };

        window.addEventListener('scroll', updateScrollCompletion);

        // Calculate scroll progress initially in case the page is already scrolled
        updateScrollCompletion();

        // Cleanup on unmount
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, []); // Empty dependency array to run effect only once on mount

    return completion;
};

export default useScrollProgress;
