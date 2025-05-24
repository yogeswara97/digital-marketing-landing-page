import { Coffee } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export const Header = () => {
    return (
        <header className="px-4 lg:px-8 h-16 flex items-center border-b border-gray-100 shadow-sm">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Coffee className="h-8 w-8 text-amber-600" />
                    <span className="text-2xl font-semibold text-gray-900">
                        YogesCoffee
                    </span>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        href="#features"
                        className="text-base font-medium text-gray-600 hover:text-amber-600 transition-colors"
                    >
                        Features
                    </Link>
                    <Link
                        href="#testimonials"
                        className="text-base font-medium text-gray-600 hover:text-amber-600 transition-colors"
                    >
                        Reviews
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-base font-medium text-gray-600 hover:text-amber-600 transition-colors"
                    >
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
    )
}
