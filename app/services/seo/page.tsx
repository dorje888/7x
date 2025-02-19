import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Search,
  Target,
  BarChart2,
  Globe,
  PenTool,
  FileText,
  CheckCircle2
} from 'lucide-react'

export default function SeoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 h-[500px]" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Boost Your Online Visibility with SEO
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Drive organic traffic and improve search rankings with our proven SEO strategies. We help you get discovered by the right audience.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Boost Your SEO Today</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&q=80"
                alt="SEO Services"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our SEO Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Search className="w-6 h-6" />}
              title="Keyword Research"
              description="We research the best keywords to drive traffic to your site."
            />
            <ServiceCard
              icon={<Target className="w-6 h-6" />}
              title="On-Page Optimization"
              description="Optimizing content, meta tags, and URLs for search engines."
            />
            <ServiceCard
              icon={<PenTool className="w-6 h-6" />}
              title="Content Creation"
              description="High-quality content creation that attracts and engages users."
            />
            <ServiceCard
              icon={<FileText className="w-6 h-6" />}
              title="Technical SEO"
              description="Improving your website's speed, mobile-friendliness, and security."
            />
            <ServiceCard
              icon={<BarChart2 className="w-6 h-6" />}
              title="SEO Analytics & Reporting"
              description="We provide detailed reports to track your SEO performance."
            />
            <ServiceCard
              icon={<Globe className="w-6 h-6" />}
              title="Local SEO"
              description="Optimizing for local search queries to increase visibility."
            />
          </div>
        </div>
      </section>

      {/* SEO Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why SEO Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<CheckCircle2 className="w-6 h-6" />}
              title="Increase Organic Traffic"
              description="SEO helps attract qualified traffic without relying on paid ads."
            />
            <BenefitCard
              icon={<CheckCircle2 className="w-6 h-6" />}
              title="Build Brand Authority"
              description="Rank higher and become a trusted authority in your niche."
            />
            <BenefitCard
              icon={<CheckCircle2 className="w-6 h-6" />}
              title="Long-Term Results"
              description="SEO provides lasting results compared to paid advertising."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our SEO Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Audit"
              description="We perform a comprehensive audit of your current SEO performance."
            />
            <ProcessStep
              number="02"
              title="Strategy"
              description="We develop a custom SEO strategy tailored to your business goals."
            />
            <ProcessStep
              number="03"
              title="Implementation"
              description="We implement the best practices to optimize your site."
            />
            <ProcessStep
              number="04"
              title="Optimization"
              description="We continually optimize for better performance and rankings."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Rank Higher on Search Engines?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with us today to take your website to the next level and start attracting organic traffic.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-white text-green-600 hover:bg-gray-100"
          >
            <Link href="/contact">Start Your SEO Journey</Link>
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

function BenefitCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="text-center p-6">
      <div className="inline-flex p-3 bg-green-50 rounded-full mb-4">
        <div className="text-green-600">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
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
