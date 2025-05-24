import React from 'react'
import { Badge } from "@/components/ui/badge";
import {
    CheckCircle,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
export default function Hero() {
    return (
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-amber-50 to-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Side */}
                    <div className="space-y-8 max-w-xl">
                        <Badge
                            variant="secondary"
                            className="bg-amber-100 text-amber-700 border-amber-300"
                        >
                            Premium Cold Brew
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                            Fuel Your Success with{" "}
                            <span className="text-amber-600">Premium</span> Cold Brew
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Designed for dreamers and doers. Get the smooth, powerful
                            boost you need—without the crash.
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
    )
}
