import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Users, GraduationCap, CheckCircle, Clock } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-slate-50 pt-24 pb-6 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Main Hero Bento */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-20 -mt-20 blur-3xl"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full mb-6 uppercase tracking-widest relative z-10">
                Premium Online Academy
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 tracking-tight mb-6 leading-tight relative z-10"
            >
              Unlock Your Potential with <br className="hidden md:block"/>
              <span className="text-blue-600">Expert Online Tutoring</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl leading-relaxed relative z-10"
            >
              Comprehensive Mathematics and Science Tutoring for Students Worldwide. Get personalized attention and achieve your academic goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10"
            >
              <Button size="lg" asChild className="w-full sm:w-auto px-8 py-6 h-auto text-base bg-blue-900 hover:bg-blue-800 text-white rounded-xl shadow-xl shadow-blue-900/20">
                <Link to="/free-trial">Book Free Trial Class</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto px-8 py-6 h-auto text-base border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50">
                <a href="https://wa.me/923074237154" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </Button>
            </motion.div>
          </div>

          {/* Stats Bento */}
          <div className="lg:col-span-4 bg-blue-900 rounded-3xl p-8 text-white flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-1">2000+</div>
                <div className="text-xs uppercase opacity-70 tracking-tighter">Students</div>
              </motion.div>
              <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-1">100+</div>
                <div className="text-xs uppercase opacity-70 tracking-tighter">Expert Tutors</div>
              </motion.div>
              <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-1">95%</div>
                <div className="text-xs uppercase opacity-70 tracking-tighter">Success Rate</div>
              </motion.div>
              <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.4, delay: 0.7 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-1">5+</div>
                <div className="text-xs uppercase opacity-70 tracking-tighter">Years Experience</div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 p-5 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10"
            >
              <p className="text-sm font-medium italic">"The best decision we made for our daughter's GCSEs. Truly premium."</p>
              <p className="text-xs mt-2 opacity-80 text-amber-400">- Sarah J., UK</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
