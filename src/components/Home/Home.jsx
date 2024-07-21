import React, { useEffect } from 'react'
import './home.css'
import * as THREE  from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import moonImage from '../../images/moon.jpg'
import venusImage from '../../images/venus.jpg'

const Home = () => {

  useEffect(()=>{

    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage)
    const venusTexture = textureLoader.load(venusImage)

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(3,64,64)
    const moonMaterial = new THREE.MeshStandardMaterial({map : moonTexture})
    const moon = new THREE.Mesh(moonGeometry,moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(4,64,64)
    const venusMaterial = new THREE.MeshStandardMaterial({map : venusTexture})
    const venus = new THREE.Mesh(venusGeometry,venusMaterial);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.z = 10

    const lightHelper = new THREE.PointLightHelper(pointLight)

    const controls = new OrbitControls(camera, renderer.domElement);
    scene.add(moon);
    scene.add(pointLight);
    scene.add(lightHelper);
    scene.add(venus)


    venus.position.set(8, 0, -10);
    camera.position.z = 10;

    const animate = () =>{
      requestAnimationFrame(animate);
      moon.rotation.y += 0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera)
    };
  
    animate();

  },[])

  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>
    </div>
  )
}

export default Home
