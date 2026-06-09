import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

const countries = [
  'UK', 'USA', 'Canada', 'Australia', 'UAE', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Pakistan'
];

export function CountriesSection() {
  return (
    <section className="py-6 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="bg-blue-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>

          <div className="text-white md:w-1/3 text-center md:text-left relative z-10">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-amber-500/20 mb-6 border border-amber-500/30">
              <Globe className="w-8 h-8 text-amber-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Serving Students Worldwide</h2>
            <p className="text-blue-200 text-lg">Quality education has no borders. Join our truly global classroom.</p>
          </div>

          <div className="md:w-2/3 relative z-10">
            <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">
              {countries.map((country, i) => (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 text-white font-medium transition-colors"
                >
                  {country}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
