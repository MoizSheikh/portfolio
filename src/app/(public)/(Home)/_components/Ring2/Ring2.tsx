import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { DoubleSide, Group } from "three";
import { pointsInner, pointsOuter } from "./components/utils";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/Addons.js";

// import abc from "./../../../../_lib/_styles/code.svg";

const Figure = () => {
  const svgData = useLoader(SVGLoader, "bat.svg");

  // Convert SVG paths to shapes
  const shapes = svgData.paths.flatMap((path) => path.toShapes(true));

  // Create geometry with extrusion
  const geometry = new THREE.ExtrudeGeometry(shapes, {
    depth: 10, // Adjust the depth as needed
  });

  // Center the geometry
  geometry.center();

  return (
    <mesh geometry={geometry} scale={[0.07, 0.07, 0.07]} position={[0, 0, 0]}>
      <meshPhongMaterial attach="material" color="red" />
    </mesh>
  );
};
const Ring2 = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        {/* Disable camera rotation */}
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        
        {/* Static SVG figure */}
        <Figure />

        <pointLight position={[-30, 0, -30]} power={10.0} />

        {/* Rotating points */}
        <PointCircle />
        {/* <SvgCircle/> */}
      </Canvas>
    </div>
  );
};


const PointCircle = () => {
  const ref = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};


const Point = ({ position, color }: { position: number[]; color: string }) => {
  return (
    // @ts-expect-error - Passing a num array as opposed to a Vector3 is acceptable
    // and the referenced method in the documentation
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
    // <Figure/>
  );
};

const SvgCircle = () => {
  const ref = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <SvgShape key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <SvgShape key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const SvgShape = ({ position, color }: { position: number[]; color: string }) => {
  const svg = useLoader(SVGLoader, "bat.svg"); // replace with your svg path

  // Convert the SVG paths into 3D shapes
  const shapes = svg.paths.flatMap((path) =>
    path.toShapes(true).map((shape) => new THREE.ExtrudeGeometry(shape))
  );

  // const svgData = useLoader(SVGLoader, "code.svg");

  // const shapes = svgData.paths.flatMap((path) => path.toShapes(true));

  // const geometry = new THREE.ExtrudeGeometry(shapes, {
  //   depth: 10,
  // });
  // geometry.center();

  return (
    <group position={position}>
      {shapes.map((geometry, index) => (
        <mesh key={index} geometry={geometry}>
          <meshBasicMaterial
            color={color}
            side={DoubleSide}
            depthWrite={false}
            transparent={true}
          />
        </mesh>
      ))}
    </group>
  );
};

export default Ring2;