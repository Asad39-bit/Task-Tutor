import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Users, Target, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

export function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Task Tutors Academy</title>
        <meta name="description" content="Learn more about Task Tutors Academy, our mission, expert educators, and how we empower students worldwide to achieve academic excellence in Math and Science." />
      </Helmet>
      
      <div className="bg-slate-900 py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Task Tutors Academy</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">Empowering learners across the globe to achieve academic excellence.</p>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 mb-8 leading-relaxed">
              At Task Tutors Academy, we believe that every student has the potential to excel given the right guidance, environment, and tools. We are a premier online tutoring platform specializing in Mathematics and Sciences.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 my-12">
               <Card className="bg-slate-50 border-none shadow-sm">
                 <CardContent className="p-6 text-center">
                   <div className="mx-auto bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                     <Target className="w-6 h-6" />
                   </div>
                   <h3 className="font-bold mb-2">Our Mission</h3>
                   <p className="text-sm text-slate-600">To provide accessible, high-quality education that builds confidence and delivers measurable results.</p>
                 </CardContent>
               </Card>
               <Card className="bg-slate-50 border-none shadow-sm">
                 <CardContent className="p-6 text-center">
                   <div className="mx-auto bg-emerald-100 text-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                     <Users className="w-6 h-6" />
                   </div>
                   <h3 className="font-bold mb-2">Expert Tutors</h3>
                   <p className="text-sm text-slate-600">Our educators are rigorously selected, possessing years of experience with international curriculums.</p>
                 </CardContent>
               </Card>
               <Card className="bg-slate-50 border-none shadow-sm">
                 <CardContent className="p-6 text-center">
                   <div className="mx-auto bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                     <BookOpen className="w-6 h-6" />
                   </div>
                   <h3 className="font-bold mb-2">Global Reach</h3>
                   <p className="text-sm text-slate-600">We proudly serve students from the UK, USA, Middle East, Australia, and beyond.</p>
                 </CardContent>
               </Card>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Our Teaching Approach</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We utilize state-of-the-art interactive digital whiteboards and video conferencing software to create an immersive one-to-one learning environment. We don't just lecture; we ensure concepts are understood, applied, and tested.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
