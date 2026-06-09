import { Helmet } from 'react-helmet-async';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ResultsSection } from '../components/sections/ResultsSection';

export function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Student Success Stories & Reviews | Task Tutors Academy</title>
        <meta name="description" content="Read reviews from parents and students across the UK, USA, UAE, and beyond. See our proven results in IGCSE, GCSE, and A-Level tutoring." />
      </Helmet>
      
      <div className="bg-slate-900 py-20 text-white text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Success</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">Real stories, real grades, real achievements from our global student base.</p>
      </div>

      <ResultsSection />
      <TestimonialsSection />
    </>
  );
}
