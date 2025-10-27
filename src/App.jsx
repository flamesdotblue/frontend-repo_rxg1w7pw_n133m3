import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import CoursesOverview from './components/CoursesOverview';
import Testimonials from './components/Testimonials';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white antialiased dark:bg-black">
      <Hero />
      <Features />
      <CoursesOverview />
      <Testimonials />

      {/* Call-to-action banner */}
      <section className="relative w-full overflow-hidden py-16">
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-fuchsia-500/10 via-cyan-400/10 to-indigo-500/10" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-zinc-950 px-6 py-10 text-center text-white shadow-2xl sm:px-10"
          >
            <div className="pointer-events-none absolute -left-10 top-0 h-44 w-44 rounded-full bg-fuchsia-400/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-cyan-400/30 blur-3xl" />
            <h3 className="mx-auto max-w-2xl text-2xl font-semibold sm:text-3xl">
              Start your free 7‑day trial and access every course
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-zinc-300">
              Learn at your own pace with bite‑sized lessons, projects, and mentor feedback.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="#courses"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Start free trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white"
              >
                Browse catalog
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simple footer */}
      <footer className="border-t border-zinc-200/70 bg-white py-8 text-sm text-zinc-600 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-8">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-500" />
            <span className="font-medium text-zinc-900 dark:text-white">Learnly</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#courses" className="hover:text-zinc-900 dark:hover:text-white">Courses</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Pricing</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Community</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
