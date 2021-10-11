import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {OrbitControls, Stars} from '@react-three/drei'
import "./App.css"

function Torus(props) {
    const meshRef = useRef()
    useFrame(() => {
        meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
    })
    return (
        <mesh {...props} ref={meshRef}>
            <torusGeometry args={[1, 0.5, 32, 100]} />
            <meshNormalMaterial />
        </mesh>
    )
}

export default function App() {
    return (
        <Canvas className={"background-canvas"}>
            <Stars />
            <Torus />
            <OrbitControls />
        </Canvas>
    )
}
