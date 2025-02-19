import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Video,
  Edit,
  Camera,
  PlayCircle,
  Star,
  TrendingUp,
  Target,
  BarChart2
} from 'lucide-react'

export default function VideoEditingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-pink-100 h-[500px]" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Professional Video Editing Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Transform your raw footage into engaging, polished videos with our expert video editing services.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Elevate Your Videos Today</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80"
                alt="Video Editing"
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Video Editing Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Edit className="w-6 h-6" />}
              title="Cutting & Editing"
              description="Precise editing to create a seamless flow of content."
            />
            <ServiceCard
              icon={<Camera className="w-6 h-6" />}
              title="Color Grading"
              description="Enhance your footage with stunning color correction."
            />
            <ServiceCard
              icon={<PlayCircle className="w-6 h-6" />}
              title="Motion Graphics"
              description="Add dynamic and engaging animations to your video."
            />
            <ServiceCard
              icon={<Star className="w-6 h-6" />}
              title="Special Effects"
              description="Incorporating visual effects that elevate the production value."
            />
            <ServiceCard
              icon={<Video className="w-6 h-6" />}
              title="Video Stabilization"
              description="Fix shaky footage and ensure smooth visuals."
            />
            <ServiceCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Video SEO"
              description="Optimize your video for search engines to boost discoverability."
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
              description="Increase in video engagement after editing"
            />
            <ResultCard
              icon={<BarChart2 className="w-6 h-6" />}
              metric="150%"
              description="Growth in social media shares"
            />
            <ResultCard
              icon={<Star className="w-6 h-6" />}
              metric="5 Stars"
              description="Customer satisfaction with final video product"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Video Editing Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Consultation"
              description="We discuss your video vision and requirements."
            />
            <ProcessStep
              number="02"
              title="Editing"
              description="Our experts start the editing process, focusing on quality and creativity."
            />
            <ProcessStep
              number="03"
              title="Review"
              description="You review the edits, and we make any necessary adjustments."
            />
            <ProcessStep
              number="04"
              title="Finalization"
              description="We finalize and deliver the polished video ready for distribution."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Videos?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's bring your footage to life with professional editing that captures attention and drives results.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-white text-pink-600 hover:bg-gray-100"
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
        <div className="mb-4 text-pink-600">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
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
      <div className="inline-flex p-3 bg-pink-50 rounded-full mb-4">
        <div className="text-pink-600">{icon}</div>
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
      <div className="text-3xl font-bold text-pink-600 mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
