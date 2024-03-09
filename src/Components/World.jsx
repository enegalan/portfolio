import Globe from 'react-globe.gl';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';



const World = () => {
    const globeEl = useRef();

    useEffect(() => {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.7;

        globeEl.current.pointOfView({ altitude: 4 }, 5000);

        globeEl.current.controls().enableZoom = false;

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(-5, 5, 2);
        globeEl.current.scene().add(directionalLight);

        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
        hemisphereLight.position.set(0, 0, 0);
        globeEl.current.scene().add(hemisphereLight);
    }, []);
    return (
        <Globe
            ref={globeEl}
            showAtmosphere={false}
            backgroundColor='#00000000'
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            width={500}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        />);
}

export default World;