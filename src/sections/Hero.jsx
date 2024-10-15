import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { calculateSizes } from "../constants/index.js"; // Import calculateSizes
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
  // Media query hooks for responsive design
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Get the calculated sizes based on media queries
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Talib <span className="waving-hand">✋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Passionate Developer & Coder
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas>
          <Suspense fallback={CanvasLoader}>
            {/* Perspective Camera with default position */}
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            {/* HackerRoom model with calculated scale and position */}
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.3, -3.2, 0]} // Static rotation (adjust as needed)
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight intensity={1} position={[10, 10, 10]} />
            <OrbitControls enableZoom={false} /> {/* Disable zooming */}
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#About" className="w-fit">
          <Button
            name="Let's work togeather"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96 "
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
