import { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import { css, keyframes, styled } from 'styled-components';

export default function Loading({ onLoad }: { onLoad: () => void }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const { progress, active } = useProgress();

    useEffect(() => {
        if (active === false) {
            setTimeout(() => {
                setIsLoaded(true);
                onLoad();
            }, 1000);
        }
    }, [active, onLoad]);

    return (
        <Loader id="loader" $loaded={isLoaded}>
            <label htmlFor="loading-progress">Loading...</label>
            <Progress
                id="loading-progress"
                max={1}
                value={progress / 100}
            ></Progress>
        </Loader>
    );
}

const fadeOut = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
`;

const Loader = styled.div<{ $loaded?: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 500;
    animation: ${(props) =>
        props.$loaded
            ? css`
                  ${fadeOut} 1s
              `
            : ''};
`;

const Progress = styled.progress`
    width: 30%;
    height: 2%;
    margin-top: 1rem;
    accent-color: #5755fe;
`;
