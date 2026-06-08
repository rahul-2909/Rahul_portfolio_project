
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

const contactInfo = [
  {
    icon: faEnvelope,
    title: 'Email',
    value: 'rohitrahul2909@gmail.com',
  },
  {
    icon: faPhone,
    title: 'Phone',
    value: '+91 79849 52055 ',
  },
  {
    icon: faLocationDot,
    title: 'Location',
    value: 'Vadodara, Gujarat, India',
  },
  {
    icon: faClock,
    title: 'Availability',
    value: 'Open for Work',
  },
];

const services = [
  "Full Stack Web Development",
  "React & Next.js Applications",
  "NestJS Backend Development",
  "REST API Development",
  "Database Design",
  "SaaS Products",
  "CRM Systems",
  "Performance Optimization",
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white pt-24 pb-24 px-6 md:px-12 w-full overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="inline-block border border-black/10 rounded-full px-5 py-1.5 text-sm font-bold text-gray-600 shadow-sm bg-white">
            Get in Touch
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-black">
            Let's Build Something Great
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/60">
            Have a project in mind, a business idea, or an exciting
            opportunity? I'd love to hear about it and help turn your vision
            into reality.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              data-aos="fade-up"
              className="rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#ff2a2a] text-white flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
              </div>

              <h3 className="font-bold text-black text-lg">
                {item.title}
              </h3>

              <p className="text-black/60 mt-1">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div
            data-aos="fade-up"
            className="rounded-3xl border border-black/10 bg-white p-8 transition-all duration-300 hover:shadow-lg"
          >
            <h3 className="text-2xl font-black text-black mb-6">
              Send a Message on email
            </h3>

            <form
              action="https://formspree.io/f/xkoajqek"
              method="POST"
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl border border-black/10 bg-white text-black outline-none focus:border-[#ff2a2a] transition-colors placeholder:text-black/30"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl border border-black/10 bg-white text-black outline-none focus:border-[#ff2a2a] transition-colors placeholder:text-black/30"
              />

              <input
                type="text"
                name="subject"
                placeholder="Project Type"
                className="w-full p-4 rounded-xl border border-black/10 bg-white text-black outline-none focus:border-[#ff2a2a] transition-colors placeholder:text-black/30"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
                className="w-full p-4 rounded-xl border border-black/10 bg-white text-black outline-none focus:border-[#ff2a2a] transition-colors placeholder:text-black/30 resize-none"
              />

              <button
                type="submit"
                className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:scale-105 hover:bg-[#ff2a2a] transition-all"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-8">

            {/* Services */}
            <div
              data-aos="fade-up"
              className="rounded-3xl border border-black/10 bg-white p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-2xl font-black text-black mb-6">
                What I Can Help With
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <div
                    key={service}
                    className="rounded-xl border border-black/10 bg-white p-3 text-sm font-medium text-black/70"
                  >
                    <span className="text-[#ff2a2a] font-bold mr-1.5">✓</span>
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div
              data-aos="fade-up"
              className="rounded-3xl border border-black/10 bg-white p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-2xl font-black text-black mb-6">
                Download Resume
              </h3>
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 w-full bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-[#ff2a2a] hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get My Resume
              </a>
            </div>

            <div
              data-aos="fade-up"
              className="rounded-3xl border border-black/10 bg-white p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-2xl font-black text-black mb-6">
                Connect With Me
              </h3>

              <div className="flex gap-4">
                <a
                  href="https://github.com/rahul-2909"
                  className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center hover:bg-[#ff2a2a] hover:scale-110 transition-all" target="_blank"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/rahul-rohit-7a2363362/"
                  className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center hover:bg-[#ff2a2a] hover:scale-110 transition-all" target="_blank"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>

                <a
                  href="https://www.instagram.com/rahulx2909/"
                  className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center hover:bg-[#ff2a2a] hover:scale-110 transition-all" target="_blank"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>

            {/* CTA */}
            {/* <div
              data-aos="fade-up"
              className="rounded-3xl border border-black/10 bg-[#ff2a2a] p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-2xl font-black text-white">
                Ready to Start?
              </h3>

              <p className="text-white/70 mt-4 leading-relaxed">
                Let's discuss your project and create something exceptional
                together. I'm always excited to work on innovative ideas.
              </p>

              <button className="mt-6 bg-black text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
                Schedule a Call
              </button>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
