import { motion } from 'motion/react';
import { BookMarked, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';

const programs = [
  { title: 'KS1', desc: 'Ages 5-7. Foundational learning in Math and English.' },
  { title: 'KS2', desc: 'Ages 7-11. Building confidence and core subject skills.' },
  { title: 'KS3', desc: 'Ages 11-14. Preparing for senior school challenges.' },
  { title: 'Grades 1-9', desc: 'Comprehensive support across primary and middle school.' },
  { title: 'GCSE', desc: 'Ages 14-16. Targeted exam preparation and mastery.' },
  { title: 'IGCSE', desc: 'International standard curriculum preparation.' },
  { title: 'A-Level', desc: 'Ages 16-18. Advanced subject specialization.' },
  { title: '11 Plus', desc: 'Grammar school entrance exam preparation.' },
];

export function ProgramsSection() {
  return (
    <section className="pb-12 pt-6 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 tracking-tight">Academic Programs</h2>
            <p className="text-lg text-slate-600">Tailored educational support for every stage of your child's academic journey.</p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50">
            <Link to="/programs">View All Programs <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="flex-1 flex flex-col hover:border-amber-300 transition-colors border border-amber-200 shadow-sm bg-amber-50/50 rounded-3xl overflow-hidden !p-2">
                <CardHeader className="p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center text-white">
                      <BookMarked className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-blue-950 m-0">{program.title}</CardTitle>
                  </div>
                  <CardDescription className="text-amber-900/70 leading-relaxed min-h-[40px] text-sm">{program.desc}</CardDescription>
                </CardHeader>
                <div className="flex-1"></div>
                <CardFooter className="p-5 pt-0">
                  <Button variant="ghost" className="text-amber-600 hover:text-amber-700 hover:bg-amber-100/50 p-2 h-auto font-semibold group rounded-xl w-full justify-between">
                    Learn More 
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden flex justify-center">
          <Button variant="outline" asChild className="rounded-xl">
            <Link to="/programs">View All Programs <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
