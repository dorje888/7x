import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-4">7xSolutions</h3>
            <p className="text-gray-600 mb-4">
              AI-powered digital marketing solutions to scale your business.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/graphic-design" className="text-gray-600 hover:text-blue-600">Graphic Design</Link></li>
              <li><Link href="/services/social-media" className="text-gray-600 hover:text-blue-600">Social Media Marketing</Link></li>
              <li><Link href="/services/web-development" className="text-gray-600 hover:text-blue-600">Web Development</Link></li>
              <li><Link href="/services/ai-chatbot" className="text-gray-600 hover:text-blue-600">AI Chatbot Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Maitidevi, Kathmandu</li>
              <li>Nepal</li>
              <li>Phone: +977 9814732561</li>
              <li>Email: info@7xsolutions.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} 7xSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}