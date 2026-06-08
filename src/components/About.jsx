

import stackImage from '../assets/hero video/image.png';

import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';
import typescriptImage from '../assets/about/typescript.png';
import nestJs from '../assets/about/nestjs.png';
import javaScriptImage from '../assets/about/javascript.png';
import nextjsimage from '../assets/about/nextjs.png';
import htmlimage from '../assets/about/html.png'
import cssImage from '../assets/about/css.png'
import prismaImage from '../assets/about/prisma.png'

const techStack = [
  { name: 'html', image: htmlimage },
  { name: 'css', image: cssImage },
  { name: 'TypeScript', image: typescriptImage },
  { name: 'JavaScript', image: javaScriptImage },
  { name: 'React', image: reactImage },
  { name: 'Next.js', image: nextjsimage },
  { name: 'Node.js', image: nodeImage },
  { name: 'NestJS', image: nestJs },
  { name: 'MongoDB', image: mongoImage },
  { name: 'Prisma ORM', image: prismaImage },
];

const About = () => {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white pt-24 pb-24 px-6 md:px-12 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="mb-10 text-center"
        >
          <p className="text-red-500 font-semibold tracking-widest uppercase">
            About Me
          </p>

          <h2 className="mt-2 text-5xl md:text-6xl font-black text-black">
            Building Digital Experiences
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Image */}
          <div
            data-aos="fade-right"
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-[40px] bg-[#ff2a2a]/10 blur-3xl scale-110" />

              <img
                src={stackImage}
                alt="Rahul Rohit"
                className="relative z-10 w-full max-w-[320px] rounded-[30px] object-cover shadow-xl"
              />

            </div>
          </div>

          {/* Right Content */}
          <div data-aos="fade-left">

            <h3 className="text-4xl md:text-3xl/10 font-black text-black leading-tight">
              Full Stack Developer focused on creating scalable and impactful products.
            </h3>

            <p className="mt-8 text-lg text-black/60 leading-relaxed">
              I'm Rahul, a passionate software developer who enjoys
              transforming ideas into high-quality digital products.
              My expertise spans frontend development, backend architecture,
              database design, and building scalable applications using modern
              technologies.
            </p>

            <p className="mt-5 text-lg text-black/60 leading-relaxed">
              I specialize in React, Next.js, NestJS, TypeScript,
              Node.js, and MongoDB, helping businesses build
              reliable and high-performance solutions.
            </p>
          </div>

        </div>

        {/* Tech Stack */}
        <div id="skills" className="mt-28 scroll-mt-24">

          <div
            data-aos="fade-up"
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-black text-black mx-auto">
              Tech Stack
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">

            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex flex-col items-center">

                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="h-16 w-16 object-contain"
                  />

                  <p className="mt-4 text-black font-semibold">
                    {tech.name}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>

        {/* What I Do */}
        <div className="mt-10">

          <div
            data-aos="fade-up"
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-black text-black">
              What I Do
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: 'Frontend Development',
                desc: 'Building modern, responsive, and interactive user interfaces.'
              },
              {
                title: 'Backend Development',
                desc: 'Creating scalable APIs, services, and business logic.'
              },
              {
                title: 'Database Design',
                desc: 'Designing efficient and optimized database architectures.'
              },
            ].map((item) => (
              <div
                key={item.title}
                data-aos="fade-up"
                className="rounded-3xl border border-black/10 p-8 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-2xl font-bold text-black">
                  {item.title}
                </h4>

                <p className="mt-4 text-black/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;