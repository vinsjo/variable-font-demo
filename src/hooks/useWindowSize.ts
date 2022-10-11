import { useState, useEffect } from 'react';

const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { width: innerWidth, height: innerHeight };
};

const useWindowSize = () => {
    const [size, setSize] = useState(getWindowSize());
    useEffect(() => {
        const updateSize = () => {
            setSize(getWindowSize());
        };
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
};

export default useWindowSize;
