import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Brain, Code, Palette, Share2, Star, Timer, Trophy, Users } from 'lucide-react'
import Script from 'next/script'
export default function Home() {
  return (
    <>
    {/* Adding Botpress Chatbot Script */}
    <Script
      strategy="afterInteractive"
      src="https://webchat.botpress.cloud/3c637c58-7c61-44f4-9e7d-5a369ac11a8e/webchat.js"
    />
      {/* Hero Section */}
<section className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <Image
    src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80"
    alt="Digital Marketing"
    fill
    className="object-cover scale-105 brightness-100 contrast-110"
    priority
  />

  {/* Light Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

  {/* Content Container */}
  <div className="container mx-auto px-6 text-center relative z-10">
    <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl animate-fade-up">
      <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md mb-6">
        AI-Powered Digital Marketing Solutions
      </h1>
      <p className="text-lg text-gray-800 mb-8">
        Cutting-edge solutions for SEO, Social Media, Web Development, and More!
      </p>
      <Button size="lg" asChild className="bg-blue-600 text-white shadow-lg hover:bg-blue-700 animate-fade-up animate-delay-200">
        <Link href="/contact">Get Started</Link>
      </Button>
    </div>
  </div>
</section>



      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions powered by artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Palette className="w-6 h-6" />}
              title="Graphic Design"
              description="Professional design services for your brand identity"
              href="/services/graphic-design"
            />
            <ServiceCard
              icon={<Share2 className="w-6 h-6" />}
              title="Social Media Marketing"
              description="Strategic social media management and marketing"
              href="/services/social-media"
            />
            <ServiceCard
              icon={<Code className="w-6 h-6" />}
              title="Web Development"
              description="Custom web development solutions"
              href="/services/web-development"
            />
            <ServiceCard
              icon={<Brain className="w-6 h-6" />}
              title="AI Chatbot Integration"
              description="Intelligent chatbot solutions for customer support"
              href="/services/ai-chatbot"
            />
            <ServiceCard
              icon={<Share2 className="w-6 h-6" />}
              title="SEO Optimization"
              description="Improve your search engine rankings"
              href="/services/seo"
            />
            <ServiceCard
              icon={<Code className="w-6 h-6" />}
              title="App Development"
              description="Mobile app development for iOS and Android"
              href="/services/app-development"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine AI technology with human expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Brain className="w-6 h-6 text-blue-600" />}
              title="AI-Powered"
              description="Leverage the latest AI technology"
            />
            <FeatureCard
              icon={<Timer className="w-6 h-6 text-blue-600" />}
              title="Fast Delivery"
              description="Quick turnaround on all projects"
            />
            <FeatureCard
              icon={<Users className="w-6 h-6 text-blue-600" />}
              title="Expert Team"
              description="Skilled professionals at your service"
            />
            <FeatureCard
              icon={<Trophy className="w-6 h-6 text-blue-600" />}
              title="Proven Results"
              description="Track record of success"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              name="Abiral Thapa"
              role="Founder,Atithya Homestay"
              content="7xSolutions transformed our online presence. Their AI-powered solutions helped us achieve remarkable growth."
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
              name="Ratna Aryal"
              role="Chairman, Durga Bhawani Polyclinic"
              content="The team's expertise in digital marketing is unmatched. Highly recommended!"
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
              name="Ravi kumar Lamgade"
              role="Admin, Cynical Technology"
              content="Outstanding service and results. They helped us achieve our marketing goals beyond expectations."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free consultation and discover how our AI-powered solutions can help you grow
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ icon, title, description, href }: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}) {
  return (
    <Card className="group hover:shadow-lg transition-all">
      <CardContent className="p-6">
        <Link href={href} className="block">
          <div className="mb-4 text-blue-600">{icon}</div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600">{description}</p>
        </Link>
      </CardContent>
    </Card>
  )
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="text-center">
      <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TestimonialCard({ image, name, role, content }: {
  image: string
  name: string
  role: string
  content: string
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="ml-4">
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-gray-600">{role}</div>
          </div>
        </div>
        <div className="text-gray-600">
          <Star className="w-5 h-5 text-yellow-400 inline-block mr-1" />
          <Star className="w-5 h-5 text-yellow-400 inline-block mr-1" />
          <Star className="w-5 h-5 text-yellow-400 inline-block mr-1" />
          <Star className="w-5 h-5 text-yellow-400 inline-block mr-1" />
          <Star className="w-5 h-5 text-yellow-400 inline-block mb-4" />
          <p>{content}</p>
        </div>
      </CardContent>
    </Card>
  )
}