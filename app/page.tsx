import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Coffee, Clock, Zap, Award, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ColdBrewLanding() {

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-8 h-16 flex items-center border-b border-gray-100 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Coffee className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-semibold text-gray-900">YogesCoffee</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-base font-medium text-gray-600 hover:text-amber-600 transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-base font-medium text-gray-600 hover:text-amber-600 transition-colors">
              Reviews
            </Link>
            <Link href="#pricing" className="text-base font-medium text-gray-600 hover:text-amber-600 transition-colors">
              Pricing
            </Link>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-flex border-amber-600 text-amber-600 hover:bg-amber-50 transition-all duration-200"
          >
            Try Free Sample
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-amber-50 to-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Side */}
              <div className="space-y-8 max-w-xl">
                <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-300">
                  Premium Cold Brew
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                  Fuel Your Success with <span className="text-amber-600">Premium</span> Cold Brew
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Designed for dreamers and doers. Get the smooth, powerful boost you need—without the crash.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Order Now – $24.99
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-3 text-lg border-amber-600 text-amber-600 hover:bg-amber-50 transition"
                  >
                    Free Sample
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-4">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Free shipping</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>30-day guarantee</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Organic certified</span>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative">
                <div className="relative z-10 rounded-xl overflow-hidden ">
                  <Image
                    src="/coffee.jpg"
                    alt="Premium Cold Brew Coffee Bottle"
                    width={500}
                    height={600}
                    className="mx-auto rounded-xl object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-200 via-orange-100 to-transparent rounded-full blur-2xl opacity-40 scale-90 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Professionals Choose YogesCoffee</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Engineered for peak performance, crafted for exceptional taste
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto">
                    <Zap className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Sustained Energy</h3>
                  <p className="text-gray-600">
                    Smooth caffeine release for 6+ hours of focused productivity without jitters or crashes
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">18-Hour Brew</h3>
                  <p className="text-gray-600">
                    Slow-steeped for 18 hours to extract maximum flavor while reducing acidity by 70%
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Premium Beans</h3>
                  <p className="text-gray-600">
                    Single-origin, ethically sourced beans from award-winning farms in Colombia and Ethiopia
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto">
                    <Coffee className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Ready to Drink</h3>
                  <p className="text-gray-600">
                    Perfectly balanced and ready to fuel your day. No brewing, no waiting, just pure performance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8">
              <p className="text-gray-600 font-medium">Trusted by professionals at</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google"
                  width={60}
                  height={40}
                />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                  alt="Microsoft"
                  width={60}
                  height={40}
                />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  width={60}
                  height={40}
                />

              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-gray-600">4.9/5 from 2,847 reviews</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700">
                    "This cold brew has completely transformed my morning routine. The energy lasts all day without any
                    crashes. As a startup founder, I need consistent focus."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Sarah Chen"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">Sarah Chen</p>
                      <p className="text-sm text-gray-600">Startup Founder</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700">
                    "Finally, a coffee that matches my standards. Smooth, rich, and gives me the edge I need for those
                    long consulting sessions. Worth every penny."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Marcus Rodriguez"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">Marcus Rodriguez</p>
                      <p className="text-sm text-gray-600">Management Consultant</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700">
                    "I've tried every premium coffee brand out there. YogesCoffee is in a league of its own. The
                    convenience and quality are unmatched."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Emily Watson"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">Emily Watson</p>
                      <p className="text-sm text-gray-600">Product Manager</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-8 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Elevate Your Performance?</h2>
              <p className="text-xl opacity-90">
                Join thousands of professionals who've made the switch to premium cold brew. Your most productive self
                is just one sip away.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
                <div className="space-y-4">
                  <div className="text-left">
                    <p className="text-sm opacity-80">Limited Time Offer</p>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold">$19.99</span>
                      <span className="text-lg line-through opacity-60">$24.99</span>
                      <span className="text-sm bg-red-500 px-2 py-1 rounded">20% OFF</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Input type="email" placeholder="Enter your email" className="bg-white text-gray-900 border-0" />
                    <Button size="lg" className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                      Claim Your Discount
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  <p className="text-xs opacity-80">Free shipping • 30-day money-back guarantee • Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Coffee className="h-6 w-6 text-amber-400" />
                <span className="text-lg font-bold">YogesCoffee</span>
              </div>
              <p className="text-gray-400 text-sm">Premium cold brew crafted for the modern professional.</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="#" className="block hover:text-white transition-colors">
                  Cold Brew
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Subscription
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Gift Cards
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="#" className="block hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Contact
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Careers
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="#" className="block hover:text-white transition-colors">
                  FAQ
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Shipping
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Returns
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} YogesCoffee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
