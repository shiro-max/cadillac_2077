import { ContactShadows, Effects, Environment, Lightformer, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cadillac } from "./Cadillac";

const ThreeCanvas = () => {
    return (
        <div className="cavas-area h-screen">
            <Canvas gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]} camera={{ position: [4, 0, 15], fov: 25 }}>
                <color attach="background" args={['#15151a']} />
                <ambientLight intensity={1}/>
                <Cadillac/>
                <hemisphereLight intensity={0.5} />
                <ContactShadows resolution={1080} frames={1} position={[0, -1.2, 0]} scale={8} blur={0.5} opacity={0.5} far={1.5} />
                <mesh scale={4} position={[3, -1.161, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 12]}>
                    <ringGeometry args={[0.9, 1, 3, 1]} />
                    <meshStandardMaterial color="white" roughness={0.75} />
                </mesh>
                <mesh scale={4} position={[-3, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
                    <ringGeometry args={[0.9, 1, 3, 1]} />
                    <meshStandardMaterial color="white" roughness={0.75} />
                </mesh>
                {/* We're building a cube-mapped environment declaratively.
            Anything you put in here will be filmed (once) by a cubemap-camera
            and applied to the scenes environment, and optionally background. */}
                <Environment resolution={512}>
                    Ceiling
                    <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
                    <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
                    <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
                    <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
                    <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
                    <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
                    <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
                    {/* Sides */}
                    <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
                    <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
                    {/* Key */}
                    <Lightformer form="ring" color="violet" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
                </Environment>
                <OrbitControls enablePan={false} enableZoom={true}  maxPolarAngle={Math.PI / 2.2} />
            </Canvas>
        </div>
    );
}

export default ThreeCanvas;