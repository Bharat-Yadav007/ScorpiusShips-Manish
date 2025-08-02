import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Anchor, Ship, Globe, Clock, Shield, Users, Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ScorpiusShips() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Ship className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-800">Scorpius Ships</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="#fleet" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Fleet
            </Link>
            <Link href="#contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700">Get Quote</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 lg:px-6 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Navigate Your Cargo to
                    <span className="text-blue-300 block">Global Success</span>
                  </h1>
                  <p className="text-xl text-blue-100 leading-relaxed">
                    Scorpius Ships delivers reliable, efficient maritime transportation solutions across the world's
                    oceans. Trust your cargo to our experienced fleet and dedicated crew.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                    Request Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 bg-transparent"
                  >
                    View Fleet
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Scorpius Ships cargo vessel"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Comprehensive Shipping Solutions</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From container shipping to specialized cargo transport, we provide end-to-end maritime logistics
                tailored to your business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ship className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Container Shipping</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    Reliable container transport services with full tracking capabilities and flexible scheduling to
                    meet your delivery requirements.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Anchor className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Bulk Cargo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    Specialized handling of dry and liquid bulk commodities with state-of-the-art loading and unloading
                    facilities.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Global Routes</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    Extensive network covering major ports worldwide with regular scheduled services and competitive
                    transit times.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-100">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Scorpius Ships port operations"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Decades of Maritime Excellence</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Founded with a vision to connect global markets through reliable maritime transport, Scorpius Ships
                    has grown to become a trusted partner for businesses worldwide.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Our commitment to safety, efficiency, and environmental responsibility drives everything we do,
                    ensuring your cargo reaches its destination safely and on time.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                    <div className="text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-slate-600">Vessels in Fleet</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                    <div className="text-slate-600">Global Ports</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
                    <div className="text-slate-600">On-Time Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Why Choose Scorpius Ships</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our commitment to excellence and innovation sets us apart in the maritime industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Reliable Scheduling</h3>
                  <p className="text-slate-600">
                    Consistent departure and arrival times with real-time tracking and updates.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Cargo Security</h3>
                  <p className="text-slate-600">
                    Advanced security measures and comprehensive insurance coverage for peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Expert Crew</h3>
                  <p className="text-slate-600">
                    Highly trained maritime professionals with decades of combined experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section id="fleet" className="py-20 bg-slate-100">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Modern Fleet</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                State-of-the-art vessels equipped with the latest technology for safe and efficient cargo transport.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Container vessel"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Container Vessels</h3>
                  <p className="text-slate-600 mb-4">
                    Modern container ships with capacity ranging from 1,000 to 20,000 TEU.
                  </p>
                  <div className="text-sm text-blue-600 font-medium">15 Vessels in Service</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Bulk carrier" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Bulk Carriers</h3>
                  <p className="text-slate-600 mb-4">
                    Specialized vessels for dry bulk commodities with advanced cargo handling systems.
                  </p>
                  <div className="text-sm text-blue-600 font-medium">20 Vessels in Service</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Tanker vessel"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Tanker Fleet</h3>
                  <p className="text-slate-600 mb-4">
                    Chemical and product tankers with double-hull construction for maximum safety.
                  </p>
                  <div className="text-sm text-blue-600 font-medium">12 Vessels in Service</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Get in Touch</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Ready to ship with Scorpius? Contact our team for a customized quote and shipping solution.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-800">Phone</div>
                        <div className="text-slate-600">+1 (555) 123-4567</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-800">Email</div>
                        <div className="text-slate-600">info@scorpiusships.com</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-800">Headquarters</div>
                        <div className="text-slate-600">
                          1234 Harbor Drive
                          <br />
                          Maritime City, MC 12345
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Office Hours</h4>
                  <div className="text-slate-600">
                    <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                    <div>Saturday: 9:00 AM - 2:00 PM</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </div>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Request a Quote</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Email</label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Company</label>
                    <Input placeholder="Your Company Name" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Shipping Requirements</label>
                    <Textarea
                      placeholder="Please describe your cargo type, origin, destination, and timeline..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Quote Request</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Ship className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Scorpius Ships</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Connecting global markets through reliable maritime transportation solutions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Container Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Bulk Cargo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tanker Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Logistics
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Fleet
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Track Shipment
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Scorpius Ships. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
