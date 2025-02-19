import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Code,
  Laptop,
  Globe,
  Smartphone,
  Zap,
  Shield,
  Database,
  LineChart,
  CheckCircle2,
  Rocket
} from 'lucide-react'

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 h-[500px]" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Custom Web Development Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Transform your digital presence with our cutting-edge web development services. We create fast, scalable, and user-friendly websites that drive results.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
                alt="Web Development"
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Web Development Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe className="w-6 h-6" />}
              title="Custom Websites"
              description="Tailored websites that perfectly match your brand and requirements."
            />
            <ServiceCard
              icon={<Smartphone className="w-6 h-6" />}
              title="Responsive Design"
              description="Websites that work flawlessly across all devices and screen sizes."
            />
            <ServiceCard
              icon={<Code className="w-6 h-6" />}
              title="Web Applications"
              description="Complex web applications with robust functionality."
            />
            <ServiceCard
              icon={<Database className="w-6 h-6" />}
              title="E-commerce Solutions"
              description="Online stores with secure payment processing and inventory management."
            />
            <ServiceCard
              icon={<Zap className="w-6 h-6" />}
              title="Performance Optimization"
              description="Speed optimization for lightning-fast loading times."
            />
            <ServiceCard
              icon={<Shield className="w-6 h-6" />}
              title="Security & Maintenance"
              description="Ongoing security updates and website maintenance."
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TechCard
              title="Frontend"
              items={["React.js", "Next.js", "Vue.js", "TypeScript"]}
            />
            <TechCard
              title="Backend"
              items={["Node.js", "Python", "PHP", "Java"]}
            />
            <TechCard
              title="Database"
              items={["MongoDB", "PostgreSQL", "MySQL", "Redis"]}
            />
            <TechCard
              title="Tools"
              items={["Docker", "Git", "AWS", "Vercel"]}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Planning"
              description="We analyze your requirements and create a detailed project plan."
            />
            <ProcessStep
              number="02"
              title="Design"
              description="We create wireframes and design mockups for your approval."
            />
            <ProcessStep
              number="03"
              title="Development"
              description="We build your website using the latest technologies."
            />
            <ProcessStep
              number="04"
              title="Launch"
              description="We deploy your website and provide ongoing support."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              title="Expert Team"
              description="Skilled developers with years of experience in web development."
            />
            <BenefitCard
              title="Modern Technologies"
              description="We use the latest technologies to build future-proof solutions."
            />
            <BenefitCard
              title="Fast Delivery"
              description="Efficient development process to deliver projects on time."
            />
            <BenefitCard
              title="Quality Code"
              description="Clean, maintainable, and well-documented code."
            />
            <BenefitCard
              title="SEO Optimized"
              description="Websites built with search engine optimization in mind."
            />
            <BenefitCard
              title="Ongoing Support"
              description="Dedicated support and maintenance after launch."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Next Website?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create a powerful web presence that helps your business grow.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Link href="/contact">Start Your Project</Link>
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
        <div className="mb-4 text-blue-600">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function TechCard({ title, items }: {
  title: string
  items: string[]
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-600" />
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
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
      <div className="text-3xl font-bold text-blue-600 mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function BenefitCard({ title, description }: {
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">
        <CheckCircle2 className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}