import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {Environment, OrbitControls, Preload} from '@react-three/drei';


import Model from '../../public/Model';

const ModelComp = () => {
    return (
        <Canvas className="model-canvas" camera={{position: [0, 0, 28], fov: 25}} shadows>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <OrbitControls enableZoom={false} enableDamping enablePan enableRotate />
            <Suspense fallback={null}>
                {/* <directionalLight position={[10, 10, 5]} intensity={1} /> */}
                <Model scale={0.75} />
            </Suspense>
            <Environment preset="sunset" />
        </Canvas>
    )
}


export default ModelComp;