import Globe from 'react-globe.gl';
import { useRef, useEffect } from 'react';


const World = () => {
    const globeEl = useRef();

    useEffect(() => {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.7;

        globeEl.current.pointOfView({ altitude: 4 }, 5000);

        globeEl.current.controls().enableZoom = false;

        const directionalLight = globeEl.current.lights().find(obj3d => obj3d.type === 'DirectionalLight');
        directionalLight && directionalLight.position.set(-5, 5, 2);
    }, []);
    return (
        <Globe
            ref={globeEl}
            showAtmosphere={false}
            backgroundColor='#00000000'
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            width="500"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        />);
}

export default World;