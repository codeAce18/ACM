import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link';



const Navbar = () => {

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
                    
                <Button className="hidden md:inline-flex">
                    <Link href="https://selar.co/r6b69d">
                        Get the Ebook
                    </Link>
                </Button>
            </div>
      </header>
    </div>


  )
}

export default Navbar