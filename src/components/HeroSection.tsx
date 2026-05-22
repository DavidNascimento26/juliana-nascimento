import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden px-6 py-28 md:py-32"
      style={{ background: "linear-gradient(150deg, #F8F1EC 0%, #EAD7CF 100%)" }}
    >
      {/* Botanical SVG decorations */}
      <div
        className="absolute top-0 right-0 pointer-events-none opacity-[0.12] w-72 md:w-[420px]"
        aria-hidden="true"
        style={{ color: "#C6847B" }}
      >
        <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M45.7,-76.3C58.9,-69.3,69.1,-55.3,77.4,-40.8C85.7,-26.3,92.1,-11.3,90.2,2.8C88.3,16.9,78.2,30.1,67.6,42.5C57,54.9,45.9,66.4,32.3,73.5C18.7,80.6,2.6,83.3,-12.3,80.8C-27.2,78.3,-40.9,70.5,-53.4,60.2C-65.9,49.9,-77.2,37.1,-82.9,21.6C-88.6,6.1,-88.7,-12,-81.9,-27.6C-75.1,-43.2,-61.4,-56.3,-46.5,-62.7C-31.6,-69.1,-15.8,-68.8,1.3,-70.9C18.4,-73,36.8,-77.4,45.7,-76.3Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div
        className="absolute bottom-0 left-0 pointer-events-none opacity-[0.12] w-56 md:w-80"
        aria-hidden="true"
        style={{ color: "#B76E6A" }}
      >
        <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M40,-66.5C51.6,-59.8,60.6,-47.3,68,-34C75.4,-20.7,81.2,-6.6,79.5,6.6C77.8,19.8,68.6,32.1,58.3,42.7C48,53.3,36.6,62.2,23.3,68.2C10,74.2,-5.2,77.3,-20.1,74.8C-35,72.3,-49.6,64.2,-60.1,52.4C-70.6,40.6,-77,25.1,-79.3,9.1C-81.6,-6.9,-79.8,-23.4,-72.1,-37.2C-64.4,-51,-50.8,-62,-36.5,-68.1C-22.2,-74.2,-7.2,-75.4,6.7,-75.8C20.6,-76.2,41.2,-75.8,40,-66.5Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Floating soft circles — no blur, GPU-friendly */}
      <motion.div
        className="absolute top-1/4 left-[12%] w-10 h-10 rounded-full pointer-events-none"
        style={{ backgroundColor: "rgba(198,132,123,0.1)", willChange: "transform" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-1/4 right-[30%] w-6 h-6 rounded-full pointer-events-none"
        style={{ backgroundColor: "rgba(216,167,91,0.12)", willChange: "transform" }}
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        aria-hidden="true"
      />

      {/* Main content — two-column on desktop */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left: text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            className="text-sm font-medium uppercase tracking-[0.22em] mb-5"
            style={{ color: "#D8A75B" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Psicologia Clínica para Mulheres
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6"
            style={{ color: "#C6847B" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            Você não precisa carregar tudo sozinha.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            style={{ color: "#8C5A4F" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.22 }}
          >
            Psicoterapia para mulheres que querem se reconectar com quem realmente são.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.34 }}
          >
            <a
              href="https://wa.me/5521997075712"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center text-white px-8 py-4 rounded-full text-base font-medium shadow-md"
              style={{
                backgroundColor: "#B76E6A",
                transition: "background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "#C6847B";
                el.style.transform = "scale(1.03)";
                el.style.boxShadow = "0 8px 24px -4px rgba(183,110,106,0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "#B76E6A";
                el.style.transform = "scale(1)";
                el.style.boxShadow = "";
              }}
              data-testid="button-agendar-online"
            >
              Agendar consulta online
            </a>
            <a
              href="https://wa.me/5521997075712"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-transparent px-8 py-4 rounded-full text-base font-medium"
              style={{
                border: "2px solid #B76E6A",
                color: "#B76E6A",
                transition: "background-color 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "rgba(183,110,106,0.07)";
                el.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "transparent";
                el.style.transform = "scale(1)";
              }}
              data-testid="button-agendar-presencial"
            >
              Atendimento presencial
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {[
              { label: "CRP 05/74943", icon: "✓" },
              { label: "CRP-IS 13/0255", icon: "✓" },
              { label: "Especialista TCC", icon: "✓" },
              { label: "Online e presencial", icon: "✓" },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-1.5 text-sm" style={{ color: "#B08A7A" }}>
                <span style={{ color: "#D8A75B", fontWeight: 600 }}>{item.icon}</span>
                {item.label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: Juliana's photo */}
        <motion.div
          className="flex-shrink-0 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative">
            {/* Decorative offset square */}
            <div
              className="absolute -bottom-4 -right-4 rounded-3xl"
              style={{ width: "100%", height: "100%", backgroundColor: "rgba(198,132,123,0.15)", zIndex: 0 }}
            />
            {/* Gold ring */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-2"
              style={{ borderColor: "rgba(216,167,91,0.3)", zIndex: 0 }}
            />

            {/* Photo */}
            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              style={{
                width: "300px",
                height: "420px",
                zIndex: 1,
                border: "3px solid rgba(216,167,91,0.3)",
              }}
            >
              <img
                src="/juliana-foto2.jpg"
                alt="Juliana Nascimento"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 15%" }}
                loading="eager"
                decoding="async"
              />
              {/* Warm vignette overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(198,132,123,0.12) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-5 -left-10 rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
              style={{
                backgroundColor: "#F8F1EC",
                border: "1px solid rgba(216,167,91,0.35)",
                zIndex: 2,
                minWidth: "160px",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#EAD7CF" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6847B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold" style={{ color: "#C6847B" }}>Exclusivo para</p>
                <p className="text-xs" style={{ color: "#B08A7A" }}>mulheres</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center" style={{ color: "#D8A75B" }}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
          aria-hidden="true"
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </motion.div>
      </div>
    </section>
  );
}
