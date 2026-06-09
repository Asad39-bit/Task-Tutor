import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/Card';

const curriculums = [
  { name: 'Cambridge', color: 'from-blue-500 to-blue-700' },
  { name: 'Edexcel', color: 'from-emerald-500 to-emerald-700' },
  { name: 'AQA', color: 'from-purple-500 to-purple-700' },
  { name: 'ACA', color: 'from-amber-500 to-amber-700' },
];

export function CurriculumSection() {
  return (
    <section className="py-6 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-4 tracking-tight">Supported Curriculums</h2>
          <p className="text-slate-600">Expertise across major international educational boards.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {curriculums.map((curr, index) => (
            <motion.div
              key={curr.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="flex-1 rounded-3xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 transition-all overflow-hidden !p-0">
                <div className={`h-2 bg-gradient-to-r ${curr.color}`}></div>
                <CardContent className="p-6 md:p-8 flex items-center justify-center min-h-[120px]">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-950 tracking-tight">{curr.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
