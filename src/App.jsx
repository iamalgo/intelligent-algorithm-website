import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Globe, 
  Cloud, 
  Target, 
  ShoppingCart, 
  Building, 
  Home,
  Menu,
  X,
  ChevronDown,
  ArrowRight
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'

// Import company logos
import IAMLogo from './assets/IAMLOGO.png'
import AlgoInsuLogo from './assets/Algoinsulogojpg.jpg'
import VenturesLogo from './assets/Gemini_Generated_Image_pze67ppze67ppze6.png'
import IAMediaLogo from './assets/IAMediaLogo.png'
import LimyeLogo from './assets/Limye\'Official.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.nav-bar')
      if (window.scrollY > 50) {
        nav?.classList.add('nav-scrolled')
      } else {
        nav?.classList.remove('nav-scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: Globe,
      title: "Web Development & Design",
      description: "Custom web applications and responsive designs that convert visitors into customers with intelligent user experiences."
    },
    {
      icon: Cloud,
      title: "Cloud Hosting & Infrastructure",
      description: "Scalable, secure, and intelligent hosting solutions optimized for performance and reliability."
    },
    {
      icon: Target,
      title: "CRM Development",
      description: "Customer relationship management systems powered by AI algorithms to optimize engagement and conversions."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Smart algorithms for intelligent inventory management, pricing optimization, and automated dropshipping."
    },
    {
      icon: Building,
      title: "Insurance Lead Generation",
      description: "AI-driven lead qualification and government contracting solutions through our AlgoInsu subsidiary."
    },
    {
      icon: Home,
      title: "Property Management Technology",
      description: "Digital solutions for property management and housing placement, specializing in veteran and senior services."
    }
  ]

  const companies = [
    {
      logo: IAMLogo,
      name: "Intelligent Algorithm Management",
      description: "Core technology services: web development, hosting, CRM, and e-commerce solutions powered by intelligent algorithms.",
      url: "#services",
      isCenter: true
    },
    {
      logo: AlgoInsuLogo,
      name: "AlgoInsu",
      description: "Tailored insurance policies and government contracting solutions powered by AI-driven analytics and optimization.",
      url: "https://algoinsu.com"
    },
    {
      logo: VenturesLogo,
      name: "20/59 Ventures",
      description: "Dignified housing solutions for veterans and seniors with comprehensive property management and HRA services.",
      url: "https://2059ventures.online"
    },
    {
      logo: IAMediaLogo,
      name: "IAMedia",
      description: "Where algorithm meets narrative. Strategic media and storytelling solutions to amplify impact and drive engagement.",
      url: "https://iamedia.online",
      comingSoon: true
    },
    {
      logo: LimyeLogo,
      name: "Limye Foundation Partnership",
      description: "Supporting disadvantaged communities and combating child domesticity through strategic partnerships and social impact initiatives.",
      url: "https://limyefoundation.org"
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="nav-bar fixed top-0 w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Intelligent Algorithm Management
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('ecosystem')}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                Companies
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800"
          >
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('ecosystem')}
                className="block text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                Companies
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-transparent to-transparent"></div>
        
        {/* Globe Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-96 h-96 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent animate-pulse"></div>
        </div>
        
        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight"
          >
            Intelligence.
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Amplified.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light"
          >
            Intelligence that scales business and transforms communities
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            From algorithms to applications, we architect complete digital solutions that drive growth and create meaningful impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              onClick={() => scrollToSection('ecosystem')}
              className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
            >
              Explore Our Ecosystem
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
            Complete Digital Solutions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-24 px-4 bg-gradient-to-b from-transparent to-orange-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
              Our Intelligence Ecosystem
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Five interconnected companies working together to solve complex challenges across technology, business, and social impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${company.isCenter ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group h-full relative overflow-hidden">
                  {company.comingSoon && (
                    <Badge className="absolute top-4 right-4 bg-orange-500 text-white z-10">
                      Coming Soon
                    </Badge>
                  )}
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden ${company.isCenter ? 'scale-110' : ''}`}>
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{company.name}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{company.description}</p>
                    <Button 
                      onClick={() => company.url !== '#' && window.open(company.url, '_blank')}
                      className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white w-full"
                      disabled={company.url === '#'}
                    >
                      {company.isCenter ? 'Learn More' : company.comingSoon ? 'Coming Soon' : 'Visit Website'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
              Let's Build Something Intelligent
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8">
                <form action="https://formspree.io/f/mandgkjo" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                      <input 
                        type="text" 
                        name="company"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest</label>
                      <select name="service" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200">
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development & Design</option>
                        <option value="hosting">Cloud Hosting & Infrastructure</option>
                        <option value="crm">CRM Development</option>
                        <option value="ecommerce">E-commerce Solutions</option>
                        <option value="insurance">Insurance Leads</option>
                        <option value="property">Property Management</option>
                        <option value="consulting">Strategic Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Budget Range</label>
                    <select name="budget" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200">
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-plus">$100,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                    <textarea 
                      rows={5}
                      name="message"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white py-4 text-lg font-medium transition-all duration-300 transform hover:scale-[1.02]">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('ecosystem')}
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                Companies
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                Contact
              </button>
              <a 
                href="mailto:contact@iamalgo.com"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href="/phone-sms-mms-disclosure.html" className="text-gray-400 hover:underline">Phone, SMS & MMS Disclosure</a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400">
              © 2025 Intelligent Algorithm Management. All rights reserved.
            </p>
            <p className="text-gray-500 mt-2">
              Intelligence that scales business and transforms communities.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

