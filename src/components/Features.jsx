import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, BookOpen, BadgeCheck } from 'lucide-react';

const features = [
  {
    title: 'Project-based learning',
    description: 'Ship real projects, build a portfolio, and learn by doing with guided, hands-on challenges.',
    icon: Rocket,
    color: 'from-fuchsia-500/20 to-pink-500/10',
  },
  {
    title: 'Community & mentors',
    description: 'Join live sessions, get feedback from experts, and grow with a supportive community.',
    icon: Users,
    color: 'from-cyan-400/20 to-indigo-500/10',
  },
  {
    title: 'Curated curriculum',
    description: 'Stay ahead with up-to-date tracks designed for modern roles and real-world skills.',
    icon: BookOpen,
    color: 'from-emerald-400/20 to-teal-500/10',
  },
  {
    title: 'Certifications',
    description: 'Earn shareable certificates that validate your skills and help you stand out.',
    icon: BadgeCheck,
    color: 'from-amber-400/20 to-orange-500/10',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Features = () => {
  return (
    <section className="relative w-full bg-zinc-50 py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Everything you need to learn faster
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            A modern learning experience that blends content, community, and practice.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map(({ title, description, icon: Icon, color }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white p-5 shadow-sm transition-colors dark:border-white/10 dark:bg-zinc-900"
            >
              <div className={`absolute -top-10 right-0 h-24 w-24 rounded-full bg-gradient-to-br ${color} blur-2xl`} />
              <div className="relative flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200/60 bg-white/70 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                  <Icon className="h-5 w-5 text-zinc-900 dark:text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
