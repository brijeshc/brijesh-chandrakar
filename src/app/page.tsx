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
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-background"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="flex justify-end space-x-8">
            <Link
              href="/"
              className="text-stone-800 hover:text-orange-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-stone-800 hover:text-orange-600 transition-colors font-medium"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Sidebar - Profile */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="md:sticky md:top-24">
              <div className="mb-6 flex flex-col items-center md:items-start">
                {/* Profile Picture with Hover Animation */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-stone-800 mb-4 profile-picture">
                  <Image
                    src="/brijesh.jpg"
                    alt="Brijesh Chandrakar"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl font-bold text-stone-800">
                  Brijesh Chandrakar
                </h1>
                {/* Typing Animation for Tagline */}
                <p className="text-lg text-stone-600 font-medium typing-animation">
                  योगः कर्मसु कौशलम्
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-1 bg-stone-800 rounded-full"></div>
                  <span className="text-stone-600">Full Stack Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-1 bg-stone-800 rounded-full"></div>
                  <span className="text-stone-600">
                    Web & Mobile App Development
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-1 bg-stone-800 rounded-full"></div>
                  <span className="text-stone-600">Tech Enthusiast</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-1 bg-stone-800 rounded-full"></div>
                  <span className="text-stone-600">
                    History, Culture, Society
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex space-x-4">
                <a
                  href="https://github.com/brijeshc"
                  className="p-2 bg-stone-800 text-white rounded-full hover:bg-stone-700 hover:scale-110 transform transition-all duration-200 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/brijesh-chandrakar-b3b83957"
                  className="p-2 bg-stone-800 text-white rounded-full hover:bg-stone-700 hover:scale-110 transform transition-all duration-200 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* <a
                  href="https://www.buymeacoffee.com/brijeshc2049"
                  className="p-2 bg-stone-800 text-white rounded-full hover:bg-stone-700 hover:scale-110 transform transition-all duration-200 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z" />
                  </svg>
                </a> */}
                <a
                  href="mailto:brijeshchandrakar@hotmail.co.uk"
                  className="p-2 bg-stone-800 text-white rounded-full hover:bg-stone-700 hover:scale-110 transform transition-all duration-200 ease-in-out"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 py-4 md:py-6">
            <div className="prose prose-stone lg:prose-lg">
              {/* About Me Section with Fade-In Animation */}
              <h2 className="text-3xl font-bold text-stone-800 mb-6 fade-in-section">
                About Me
              </h2>
              <p className="text-lg text-stone-600 mb-8 fade-in-section">
                I&apos;m a software engineer at{" "}
                <a
                  href="https://www.cornerstoneondemand.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700"
                >
                  Cornerstone OnDemand
                </a>
                , working with React Native, React, .NET, TypeScript,
                JavaScript, MS SQL, microservices, etc. I completed my
                B.Tech-M.Tech dual degree from the{" "}
                <a
                  href="https://bsbe.iitk.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700"
                >
                  Biological Sciences and Bioengineering Department
                </a>{" "}
                at{" "}
                <a
                  href="https://iitk.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700"
                >
                  IIT Kanpur
                </a>
                . During my academic research, I published a paper titled{" "}
                <a
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0301462216304409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700"
                >
                  Comparison of metal-binding strength between methionine and
                  cysteine residues: Implications for the design of
                  metal-binding motifs in proteins
                </a>
                . Originally from the beautiful small town of Dalli Rajhara
                (known for iron ore mines) in Chhattisgarh, I now call Durg my
                home. My interests extend beyond technology - I enjoy reading
                about history, culture, economics, Hindu philosophy, and
                classical literature. Family, nature, health, culture and
                traditions are very important to me. As technology evolves, I
                maintain a keen interest in new tech developments like AI, new
                frameworks. This website is build with Next.js, Tailwind CSS
                which I had never used before. One of my major concerns is the
                negative imapact of technology on human psychology as
                well as our collective society. 
                I also like travelling especially trekking. I have extensive trekking experience in the
                Himalayas where I have done 10+ treks/adventure trips. My
                hobbies include reading, writing, football, chess and cooking.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-stone-800">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-sm">
                      React Native
                    </span>
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-sm">
                      .NET
                    </span>
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-sm">
                      MS SQL
                    </span>
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-sm">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-sm">
                      Microservices
                    </span>
                    {/* Add more technologies */}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-stone-800">
                    Reading Interests
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-sm">
                      Hindu Philosophy
                    </span>
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-sm">
                      History
                    </span>
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-sm">
                      Science
                    </span>
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-sm">
                      Non-Fiction
                    </span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-stone-800">Random likes</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-sm">
                      Cristiano Ronaldo
                    </span>
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-sm">
                      Kumar Sanu
                    </span>
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-sm">
                      Dalli Rajhara
                    </span>
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-sm">
                      Himalaya
                    </span>
                    <span className="px-2 py-1 bg-stone-100 rounded-full text-sm">
                      Chawal Roti
                    </span>
                  </div>
                </div>
              </div>

              {/* Featured Projects Section */}
              <h2 className="text-3xl font-bold text-stone-800 mb-6 fade-in-section">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 gap-6 fade-in-section">
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-stone-100">
                  <h3 className="text-xl font-bold text-stone-800 mb-2">
                    Time Overflow
                  </h3>
                  <p className="text-stone-600 mb-4">
                    A mobile application to allow users to log time they spend
                    on different activities and cateregories. This makes users
                    aware of their time usage and helps them to plan their day
                    better. The idea is to make users conscious of their
                    wasteful time usage and move them towards more productive
                    lifestyle. The app is now available on Google Play Store.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm">
                        React Native (Expo)
                      </span>
                      <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm">
                        Android Studio
                      </span>
                      <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm">
                        Google Play Console
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.timeoverflow.app&pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-700 font-medium"
                      >
                        Download from Google Play Store →
                      </a>
                      <a
                        href="https://time-overflow.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-700 font-medium"
                      >
                        Project website →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Footer */}
      <footer className="mt-12 py-6 bg-stone-800 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm">
            &quot;सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः&quot; <br />
            May all be happy, may all be free from illness.
          </p>
        </div>
      </footer>
    </main>
  );
}
