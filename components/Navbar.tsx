"use client";

import React , {useState} from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link';

import {Menu,  X } from "lucide-react"



const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }




  return (

    <div className='px-10'>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">ACM</span>
                </Link>
                <nav className="hidden md:flex space-x-6">
                    <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
                        About
                    </Link>
                    <Link href="#benefits" className="text-sm font-medium hover:underline underline-offset-4">
                        Benefits
                    </Link>
                    <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
                        How It Works
                    </Link>
                    <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
                        Testimonials
                    </Link>
                    <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
                        FAQ
                    </Link>
                </nav>
                    
                <button className="hidden md:inline-flex bg-[#F26A21] text-white px-6 py-2 rounded-lg font-semibold">
                  <Link href="https://selar.co/r6b69d">
                    Get the Ebook
                  </Link>
                </button>
                <Button variant="ghost" className="md:hidden" onClick={toggleMobileMenu}>
                 <Menu className="h-6 w-6" />
                </Button>
            </div>
      </header>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container px-6 flex flex-col h-full">
            <div className="flex justify-between items-center h-16">
              <span className="text-2xl font-bold">ACM</span>
              <Button variant="ghost" onClick={toggleMobileMenu}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4 mt-8">
              <Link href="#about" className="text-lg font-medium" onClick={toggleMobileMenu}>
                About
              </Link>
              <Link href="#benefits" className="text-lg font-medium" onClick={toggleMobileMenu}>
                Benefits
              </Link>
              <Link href="#how-it-works" className="text-lg font-medium" onClick={toggleMobileMenu}>
                How It Works
              </Link>
              <Link href="#testimonials" className="text-lg font-medium" onClick={toggleMobileMenu}>
                Testimonials
              </Link>
              <Link href="#faq" className="text-lg font-medium" onClick={toggleMobileMenu}>
                FAQ
              </Link>
              <button className="mt-4 bg-[#F26A21] text-white font-semibold py-2 rounded-lg">
                <Link href="https://selar.com/r6b69d">
                    Buy Now
                </Link>
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>


  )
}

export default Navbar