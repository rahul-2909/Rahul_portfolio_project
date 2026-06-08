

import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';
import typescriptImage from '../assets/about/typescript.png';
import javascriptImage from '../assets/about/javascript.png';
import nextjsImage from '../assets/about/nextJS.png';
import htmlImage from '../assets/about/html.png';
import cssImage from '../assets/about/css.png';

const techStack = [
  { name: 'React', image: reactImage },
  { name: 'Node.js', image: nodeImage },
  { name: 'MongoDB', image: mongoImage },
  { name: 'TypeScript', image: typescriptImage },
  { name: 'JavaScript', image: javascriptImage },
  { name: 'Next.js', image: nextjsImage },
  { name: 'HTML', image: htmlImage },
  { name: 'CSS', image: cssImage },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white w-full overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">

      {/* Background Blur */}
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-[#ff2a2a]/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top Row */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full mb-20">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-black/40">Services</h4>
            <p className="text-black/70 text-base">Full Stack Development</p>
            <p className="text-black/70 text-base">Frontend Developer</p>
            <p className="text-black/70 text-base">Backend Developer</p>
            <p className="text-black/70 text-base">API Architecture</p>
          </div>

          <div className="flex flex-col gap-3 md:items-center">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-black/40">Navigate</h4>
            <a href="#projects" className="text-black/70 text-base underline hover:text-black transition-colors underline-offset-4 decoration-1">Projects</a>
            <a href="#contact" className="text-black/70 text-base underline hover:text-black transition-colors underline-offset-4 decoration-1">Contact</a>
            <a href="/resume.pdf" download className="text-black/70 text-base underline hover:text-black transition-colors underline-offset-4 decoration-1">Resume</a>
            <button onClick={scrollToTop} className="text-black/70 text-base underline hover:text-black transition-colors underline-offset-4 decoration-1 text-left">Back to Top</button>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-black/40">Contact</h4>
            <a href="mailto:rohitrahul2909@gmail.com" className="text-black/70 text-base underline hover:text-black transition-colors underline-offset-4 decoration-1 lowercase">rohitrahul2909@gmail.com</a>
            <p className="text-black/70 text-base">Worldwide Available</p>
          </div>
        </div>

        {/* Middle Huge Text */}
        <div data-aos="zoom-in" className="w-full flex justify-center items-center py-16 md:py-20 overflow-hidden">
          <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-black tracking-tighter lowercase select-none bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent w-full text-center">
            Rahul
          </h2>
        </div>

        {/* Tech Stack */}
        <div data-aos="fade-up" className="mb-20">
          <p className="text-center text-sm font-black uppercase tracking-[0.3em] text-black/40 mb-8">Built With</p>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                data-aos="zoom-in"
                data-aos-delay={index * 80}
                className="group rounded-2xl border border-black/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <img src={tech.image} alt={tech.name} className="h-8 w-8 md:h-10 md:w-10 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div data-aos="fade-up" className="border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-black/40">
          <p>&copy; {new Date().getFullYear()} Rahul. All rights reserved.</p>
          <p className="font-mono text-[10px] tracking-widest">Built with React &amp; Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
