'use client'

import { Analytics } from "@vercel/analytics/react"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Education, Blog, StarsCanvas } from "../components";

export default function Home() {
  return (
    <>
      <div className='relative z-0 bg-primary'>
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Education />
        <Blog />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    <Analytics />
    </>
  );
}
