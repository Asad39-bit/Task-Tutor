import { Helmet } from 'react-helmet-async';
import { HeroSection } from '../components/sections/HeroSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProgramsSection } from '../components/sections/ProgramsSection';
import { CurriculumSection } from '../components/sections/CurriculumSection';
import { SubjectsSection } from '../components/sections/SubjectsSection';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection';
import { CountriesSection } from '../components/sections/CountriesSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ResultsSection } from '../components/sections/ResultsSection';
import { FAQSection } from '../components/sections/FAQSection';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Task Tutors Academy | Expert Online Math & Science Tutoring</title>
        <meta name="description" content="Unlock your potential with Task Tutors Academy. We offer expert online tutoring in Mathematics and Science for students worldwide (UK, USA, UAE, and more). Book a free trial today!" />
        <meta name="keywords" content="online maths tutor, gcse maths tutor, igcse maths tutor, a level maths tutor, online tutoring uk, online tutoring uae" />
      </Helmet>
      
      <HeroSection />
      <ServicesSection />
      <ProgramsSection />
      <CurriculumSection />
      <SubjectsSection />
      <WhyChooseUsSection />
      <CountriesSection />
      <ResultsSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
