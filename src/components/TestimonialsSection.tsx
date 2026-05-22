import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace with real testimonials when available
const testimonials = [
  {
    quote: "A terapia com a Juliana mudou completamente a forma como me vejo. Aprendi a me amar e a respeitar meus limites.",
    name: "M. S.",
    label: "Paciente",
  },
  {
    quote: "Finalmente encontrei um espaço onde me sinto completamente segura para ser quem eu sou, sem julgamentos.",
    name: "A. R.",
    label: "Paciente",
  },
  {
    quote: "Em poucos meses, consegui superar a ansiedade que me acompanhava há anos. Sou eternamente grata.",
    name: "C. F.",
    label: "Paciente",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePause = useCallback(() => setIsPaused(true), []);
  const handleResume = useCallback(() => setIsPaused(false), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="py-24 md:py-32 px-6" style={{ backgroundColor: "#F8F1EC" }}>
      <div className="max-w-3xl mx-auto text-center">

        <motion.p
          className="text-sm font-medium uppercase tracking-[0.22em] mb-4"
          style={{ color: "#D8A75B" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          Depoimentos
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-serif mb-14"
          style={{ color: "#C6847B" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
        >
          O que dizem as pacientes
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Card area — fixed height to avoid layout shift */}
          <div
            className="relative flex items-center justify-center"
            style={{ minHeight: "280px" }}
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute w-full rounded-3xl px-10 py-12 md:px-16"
                style={{
                  backgroundColor: "#F5EDE6",
                  boxShadow: "0 10px 40px -16px rgba(140,90,79,0.18)",
                }}
              >
                {/* Quote mark */}
                <div className="flex justify-center mb-6" style={{ color: "#D8A75B" }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>

                <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8" style={{ color: "#C6847B" }}>
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-8 opacity-40" style={{ backgroundColor: "#D8A75B" }} />
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#D8A75B" }} />
                  <div className="h-px w-8 opacity-40" style={{ backgroundColor: "#D8A75B" }} />
                </div>

                <p className="font-semibold text-sm" style={{ color: "#8C5A4F" }}>
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "#B08A7A" }}>
                  {testimonials[currentIndex].label}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: idx === currentIndex ? "24px" : "10px",
                  height: "10px",
                  backgroundColor: idx === currentIndex ? "#C6847B" : "rgba(216,167,91,0.35)",
                }}
                aria-label={`Ir para depoimento ${idx + 1}`}
                data-testid={`button-testimonial-${idx}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
