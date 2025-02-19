import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Users, BarChart2 } from 'lucide-react'
import {
  Code,
  Smartphone,
  Share2,
  Settings,
  Cloud,
  User,
  FileText
} from 'lucide-react'

export default function AppDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 h-[500px]" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Transforming Ideas into Mobile Apps
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Bring your ideas to life with our innovative app development services. We specialize in building intuitive and scalable mobile apps for iOS and Android platforms.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Start Your App Journey</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1521747116042-5c5f7e4297e1?auto=format&fit=crop&q=80"
                alt="App Development"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our App Development Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code className="w-6 h-6" />}
              title="Custom App Development"
              description="Tailored solutions to meet your business and user needs."
            />
            <ServiceCard
              icon={<Smartphone className="w-6 h-6" />}
              title="Mobile App Design"
              description="Intuitive and visually appealing mobile app UI/UX design."
            />
            <ServiceCard
              icon={<Cloud className="w-6 h-6" />}
              title="Cloud Integration"
              description="Seamless integration with cloud services to scale your app."
            />
            <ServiceCard
              icon={<Settings className="w-6 h-6" />}
              title="App Maintenance"
              description="Ongoing support and updates to keep your app running smoothly."
            />
            <ServiceCard
              icon={<FileText className="w-6 h-6" />}
              title="App Testing"
              description="Thorough testing to ensure your app performs flawlessly."
            />
            <ServiceCard
              icon={<User className="w-6 h-6" />}
              title="User Authentication"
              description="Secure and reliable user authentication for your app."
            />
          </div>
        </div>
      </section>

      {/* Platform Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Platforms We Develop For</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <PlatformCard
              name="iOS"
              description="Apps for the Apple ecosystem"
              image="https://images.unsplash.com/photo-1521265563749-c68719b25bb1?auto=format&fit=crop&q=80"
            />
            <PlatformCard
              name="Android"
              description="Mobile apps for Android users"
              image="https://images.unsplash.com/photo-1571019613981-fc619dd8b7ba?auto=format&fit=crop&q=80"
            />
            <PlatformCard
              name="Cross-Platform"
              description="Apps that run smoothly on both iOS and Android"
              image="https://images.unsplash.com/photo-1588927895205-07ab8e4b9b7d?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Proven Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ResultCard
              icon={<TrendingUp className="w-6 h-6" />}
              metric="250%"
              description="Increase in user engagement"
            />
            <ResultCard
              icon={<Users className="w-6 h-6" />}
              metric="15K+"
              description="App downloads per month"
            />
            <ResultCard
              icon={<BarChart2 className="w-6 h-6" />}
              metric="200%"
              description="Improvement in app performance"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Discovery"
              description="We understand your idea and the target audience."
            />
            <ProcessStep
              number="02"
              title="Design"
              description="Our team designs an intuitive and seamless app interface."
            />
            <ProcessStep
              number="03"
              title="Development"
              description="Our developers bring your app to life with cutting-edge technology."
            />
            <ProcessStep
              number="04"
              title="Launch"
              description="We deploy your app to app stores for users to download."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your App?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your app development journey with us and reach a wider audience with a powerful mobile app.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-white text-green-600 hover:bg-gray-100"
          >
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="group hover:shadow-lg transition-all">
      <CardContent className="p-6">
        <div className="mb-4 text-green-600">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function PlatformCard({ name, description, image }: {
  name: string
  description: string
  image: string
}) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all">
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function ResultCard({ icon, metric, description }: {
  icon: React.ReactNode
  metric: string
  description: string
}) {
  return (
    <Card className="text-center p-6">
      <div className="inline-flex p-3 bg-green-50 rounded-full mb-4">
        <div className="text-green-600">{icon}</div>
      </div>
      <div className="text-3xl font-bold mb-2">{metric}</div>
      <p className="text-gray-600">{description}</p>
    </Card>
  )
}

function ProcessStep({ number, title, description }: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-green-600 mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
