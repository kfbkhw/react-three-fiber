import { Box, Plane } from '@react-three/drei';

export default function Mesh() {
    return (
        <>
            <Box args={[1, 1, 1]} position-y={0.5} castShadow>
                <meshStandardMaterial color={0xffbb55} />
            </Box>
            <Plane args={[10, 10]} rotation-x={-Math.PI / 2} receiveShadow>
                <meshStandardMaterial />
            </Plane>
        </>
    );
}
