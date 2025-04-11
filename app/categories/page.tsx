import Image from "next/image";
import Link from "next/link";

// Sample categories data with a wide range of topics
const categories = [
  {
    id: "travel",
    name: "Travel & Tourism",
    description: "Explore destinations, travel tips, and cultural experiences",
    icon: "🌎",
    count: 127,
    popular: true,
    featuredImage: "/images/placeholder-1.jpg",
  },
  {
    id: "food",
    name: "Food & Cuisine",
    description: "Recipes, culinary traditions, and food adventures around the world",
    icon: "🍲",
    count: 84,
    popular: true,
    featuredImage: "/images/placeholder-5.jpg",
  },
  {
    id: "technology",
    name: "Technology",
    description: "Latest tech news, reviews, and digital trends",
    icon: "💻",
    count: 93,
    popular: true,
    featuredImage: "/images/placeholder-4.jpg",
  },
  {
    id: "adventure",
    name: "Adventure & Outdoors",
    description: "Hiking, camping, and extreme sports experiences",
    icon: "🏔️",
    count: 68,
    popular: true,
    featuredImage: "/images/placeholder-3.jpg",
  },
  {
    id: "photography",
    name: "Photography",
    description: "Photography tips, gear reviews, and stunning captures",
    icon: "📸",
    count: 52,
    popular: false,
    featuredImage: "/images/placeholder-2.jpg",
  },
  {
    id: "arts",
    name: "Arts & Culture",
    description: "Museums, performances, and cultural heritage",
    icon: "🎭",
    count: 45,
    popular: false,
    featuredImage: "/images/placeholder-6.jpg",
  },
  {
    id: "history",
    name: "History",
    description: "Historical sites, events, and heritage exploration",
    icon: "🏛️",
    count: 36,
    popular: false,
    featuredImage: "/images/placeholder-1.jpg",
  },
  {
    id: "wildlife",
    name: "Wildlife & Nature",
    description: "Animal encounters and natural wonders",
    icon: "🦁",
    count: 41,
    popular: false,
    featuredImage: "/images/placeholder-2.jpg",
  },
  {
    id: "budget",
    name: "Budget Travel",
    description: "Tips and guides for traveling on a budget",
    icon: "💰",
    count: 32,
    popular: false,
    featuredImage: "/images/placeholder-3.jpg",
  },
  // Empty categories
  {
    id: "computer-science",
    name: "Computer Science",
    description: "Programming, algorithms, and computer theory",
    icon: "🖥️",
    count: 0,
    popular: false,
    featuredImage: "/images/placeholder-4.jpg",
  },
  {
    id: "mathematics",
    name: "Mathematics",
    description: "Mathematical concepts, problems, and applications",
    icon: "🔢",
    count: 0,
    popular: false,
    featuredImage: "/images/placeholder-5.jpg",
  },
  {
    id: "physics",
    name: "Physics",
    description: "Principles of physics and scientific discoveries",
    icon: "⚛️",
    count: 0,
    popular: false,
    featuredImage: "/images/placeholder-6.jpg",
  },
  {
    id: "astronomy",
    name: "Astronomy",
    description: "Space exploration, celestial bodies, and cosmic events",
    icon: "🔭",
    count: 0,
    popular: false,
    featuredImage: "/images/placeholder-1.jpg",
  },
  {
    id: "literature",
    name: "Literature",
    description: "Books, authors, and literary analysis",
    icon: "📚",
    count: 0,
    popular: false,
    featuredImage: "/images/placeholder-2.jpg",
  },
  {
    id: "philosophy",
    name: "Philosophy",
    description: "Philosophical theories, thinkers, and concepts",
    icon: "🧠",
    count: 0,
    popular: false,
    featuredImage: "/images/placeholder-3.jpg",
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="/images/backgroundimage.jpg"
          alt="Travel background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#f5f2e8]/90 backdrop-blur-md border-b border-amber-100">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl">T</div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">TravelHub</h1>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-amber-900 hover:text-amber-600 font-medium transition">Home</Link>
              <Link href="/categories" className="text-amber-600 border-b-2 border-amber-600 font-medium transition">Categories</Link>
              <Link href="#" className="text-amber-900 hover:text-amber-600 font-medium transition">Travel Guides</Link>
              <Link href="#" className="text-amber-900 hover:text-amber-600 font-medium transition">About</Link>
            </nav>
            
            <div className="flex items-center gap-3">
              <button className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-full hover:bg-amber-700 transition">Sign In</button>
              <button className="md:hidden p-2 text-amber-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 px-4 bg-[#f5f2e8]/80">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Explore Topics</h1>
              <p className="text-xl text-amber-800 max-w-3xl mx-auto">Discover content across a variety of categories from travel and technology to mathematics and philosophy.</p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search categories..." 
                  className="w-full px-6 py-4 bg-white rounded-full border border-amber-200 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-900"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-amber-600 text-white p-2 rounded-full hover:bg-amber-700 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Popular Categories */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Popular Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.filter(cat => cat.popular).map((category) => (
                  <Link href={`/categories/${category.id}`} key={category.id} className="block group">
                    <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                      <Image 
                        src={category.featuredImage || "/images/placeholder-1.jpg"}
                        alt={category.name}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <div className="text-4xl mb-1">{category.icon}</div>
                        <h3 className="text-xl font-bold group-hover:text-amber-300 transition">{category.name}</h3>
                        <p className="text-sm text-white/80">{category.count} posts</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* All Categories */}
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-6">All Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.filter(cat => !cat.popular).map((category) => (
                  <Link href={`/categories/${category.id}`} key={category.id}>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group border border-amber-100">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{category.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-amber-900 group-hover:text-amber-600 transition">{category.name}</h3>
                          <p className="text-amber-700 text-sm mb-2">{category.description}</p>
                          {category.count > 0 ? (
                            <span className="text-xs font-medium px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
                              {category.count} posts
                            </span>
                          ) : (
                            <span className="text-xs font-medium px-2 py-1 bg-orange-100 text-orange-800 rounded-full">
                              Be the first to post!
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-500 text-white px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your Knowledge</h2>
              <p className="text-white/90 text-lg mb-8">Have expertise in a particular area? Create an account and start sharing your insights with our community today.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-amber-700 font-medium rounded-full hover:bg-amber-50 transition shadow-md hover:shadow-lg">Create Your Account</button>
                <button className="px-8 py-3 bg-transparent text-white font-medium rounded-full border border-white hover:bg-white/10 transition">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-amber-900 text-white py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl">T</div>
                  <h1 className="text-2xl font-bold">TravelHub</h1>
                </div>
                <p className="text-amber-200 mb-6">A community-driven platform for travelers to share adventures and connect with fellow explorers.</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-amber-200 hover:text-white transition">Home</a></li>
                  <li><a href="#" className="text-amber-200 hover:text-white transition">Popular Destinations</a></li>
                  <li><a href="#" className="text-amber-200 hover:text-white transition">Travel Guides</a></li>
                  <li><a href="#" className="text-amber-200 hover:text-white transition">Travel Tips</a></li>
                  <li><a href="#" className="text-amber-200 hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Destinations</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-amber-200 hover:text-white transition">Asia</a></li>
                  <li><a href="#" className="text-amber-200 hover:text-white transition">Europe</a></li>
                  <li><a href="#" className="text-amber-200 hover:text-white transition">Africa</a></li>
                  <li><a href="#" className="text-amber-200 hover:text-white transition">North America</a></li>
                  <li><a href="#" className="text-amber-200 hover:text-white transition">South America</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Subscribe</h4>
                <p className="text-amber-200 mb-4">Stay updated with our latest posts and announcements.</p>
                <form className="flex flex-col space-y-3">
                  <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-lg bg-amber-800 text-white border border-amber-700 focus:outline-none focus:border-amber-500" />
                  <button className="px-4 py-2 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-500 transition">Subscribe</button>
                </form>
              </div>
            </div>
            
            <div className="border-t border-amber-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-amber-200 text-sm">© 2024 TravelHub. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="text-amber-200 hover:text-white transition text-sm">Privacy Policy</a>
                <a href="#" className="text-amber-200 hover:text-white transition text-sm">Terms of Service</a>
                <a href="#" className="text-amber-200 hover:text-white transition text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 