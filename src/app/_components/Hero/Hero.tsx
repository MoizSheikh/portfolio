// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three"; // Import Three.js
// import { pointsInner, pointsOuter, svgPathData } from "./utils"; // Your custom SVG path data

// const ParticleRing = () => {
//   return (
//     <div className="relative">
//       <Canvas
//         camera={{
//           position: [10, -7.5, -5],
//         }}
//         style={{ height: "100vh" }}
//         className="bg-slate-900"
//       >
//         <OrbitControls maxDistance={20} minDistance={10} />
//         <directionalLight />
//         <pointLight position={[-30, 0, -30]} power={10.0} />
//         <PointCircle />
//       </Canvas>

//       <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
//         Drag & Zoom
//       </h1>
//     </div>
//   );
// };

// const PointCircle = () => {
//   const ref = useRef(null);

//   useFrame(({ clock }) => {
//     if (ref.current?.rotation) {
//       ref.current.rotation.z = clock.getElapsedTime() * 0.05;
//     }
//   });

//   return (
//     <group ref={ref}>
//       {pointsInner.map((point) => (
//         <SvgPoint key={point.idx} position={point.position} color={point.color} />
//       ))}
//       {pointsOuter.map((point) => (
//         <SvgPoint key={point.idx} position={point.position} color={point.color} />
//       ))}
//     </group>
//   );
// };

// // Convert your SVG path into a 3D shape
// const SvgPoint = ({ position, color }) => {
//   const shape = useRef(null);

//   if (!shape.current) {
//     // Create the 2D shape using the SVG path
//     const svgShape = new THREE.Shape();
//     const path = new THREE.Path(svgPathData); // Your SVG path data here

//     svgShape.fromPoints(path.getPoints());

//     // Extrude the shape into 3D geometry
//     shape.current = new THREE.ExtrudeGeometry(svgShape, {
//       depth: 0.1,  // Set the extrusion depth
//       bevelEnabled: false,
//     });
//   }

//   return (
//     <mesh position={position} geometry={shape.current}>
//       <meshStandardMaterial
//         emissive={color}
//         emissiveIntensity={0.5}
//         roughness={0.5}
//         color={color}
//       />
//     </mesh>
//   );
// };

// export default ParticleRing;