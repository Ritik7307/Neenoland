import * as THREE from 'three';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, OrbitControls } from '@react-three/drei';

function Model(props) {
    const group = useRef();
    // No need for 'animations' or 'actions' since we are doing it manually
    const { scene } = useGLTF('/models/Character.glb');

    useFrame((state) => {
        if (group.current) {
            const t = state.clock.getElapsedTime();

            // --- PROCEDURAL ANIMATION: "Happy Waddle" ---

            // 1. Bounce (Y-axis): Hops up and down
            // using Math.abs(sin) makes it bounce only upwards
            const bounce = Math.abs(Math.sin(t * 3)) * 0.1;
            group.current.position.y = -1 + bounce;

            // 2. Waddle (Z-rotation): Rocks left and right like a penguin
            // We sync this with the bounce
            const waddle = Math.sin(t * 3) * 0.1;
            group.current.rotation.z = waddle;

            // 3. Squash & Stretch (Scale): Expands when landing, stretches when jumping
            // Inverted bounce for simple stretch effect
            const stretch = 1 + (bounce * 0.2);
            const squash = 1 - (bounce * 0.1);
            group.current.scale.y = stretch * 1.5; // Base scale is 1.5
            group.current.scale.x = squash * 1.5;
            group.current.scale.z = squash * 1.5;

            // Smoothly interpolate rotation.y (mix waddle and fixed angle)
            // Fixed angle: 4.97 (285 degrees - 5 degrees more)
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, 4.97, 0.1);

            // Keep X rotation slightly tilted up to look at user
            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -0.4, 0.1);
        }
    });

    // Initial scale matches the previous version (1.5)
    return <primitive ref={group} object={scene} {...props} />;
}

const CharacterScene = () => {
    return (
        <div style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}>
            <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
                <ambientLight intensity={0.7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />

                <Model position={[0, -1, 0]} />
                <Environment preset="city" />
                <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={10} blur={1} far={10} resolution={256} color="#000000" />

                {/* OrbitControls disabled so user interaction is strictly "Look At" */}
                {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
            </Canvas>
        </div>
    );
};

export default CharacterScene;
