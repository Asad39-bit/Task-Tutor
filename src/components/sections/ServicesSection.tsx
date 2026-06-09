import { motion } from 'motion/react';
import { Lightbulb, Target, BookOpen, PenTool, Users, UsersRound, Compass, Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/Card';

const services = [
  { title: 'Clear Concepts Step by Step', icon: Lightbulb, desc: 'We break down complex topics into easy-to-understand chunks.' },
  { title: 'Problem Solving Made Easy', icon: Target, desc: 'Master techniques to solve difficult problems with confidence.' },
  { title: 'Homework & Assignment Help', icon: BookOpen, desc: 'Get assistance with school tasks to ensure top grades.' },
  { title: 'Weekly Tests & Exam Prep', icon: PenTool, desc: 'Regular assessments to track progress and readiness.' },
  { title: 'One-to-One Classes', icon: Users, desc: 'Personalized attention focused entirely on your childs needs.' },
  { title: 'Small Group Classes', icon: UsersRound, desc: 'Interactive sessions with a maximum of 4-5 students.' },
  { title: 'Personalized Learning Plans', icon: Compass, desc: 'Custom strategies tailored to individual learning styles.' },
  { title: 'Exam Strategies & Revision', icon: Award, desc: 'Proven techniques to maximize scores in final exams.' },
];

export function ServicesSection() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 tracking-tight">Our Tutoring Services</h2>
          <p className="text-lg text-slate-600">Comprehensive support designed to help every student achieve their highest potential.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: '-50px' }}
              className="flex"
            >
              <Card className="flex-1 border-slate-200 border rounded-3xl shadow-sm hover:shadow-md transition-shadow bg-white !p-2">
                <CardHeader className="p-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mb-4 border border-blue-100">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg mb-2 text-blue-950">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed">{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
