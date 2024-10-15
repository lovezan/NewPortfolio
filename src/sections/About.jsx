import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  // Correct use of useState hook
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("talibhassan1122@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000); // Reset after 2 seconds
  };

  return (
    <section className="c-space my-20" id="About">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-q xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.1.png"
              alt="grid_1"
              className="w-full sm: h-[276px] h-fit"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Talib Hassan</p>
              <p className="grid-subtext">
                A passionate developer with 2 years of experience in building
                innovative, high-performance web applications. I specialize in
                crafting dynamic user experiences and scalable backend
                solutions, blending creativity with technical expertise to
                deliver impactful digital products.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <video
              src="/assets/grid2.1.mp4"
              className="w-full h-full object-cover"
              muted
              loop
              autoPlay
              playsInline
            ></video>
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript and TypeScript, with a focus on React
                and Next.js ecosystems. My frontend expertise includes HTML,
                CSS, and modern JavaScript frameworks. On the backend, I work
                with Node.js and Express.js to build robust APIs, and I have
                experience with databases like MongoDB and MySQL. I also use
                tools such as Git for version control, and I’m skilled in
                deploying applications using AWS, Vercel, and Heroku.
                Additionally, I work with Webpack, Babel, Multer, and Cloudinary
                to streamline development and optimize performance.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit justify-center items-center flex">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 35,
                    lng: 77,
                    text: "I'm here",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                Available for Remote Work Across Timezones
              </p>
              <p className="grid-subtext">
                Based in India, I am available to collaborate remotely across
                most time zones, ensuring seamless communication and project
                execution no matter where you are.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2  xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="gird_3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I am deeply passionate about solving complex problems and
                crafting intuitive, visually appealing user interfaces that
                provide seamless user experiences. I thrive on the challenge of
                turning ideas into reality, always seeking innovative ways to
                optimize performance and design. My love for coding goes beyond
                just writing clean, efficient code—it's about continuously
                pushing boundaries, exploring new technologies, and staying at
                the forefront of industry trends. I am committed to constant
                learning and growth, always eager to tackle new challenges that
                allow me to expand my expertise and deliver impactful solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="gris_4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid_subtext text-center text-white">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt={hasCopied ? "tick" : "copy"}
                  className="cursor-pointer"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray-gradient text-white">
                  talibhassan1122@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
