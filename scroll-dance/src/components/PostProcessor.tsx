import { EffectComposer, Outline } from '@react-three/postprocessing';

export default function PostProcessor() {
    return (
        <EffectComposer>
            <Outline edgeStrength={2.5} visibleEdgeColor={0xffffff} />
        </EffectComposer>
    );
}
