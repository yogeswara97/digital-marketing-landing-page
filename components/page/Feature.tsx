import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import {
    Coffee,
    Clock,
    Zap,
    Award,
} from "lucide-react";

export const Feature = () => {
    return (
        <section id="features" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Why Professionals Choose YogesCoffee
                    </h2>
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
                            <h3 className="text-xl font-semibold text-gray-900">
                                Sustained Energy
                            </h3>
                            <p className="text-gray-600">
                                Smooth caffeine release for 6+ hours of focused productivity
                                without jitters or crashes
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm bg-white">
                        <CardContent className="p-6 text-center space-y-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto">
                                <Clock className="h-6 w-6 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                18-Hour Brew
                            </h3>
                            <p className="text-gray-600">
                                Slow-steeped for 18 hours to extract maximum flavor while
                                reducing acidity by 70%
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm bg-white">
                        <CardContent className="p-6 text-center space-y-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto">
                                <Award className="h-6 w-6 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Premium Beans
                            </h3>
                            <p className="text-gray-600">
                                Single-origin, ethically sourced beans from award-winning
                                farms in Colombia and Ethiopia
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm bg-white">
                        <CardContent className="p-6 text-center space-y-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto">
                                <Coffee className="h-6 w-6 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Ready to Drink
                            </h3>
                            <p className="text-gray-600">
                                Perfectly balanced and ready to fuel your day. No brewing,
                                no waiting, just pure performance
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
