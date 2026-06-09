import { Helmet } from 'react-helmet-async';
import { ProgramsSection } from '../components/sections/ProgramsSection';
import { CurriculumSection } from '../components/sections/CurriculumSection';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export function Programs() {
  return (
    <>
      <Helmet>
        <title>Academic Programs | Task Tutors Academy</title>
        <meta name="description" content="Explore our academic programs from KS1 to A-Levels, covering Cambridge, Edexcel, and AQA curriculums. Online tutoring tailored to your child's needs." />
      </Helmet>
      
      <div className="bg-slate-900 py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">Comprehensive curriculum support for every educational stage.</p>
      </div>

      <ProgramsSection />
      <CurriculumSection />
      
      <section className="py-20 bg-blue-600 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Not sure which program to choose?</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">Book a free consultation and let our experts help you map out the perfect learning path for your child.</p>
        <Button size="lg" variant="secondary" asChild className="font-semibold text-blue-700 w-full sm:w-auto">
          <Link to="/free-trial">Get Free Expert Advice</Link>
        </Button>
      </section>
    </>
  );
}
