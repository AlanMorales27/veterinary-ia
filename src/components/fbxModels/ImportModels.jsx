import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX, useTexture } from "@react-three/drei";
import * as THREE from "three";
import "./ImportModels.css";

const ModelFBX = ({ path }) => {
  const fbx = useFBX(path); // Carga el archivo FBX usando su ruta.

  // Cargar las texturas
  const [colorMap, normalMap] = useTexture([
    "/models/chair.png", // Ruta de la textura de color
    "/models/normalChair.png", // Ruta del normal map
  ]);

  // Recorre los materiales del modelo y les asigna las texturas
  fbx.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        map: colorMap, // Aplica la textura de color
        normalMap: normalMap, // Aplica el normal map
      });
    }
  });

  return <primitive object={fbx} scale={1} />; // Renderiza el modelo FBX en la escena.
};

function ImportModels() {
  return (
    <div className="container-models">
      <div className="models">
        <Canvas camera={{ position: [0, 25, 50], fov: 90 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} />
          <OrbitControls />
          {/* Modelo con texturas */}
          <ModelFBX path="/models/chair.fbx" />
        </Canvas>
      </div>
    </div>
  );
}

export default ImportModels;
