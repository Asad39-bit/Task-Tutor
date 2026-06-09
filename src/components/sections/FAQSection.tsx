import { Accordion } from '../ui/Accordion';

const faqData = [
  { question: 'How do online classes work?', answer: 'Our online classes are conducted live via secure video conferencing. Tutors use interactive whiteboards and screen sharing to explain concepts, making the experience just as effective as in-person tutoring.' },
  { question: 'Do you offer free trial classes?', answer: 'Yes! We offer a free, no-obligation trial class to help you experience our teaching style and ensure we are the right fit for your childs learning needs.' },
  { question: 'Which curriculum do you teach?', answer: 'We specialize in Cambridge, Edexcel, AQA, and ACA boards, covering programs from KS1 through A-Levels and the 11 Plus exams.' },
  { question: 'What are your class timings?', answer: 'We offer highly flexible scheduling to accommodate students in different time zones (UK, USA, Middle East, Australia). You can choose times that work best for your family.' },
  { question: 'How are tutors selected?', answer: 'All our tutors go through a rigorous selection process, including background checks, subject matter testing, and teaching evaluations. We only hire top-tier educators with proven experience.' },
];

export function FAQSection() {
  return (
    <section className="pb-24 pt-6 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">Find answers to common questions about our online tutoring services.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-3xl border border-slate-200">
          <Accordion items={faqData} />
        </div>
      </div>
    </section>
  );
}
