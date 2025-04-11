// This file defines the structure for individual blog post pages.

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { latestPosts, topPosts } from "@/lib/data"; // Assuming data.ts is in lib folder

// Combine all posts into one array for easier lookup
const allPosts = [...latestPosts, ...topPosts];

// Function to get post data by ID
async function getPostData(id: number) {
  const post = allPosts.find((p) => p.id === id);
  return post;
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id, 10);
  const post = await getPostData(postId);

  if (!post) {
    notFound(); // Show 404 if post doesn't exist
  }

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
        {/* Simplified Header for Post Page */}
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
              <Link href="/categories" className="text-amber-900 hover:text-amber-600 font-medium transition">Categories</Link>
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

        {/* Post Content Section */}
        <section className="py-12 md:py-16 bg-[#f5f2e8]/95 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-10">
              {/* Post Header */}
              <div className="mb-8 border-b border-amber-100 pb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 leading-tight">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-amber-700">
                  <span>By <span className="font-medium text-amber-800">{post.author}</span></span>
                  <span className="hidden md:inline">|</span>
                  <span>{post.date}</span>
                  <span className="hidden md:inline">|</span>
                  <span>Category: <Link href={`/categories/${post.category.toLowerCase().replace(' ', '-')}`} className="font-medium text-amber-600 hover:underline">{post.category}</Link></span>
                  <span className="hidden md:inline">|</span>
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-video relative rounded-lg overflow-hidden mb-8 shadow-md">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Post Body */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-amber-900 prose-a:text-amber-600 hover:prose-a:text-amber-800 prose-strong:text-amber-800 prose-img:rounded-lg prose-img:shadow-sm"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Comments Section */}
              <div className="mt-12 pt-8 border-t border-amber-100">
                <h2 className="text-2xl font-bold text-amber-900 mb-6">Comments ({post.comments.length})</h2>
                
                {/* Add Comment Form */}
                <div className="mb-8 p-4 bg-amber-50 rounded-lg border border-amber-100">
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">Leave a Comment</h3>
                  <form className="space-y-3">
                    <textarea 
                      placeholder="Write your comment here..."
                      rows={4}
                      className="w-full p-3 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-900 bg-white"
                    />
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input type="text" placeholder="Your Name" className="flex-grow p-3 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-900 bg-white" />
                      <input type="email" placeholder="Your Email (optional)" className="flex-grow p-3 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-900 bg-white" />
                    </div>
                    <button 
                      type="submit"
                      className="px-6 py-2 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition shadow-sm"
                    >
                      Post Comment
                    </button>
                  </form>
                </div>

                {/* Existing Comments List */}
                <div className="space-y-6">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-amber-100">
                      <div className="w-10 h-10 rounded-full bg-gray-200 relative overflow-hidden flex-shrink-0">
                        <Image 
                          src={comment.avatar}
                          alt={comment.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-amber-900">{comment.author}</span>
                          <span className="text-xs text-amber-600">• {comment.date}</span>
                        </div>
                        <p className="text-amber-800">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                  {post.comments.length === 0 && (
                    <p className="text-amber-700 italic">No comments yet. Be the first to share your thoughts!</p>
                  )}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-amber-900 text-white py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Simplified footer content or reuse existing footer component */}
            <div className="border-t border-amber-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-amber-200 text-sm">© 2024 TravelHub. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="text-amber-200 hover:text-white transition text-sm">Privacy Policy</a>
                <a href="#" className="text-amber-200 hover:text-white transition text-sm">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 