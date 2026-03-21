"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  // Scroll-triggered animation for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-sandstone-50 relative overflow-x-hidden font-sans">
      {/* Subtle Temple Background */}
      <div className="absolute inset-0 bg-temple-pattern opacity-40 pointer-events-none mix-blend-multiply"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-sandstone-50/80 backdrop-blur-md border-b border-sandstone-200/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-end space-x-8">
            <Link
              href="/"
              className="text-charcoal-800 hover:text-saffron-600 transition-colors font-medium text-sm md:text-base"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-charcoal-800 hover:text-saffron-600 transition-colors font-medium text-sm md:text-base"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-8 px-6 sm:px-8 relative z-10 w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Left Sidebar - Profile */}
          <aside className="w-full md:w-72 flex-shrink-0">
            <div className="md:sticky md:top-28 fade-in-section">
              <div className="flex flex-col mb-6">
                {/* Greeting */}
                <span className="text-saffron-600 font-serif italic text-xl mb-3">Namaste, I am</span>
                
                {/* Profile Picture */}
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-white shadow-lg mb-5 profile-picture bg-sandstone-100 relative">
                  <Image
                    src="/brijesh.jpg"
                    alt="Brijesh Chandrakar"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal-900 mb-2">
                  Brijesh Chandrakar
                </h1>
                
                {/* Tagline */}
                <div className="h-8 mb-4">
                  <span className="text-xl text-saffron-600 font-serif font-medium typing-animation border-r-[2px] border-saffron-400">
                    योगः कर्मसु कौशलम्
                  </span>
                </div>
              </div>

              {/* Roles / Traits */}
              <div className="space-y-4 mb-8">
                {[
                  "Full Stack Developer",
                  "Web & Mobile App Development",
                  "Tech Enthusiast",
                  "History, Culture, Society"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-charcoal-800">
                    <div className="w-1.5 h-1.5 bg-terracotta-500 rounded-full transform rotate-45 flex-shrink-0"></div>
                    <span className="font-medium text-[15px]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {/* GitHub */}
                <a
                  href="https://github.com/brijeshc"
                  className="p-3 bg-white text-charcoal-800 rounded-xl shadow-sm hover:shadow hover:bg-saffron-50 hover:text-saffron-600 hover:-translate-y-1 transition-all duration-300 border border-sandstone-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/brijesh-chandrakar-b3b83957"
                  className="p-3 bg-white text-charcoal-800 rounded-xl shadow-sm hover:shadow hover:bg-saffron-50 hover:text-saffron-600 hover:-translate-y-1 transition-all duration-300 border border-sandstone-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                {/* Email */}
                <a
                  href="mailto:brijeshchandrakar@hotmail.co.uk"
                  className="p-3 bg-white text-charcoal-800 rounded-xl shadow-sm hover:shadow hover:bg-saffron-50 hover:text-saffron-600 hover:-translate-y-1 transition-all duration-300 border border-sandstone-200"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 overflow-hidden">
            
            {/* About Me Section */}
            <section className="mb-12 fade-in-section">
              <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">
                About
              </h2>
              <div className="prose prose-lg text-charcoal-800 leading-relaxed font-sans max-w-none">
                <p className="mb-6 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-sandstone-200/50 shadow-sm">
                  I&apos;m a software engineer at{" "}
                  <a href="https://www.hardskills.com/" target="_blank" rel="noopener noreferrer" className="text-saffron-600 font-medium hover:text-saffron-500 underline decoration-saffron-200 underline-offset-4 transition-colors">
                    Hardskills
                  </a>
                  , working with React and Django frameworks. I completed my B.Tech-M.Tech dual degree from the{" "}
                  <a href="https://bsbe.iitk.ac.in" target="_blank" rel="noopener noreferrer" className="text-saffron-600 font-medium hover:text-saffron-500 underline decoration-saffron-200 underline-offset-4 transition-colors">
                    Biological Sciences and Bioengineering Department
                  </a>{" "}
                  at{" "}
                  <a href="https://iitk.ac.in" target="_blank" rel="noopener noreferrer" className="text-saffron-600 font-medium hover:text-saffron-500 underline decoration-saffron-200 underline-offset-4 transition-colors">
                    IIT Kanpur
                  </a>
                  . During my academic research, I published a paper on{" "}
                  <a href="https://www.sciencedirect.com/science/article/abs/pii/S0301462216304409" target="_blank" rel="noopener noreferrer" className="text-saffron-600 font-medium hover:text-saffron-500 underline decoration-saffron-200 underline-offset-4 transition-colors">
                    metal-binding motifs in proteins
                  </a>.
                </p>
                <p className="mb-6 px-2">
                  Originally from the beautiful small town of Dalli Rajhara in Chhattisgarh, known for its iron ore mines, I now call Durg my home. My interests extend far beyond technology — I am deeply engaged with history, culture, economics, Hindu philosophy, and classical literature. To me, family, nature, health, and cultural traditions are the foundational pillars of life.
                </p>
                <p className="px-2">
                  While I maintain a keen interest in new tech developments like AI and modern frameworks, I am also deeply conscious of the psychological and societal impacts of technology. Outside of the digital world, I am an avid trekker with over 10 expeditions in the Himalayas. I also enjoy reading, writing, playing football and chess, and cooking.
                </p>
              </div>
            </section>

            {/* Tags / Interests Section */}
            <section className="mb-12 fade-in-section">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Tech Stack */}
                <div className="bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-sm border border-sandstone-200 hover:shadow-md transition-shadow group">
                  <h4 className="font-serif font-bold text-xl text-charcoal-900 mb-5 flex items-center">
                    <span className="w-2 h-2 bg-terracotta-500 rounded-sm mr-3 transform rotate-45 group-hover:scale-125 transition-transform"></span>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {["React", "Django", "React Native", "TypeScript", "Microservices", ".NET", "MS SQL"].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-sandstone-100/50 text-charcoal-800 rounded-lg text-sm font-medium border border-sandstone-200 hover:border-saffron-300 hover:bg-white transition-all hover:shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Reading & Interests */}
                <div className="bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-sm border border-sandstone-200 hover:shadow-md transition-shadow group">
                  <h4 className="font-serif font-bold text-xl text-charcoal-900 mb-5 flex items-center">
                    <span className="w-2 h-2 bg-saffron-500 rounded-sm mr-3 transform rotate-45 group-hover:scale-125 transition-transform"></span>
                    Interests
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {["Hindu Philosophy", "History", "Science", "Non-Fiction", "Himalayan Trekking", "Chess", "Football"].map((interest) => (
                      <span key={interest} className="px-3 py-1.5 bg-sandstone-100/50 text-charcoal-800 rounded-lg text-sm font-medium border border-sandstone-200 hover:border-saffron-300 hover:bg-white transition-all hover:shadow-sm">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Projects Section */}
            <section className="fade-in-section">
              <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">
                Projects
              </h2>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-sm border border-sandstone-200 hover:shadow-md transition-all group">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-4">
                  <h3 className="text-2xl font-serif font-bold text-charcoal-900 group-hover:text-saffron-600 transition-colors">
                    Time Overflow
                  </h3>
                  <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-md border border-emerald-100">Live on Play Store</span>
                </div>
                
                <p className="text-charcoal-800 mb-6 text-lg leading-relaxed">
                  A mobile application designed to help users log the time they spend across various activities. It brings awareness to daily time usage, gently steering users away from wasteful habits and towards a more conscious, productive, and balanced lifestyle.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs font-bold bg-sandstone-100 text-charcoal-600 rounded-md tracking-wide">React Native (Expo)</span>
                  <span className="px-3 py-1 text-xs font-bold bg-sandstone-100 text-charcoal-600 rounded-md tracking-wide">Android Studio</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.timeoverflow.app&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-saffron-600 text-white font-medium rounded-xl hover:bg-saffron-500 transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
                  >
                    Download App
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                  <a
                    href="https://time-overflow.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-charcoal-900 border-2 border-sandstone-200 font-medium rounded-xl hover:border-saffron-300 hover:bg-sandstone-50 transition-all focus:outline-none"
                  >
                    Project Website
                  </a>
                </div>
              </div>
            </section>
            
          </div>
        </div>
      </div>

      {/* Cultural Footer */}
      <footer className="mt-6 py-4 bg-sandstone-100/80 border-t border-sandstone-200 relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg md:text-xl font-serif italic text-charcoal-800 mb-1 tracking-wide fade-in-section">
            &quot;सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः&quot;
          </p>
          <p className="text-[10px] md:text-xs font-medium text-charcoal-600 tracking-wider uppercase fade-in-section mb-2" style={{ animationDelay: '100ms' }}>
            May all be happy, may all be free from illness.
          </p>
          <div className="text-xs font-medium text-charcoal-500/80">
            © {new Date().getFullYear()} Brijesh Chandrakar
          </div>
        </div>
      </footer>
    </main>
  );
}
