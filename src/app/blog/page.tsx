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
    excerpt: "Time logging is a powerful tool that helps you understand where your time goes. By tracking your daily activities, you can identify time-wasting patterns and make conscious decisions to improve your productivity. Exploring these ideas in details..",
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
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
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

      <div className="pt-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-stone-800 mb-8">Blog Posts</h1>
          
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl p-6 shadow-lg border border-stone-100">
                <h2 className="text-2xl font-bold text-stone-800 mb-2">
                  <a 
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-600 transition-colors"
                  >
                    {post.title}
                  </a>
                </h2>
                <div className="flex items-center text-sm text-stone-500 mb-4">
                  <time>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.source}</span>
                </div>
                <p className="text-stone-600 mb-4">{post.excerpt}</p>
                <a 
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
