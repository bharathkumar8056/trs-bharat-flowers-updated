"use client"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function FlowerVarietiesPage() {
  const flowers = [
    {
      name: "Asiatic Lily - Bunch",
      description: "Beautiful, vibrant Asiatic lilies in perfect bunches",
      image: "/assets/flowers/Asiatic-Lily.jpg",
    },
    {
      name: "Carnation - Bunch",
      description: "Fresh, long-lasting carnations for all occasions",
      image: "/assets/flowers/Carnation.jpg",
    },
    {
      name: "Fresh Jasmine Cut Flowers Exporters to All Countries",
      description: "Premium jasmine flowers exported worldwide",
      image: "/assets/flowers/jasmine.jpg",
    },
    {
      name: "Fresh Lotus Exporters",
      description: "Fresh lotus flowers for traditional and modern arrangements",
      image: "/assets/flowers/lotus-flower.jpg",
    },
    {
      name: "Fresh Rose Cut Flowers",
      description: "Premium quality rose cut flowers in various colors",
      image: "/assets/flowers/rose-cut-flower.jpg",
    },
    {
      name: "Fresh Yellow Marigold Cut Flowers",
      description: "Vibrant yellow marigolds fresh from the farm",
      image: "/assets/flowers/Marigold.jpg",
    },
    {
      name: "Gerbara - Bunch",
      description: "Colorful and cheerful gerbera flowers in bunches",
      image: "/assets/flowers/Gerbara.jpg",
    },
    {
      name: "Gypsophila - Bunch",
      description: "Delicate gypsophila perfect as filler flowers",
      image: "/assets/flowers/Gypsophila.jpg",
    },
    {
      name: "Jasmine Flower Exporters",
      description: "Fragrant jasmine flowers for export markets",
      image: "/assets/flowers/jasmine.jpg",
    },
    {
      name: "Lotus Cut Flowers",
      description: "Fresh cut lotus flowers with premium quality",
      image: "/assets/flowers/lotus-flower.jpg",
    },
    {
      name: "Orchid Blue - Bunch",
      description: "Stunning blue orchids in beautiful bunches",
      image: "/assets/flowers/Orchid-Blue.jpg",
    },
    {
      name: "Orchid Pink - Bunch",
      description: "Elegant pink orchids perfect for arrangements",
      image: "/assets/flowers/Orchid-pink.jpg",
    },
    {
      name: "Orchid White - Bunch",
      description: "Pure white orchids of the highest quality",
      image: "/assets/flowers/Orchid-White.jpg",
    },
    {
      name: "Orchids Purple - Bunch",
      description: "Majestic purple orchids in premium bunches",
      image: "/assets/flowers/Orchids-Purple.jpg",
    },
    {
      name: "Oriental Lily - Bunch",
      description: "Fragrant and stunning Oriental lilies",
      image: "/assets/flowers/Oriental-Lily.jpg",
    },
    {
      name: "Rajnigandha - Bunch",
      description: "Sweet-scented Rajnigandha flowers in bunches",
      image: "/assets/flowers/Rajnigandha.jpg",
    },
    {
      name: "Rose Color - Bunch",
      description: "Colorful roses in beautiful mixed bunches",
      image: "/assets/flowers/Rose-Color.jpg",
    },
    {
      name: "Rose Red - Bunch",
      description: "Classic red roses of premium quality",
      image: "/assets/flowers/Rose-Red.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                <img
                  src="/assets/trs-logo.jpg"
                  alt="TRS Bharat Global Solutions Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">TRS Bharat Global Solutions</h1>
                <p className="text-blue-200 text-sm">Premium Export Solutions</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" className="text-black border-white hover:bg-white-800">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Flower Varieties</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of fresh flowers sourced from the finest farms across India. Each variety
            is carefully selected and processed to meet international quality standards.
          </p>
        </div>

        {/* Flowers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {flowers.map((flower, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
                <img
                  src={flower.image}
                  alt={flower.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement
                    img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle' dy='.3em'%3EFlower Image%3C/text%3E%3C/svg%3E"
                  }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">{flower.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{flower.description}</CardDescription>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Flowers?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Contact us for bulk orders, custom arrangements, and export inquiries. We deliver the freshest flowers to
            markets worldwide.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Contact Us
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
