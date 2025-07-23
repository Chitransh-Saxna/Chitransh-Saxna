import { useTexture } from "@react-three/drei"
import * as THREE from "three"
import { PROJECTS } from "../../constants"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Scens = () => {
  let tex = useTexture(PROJECTS[0].imgSrc);
  let cyl = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta
    }
  })

  return (
    <group rotation={[0, 1.4, 0.33]}>
      <mesh ref={cyl} >
        <cylinderGeometry args={[1.3, 1.3, 1.7, 30, 30, true]} />
        <meshStandardMaterial 
          map={tex} 
          transparent 
          side={THREE.DoubleSide} 
          toneMapped={false} 
        />
      </mesh>
    </group>
  )
}

export default Scens