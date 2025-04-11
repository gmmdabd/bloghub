import Image from "next/image";
import Link from "next/link";

// Demo data for our blog posts
const latestPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in Bali You Need to Visit",
    excerpt: "Discover secluded beaches, authentic villages, and breathtaking waterfalls beyond the tourist hotspots of Bali.",
    author: "Sarah Parker",
    date: "May 15, 2024",
    category: "Southeast Asia",
    image: "/images/placeholder-1.jpg",
    comments: 24,
  },
  {
    id: 2,
    title: "Budget Travel Guide: Europe on $50 a Day",
    excerpt: "How to experience the best of European culture, cuisine and landmarks without breaking the bank.",
    author: "Michael Chen",
    date: "May 12, 2024",
    category: "Budget Travel",
    image: "/images/placeholder-2.jpg",
    comments: 18,
  },
  {
    id: 3,
    title: "The Ultimate Safari Experience in Tanzania",
    excerpt: "From the Serengeti to Ngorongoro Crater, how to plan the perfect wildlife adventure in East Africa.",
    author: "David Okonkwo",
    date: "May 10, 2024",
    category: "Adventure",
    image: "/images/placeholder-3.jpg",
    comments: 15,
  },
];

const topPosts = [
  {
    id: 4,
    title: "Japan's Cherry Blossom Season: Complete Planning Guide",
    excerpt: "Everything you need to know about timing your visit, best viewing spots, and cultural festivities during Sakura season.",
    author: "Emma Tanaka",
    date: "April 28, 2024",
    category: "Seasonal Travel",
    image: "/images/placeholder-4.jpg",
    comments: 87,
    views: 42650,
  },
  {
    id: 5,
    title: "Culinary Tour Through the Streets of Marrakech",
    excerpt: "Explore the vibrant food scene of Morocco's most famous market city, from tagines to mint tea and everything in between.",
    author: "Omar Hassan",
    date: "April 22, 2024",
    category: "Food Tourism",
    image: "/images/placeholder-5.jpg",
    comments: 61,
    views: 38230,
  },
  {
    id: 6,
    title: "How We Traveled the World for a Year with Just Carry-On Luggage",
    excerpt: "Practical packing tips, essential versatile items, and our minimalist approach to long-term travel.",
    author: "Jessica & Tom Wilson",
    date: "April 15, 2024",
    category: "Travel Tips",
    image: "/images/placeholder-6.jpg",
    comments: 54,
    views: 35780,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Emily Rodriguez",
    role: "Travel Photographer",
    text: "BlogHub has been incredible for sharing my travel photography and connecting with fellow adventurers. The engagement from readers worldwide has opened up amazing collaboration opportunities!",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Alex Thompson",
    role: "Adventure Blogger",
    text: "As someone who documents extreme adventures, I love how BlogHub makes it easy to share my experiences with detailed maps and video embeds. The community feedback is always so supportive!",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Mei Lin",
    role: "Culinary Travel Writer",
    text: "Since I started posting my food-focused travel content on BlogHub, my audience has grown exponentially. The platform's features for highlighting recipes and restaurants are unmatched!",
    avatar: "/images/avatar-3.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">T</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">TravelHub</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition">Home</a>
            <a href="#" className="text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition">Destinations</a>
            <a href="#" className="text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition">Travel Guides</a>
            <a href="#" className="text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition">About</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <button className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-full hover:bg-teal-700 transition">Sign In</button>
            <button className="md:hidden p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Explore the World, One Journey at a Time</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">Join our community of passionate travelers sharing authentic experiences and practical travel tips.</p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition shadow-md hover:shadow-lg">Start Your Journey</button>
                <button className="px-6 py-3 bg-white text-teal-600 font-medium rounded-full border border-teal-600 hover:bg-teal-50 transition">Explore Destinations</button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="bg-white/90 dark:bg-gray-800/90 p-8 rounded-xl shadow-lg max-w-sm">
                  <h3 className="text-2xl font-bold mb-2">Join Fellow Travelers</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Connect with explorers who share your passion for discovery.</p>
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-teal-500"></div>
                    <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                    <div className="w-10 h-10 rounded-full bg-amber-500"></div>
                    <div className="w-10 h-10 rounded-full bg-emerald-500"></div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-medium">+328</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16 bg-white dark:bg-gray-900 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest Travel Stories</h2>
              <p className="text-gray-600 dark:text-gray-400">Fresh adventures and insights from our global community</p>
            </div>
            <a href="#" className="text-teal-600 dark:text-teal-400 font-medium hover:underline">View All</a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map(post => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/70 dark:bg-gray-800/70 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">{post.category}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                      <span className="text-sm">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See BlogHub in Action</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Watch how easy it is to create beautiful posts, engage with readers, and grow your audience.</p>
          </div>
          
          <div className="aspect-video max-w-4xl mx-auto bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-xl relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:bg-blue-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Posts Section */}
      <section className="py-16 bg-white dark:bg-gray-900 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Popular Destinations</h2>
              <p className="text-gray-600 dark:text-gray-400">Most loved travel content from our community</p>
            </div>
            <a href="#" className="text-teal-600 dark:text-teal-400 font-medium hover:underline">View All</a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topPosts.map(post => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group border border-gray-100 dark:border-gray-700">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-blue-600/10 flex items-center justify-center">
                    <div className="bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400">
                      {post.views.toLocaleString()} views
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">{post.category}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                      <span className="text-sm">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Hear from some of our adventurous community members</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{testimonial.text}</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Travel Adventure?</h2>
            <p className="text-white/80 text-lg mb-8">Join thousands of travelers who have already found inspiration and shared their journeys on our platform.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-teal-600 font-medium rounded-full hover:bg-teal-50 transition shadow-md hover:shadow-lg">Create Your Account</button>
              <button className="px-8 py-3 bg-transparent text-white font-medium rounded-full border border-white hover:bg-white/10 transition">Browse Destinations</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">T</div>
                <h1 className="text-2xl font-bold">TravelHub</h1>
              </div>
              <p className="text-gray-400 mb-6">A community-driven platform for travelers to share adventures and connect with fellow explorers.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Popular Destinations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Travel Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Travel Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Destinations</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Asia</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Europe</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Africa</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">North America</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">South America</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Subscribe</h4>
              <p className="text-gray-400 mb-4">Stay updated with our latest posts and announcements.</p>
              <form className="flex flex-col space-y-3">
                <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-teal-500" />
                <button className="px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition">Subscribe</button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 TravelHub. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
