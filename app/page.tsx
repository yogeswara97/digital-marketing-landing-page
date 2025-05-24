import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Coffee,
  Clock,
  Zap,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import Hero from "@/components/page/Hero";
import { Footer } from "@/components/layout/Footer";
import { Feature } from "@/components/page/Feature";

export default function ColdBrewLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Feature />

        {/* Social Proof */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8">
              <p className="text-gray-600 font-medium">
                Trusted by professionals at
              </p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What Our Customers Say
              </h2>
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-2 text-gray-600">
                  4.9/5 from 2,847 reviews
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">
                    "This cold brew has completely transformed my morning
                    routine. The energy lasts all day without any crashes. As a
                    startup founder, I need consistent focus."
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
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">
                    "Finally, a coffee that matches my standards. Smooth, rich,
                    and gives me the edge I need for those long consulting
                    sessions. Worth every penny."
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
                      <p className="font-semibold text-gray-900">
                        Marcus Rodriguez
                      </p>
                      <p className="text-sm text-gray-600">
                        Management Consultant
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">
                    "I've tried every premium coffee brand out there.
                    YogesCoffee is in a league of its own. The convenience and
                    quality are unmatched."
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
                      <p className="font-semibold text-gray-900">
                        Emily Watson
                      </p>
                      <p className="text-sm text-gray-600">Product Manager</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Location Section - 2 columns on large screens */}
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6 sm:w-[90%]">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

              {/* Text content kiri */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Find Us at the Heart of Bali
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">
                  Come taste the magic in person. Visit our cozy cafe in Renon, Denpasar and experience cold brew like never before.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=-8.666769569156793,115.22343507749676"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Map kanan */}
              <div className="lg:w-1/2 overflow-hidden rounded-2xl shadow-lg border-4 border-white w-full h-72 md:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2603758365226!2d115.22343507749676!3d-8.666769569156793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24158dc741f41%3A0x602e48b6dd209926!2sFore%20Coffee%20-%20Renon%2C%20Bali!5e0!3m2!1sen!2sid!4v1748071441792!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-8 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Ready to Elevate Your Performance?
              </h2>
              <p className="text-xl opacity-90">
                Join thousands of professionals who've made the switch to
                premium cold brew. Your most productive self is just one sip
                away.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
                <div className="space-y-4">
                  <div className="text-left">
                    <p className="text-sm opacity-80">Limited Time Offer</p>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold">$19.99</span>
                      <span className="text-lg line-through opacity-60">
                        $24.99
                      </span>
                      <span className="text-sm bg-red-500 px-2 py-1 rounded">
                        20% OFF
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white text-gray-900 border-0"
                    />
                    <Button
                      size="lg"
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                    >
                      Claim Your Discount
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  <p className="text-xs opacity-80">
                    Free shipping • 30-day money-back guarantee • Cancel anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
