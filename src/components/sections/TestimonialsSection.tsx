import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const testimonials = [
  { name: 'Sarah M.', country: 'UK', rating: 5, review: 'The A-Level math tutor was exceptional. My daughter went from a C to an A* in just 6 months. The personalized approach made all the difference.' },
  { name: 'Ahmed K.', country: 'UAE', rating: 5, review: 'Task Tutors Academy helped me ace my IGCSE Physics. The concepts were explained so clearly, I actually started enjoying the subject!' },
  { name: 'Emily R.', country: 'Canada', rating: 5, review: 'Finding a reliable online tutor was hard until we found this academy. Flexible timings and excellent teachers.' },
  { name: 'David L.', country: 'Australia', rating: 5, review: 'My son was struggling with KS3 Science. The interactive classes kept him engaged and his grades have improved significantly.' },
  { name: 'Ayesha S.', country: 'Saudi Arabia', rating: 5, review: 'The weekly tests really helped build my exam confidence. Highly recommend their GCSE programs.' },
  { name: 'John P.', country: 'USA', rating: 5, review: 'Great platform, professional tutors, and visible results. Worth every penny for my childs education.' },
];

export function TestimonialsSection() {
  return (
    <section className="py-6 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 tracking-tight">What Parents & Students Say</h2>
          <p className="text-lg text-slate-600">Join thousands of satisfied families worldwide.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="flex-1 rounded-3xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-md transition-all !p-2">
                <CardContent className="p-8">
                  <div className="flex text-amber-500 mb-6">
                    {[...Array(test.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-8 italic leading-relaxed">"{test.review}"</p>
                  <div className="mt-auto pt-4 border-t border-slate-100 p-2">
                    <p className="font-bold text-blue-950">{test.name}</p>
                    <p className="text-sm text-slate-500">{test.country}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
