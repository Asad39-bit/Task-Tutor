import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Button } from '@/components/ui/Button';
import { Calendar, MonitorPlay, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function FreeTrial() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Book a Free Trial | Task Tutors Academy</title>
        <meta name="description" content="Sign up for a free online trial class in Mathematics or Science. Experience our top-tier tutoring before committing to a full program." />
      </Helmet>
      
      <section className="bg-slate-900 py-20 text-white border-b border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Free Trial</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">Experience our interactive teaching environment completely free.</p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 -z-10 hidden lg:block rounded-l-[100px] opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What to expect from your trial</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-xl h-fit">
                    <MonitorPlay className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Live 1-on-1 Session</h3>
                    <p className="text-slate-600 leading-relaxed">A full 45-minute interactive class with an expert, utilizing our digital whiteboard.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl h-fit">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Skill Assessment</h3>
                    <p className="text-slate-600 leading-relaxed">The tutor will quickly identify strengths and areas for improvement.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-purple-100 text-purple-600 rounded-xl h-fit">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Custom Learning Plan</h3>
                    <p className="text-slate-600 leading-relaxed">Receive a proposed roadmap for achieving top grades in the upcoming exams.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-slate-200 shadow-2xl shadow-slate-200/50">
                <CardContent className="p-8">
                  {isSuccess ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Trial Booked Successfully!</h3>
                      <p className="text-slate-600 mb-8 max-w-sm mx-auto">We have received your requested date. A coordinator will contact you shortly via WhatsApp to confirm the exact time.</p>
                      <Button onClick={() => setIsSuccess(false)} variant="outline">Book Another Class</Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="sname">Student Name</Label>
                          <Input id="sname" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pname">Parent Name</Label>
                          <Input id="pname" required />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone/WhatsApp</Label>
                          <Input id="phone" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Input id="country" placeholder="e.g. UK, Saudi Arabia" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="program">Program</Label>
                          <select id="program" className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors" required>
                            <option value="">Select Program...</option>
                            <option value="KS1">KS1</option>
                            <option value="KS2">KS2</option>
                            <option value="KS3">KS3</option>
                            <option value="GCSE">GCSE</option>
                            <option value="IGCSE">IGCSE</option>
                            <option value="A-Level">A-Level</option>
                            <option value="11 Plus">11 Plus</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <select id="subject" className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors" required>
                            <option value="">Select Subject...</option>
                            <option value="Math">Mathematics</option>
                            <option value="Physics">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Biology">Biology</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Preferred Time</Label>
                          <Input id="time" type="text" placeholder="e.g. Weekdays 5PM" required />
                        </div>
                      </div>

                      <Button type="submit" className="w-full h-12 text-base shadow-lg shadow-blue-600/20" disabled={isSubmitting}>
                        {isSubmitting ? 'Processing...' : 'Confirm Booking Request'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
