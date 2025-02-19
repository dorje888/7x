import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Brain, Target, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Transforming Businesses Through AI-Powered Digital Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                At 7xSolutions, we combine cutting-edge AI technology with human expertise to deliver exceptional digital marketing solutions that drive real business growth.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Work With Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Team Meeting"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-600">
                  To be the leading AI-powered digital marketing agency, revolutionizing how businesses connect with their audience and achieve sustainable growth in the digital age.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-600">
                  To empower businesses with innovative AI-driven marketing solutions that deliver measurable results, foster meaningful connections, and drive sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience in digital marketing, AI technology, and business strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              image="/images/bikash.png"
              name="Bikash Sharma"
              role="Founder"
              bio="With over 3 years of experience in digital marketing and Development."
            />
            <TeamMember
              image="/images/Milan.png"
              name="Milan Tamang"
              role="CEO"
              bio="Expert in AI implementation and digital transformation."
            />
            <TeamMember
              image="/images/Binisha1.png"
              name="Binisha Mishra"
              role="Managing Director"
              bio="Digital marketing strategist with a passion for creativity and innovation."
            />
              <TeamMember
              image="/images/Sandesh.png"
              name="Sandesh Bista"
              role="Chief Finance Officer"
              bio="Expert in financial management and business strategy."
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              title="Innovation"
              description="We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
            />
            <ValueCard
              title="Excellence"
              description="We strive for excellence in everything we do, ensuring the highest quality in our deliverables."
            />
            <ValueCard
              title="Integrity"
              description="We maintain the highest standards of honesty and transparency in all our dealings."
            />
          </div>
        </div>
      </section>
    </>
  )
}

function TeamMember({ image, name, role, bio }: {
  image: string
  name: string
  role: string
  bio: string
}) {
  return (
    <div className="text-center">
      <div className="relative w-48 h-48 mx-auto mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-blue-600 mb-2">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  )
}

function ValueCard({ title, description }: {
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
