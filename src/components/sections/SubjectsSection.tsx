import { motion } from 'motion/react';
import { Calculator, Dna, FlaskConical, Stethoscope, Binary, AreaChart, Box, Pi } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

const mathTopics = [
  { name: 'Arithmetic', icon: Calculator },
  { name: 'Algebra', icon: Binary },
  { name: 'Geometry', icon: Box },
  { name: 'Trigonometry', icon: Pi },
  { name: 'Statistics', icon: AreaChart },
  { name: 'Probability', icon: Calculator },
  { name: 'Calculus', icon: Calculator },
  { name: 'Exam Prep', icon: Calculator },
];

const scienceTopics = [
  { name: 'Physics', icon: Dna },
  { name: 'Chemistry', icon: FlaskConical },
  { name: 'Biology', icon: Stethoscope },
];

export function SubjectsSection() {
  return (
    <section className="py-6 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="bg-blue-900 rounded-3xl p-8 md:p-12 border border-blue-800 text-slate-100">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Core Subjects</h2>
            <p className="text-lg text-blue-200">Deep specialization in STEM subjects to build strong analytical skills.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mathematics */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white border-b border-blue-800/50 pb-4">
                <span className="p-2 bg-amber-500/20 text-amber-400 rounded-lg"><Calculator className="w-6 h-6" /></span>
                Mathematics
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {mathTopics.map((topic, i) => (
                  <motion.div
                    key={topic.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex"
                  >
                    <Card className="flex-1 bg-blue-950/40 border-blue-800/50 hover:bg-blue-800/50 hover:border-amber-400/50 transition-all rounded-2xl shadow-none">
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-2 h-full">
                        <topic.icon className="w-6 h-6 text-amber-400 mb-1" />
                        <span className="text-sm font-medium text-blue-100">{topic.name}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Science */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white border-b border-blue-800/50 pb-4">
                <span className="p-2 bg-amber-500/20 text-amber-400 rounded-lg"><FlaskConical className="w-6 h-6" /></span>
                Science
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {scienceTopics.map((topic, i) => (
                  <motion.div
                    key={topic.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex"
                  >
                    <Card className="flex-1 bg-blue-950/40 border-blue-800/50 hover:bg-blue-800/50 hover:border-amber-400/50 transition-all rounded-2xl shadow-none">
                      <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-3 h-full">
                        <topic.icon className="w-8 h-8 text-amber-400 mb-2" />
                        <span className="text-lg font-medium text-blue-100">{topic.name}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
