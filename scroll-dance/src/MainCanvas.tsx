import { Canvas } from '@react-three/fiber';
import { Color } from 'three';
import Control from './components/Control';
import Light from './components/Light';
import Mesh from './components/Mesh';
import Model from './components/Model';

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
            <Control />
            <Light />
            <Mesh />
            <Model />
        </Canvas>
    );
}
