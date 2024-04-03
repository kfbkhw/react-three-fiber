import { useState } from 'react';
import MainCanvas from './MainCanvas';
import Loading from './components/Loader';

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const onLoad = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <>
            <MainCanvas />
            {isLoading && <Loading onLoad={onLoad} />}
        </>
    );
}
