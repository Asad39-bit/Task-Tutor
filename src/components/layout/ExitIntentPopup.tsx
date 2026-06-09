import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Show when cursor leaves the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-lg relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="bg-blue-600 p-8 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 to-blue-700"></div>
              <Gift className="w-12 h-12 text-amber-400 mx-auto mb-4 relative z-10" />
              <h2 className="text-2xl font-bold mb-2 relative z-10">Wait! Don't leave empty-handed.</h2>
              <p className="text-blue-100 relative z-10">Get a Free Mathematics Assessment Strategy Guide + 10% off your first month!</p>
            </div>
            
            <div className="p-8">
              <form onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }} className="space-y-4">
                <Input type="email" placeholder="Enter your email address" required className="h-12 text-base bg-slate-50" />
                <Button type="submit" className="w-full h-12 text-base bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold shadow-lg shadow-amber-500/20">
                  Claim My Free Guide
                </Button>
                <p className="text-xs text-center text-slate-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
