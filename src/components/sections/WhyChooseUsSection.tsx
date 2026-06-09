import { motion } from 'motion/react';
import { Star, Video, MonitorPlay, TrendingUp, Heart, Trophy, Calendar, CreditCard } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

const features = [
  { title: 'Experienced Tutors', icon: Star, color: 'text-amber-500', bg: 'bg-amber-100' },
  { title: 'Interactive Online Classes', icon: Video, color: 'text-blue-500', bg: 'bg-blue-100' },
  { title: 'Personalized Attention', icon: Heart, color: 'text-rose-500', bg: 'bg-rose-100' },
  { title: 'Progress Tracking', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-100' },
  { title: 'Confidence Building', icon: Trophy, color: 'text-purple-500', bg: 'bg-purple-100' },
  { title: 'Better Grades', icon: Star, color: 'text-amber-500', bg: 'bg-amber-100' },
  { title: 'Flexible Scheduling', icon: Calendar, color: 'text-indigo-500', bg: 'bg-indigo-100' },
  { title: 'Affordable Pricing', icon: CreditCard, color: 'text-teal-500', bg: 'bg-teal-100' },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-6 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 tracking-tight">Why Choose Us?</h2>
          <p className="text-lg text-slate-600">We combine expert educators with modern technology to deliver exceptional learning experiences.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="flex-1 rounded-3xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-md transition-all !p-2">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className={`p-4 rounded-2xl ${feature.bg} ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-blue-950 leading-tight">{feature.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
