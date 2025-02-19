import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  BarChart2,
  CheckCircle2,
  Share2,
  Users,
  MessageSquare,
  Camera,
  TrendingUp,
  Target,
  LineChart
} from 'lucide-react'

export default function SocialMediaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 h-[500px]" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Strategic Social Media Marketing
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Elevate your brand's social presence with our AI-powered social media marketing services. We create engaging content and drive meaningful engagement.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Boost Your Social Presence</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80"
                alt="Social Media Marketing"
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Social Media Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Share2 className="w-6 h-6" />}
              title="Content Strategy"
              description="Custom content strategies aligned with your business goals."
            />
            <ServiceCard
              icon={<Camera className="w-6 h-6" />}
              title="Content Creation"
              description="Engaging posts, stories, and videos for your social channels."
            />
            <ServiceCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Community Management"
              description="Active engagement and community building with your audience."
            />
            <ServiceCard
              icon={<Target className="w-6 h-6" />}
              title="Paid Advertising"
              description="Targeted social media advertising campaigns."
            />
            <ServiceCard
              icon={<LineChart className="w-6 h-6" />}
              title="Analytics & Reporting"
              description="Detailed insights and performance tracking."
            />
            <ServiceCard
              icon={<Users className="w-6 h-6" />}
              title="Influencer Marketing"
              description="Strategic partnerships with relevant influencers."
            />
          </div>
        </div>
      </section>

      {/* Platform Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Platforms We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <PlatformCard
              name="Instagram"
              description="Visual storytelling and engagement"
              image="https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&q=80"
            />
            <PlatformCard
              name="Facebook"
              description="Community building and advertising"
              image="https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80"
            />
            <PlatformCard
              name="LinkedIn"
              description="Professional networking and B2B"
              image="https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80"
            />
            <PlatformCard
              name="Twitter"
              description="Real-time engagement and trends"
              image="https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?auto=format&fit=crop&q=80"
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
              metric="300%"
              description="Average increase in engagement"
            />
            <ResultCard
              icon={<Users className="w-6 h-6" />}
              metric="10K+"
              description="New followers per month"
            />
            <ResultCard
              icon={<BarChart2 className="w-6 h-6" />}
              metric="200%"
              description="Increase in social traffic"
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
              title="Audit"
              description="We analyze your current social media presence."
            />
            <ProcessStep
              number="02"
              title="Strategy"
              description="We develop a customized content strategy."
            />
            <ProcessStep
              number="03"
              title="Execute"
              description="We create and publish engaging content."
            />
            <ProcessStep
              number="04"
              title="Optimize"
              description="We monitor and optimize performance."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Dominate Social Media?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create a powerful social media presence that engages your audience and drives results.
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
      <div className="inline-flex p-3 bg-blue-50 rounded-full mb-4">
        <div className="text-blue-600">{icon}</div>
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
      <div className="text-3xl font-bold text-blue-600 mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}