import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Globe, Zap, ShieldCheck, Laptop, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-48 pb-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-48">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Our Philosophy</p>
              <h1 className="text-6xl md:text-9xl font-serif font-light tracking-tight leading-[0.85]">
                Defining the <span className="italic opacity-50">Future</span> of Hardware.
              </h1>
            </div>
            <p className="text-xl text-white/40 font-light leading-relaxed max-w-xl">
              WE Tech Store is a student-led initiative at WE Applied Technology Schools. We provide high-quality tech gear specifically curated for the needs of modern technology students.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-br from-white/5 to-transparent rounded-[80px] blur-3xl opacity-50"></div>
            <div className="glass-card rounded-[80px] aspect-square overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Cpu, title: "Precision", desc: "Every component selected for its engineering excellence." },
            { icon: Globe, title: "Universal", desc: "Designing for a global community of creators." },
            { icon: Zap, title: "Velocity", desc: "Pushing the boundaries of speed and efficiency." },
            { icon: ShieldCheck, title: "Integrity", desc: "Uncompromising quality in every single product." }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-[40px] space-y-6 group hover:bg-white/5 transition-colors"
            >
              <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                <value.icon className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif italic tracking-tight">{value.title}</h3>
                <p className="text-sm text-white/20 font-light leading-relaxed">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <div className="glass-card rounded-[80px] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
          <div className="max-w-3xl space-y-12 relative z-10">
            <h2 className="text-4xl md:text-7xl font-serif font-light tracking-tight">The <span className="italic opacity-50">Journey</span></h2>
            <div className="space-y-8 text-lg text-white/40 font-light leading-relaxed">
              <p>
                Founded in 2024, WE Tech Store began as a small collective of designers and engineers frustrated by the lack of aesthetic coherence in modern hardware.
              </p>
              <p>
                Today, we serve thousands of professionals worldwide, providing them with the tools they need to build the next generation of digital experiences.
              </p>
            </div>
            <div className="flex gap-12 pt-12 border-t border-white/10">
              <div>
                <p className="text-4xl font-serif italic">500+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Students</p>
              </div>
              <div>
                <p className="text-4xl font-serif italic">50+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Products</p>
              </div>
              <div>
                <p className="text-4xl font-serif italic">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Focused</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
