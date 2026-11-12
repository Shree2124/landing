import { ThemeProvider } from './theme/ThemeProvider'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { FeaturesSection } from './components/sections/FeaturesSection'
import { DashboardPreviewSection } from './components/sections/DashboardPreviewSection'
import { WorkflowSection } from './components/sections/WorkflowSection'
import { RolesSection } from './components/sections/RolesSection'
import { PricingSection } from './components/sections/PricingSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { CTASection } from './components/sections/CTASection'
import { Footer } from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <DashboardPreviewSection />
          <WorkflowSection />
          <RolesSection />
          <TestimonialsSection />
          <PricingSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
