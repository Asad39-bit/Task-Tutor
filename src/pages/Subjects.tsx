import { Helmet } from 'react-helmet-async';
import { SubjectsSection } from '../components/sections/SubjectsSection';

export function Subjects() {
  return (
    <>
      <Helmet>
        <title>Subjects & Topics | Task Tutors Academy</title>
        <meta name="description" content="Master Mathematics and Science with our specialized online tutoring. We cover Algebra, Physics, Chemistry, Biology, Calculus, and more." />
      </Helmet>
      
      <div className="bg-slate-900 py-20 text-white text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Core Subjects</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">Deep, focused mastery of STEM fields to unlock top academic performance.</p>
      </div>

      <SubjectsSection />
    </>
  );
}
