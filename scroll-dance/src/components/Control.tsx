import { ScrollControls } from '@react-three/drei';

export default function Control({ children }: { children: JSX.Element }) {
    return (
        <ScrollControls pages={8} damping={0.25}>
            {children}
        </ScrollControls>
    );
}
