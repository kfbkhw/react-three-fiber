export default function Light() {
    return (
        <>
            <ambientLight args={[0xffffff, 2]} />
            <directionalLight
                args={[0xffffff, 2]}
                position={[5, 5, 5]}
                castShadow
                shadow-mapSize-width={4096}
                shadow-mapSize-height={4096}
            />
        </>
    );
}
