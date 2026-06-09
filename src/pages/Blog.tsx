import { Helmet } from 'react-helmet-async';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const categories = ['GCSE Tips', 'IGCSE Preparation', 'A-Level Success', 'Mathematics Learning', 'Study Skills'];

const blogPosts = [
  { title: 'Top 5 Revision Strategies for A-Level Math', category: 'A-Level Success', date: 'Oct 15, 2023', excerpt: 'Discover proven techniques to maximize your retention and perform perfectly under exam pressure.' },
  { title: 'Understanding IGCSE Grading System', category: 'IGCSE Preparation', date: 'Sep 28, 2023', excerpt: 'A comprehensive guide for parents to understand the new 9-1 grading system.' },
  { title: 'How to Overcome Math Anxiety', category: 'Mathematics Learning', date: 'Sep 10, 2023', excerpt: 'Practical steps to help students fearlessly approach complex mathematical problems.' },
  { title: 'Essential 11 Plus Preparation Tips', category: 'Study Skills', date: 'Aug 22, 2023', excerpt: 'Start early with these foundational habits to secure top grammar school placements.' },
  { title: 'Science Experiments You Can Do At Home', category: 'GCSE Tips', date: 'Aug 05, 2023', excerpt: 'Bring chemistry and physics to life with safe, household experiments.' },
  { title: 'Balancing Homework and Extracurriculars', category: 'Study Skills', date: 'Jul 18, 2023', excerpt: 'Time management strategies for ambitious senior school students.' }
];

export function Blog() {
  return (
    <>
      <Helmet>
        <title>Educational Blog | Task Tutors Academy</title>
        <meta name="description" content="Read our latest articles on GCSE tips, IGCSE preparation, A-Level success, and general study skills to help your child excel." />
      </Helmet>
      
      <div className="bg-slate-900 py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Educational Insights</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">Tips, guides, and strategies for academic success.</p>
      </div>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            <span className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium cursor-pointer">All Posts</span>
            {categories.map(cat => (
              <span key={cat} className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-colors text-sm font-medium cursor-pointer">
                {cat}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-all cursor-pointer group">
                  <div className="h-48 bg-slate-200 rounded-t-xl w-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                       <span className="text-blue-200 font-bold text-4xl opacity-50">TTA Blog</span>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">{post.category}</span>
                      <span className="text-xs text-slate-400">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl mb-3 leading-tight group-hover:text-blue-600 transition-colors">{post.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-3 mb-6 text-slate-600">{post.excerpt}</CardDescription>
                    
                    <div className="mt-auto flex items-center text-sm font-semibold text-blue-600 pt-4 border-t border-slate-100">
                      Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
