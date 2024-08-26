import React from "react";
import * as THREE from "three";

const Page = () => {

  //  render this again ...
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x66ff3f });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      <h1>Welcome to Deroup</h1>

      {/* Item */}


    </section>
  );
};

export default Page;