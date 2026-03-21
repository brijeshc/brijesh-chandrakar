import Link from "next/link";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  url: string;
  source: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Time Overflow: The Idea of Using Time Logging to Boost Productivity",
    date: "8th February 2025",
    excerpt: "Time logging is a powerful tool that helps you understand where your time goes. By tracking your daily activities, you can identify time-wasting patterns and make conscious decisions to improve your productivity.",
    url: "https://infinitycoder.hashnode.dev/time-overflow-the-idea-of-using-time-logging-to-boost-productivity",
    source: "Hashnode",
  },
  {
    title: "Why I Chose React Native Expo for Time Overflow",
    date: "30th December 2024",
    excerpt: "Exploring the decision-making process and benefits of selecting React Native with Expo for mobile app development, including rapid prototyping, cross-platform capabilities, and excellent developer experience.",
    url: "https://infinitycoder.hashnode.dev/why-i-chose-the-react-native-expo-for-my-new-mobile-app",
    source: "Hashnode",
  },
];

export default function Blog() {
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

      <div className="pt-24 pb-16 px-6 sm:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-charcoal-900 mb-10">
            Read My Writings
          </h1>
          
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm border border-sandstone-200 hover:shadow-md hover:-translate-y-1 transition-all group">
                <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-3 group-hover:text-saffron-600 transition-colors">
                  <a 
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.title}
                  </a>
                </h2>
                <div className="flex items-center text-sm font-medium text-charcoal-500 mb-5">
                  <time>{post.date}</time>
                  <span className="mx-3 text-sandstone-200">•</span>
                  <span className="px-2.5 py-1 bg-sandstone-100 text-charcoal-600 rounded-md text-xs tracking-wide uppercase">{post.source}</span>
                </div>
                <p className="text-charcoal-800 mb-6 leading-relaxed text-lg">
                  {post.excerpt}
                </p>
                <a 
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-saffron-600 hover:text-saffron-700 font-bold transition-colors"
                >
                  Read full article
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
      
      {/* Concise Footer */}
      <footer className="mt-8 py-8 bg-sandstone-100/80 border-t border-sandstone-200 relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl font-serif italic text-charcoal-800 mb-2 tracking-wide">
            &quot;सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः&quot;
          </p>
          <p className="text-xs font-medium text-charcoal-600 tracking-wider uppercase">
            May all be happy, may all be free from illness.
          </p>
          <div className="mt-6 pt-4 border-t border-sandstone-200/60 text-xs font-medium text-charcoal-500/80">
            © {new Date().getFullYear()} Brijesh Chandrakar
          </div>
        </div>
      </footer>
    </main>
  );
}
