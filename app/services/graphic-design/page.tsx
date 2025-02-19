import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Palette, Layers, Wand2, Monitor, PenTool } from 'lucide-react'

export default function GraphicDesignPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 h-[500px]" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Professional Graphic Design Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Transform your brand with our AI-enhanced graphic design services. We combine creativity with cutting-edge technology to deliver stunning visuals that captivate your audience.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
                alt="Graphic Design"
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Design Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Palette className="w-6 h-6" />}
              title="Brand Identity"
              description="Logo design, color palettes, and comprehensive brand guidelines."
            />
            <ServiceCard
              icon={<Monitor className="w-6 h-6" />}
              title="Digital Design"
              description="Social media graphics, web banners, and digital marketing assets."
            />
            <ServiceCard
              icon={<Layers className="w-6 h-6" />}
              title="Print Design"
              description="Brochures, business cards, and marketing materials."
            />
            <ServiceCard
              icon={<PenTool className="w-6 h-6" />}
              title="Custom Illustration"
              description="Unique illustrations and infographics for your brand."
            />
            <ServiceCard
              icon={<Wand2 className="w-6 h-6" />}
              title="AI-Enhanced Design"
              description="Cutting-edge AI tools for innovative design solutions."
            />
            <ServiceCard
              icon={<Monitor className="w-6 h-6" />}
              title="UI/UX Design"
              description="User-friendly interfaces and engaging user experiences."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Design Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Discovery"
              description="We learn about your brand, goals, and target audience."
            />
            <ProcessStep
              number="02"
              title="Concept"
              description="We create initial design concepts and gather feedback."
            />
            <ProcessStep
              number="03"
              title="Refinement"
              description="We refine the designs based on your feedback."
            />
            <ProcessStep
              number="04"
              title="Delivery"
              description="We deliver the final files in all required formats."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Design Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              title="AI-Enhanced Creativity"
              description="We leverage advanced AI tools to enhance our creative process and deliver unique designs."
            />
            <BenefitCard
              title="Quick Turnaround"
              description="Fast delivery without compromising on quality, thanks to our efficient workflow."
            />
            <BenefitCard
              title="Brand Consistency"
              description="Ensure your brand maintains a consistent look across all platforms and materials."
            />
            <BenefitCard
              title="Unlimited Revisions"
              description="We work with you until you're completely satisfied with the final design."
            />
            <BenefitCard
              title="Industry Expertise"
              description="Our designers have years of experience across various industries."
            />
            <BenefitCard
              title="Future-Proof Designs"
              description="Modern designs that stay relevant and effective for years to come."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create stunning designs that capture your brand's essence and captivate your audience.
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