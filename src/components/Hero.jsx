import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth - do not block interaction */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center sm:px-8 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-sm text-white/80">Learn creatively. Level up fast.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="mx-auto max-w-4xl bg-gradient-to-br from-white via-white to-zinc-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Master modern skills with immersive, hands-on learning
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-200/90 sm:text-lg"
        >
          Curated courses, real projects, and a community of builders—built to help you go from curious to confident.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#courses"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black shadow/20 shadow-white/10 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Start learning
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/20 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/30"
          >
            <Play className="h-4 w-4" /> Watch intro
          </a>
        </motion.div>

        {/* Floating stats */}
        <div className="pointer-events-none relative mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-6">
          {["120k+ learners", "2k+ lessons", "Top mentors", "Career paths"].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-200 backdrop-blur-md sm:text-sm"
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
