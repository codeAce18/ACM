"use client"

import React from 'react'
import Image from "next/image"
// import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { CheckCircle, Star } from "lucide-react"
import { motion } from "framer-motion"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import {
    Card,
    CardContent,
    CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

// Fade-in animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Hero = () => {
  return (
    <div>
        <main className="flex-grow">
            {/* Hero Section with fade-in */}
            <motion.section 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="relative py-20 md:py-32"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                        <source src="/video/Business-Lecture.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                <div className="container relative px-4 md:px-6 z-10">
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      variants={fadeIn}
                      transition={{ delay: 0.2 }}
                      className="flex flex-col items-center space-y-4 text-center"
                    >
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                            Scale your business 40x faster with Aggregator Construct Business Model
                        </h1>
                        <p className="mx-auto max-w-[700px] text-white md:text-xl">
                            This e-book shows you exactly how to tap into existing resources to unlock massive business growth, no matter where you are in the world.
                        </p>
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          variants={fadeIn}
                          transition={{ delay: 0.4 }}
                        >

                          <button
                            // size="lg"
                            className="bg-[#F26A21] text-white px-8 py-4 text-lg  rounded-lg font-semibold"
                          >
                            <Link href="https://selar.co/r6b69d">Get the Ebook</Link>
                          </button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* About Section with staggered fade-in */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              id="about" 
              className="py-10 md:py-32"
            >
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <motion.div 
                          variants={fadeIn}
                          className="md:w-1/3"
                        >
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20e-book%20cover%20PNG-TBgu74BKJ1IoY6k3K4S3rJQgc7lFfZ.png"
                                alt="Aggregator Construct Mastery Ebook Cover by Paul Oseghale"
                                width={400}
                                height={600}
                                className="rounded-lg shadow-xl w-full h-auto object-contain"
                            />
                        </motion.div>
                        <motion.div 
                          variants={fadeIn}
                          transition={{ delay: 0.2 }}
                          className="md:w-2/3"
                        >
                            <h2 className="text-3xl font-bold mb-4">About the Ebook</h2>
                            <p className="lg:text-[14px] text-[15px] mb-4">
                                Imagine starting and growing your business by leveraging resources already in place, no need to reinvent the wheel. This ebook reveals precisely how to implement smarter, proven strategies to unlock massive growth, no matter where you are in the world. From the US and UK to Australia, Nigeria, and beyond, these strategies are designed to work globally.
                            </p>
                            <p className="lg:text-[14px] text-[15px] mb-4">
                                In the Aggregator Construct Mastery ebook, you&apos;ll gain a deep understanding of the Aggregator Construct Business Model. This ebook delves into the key components, strategies, and methodologies used by successful aggregator businesses such as Uber, Swiggy, Airbnb, Amazon, NerdWallet, and Netflix. You&apos;ll learn how to understand market dynamics and create scalable platforms that grow with you.
                            </p>
                            <p className="tlg:text-[14px] text-[15px] mb-4">
                                Covering the full journey of building and managing an aggregator business, this ebook equips you with the knowledge and strategies to potentially scale your business by 40x annually. Don&apos;t miss this opportunity, take your business to the next level with Aggregator Construct Mastery ebook today!
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Benefits Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              id="benefits" 
              className="py-20 md:py-32 bg-muted"
            >
              <div className="container px-4 md:px-6">
                <motion.h2 
                  variants={fadeIn}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
                >
                  What You&apos;ll Get
                </motion.h2>
                <motion.div 
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                  {[
                    "Access to a Supportive Global Community",
                    "Free One-on-One Consultation from Experts",
                    "Proven, Actionable Strategies to Start & Grow",
                    "Assistance to Build a Scaleable Business",
                    "Free One-Year Mentorship with the Author",
                    "Exclusive Savings on Personal Training Sessions",
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeIn}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center lg:text-[14.5px] text-[15.5px] tracking-wide">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                            {feature}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className='lg:text-[14px] text-[15px]'>
                            Learn the ins and outs of {feature.toLowerCase()} and how to apply them to your aggregator project.
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>

            {/* How It Works Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              id="how-it-works" 
              className="py-20 md:py-32"
            >
              <div className="container px-4 md:px-6">
                <motion.h2 
                  variants={fadeIn}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
                >
                  How It Works
                </motion.h2>
                <motion.div 
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                >
                  {[
                    {
                      title: "Purchase the Ebook",
                      description: "Get instant access to the comprehensive guide on Aggregator Construct Mastery.",
                    },
                    {
                      title: "Join ACM Community",
                      description: "Automatically become a member of our exclusive community of aggregator entrepreneurs.",
                    },
                    {
                      title: "Get Free Mentorship",
                      description: "Receive personalized guidance from the author to help you navigate your journey.",
                    },
                    {
                      title: "Build and Grow",
                      description: "Apply the strategies, build your aggregator business, and scale it to new heights.",
                    },
                  ].map((step, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeIn}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-center text-[16px]">{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-center text-[15px]">
                            {step.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              id="testimonials" 
              className="py-20 md:py-32 bg-muted"
            >
              <div className="container px-4 md:px-6">
                <motion.h2 
                  variants={fadeIn}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
                >
                  What Our Readers Say
                </motion.h2>
                <motion.div 
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
                >
                  {[
                    {
                      name: "Atenaga Collins",
                      role: "Startup Founder",
                      content: "This ebook was a game-changer for my aggregator business. The strategies are practical and effective.",
                    },
                    {
                      name: "Kehinde Okunola",
                      role: "Product Manager",
                      content: "I've read many books on this topic, but none as comprehensive and well-structured as this one.",
                    },
                    {
                      name: "Emmanuel Olusola",
                      role: "Software Developer",
                      content: "The technical insights in this ebook helped me overcome critical challenges in building my aggregator.",
                    },
                    {
                      name: "Abisola Asubiojo",
                      role: "Digital Marketing Specialist",
                      content: "The insights in this ebook transformed my approach to aggregator marketing. It's an invaluable resource for anyone in the digital space.",
                    },
                  ].map((testimonial, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeIn}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>{testimonial.name}</CardTitle>
                          <CardDescription>{testimonial.role}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">&apos;{testimonial.content}&apos;</p>
                          <div className="flex mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              id="faq" 
              className="py-20 md:py-32 bg-muted"
            >
              <div className="container px-4 md:px-6">
                <motion.h2 
                  variants={fadeIn}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
                >
                  Frequently Asked Questions
                </motion.h2>
                <motion.div
                  variants={fadeIn}
                >
                  <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is an Aggregator Business Model?</AccordionTrigger>
                      <AccordionContent>
                        An Aggregator Business Model is a strategy where a company collects information about multiple service providers in a specific niche and presents it to customers in a unified platform. This model creates value by reducing search costs for customers and providing a streamlined experience.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How can this ebook help me grow my business?</AccordionTrigger>
                      <AccordionContent>
                        This ebook provides a comprehensive guide on implementing and scaling an Aggregator Business Model. It covers strategies for data collection, API integration, user experience design, and monetization. By following these strategies, you can potentially achieve rapid growth similar to successful aggregator businesses like Airbnb, Uber, and Amazon.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is this ebook suitable for beginners?</AccordionTrigger>
                      <AccordionContent>
                        Yes, this ebook is designed for both beginners and experienced entrepreneurs. It starts with the basics of the Aggregator Business Model and progressively covers more advanced topics. Whether you&apos;re just starting out or looking to scale your existing aggregator business, you&apos;ll find valuable insights and strategies.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>How long does it take to implement an Aggregator Business Model?</AccordionTrigger>
                      <AccordionContent>
                        The implementation time can vary depending on the complexity of your project and your team&apos;s expertise. However, with the strategies outlined in this ebook, you can potentially launch a basic aggregator platform within 3-6 months. Scaling and refining your model may take additional time, but the ebook provides guidance for each stage of development.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Can I apply the Aggregator Model to any industry?</AccordionTrigger>
                      <AccordionContent>
                        While the Aggregator Business Model has proven successful in many industries, its applicability can vary. The ebook covers a wide range of sectors where this model has thrived, including transportation, hospitality, e-commerce, and more. It also provides guidelines to help you assess whether your chosen industry is suitable for an aggregator approach.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger>Do I need technical skills to implement the strategies in this ebook?</AccordionTrigger>
                      <AccordionContent>
                        While some technical knowledge is beneficial, it&apos;s not a prerequisite. The ebook is designed to be accessible to both technical and non-technical readers. It provides high-level strategies as well as technical insights, allowing you to understand the concepts even if you plan to work with a development team. For those with technical skills, the ebook includes code examples and architectural guidance.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="py-20 md:py-32 bg-primary text-primary-foreground"
            >
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <motion.h2 
                    variants={fadeIn}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                  >
                    Are you Ready to Master Aggregator Construct Business Model Today?
                  </motion.h2>
                  <motion.p 
                    variants={fadeIn}
                    transition={{ delay: 0.1 }}
                    className="mx-auto max-w-[700px] md:text-xl"
                  >
                    Get your copy of Aggregator Construct Mastery today and start building powerful, profitable aggregators. Join our community, receive mentorship, and transform your business idea into a thriving reality.
                  </motion.p>

                  <motion.div
                    variants={fadeIn}
                    transition={{ delay: 0.2 }}
                  >
                    <button  className="bg-[#F26A21] text-white px-6 py-4 rounded-lg font-semibold">
                      <Link href="https://selar.co/r6b69d ">
                        Get the Ebook Now
                      </Link>
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.section>
        </main>
    </div>
  )
}

export default Hero