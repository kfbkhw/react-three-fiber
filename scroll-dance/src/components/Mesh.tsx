import { Plane } from '@react-three/drei';

export default function Mesh() {
    return (
        <>
            <Plane args={[10, 10]} rotation-x={-Math.PI / 2} receiveShadow>
                <meshStandardMaterial />
            </Plane>
        </>
    );
}
