import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Search } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Digital Marketing",
    excerpt: "Discover how artificial intelligence is revolutionizing the digital marketing landscape and what it means for your business.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    author: "Rajesh Sharma",
    date: "April 15, 2024",
    category: "AI Technology"
  },
  {
    id: 2,
    title: "10 SEO Strategies That Actually Work in 2024",
    excerpt: "Learn about the most effective SEO strategies that are driving results in the current digital landscape.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80",
    author: "Priya Patel",
    date: "April 10, 2024",
    category: "SEO"
  },
  {
    id: 3,
    title: "Building a Strong Social Media Presence",
    excerpt: "A comprehensive guide to establishing and maintaining a powerful social media presence for your brand.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    author: "Alex Wong",
    date: "April 5, 2024",
    category: "Social Media"
  }
]

const categories = [
  "All",
  "AI Technology",
  "Digital Marketing",
  "SEO",
  "Social Media",
  "Web Development",
  "Business Strategy"
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
            <p className="text-lg text-gray-600">
              Insights, thoughts and trends in AI and digital marketing
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function BlogCard({ title, excerpt, image, author, date, category }: {
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  category: string
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-blue-600">{category}</span>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-600">{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
          <Link href={`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">By {author}</span>
          <Button variant="link" asChild className="p-0">
            <Link href={`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`}>
              Read More
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}