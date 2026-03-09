/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Waves, 
  Bike, 
  Timer, 
  ShieldCheck, 
  Maximize2, 
  Mail, 
  MapPin,
  ChevronRight
} from 'lucide-react';

const Logo = ({ className = "h-16" }: { className?: string }) => (
  <div className={`flex items-center ${className}`}>
    <img 
      src="https://drive.google.com/thumbnail?id=1EjymYuFQW7YTp-rOK1cHFCNwgOedWV-t&sz=w500" 
      alt="Easy Undress Logo" 
      className="h-full w-auto object-contain"
      referrerPolicy="no-referrer"
    />
  </div>
);

const CookieBanner = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
          <ShieldCheck className="text-emerald-600" size={24} />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-1">Cookie Policy</h3>
          <p className="text-sm text-gray-600 mb-4">
            We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
          </p>
          <div className="flex gap-3">
            <button 
              onClick={acceptCookies}
              className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-emerald-700 transition-all"
            >
              Accept
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-all"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Logo />
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#problem" className="hover:text-emerald-600 transition-colors">The Problem</a>
        <a href="#how-it-works" className="hover:text-emerald-600 transition-colors">How it Works</a>
        <a href="#features" className="hover:text-emerald-600 transition-colors">Features</a>
        <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
      </div>
      <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
        Order Now
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
          <Waves size={14} />
          Simplify Your Leisure
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
          Change Anywhere, <br />
          <span className="text-emerald-600">Stress-Free.</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
          The ultimate companion for the beach, lake, and outdoor training. 
          Lie back, soak up the sun, and undress yourself without any problem—even in public.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2 group">
            Get Yours Today
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-100 bg-gray-100">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/TfsoypgaqGs" 
            title="EasyUndress Product Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[240px] hidden md:block">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
              <ShieldCheck className="text-emerald-600" size={18} />
            </div>
            <span className="font-bold text-gray-900">Privacy First</span>
          </div>
          <p className="text-sm text-gray-500">Designed for seamless changing in public spaces.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section id="problem" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">The Problem We Solve</h2>
        <p className="text-lg text-gray-600">
          We've all been there. You finish a great run or a swim, and there's no changing room in sight. 
          Trying to change with a towel is awkward and risky.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Waves className="text-blue-500" />,
            title: "No Changing Rooms",
            desc: "Beaches and lakes often lack facilities, making it hard to get out of wet clothes."
          },
          {
            icon: <Bike className="text-orange-500" />,
            title: "Post-Training Sweat",
            desc: "After outdoor training, you need to change quickly to stay comfortable and dry."
          },
          {
            icon: <Maximize2 className="text-emerald-500" />,
            title: "Limited Bag Space",
            desc: "Why carry a towel, a mat, and a changing robe when you can have one product?"
          }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-emerald-900 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">How It Works</h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Unfold & Wear", desc: "Simply unfold the EasyUndress and wrap it around your waist or chest." },
              { step: "02", title: "Secure Fit", desc: "Use the simple fastening design to ensure total privacy while you move." },
              { step: "03", title: "Change Comfortably", desc: "Remove your wet or sweaty clothes underneath the protective layer." },
              { step: "04", title: "Ready to Go", desc: "Slip into your fresh clothes and you're done! It even doubles as a towel." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-2xl font-mono font-bold text-emerald-400 opacity-50">{item.step}</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-emerald-100/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://drive.google.com/thumbnail?id=14jHMJ6qI8S8ndA19A7fJ6jm2zwJb8iFu&sz=w800" alt="Step 1" className="rounded-2xl shadow-lg w-full aspect-square object-cover" referrerPolicy="no-referrer" />
            <img src="https://drive.google.com/thumbnail?id=1p5fJAXPPKYs56H4-8ENdIsWC0LwuIm3A&sz=w800" alt="Step 2" className="rounded-2xl shadow-lg mt-8 w-full aspect-square object-cover" referrerPolicy="no-referrer" />
            <img src="https://drive.google.com/thumbnail?id=100eG_gMuy0MYyJPTiebqzkoBNTHMRELR&sz=w800" alt="Step 3" className="rounded-2xl shadow-lg w-full aspect-square object-cover" referrerPolicy="no-referrer" />
            <img src="https://drive.google.com/thumbnail?id=1RmOvUjt9uR4uvANqRzaZDb9rEfH6G6i4&sz=w800" alt="Step 4" className="rounded-2xl shadow-lg mt-8 w-full aspect-square object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose EasyUndress?</h2>
        <p className="text-lg text-gray-600">One product, endless possibilities.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Timer />, title: "Quick Dry", desc: "High-quality material that wipes water and sweat instantly." },
          { icon: <Maximize2 />, title: "Space Saving", desc: "Folds down small, leaving plenty of room in your bag." },
          { icon: <Waves />, title: "Versatile", desc: "Use it as a beach mat, a towel, or a changing robe." },
          { icon: <ShieldCheck />, title: "Total Privacy", desc: "Engineered design ensures you stay covered at all times." }
        ].map((item, i) => (
          <div key={i} className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
              {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden grid lg:grid-cols-2">
        <div className="p-12 lg:p-16 bg-emerald-600 text-white">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-emerald-50 mb-12 text-lg">
            Have questions about EasyUndress? We'd love to hear from you. 
            Based in the beautiful Trento, Italy.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-emerald-200">Email us at</p>
                <p className="font-bold">labu4bd@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-emerald-200">Location</p>
                <p className="font-bold">Trento, Italy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-12 lg:p-16">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Your email" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-2">
        <Logo className="h-12 origin-left" />
      </div>
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} EasyUndress. All rights reserved. Made with love in Trento, Italy.
      </p>
      <div className="flex gap-6 text-sm font-medium text-gray-400">
        <a href="#" className="hover:text-gray-900">Privacy Policy</a>
        <a href="#" className="hover:text-gray-900">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
