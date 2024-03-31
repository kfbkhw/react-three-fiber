import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Plane } from '@react-three/drei';
import { Color } from 'three';

export default function MainCanvas() {
    return (
        <Canvas
            gl={{ antialias: true }}
            camera={{
                fov: 75,
                aspect: window.innerWidth / window.innerHeight,
                near: 0.1,
                far: 1000,
                position: [0, 1, 5],
            }}
            scene={{ background: new Color(0x000000) }}
            shadows
        >
            <OrbitControls
                enableDamping
                minDistance={2}
                maxDistance={10}
                maxPolarAngle={Math.PI / 2.1}
            />
            <ambientLight args={[0xffffff, 2]} />
            <directionalLight
                args={[0xffffff, 2]}
                position={[5, 5, 5]}
                castShadow
                shadow-mapSize-width={4096}
                shadow-mapSize-height={4096}
            />
            <Box args={[1, 1, 1]} position-y={0.5} castShadow>
                <meshStandardMaterial color={0xffbb55} />
            </Box>
            <Plane args={[10, 10]} rotation-x={-Math.PI / 2} receiveShadow>
                <meshStandardMaterial />
            </Plane>
        </Canvas>
    );
}
