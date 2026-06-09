import { Helmet } from 'react-helmet-async';
import { FAQSection } from '../components/sections/FAQSection';

export function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ | Task Tutors Academy</title>
        <meta name="description" content="Frequently asked questions about our online tutoring services, timings, pricing, curriculum, and free trial classes." />
      </Helmet>
      
      <div className="bg-slate-900 py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Help & FAQ</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">Everything you need to know about working with us.</p>
      </div>

      <FAQSection />
    </>
  );
}
