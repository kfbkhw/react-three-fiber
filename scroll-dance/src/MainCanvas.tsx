import { useState } from 'react';
import { Color } from 'three';
import { Canvas } from '@react-three/fiber';
import { Selection, Select } from '@react-three/postprocessing';
import Control from './components/Control';
import Light from './components/Light';
import Mesh from './components/Mesh';
import Model from './components/Model';
import PostProcessor from './components/PostProcessor';

export default function MainCanvas() {
    const [selected, setSelected] = useState<boolean>(false);

    const handleModelOnClick = () => {
        setSelected(!selected);
    };

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
            <Selection>
                <Select enabled={selected}>
                    <Model handleOnClick={handleModelOnClick} />
                </Select>
                <PostProcessor />
            </Selection>
        </Canvas>
    );
}
