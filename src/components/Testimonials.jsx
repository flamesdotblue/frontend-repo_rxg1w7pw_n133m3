import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maya R.',
    role: 'Product Designer',
    quote:
      'The most engaging online learning I have tried. The projects are real, the feedback is immediate, and the community is super supportive.',
  },
  {
    name: 'Jordan K.',
    role: 'Full‑Stack Developer',
    quote:
      'I landed a new role after completing two tracks. The portfolio pieces you build here are the difference-maker.',
  },
  {
    name: 'Asha V.',
    role: 'Data Engineer',
    quote:
      'Clear, current, and practical. The pacing and assessments kept me accountable without feeling overwhelming.',
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full bg-zinc-50 py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Loved by learners
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Real stories from people who leveled up their careers with us.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-900"
            >
              <div className="mb-3 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-zinc-700 dark:text-zinc-200">“{t.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
                <div>
                  <div className="font-medium text-zinc-900 dark:text-white">{t.name}</div>
                  <div>{t.role}</div>
                </div>
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="rounded-full border border-zinc-200/70 bg-white/60 px-3 py-1 text-xs backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                >
                  Verified review
                </motion.div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
