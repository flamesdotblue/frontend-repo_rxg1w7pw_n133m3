import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Layers, Code, PenTool, Database, Palette } from 'lucide-react';

const courses = [
  {
    title: 'Full‑Stack Web Development',
    level: 'Beginner → Advanced',
    duration: '24h',
    icon: Code,
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'Product Design (UX/UI)',
    level: 'Beginner',
    duration: '14h',
    icon: PenTool,
    color: 'from-indigo-500 to-cyan-400',
  },
  {
    title: 'Data Engineering',
    level: 'Intermediate',
    duration: '18h',
    icon: Database,
    color: 'from-emerald-500 to-teal-400',
  },
  {
    title: 'Design Systems',
    level: 'Intermediate',
    duration: '9h',
    icon: Layers,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Creative Coding',
    level: 'All levels',
    duration: '11h',
    icon: Palette,
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'APIs & Microservices',
    level: 'Advanced',
    duration: '16h',
    icon: Code,
    color: 'from-cyan-500 to-sky-400',
  },
];

const CoursesOverview = () => {
  return (
    <section id="courses" className="relative w-full bg-white py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Popular courses
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Pick a path and start building. Each course includes projects, templates, and assessments.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map(({ title, level, duration, icon: Icon, color }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 dark:border-white/10 dark:bg-zinc-900"
            >
              <div className={`absolute -right-8 -top-8 h-40 w-40 rotate-12 rounded-3xl bg-gradient-to-br ${color} opacity-20 blur-2xl`} />
              <div className="relative">
                <div className="mb-4 inline-flex items-center gap-2 rounded-xl border border-zinc-200/70 bg-white/70 px-3 py-2 text-xs text-zinc-700 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                  <Icon className="h-4 w-4" />
                  {level}
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
                <div className="mt-3 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                  <Clock className="h-4 w-4" />
                  {duration} of guided content
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <button className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
                    Enroll
                  </button>
                  <button className="text-sm text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300">
                    View syllabus
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesOverview;
