import { Helmet } from 'react-helmet-async';
import { ContactSection } from '../components/sections/ContactSection';

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Task Tutors Academy</title>
        <meta name="description" content="Contact Task Tutors Academy via WhatsApp or email. We are available to answer your questions and set up your trial class." />
      </Helmet>
      
      <div className="bg-slate-900 py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">We are always ready to help you unlock your child's potential.</p>
      </div>

      <ContactSection />
    </>
  );
}
