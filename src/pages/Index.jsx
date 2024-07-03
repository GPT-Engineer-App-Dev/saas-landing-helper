import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-8 bg-gray-100">
        <div className="flex items-center space-x-4">
          <Avatar>
            <img src="https://placehold.co/40x40" alt="logo" />
          </Avatar>
          <span className="text-xl font-bold">SaaS Company</span>
        </div>
        <nav className="flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-gray-900">Pricing</a>
          <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        </nav>
        <Button variant="primary">Get Started</Button>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center py-20 bg-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our SaaS Product</h1>
        <p className="text-xl text-gray-600 mb-8">The best solution for your business needs.</p>
        <Button variant="primary" size="lg">Try for Free</Button>
        <div className="mt-12">
          <img src="https://placehold.co/600x400" alt="product illustration" className="mx-auto" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Brief description of feature one.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Brief description of feature two.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Brief description of feature three.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Pricing</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <CardDescription>$10/month</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button variant="primary" className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>$20/month</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
                <li>Feature D</li>
              </ul>
              <Button variant="primary" className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>$30/month</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
                <li>Feature D</li>
                <li>Feature E</li>
              </ul>
              <Button variant="primary" className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">About Us</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center px-8 space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600">We are a company dedicated to providing the best SaaS solutions for businesses of all sizes. Our mission is to help you achieve your goals with our innovative and user-friendly products.</p>
          </div>
          <div className="md:w-1/2">
            <img src="https://placehold.co/600x400" alt="about us illustration" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Contact Us</h2>
        </div>
        <div className="max-w-2xl mx-auto px-8">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input id="name" type="text" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <Input id="subject" type="text" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea id="message" rows="4" required />
            </div>
            <Button type="submit" variant="primary">Submit</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-8 bg-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Terms of Service</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">Facebook</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Twitter</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">LinkedIn</a>
          </div>
        </div>
        <div className="text-center mt-4 text-gray-600">
          &copy; 2023 SaaS Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;