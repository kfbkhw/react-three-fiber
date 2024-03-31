import { useEffect, useState } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

export default function Model() {
    const { scene, animations } = useGLTF('./src/assets/dancer.glb');
    const animation = useAnimations(animations, scene);
    const [currentAnimation, setCurrentAnimation] = useState<string>('');

    useEffect(() => {
        scene.traverse((obj) => {
            if (obj.isObject3D) {
                obj.castShadow = true;
                obj.receiveShadow = true;
            }
        });
        setCurrentAnimation(animation.names[0]);
    }, [scene, animation]);

    useEffect(() => {
        animation.actions[currentAnimation]?.fadeIn(0.5).play();
        return () => {
            animation.actions[currentAnimation]?.fadeOut(0.5).stop();
        };
    }, [animation, currentAnimation]);

    const handleOnClick = () => {
        const currentIndex = animation.names.indexOf(currentAnimation);
        let newIndex = 0;
        if (animation.names.length - 1 !== currentIndex) {
            newIndex = currentIndex + 1;
        }
        setCurrentAnimation(animation.names[newIndex]);
    };
    window.addEventListener('click', handleOnClick);

    return <primitive object={scene} scale={0.01} position-y={0.83} />;
}
