import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";
import "./ImportModels.css";

const ModelFBX = ({ path }) => {
  const fbx = useFBX(path); // Carga el archivo FBX usando su ruta.
  return <primitive object={fbx} scale={1} />; // Renderiza el modelo FBX en la escena.
};

function ImportModels() {
  return (
    <div className="container-models">
      <div className="models">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} />
          <OrbitControls />
          <ModelFBX path="/models/chair.fbx" />
        </Canvas>
      </div>
    </div>
  );
}
export default ImportModels;
