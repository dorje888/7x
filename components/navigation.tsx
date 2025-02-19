"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Brain, Code, Palette, Share2, Smartphone, Video } from 'lucide-react'

const services = [
  {
    title: "Graphic Design",
    href: "/services/graphic-design",
    icon: <Palette className="w-4 h-4" />, 
    description: "Professional graphic design services for your brand"
  },
  {
    title: "Social Media Marketing",
    href: "/services/social-media",
    icon: <Share2 className="w-4 h-4" />, 
    description: "Strategic social media management and marketing"
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    icon: <Code className="w-4 h-4" />, 
    description: "Custom web development solutions"
  },
  {
    title: "AI Chatbot Integration",
    href: "/services/ai-chatbot",
    icon: <Brain className="w-4 h-4" />, 
    description: "Intelligent chatbot solutions for customer support"
  },
  {
    title: "Video Editing",
    href: "/services/video-editing",
    icon: <Video className="w-4 h-4" />, 
    description: "Professional video editing and production"
  },
  {
    title: "App Development",
    href: "/services/app-development",
    icon: <Smartphone className="w-4 h-4" />, 
    description: "Mobile app development for iOS and Android"
  },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            7xSolutions
          </Link>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="px-4 py-2">Home</Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {services.map((service) => (
                        <Link key={service.title} href={service.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="flex items-center gap-2">
                            {service.icon}
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {service.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/about" className="px-4 py-2">About Us</Link>
            <Link href="/blog" className="px-4 py-2">Blog</Link>
          </nav>
          
          <Button asChild className="hidden md:flex">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md rounded-md p-4 absolute top-16 left-0 w-full">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="px-4 py-2" onClick={() => setIsOpen(false)}>Home</Link>
              <div>
                <button className="px-4 py-2 w-full text-left font-medium" onClick={() => setIsOpen(!isOpen)}>Services</button>
                <div className="flex flex-col space-y-2 pl-4">
                  {services.map((service) => (
                    <Link key={service.title} href={service.href} className="px-4 py-2 text-sm" onClick={() => setIsOpen(false)}>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/about" className="px-4 py-2" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link href="/blog" className="px-4 py-2" onClick={() => setIsOpen(false)}>Blog</Link>
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}