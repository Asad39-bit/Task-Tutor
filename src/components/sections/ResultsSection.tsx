import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const results = [
  { grade: 'A* in A-Level Math', desc: 'Improved from a C grade in 5 months', name: 'Oliver', icon: TrendingUp },
  { grade: '9 in GCSE Chemistry', desc: 'Achieved top marks with our intensive prep', name: 'Zoya', icon: ArrowUpRight },
  { grade: '11+ Exam Success', desc: 'Secured placement in top grammar school', name: 'William', icon: Award },
];

export function ResultsSection() {
  return (
    <section className="py-6 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6 tracking-tight">Proven Results</h2>
            <p className="text-lg text-slate-600 mb-8">Our targeted approach doesn't just build knowledge; it delivers measurable academic success and top grades.</p>
            <div className="hidden md:block w-24 h-2 bg-amber-400 rounded-full"></div>
          </div>

          <div className="md:w-2/3 grid sm:grid-cols-3 gap-4">
            {results.map((res, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card className="flex-1 rounded-3xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-md transition-all !p-2">
                  <CardContent className="p-6">
                    <div className="p-3 bg-blue-50 text-blue-900 rounded-2xl inline-flex mb-4">
                      <res.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl text-blue-950 mb-2">{res.grade}</h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{res.desc}</p>
                    <p className="text-amber-600 font-medium text-sm mt-auto">— {res.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
