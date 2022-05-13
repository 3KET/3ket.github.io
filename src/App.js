import React, {useRef, Suspense, useState} from 'react'
import {Canvas, useFrame, useThree, useLoader} from '@react-three/fiber'
import {Html, OrbitControls, useProgress} from '@react-three/drei'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import "./App.css"
import {Overlay} from "./Overlay"
import { a, useTransition } from "@react-spring/web";


function Model() {
    const gltf = useLoader(GLTFLoader, "/scene.gltf")

    return (
        <primitive object={gltf.scene}/>
    )
}

function Loader() {
    const { active, progress } = useProgress();
    const transition = useTransition(active, {
        from: { opacity: 1, progress: 0 },
        leave: { opacity: 0 },
        update: { progress },
    });
    return transition(
        ({ progress, opacity }, active) =>
            active && (
                <a.div className='loading' style={{ opacity }}>
                    <div className='loading-bar-container'>
                        <a.div className='loading-bar' style={{ width: progress }}></a.div>
                    </div>
                    <div className={"loading-text-container"}>
                        <p className={"loading-text"}>LOADING THE PAGE CAN TAKE A WHILE FOR THE FIRST TIME</p>
                        <p className={"loading-text"}>THANK YOU FOR YOUR PATIENCE</p>
                    </div>
                </a.div>
            )
    );
}

const Lights = () => {
    return (
        <>
            {/* Ambient Light illuminates lights for all objects */}
            <ambientLight intensity={0.3}/>
            {/* Directional light */}
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
            <spotLight intensity={1} position={[1000, 0, 0]}/>
        </>
    );
};


function HTMLContent() {

    const ref = useRef()

    const { viewport } = useThree()

    useFrame(({ mouse }) => {
        const x = (mouse.x * viewport.width) / 2
        const y = (mouse.y * viewport.height) / 2
        const targetX = x * 0.003;
        const targetY = y * 0.003;
        ref.current.rotation.y += 0.5 * (targetX - ref.current.rotation.y)
        // ref.current.rotation.x += 0.5 * (targetY - ref.current.rotation.x)
        console.log(x, y)
    })
    return (
        <>

            <group position={[0, 20, 10]}>
                <mesh ref={ref} position={[0, -50, 0]}>
                    <Model/>
                </mesh>
            </group>
        </>
    )
}

export default function App()
{
    return (
        <>
            <Canvas colorManagement camera={{position: [0, 0, 120], fov: 70}} className={"background-canvas"}>
                <Lights/>

                <Html fullscreen style={{pointerEvents:"none"}}>
                    <Overlay/>
                </Html>
                <Suspense fallback={null}>
                    <HTMLContent/>
                </Suspense>
            </Canvas>
            <Loader />
        </>
    )
}
