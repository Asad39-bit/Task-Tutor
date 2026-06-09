import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { StickyWidgets } from './StickyWidgets';
import { ExitIntentPopup } from './ExitIntentPopup';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900 bg-slate-50">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
      <StickyWidgets />
      <ExitIntentPopup />
    </div>
  );
}
