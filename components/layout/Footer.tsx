import React from 'react'
import {
    Coffee,
} from "lucide-react";
import Link from 'next/link';
export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Coffee className="h-6 w-6 text-amber-400" />
                            <span className="text-lg font-bold">YogesCoffee</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Premium cold brew crafted for the modern professional.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Product</h4>
                        <div className="space-y-2 text-sm text-gray-400">
                            <Link
                                href="#"
                                className="block hover:text-white transition-colors"
                            >
                                Cold Brew
                            </Link>
                            <Link
                                href="#"
                                className="block hover:text-white transition-colors"
                            >
                                Subscription
                            </Link>
                            <Link
                                href="#"
                                className="block hover:text-white transition-colors"
                            >
                                Gift Cards
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Company</h4>
                        <div className="space-y-2 text-sm text-gray-400">
                            <Link
                                href="#"
                                className="block hover:text-white transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                href="#"
                                className="block hover:text-white transition-colors"
                            >
                                Contact
                            </Link>
                            <Link
                                href="#"
                                className="block hover:text-white transition-colors"
                            >
                                Careers
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Support</h4>
                        <div className="space-y-2 text-sm text-gray-400">
                            <Link
                                href="#"
                                className="block hover:text-white transition-colors"
                            >
                                FAQ
                            </Link>
                            <Link
                                href="#"
                                className="block hover:text-white transition-colors"
                            >
                                Shipping
                            </Link>
                            <Link
                                href="#"
                                className="block hover:text-white transition-colors"
                            >
                                Returns
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} YogesCoffee. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
