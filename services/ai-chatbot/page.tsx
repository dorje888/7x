import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Brain,
  MessageSquare,
  Bot,
  Users,
  Zap,
  LineChart,
  Settings,
  Globe,
  CheckCircle2,
  Languages
} from 'lucide-react'

export default function AIChatbotPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 h-[500px]" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                AI-Powered Chatbot Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Transform your customer service with intelligent chatbots that understand, learn, and provide 24/7 support for your business.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                alt="AI Chatbot"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Brain className="w-6 h-6" />}
              title="Natural Language Processing"
              description="Advanced AI that understands and responds to natural language queries."
            />
            <ServiceCard
              icon={<Bot className="w-6 h-6" />}
              title="24/7 Availability"
              description="Round-the-clock customer support without human intervention."
            />
            <ServiceCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Multi-Channel Support"
              description="Integration with website, messaging apps, and social media."
            />
            <ServiceCard
              icon={<Languages className="w-6 h-6" />}
              title="Multilingual Support"
              description="Communicate with customers in multiple languages."
            />
            <ServiceCard
              icon={<LineChart className="w-6 h-6" />}
              title="Analytics & Insights"
              description="Detailed reports on customer interactions and satisfaction."
            />
            <ServiceCard
              icon={<Settings className="w-6 h-6" />}
              title="Custom Integration"
              description="Seamless integration with your existing systems."
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <UseCaseCard
              title="Customer Support"
              description="Handle common queries and support tickets automatically."
              image="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80"
            />
            <UseCaseCard
              title="Lead Generation"
              description="Qualify leads and schedule appointments automatically."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            />
            <UseCaseCard
              title="E-commerce"
              description="Product recommendations and order tracking."
              image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80"
            />
            <UseCaseCard
              title="HR & Internal Support"
              description="Employee onboarding and internal help desk."
              image="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of AI Chatbots</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              title="Cost Reduction"
              description="Reduce customer service costs by automating routine inquiries."
            />
            <BenefitCard
              title="Increased Efficiency"
              description="Handle multiple conversations simultaneously without delays."
            />
            <BenefitCard
              title="Better Customer Experience"
              description="Instant responses and consistent service quality."
            />
            <BenefitCard
              title="Scalability"
              description="Easily handle increasing customer inquiries without additional resources."
            />
            <BenefitCard
              title="Data Insights"
              description="Gather valuable customer interaction data for business insights."
            />
            <BenefitCard
              title="Competitive Advantage"
              description="Stay ahead with cutting-edge AI technology."
            />
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Implementation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Analysis"
              description="We analyze your requirements and customer interaction patterns."
            />
            <ProcessStep
              number="02"
              title="Design"
              description="We design the chatbot flow and conversation scenarios."
            />
            <ProcessStep
              number="03"
              title="Development"
              description="We build and train the AI chatbot with your data."
            />
            <ProcessStep
              number="04"
              title="Integration"
              description="We deploy and integrate the chatbot with your platforms."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Customer Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's build an intelligent chatbot that transforms your customer experience.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-white text-blue-600 hover:bg-gray-100"
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
        <div className="mb-4 text-blue-600">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function UseCaseCard({ title, description, image }: {
  title: string
  description: string
  image: string
}) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
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