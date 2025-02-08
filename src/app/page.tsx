import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      {/* Header Section */}
      <header className="w-full h-[400px] relative border-b border-stone-200">
        <Image
          src="/header.jpg"
          alt="Header Image"
          fill
          className="object-cover border-b-4 border-stone-800"
          priority
        />
      </header>

      {/* Main Content Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Section */}
          <div className="flex items-center gap-8 mb-16">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-stone-800 flex-shrink-0">
              <Image
                src="/brijesh.jpg"
                alt="Brijesh Chandrakar"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-stone-800">Brijesh Chandrakar</h1>
              <p className="text-xl text-stone-600">योगः कर्मसु कौशलम्</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">About Me</h2>
            <p className="text-lg text-stone-600">
              Passionate fullstack developer specializing in mobile and web development.
              Building innovative solutions with modern technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Cards */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-stone-800 mb-2">Project 1</h3>
              <p className="text-stone-600">Project description goes here</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-stone-800 mb-2">Project 2</h3>
              <p className="text-stone-600">Project description goes here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-stone-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/brijeshc" className="hover:text-orange-300 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/brijesh-chandrakar-b3b83957" className="hover:text-orange-300 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:brijeshchandrakar@hotmail.co.uk" className="hover:text-orange-300 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
