import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'


const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden' >
      {/* Theme toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* NavBar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero  Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Set Section */}
        <SkillsSection />

        {/* Projects Set Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection/>
      </main>

      

    </div>
  )
}

export default Home