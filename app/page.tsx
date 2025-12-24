'use client'

import { Analytics } from "@vercel/analytics/react"
import { About, Contact, Experience, Hero, Navbar, Tech, Works, Education, Blog, StarsCanvas, Certifications } from "./components";

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
        <Certifications />
        <Blog />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    <Analytics />
    </>
  );
}
