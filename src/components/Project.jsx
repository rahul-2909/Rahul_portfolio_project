

const projects = [
    {
        title: 'KishanSetu',
        description: 'KishanSetu is a MERN-based platform that connects farmers directly with buyers, enabling transparent transactions, fair pricing, and easy access to fresh agricultural products without intermediaries.',
        category: 'Website',
        status: 'Live',
        link: 'https://kishansetu-frontend.onrender.com/',
        tools: ['ReactJS', 'Tailwind', 'NodeJs', 'MongoDB', 'Express.js', 'Cloudinary'],
    },
    {
        title: 'Wonderlust',
        description: 'The Wanderlust" project typically refers to a highly popular full-stack web development endeavor. Inspired by Airbnb, it allows users to discover, list, and review vacation properties.',
        category: 'Website',
        status: 'Live',
        link: 'https://wonderlust-9ghn.onrender.com/',
        tools: ['EJS', 'REST API', 'NodeJs', 'MongoDB', 'Express.js'],
    },
    {
        title: 'Signature App',
        description: 'A lightweight web application that lets users draw, customize, save, and retrieve their digital signatures using HTML5 Canvas, CSS, and JavaScript.',
        category: 'Website',
        status: 'Live',
        link: 'https://signature-app-lilac.vercel.app',
        tools: ['HTML', 'CSS', 'Javascript'],
    },
];

const Project = () => {
    return (
        <section id="projects" className="bg-white pt-24 pb-24 px-6 md:px-12 w-full overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] scroll-mt-24">
            <div className="max-w-7xl mx-auto">
                <div data-aos="fade-up" className="mb-14 text-center">
                    <p className="inline-block rounded-full border border-black/10 px-5 py-1.5 text-sm font-bold text-gray-600 shadow-sm bg-white">
                        Featured Work
                    </p>
                    <h2 className="mt-6 text-4xl font-black tracking-tight text-black md:text-5xl">
                        Projects I've Built
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/60">
                        Modern full-stack experiences designed for speed, usability, and memorable brand expression.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="absolute -right-10 top-0 h-44 w-44 rounded-full bg-[#ff2a2a]/5 blur-3xl"></div>

                            <div className="relative z-10 flex items-center justify-between gap-4">
                                <span className="rounded-full bg-[#ff2a2a] px-4 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-white">
                                    {project.category}
                                </span>
                                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
                                    {project.status}
                                </span>
                            </div>

                            <h3 className="relative z-10 mt-8 text-2xl font-black leading-tight text-black">
                                {project.title}
                            </h3>
                            <p className="relative z-10 mt-4 text-sm leading-7 text-black/60">
                                {project.description}
                            </p>

                            <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                                {project.tools.map((tool) => (
                                    <span key={tool} className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-black/50">
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            <div className="relative z-10 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <a
                                    target="_blank"
                                    href={project.link}
                                    className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#ff2a2a]"
                                >
                                    View Case
                                </a>
                                <span className="text-sm font-medium text-black/40">
                                    {project.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
