import React, {useRef} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, Stars} from '@react-three/drei'
import "./App.css"

function Torus(props) {
    const meshRef = useRef()
    useFrame(() => {
        meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
    })
    return (
        <mesh {...props} ref={meshRef}>
            <torusGeometry args={[1, 0.5, 32, 100]}/>
            <meshNormalMaterial/>
        </mesh>
    )
}

const Lights = () => {
    return (
        <>
            {/* Ambient Light illuminates lights for all objects */}
            <ambientLight intensity={0.3}/>
            {/* Diretion light */}
            <directionalLight position={[10, 10, 5]} intensity={1}/>
            <directionalLight
                castShadow
                position={[0, 10, 0]}
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            {/* Spotlight Large overhead light */}
            <spotLight intensity={1} position={[1000, 0, 0]} castShadow/>
        </>
    );
};

export default function App() {
    return (
        <Canvas className={"background-canvas"}>
            <Lights />
            <Stars/>
            <Torus position={[2, 2, 2]}/>
            <OrbitControls/>
        </Canvas>
    )
}
