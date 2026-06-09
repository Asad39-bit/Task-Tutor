import { Link } from 'react-router-dom';
import { GraduationCap, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-300 pt-6 pb-6">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="bg-blue-900 rounded-3xl p-8 md:p-12 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-950 rounded-lg flex items-center justify-center border border-blue-800">
                  <div className="w-5 h-5 border-2 border-amber-400 rotate-45"></div>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">TASK<span className="text-amber-500">TUTORS</span></span>
              </Link>
              <p className="text-sm text-blue-200 mt-4 leading-relaxed">
                Unlock Your Potential with Expert Online Tutoring. Comprehensive Mathematics and Science Tutoring for Students Worldwide.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-10 h-10 rounded-xl bg-blue-800 flex items-center justify-center hover:bg-amber-500 transition-colors text-white"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-xl bg-blue-800 flex items-center justify-center hover:bg-amber-500 transition-colors text-white"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-xl bg-blue-800 flex items-center justify-center hover:bg-amber-500 transition-colors text-white"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-xl bg-blue-800 flex items-center justify-center hover:bg-amber-500 transition-colors text-white"><Linkedin className="w-4 h-4" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm text-blue-200 hover:text-amber-400 transition-colors">About Us</Link></li>
                <li><Link to="/programs" className="text-sm text-blue-200 hover:text-amber-400 transition-colors">Programs</Link></li>
                <li><Link to="/subjects" className="text-sm text-blue-200 hover:text-amber-400 transition-colors">Subjects</Link></li>
                <li><Link to="/testimonials" className="text-sm text-blue-200 hover:text-amber-400 transition-colors">Testimonials</Link></li>
                <li><Link to="/faq" className="text-sm text-blue-200 hover:text-amber-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Curriculums */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Curriculums</h4>
              <ul className="space-y-3">
                <li><Link to="/programs" className="text-sm text-blue-200 hover:text-amber-400 transition-colors">Cambridge</Link></li>
                <li><Link to="/programs" className="text-sm text-blue-200 hover:text-amber-400 transition-colors">Edexcel</Link></li>
                <li><Link to="/programs" className="text-sm text-blue-200 hover:text-amber-400 transition-colors">AQA</Link></li>
                <li><Link to="/programs" className="text-sm text-blue-200 hover:text-amber-400 transition-colors">ACA</Link></li>
                <li><Link to="/programs" className="text-sm text-blue-200 hover:text-amber-400 transition-colors">11 Plus</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-sm text-blue-200 leading-relaxed">Serving UK, USA, Canada, Australia, UAE & Worldwide</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-sm text-blue-200">+92 307 4237154</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-sm text-blue-200">info@tasktutorsacademy.com</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-blue-300">
              &copy; {new Date().getFullYear()} Task Tutors Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-blue-300">
              <Link to="#" className="hover:text-amber-400">Privacy Policy</Link>
              <Link to="#" className="hover:text-amber-400">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
