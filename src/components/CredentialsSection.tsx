import { motion } from "framer-motion";
import { useState, useCallback } from "react";

const certificates = [
  {
    id: "infantil",
    src: "/cert-infantil.jpg",
    title: "Técnicas de Psicoterapia Clínica Infantil",
    institution: "FACPRISMA",
    year: "Outubro 2025",
  },
  {
    id: "hospitalar",
    src: "/cert-hospitalar.jpg",
    title: "Psicologia Hospitalar e da Saúde",
    institution: "FACPRISMA",
    year: "Dezembro 2025",
  },
  {
    id: "escolar",
    src: "/cert-escolar.jpg",
    title: "Psicologia Escolar e Educacional",
    institution: "FACPRISMA",
    year: "2025",
  },
];

export default function CredentialsSection() {
  const [zoomed, setZoomed] = useState<string | null>(null);

  const handleClose = useCallback(() => setZoomed(null), []);

  return (
    <>
      <section id="formacao" className="py-24 md:py-32 px-6" style={{ backgroundColor: "#F8F1EC" }}>
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="block text-sm font-medium uppercase tracking-[0.22em] mb-4" style={{ color: "#D8A75B" }}>
              Formação e Certificações
            </span>
            <h2 className="font-serif text-4xl md:text-5xl" style={{ color: "#C6847B" }}>
              Qualificação e Compromisso
            </h2>
            <p className="mt-4 text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "#8C5A4F" }}>
              Uma trajetória construída com dedicação, rigor acadêmico e amor genuíno pela psicologia.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-16 opacity-40" style={{ backgroundColor: "#D8A75B" }} />
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <circle cx="6" cy="6" r="5" stroke="#D8A75B" strokeWidth="1.2" />
                <circle cx="6" cy="6" r="2" fill="#D8A75B" />
              </svg>
              <div className="h-px w-16 opacity-40" style={{ backgroundColor: "#D8A75B" }} />
            </div>
          </motion.div>

          {/* Certificate Cards — 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-sm cursor-pointer"
                style={{
                  backgroundColor: "#EAD7CF",
                  willChange: "transform",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px -8px rgba(140,90,79,0.18)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
                onClick={() => setZoomed(cert.id)}
                data-testid={`cert-card-${cert.id}`}
              >
                {/* Image */}
                <div className="relative w-full overflow-hidden" style={{ height: "220px" }}>
                  <img
                    src={cert.src}
                    alt={cert.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                    style={{ transition: "transform 0.4s ease" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                  />
                  {/* Bottom fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                    style={{ background: "linear-gradient(to top, #EAD7CF, transparent)" }} />
                  {/* Zoom hint badge */}
                  <div
                    className="absolute top-2 right-2 rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: "rgba(198,132,123,0.9)", transition: "opacity 0.2s ease" }}
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <div className="px-5 py-4">
                  <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: "#D8A75B" }}>
                    {cert.institution}
                  </p>
                  <h3 className="font-serif text-base leading-snug" style={{ color: "#C6847B" }}>
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs" style={{ color: "#B08A7A" }}>
                    {cert.year}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full"
                  style={{ backgroundColor: "#D8A75B", transition: "width 0.4s ease" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Badge row */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          >
            {[
              "Graduação em Psicologia",
              "Especialista em TCC",
              "Psicoterapia Infantil",
              "Psicologia Hospitalar",
              "Psicologia Escolar",
              "CRP: 05/74943",
            ].map((badge) => (
              <span
                key={badge}
                className="px-4 py-1.5 rounded-full text-sm font-medium border"
                style={{ backgroundColor: "#F5EDE6", borderColor: "rgba(216,167,91,0.5)", color: "#8C5A4F" }}
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12"
          style={{ backgroundColor: "rgba(140,90,79,0.65)", backdropFilter: "blur(4px)", cursor: "zoom-out" }}
          onClick={handleClose}
          data-testid="lightbox-overlay"
        >
          <motion.div
            className="relative max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            style={{ cursor: "default" }}
          >
            <img
              src={certificates.find((c) => c.id === zoomed)?.src}
              alt="Certificado"
              className="w-full h-auto block"
              loading="eager"
              decoding="async"
            />
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(198,132,123,0.95)", color: "white" }}
              data-testid="lightbox-close"
              aria-label="Fechar"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}
