import { useEffect } from 'react';
import AOS from 'aos';
import { useLottie } from 'lottie-react';

import 'aos/dist/aos.css';
import developerAnimation from '../assets/animation/developer.json';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const { View } = useLottie({
    animationData: developerAnimation,
    loop: true,
  });

  return (
    // <section className="relative min-h-screen overflow-hidden bg-white mt-12">

    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white mt-12 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >

      {/* Background Blur */}
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-[#ff2a2a]/10 blur-3xl" />
      {/* <div className="absolute bottom-20 left-10 h-64 w-64 rounded-full bg-black/5 blur-3xl" /> */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-10 px-6 md:flex-row md:px-12">

        {/* Left Content */}
        <div className="w-full md:w-1/2">

          {/* Heading */}
          <h1 data-aos="fade-up" className=" text-5xl md:text-7xl font-black text-black">
            Hi, I'm
            <span className="ml-2 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Rahul.
            </span>
          </h1>

          {/* Sub Heading */}
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-4 text-xl text-black/70 md:text-3xl"
          >
            Full Stack Software Developer
          </h2>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-5 max-w-2xl text-lg leading-[1.4] tracking-wide text-black/50 md:text-xl lg:text-2xl font-light"
          >
            {/* I build modern, scalable, and high-performance web applications,
            transforming complex ideas into seamless digital experiences
            through clean architecture, thoughtful engineering, and exceptional
            user experiences. */}
            {/* A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks. */}
            🚀 Turning coffee into code and ideas into reality. I build high-performance web and mobile applications that are scalable, user-friendly, and designed to solve real-world problems.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full bg-black px-8 py-4 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              View Projects
            </button>

            <a href="/resume.pdf" download className="rounded-full border border-black/20 px-8 py-4 text-black transition-all duration-300 hover:bg-black hover:text-white">
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border border-black/20 px-8 py-4 text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Animation */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex w-full justify-center md:w-1/2"
        >
          <div className="animate-float w-full max-w-[700px]">
            {View}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;