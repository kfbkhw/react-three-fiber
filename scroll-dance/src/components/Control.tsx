import { OrbitControls } from '@react-three/drei';

export default function Control() {
    return (
        <OrbitControls
            enableDamping
            minDistance={2}
            maxDistance={10}
            maxPolarAngle={Math.PI / 2.1}
        />
    );
}
