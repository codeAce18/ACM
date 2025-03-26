import React from 'react'

import Link from 'next/link';

// import { Button } from "@/components/ui/button"

const Footer = () => {

  return (

    <div>
        <footer className="border-t bg-muted">
            <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
                <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Aggregator Construct Mastery. All rights reserved.
                </p>
                {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-xs hover:underline underline-offset-4">
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-xs hover:underline underline-offset-4">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="text-xs hover:underline underline-offset-4">
                        Refund Policy
                    </Link>
                </nav> */}
            </div>
        </footer>

        {/* Floating "Get the Ebook" button for mobile */}
        <div className="fixed bottom-4 right-4 md:hidden z-50">
            <button className="bg-[#F26A21] text-white px-4 py-2 font-semibold rounded-lg">


                <Link href="https://selar.co/r6b69d">
                    Get the Ebook
                </Link>
            </button>
        </div>

    </div>

  )

}

export default Footer