import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const TagCard = ({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsActive(entry.isIntersecting);
        },
        {
          rootMargin: '-30% 0px -40% 0px',
        }
      );

      if (ref.current) observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, []);

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (window.innerWidth < 768) return;

    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTopRelativeToContainer =
      cardRect.top - containerRect.top;

    const containerHeight = containerRect.height;

    const triggerY = cardTopRelativeToContainer + 60;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || 'fade-up'}
      data-aos-delay={aosDelay}
      className={`
        relative
        w-full
        max-w-xs
        sm:max-w-sm
        rounded-[32px]
        overflow-hidden
        transition-all
        duration-500
        z-10
        bg-white
        border
        border-black/10
        ${isActive
          ? 'shadow-[0_25px_60px_rgba(0,0,0,0.12)] -translate-y-2 scale-[1.02]'
          : 'shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]'
        }
        ${className}
      `}
    >
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-[#ff2a2a]" />

      {/* Hole Punch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border border-black/10 flex items-center justify-center z-20">
        <div className="w-2 h-2 rounded-full bg-black/20" />
      </div>

      {/* Content */}
      <div className="mt-8 p-8 min-h-[240px] flex flex-col">
        {/* Number */}
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff2a2a]">
          {number}
        </span>

        {/* Title */}
        <h3 className="mt-4 text-2xl font-black leading-tight text-black">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-[15px] leading-7 text-black/60">
          {text}
        </p>

        {/* Bottom Indicator */}
        <div className="mt-auto pt-6">
          <div className="h-[2px] w-12 bg-[#ff2a2a]" />
        </div>
      </div>
    </div>
  );
};

// export default TagCard;

const Services = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section
      id="services"
      ref={containerRef}
      className="bg-white pt-24 pb-24 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">

        {/* Header Content */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            How we work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            Let us show you how we drive your brand to new heights
            <svg className="absolute -bottom-10 right-10 w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            We follow a structured, creative, and highly technical approach to turn your ideas into robust full-stack applications.
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />
          <mask id="path-mask">
            <motion.path
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
            className="drop-shadow-sm"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          <TagCard
            number="01"
            title="Define"
            text="Understanding your vision, users, and business objectives to define a clear strategy and build the right solution from day one."
            className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard
            number="02"
            title="Design"
            text="Crafting seamless user journeys, modern interfaces, and memorable digital experiences that users genuinely enjoy."
            className="md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard
            number="03"
            title="Build"
            text="Engineering scalable web applications with clean architecture, exceptional performance, and enterprise-grade security."
            className="md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard
            number="04"
            title="Launch"
            text="Deploying, monitoring, optimizing, and continuously improving your product to ensure long-term success and growth."
            className="md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3"
            aosType="fade-right"
            aosDelay="400"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <div
            data-aos="fade-in"
            data-aos-delay="600"
            className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6"
          >
            Ready to be delivered!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;