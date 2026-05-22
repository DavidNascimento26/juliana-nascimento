import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="sobre" style={{ backgroundColor: "#F5EDE6" }} className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-20">

          {/* Photo column */}
          <motion.div
            className="w-full lg:w-[42%] flex-shrink-0"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative mx-auto lg:mx-0" style={{ maxWidth: "360px" }}>
              {/* Offset decorative block */}
              <div
                className="absolute rounded-3xl"
                style={{
                  bottom: "-12px",
                  right: "-12px",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#EAD7CF",
                  zIndex: 0,
                }}
              />
              {/* Small gold circle accent */}
              <div
                className="absolute rounded-full border-2"
                style={{
                  top: "-16px",
                  left: "-16px",
                  width: "52px",
                  height: "52px",
                  borderColor: "rgba(216,167,91,0.45)",
                  zIndex: 0,
                }}
              />

              {/* Photo */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  height: "440px",
                  zIndex: 1,
                  border: "2.5px solid rgba(216,167,91,0.3)",
                  boxShadow: "0 20px 50px -15px rgba(140,90,79,0.2)",
                }}
              >
                <img
                  src="/juliana-foto1.jpg"
                  alt="Juliana Nascimento — Psicóloga Clínica"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 8%" }}
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(198,132,123,0.1) 0%, transparent 55%)" }}
                />
              </div>

              {/* CRP badges — absolute positioned at bottom-left */}
              <motion.div
                className="absolute flex flex-col gap-2"
                style={{ bottom: "-22px", left: "-14px", zIndex: 2 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                {["CRP 05/74943", "CRP-IS 13/0255"].map((crp) => (
                  <div
                    key={crp}
                    className="rounded-xl px-4 py-2 flex items-center gap-2 shadow-md"
                    style={{
                      backgroundColor: "#F8F1EC",
                      border: "1px solid rgba(216,167,91,0.35)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#D8A75B" }}
                    />
                    <span className="text-xs font-semibold" style={{ color: "#C6847B" }}>
                      {crp}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            className="w-full lg:flex-1 pt-0 lg:pt-6"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.22em] mb-5" style={{ color: "#D8A75B" }}>
              Sobre mim
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-[1.15] mb-7" style={{ color: "#C6847B" }}>
              Olá, eu sou<br />a Juliana
            </h2>

            {/* Pull quote — feels like she wrote it */}
            <blockquote
              className="relative pl-5 mb-7 italic font-serif text-lg leading-relaxed"
              style={{
                color: "#B08A7A",
                borderLeft: "3px solid rgba(216,167,91,0.5)",
              }}
            >
              "Escolhi me dedicar exclusivamente às mulheres porque acredito que cada uma de nós merece um espaço que seja verdadeiramente seu."
            </blockquote>

            <div className="space-y-4 text-base leading-[1.8]" style={{ color: "#8C5A4F" }}>
              <p>
                Sou psicóloga clínica formada, com pós-graduações em Terapia Cognitivo-Comportamental, Psicoterapia Clínica Infantil e Psicologia Hospitalar e da Saúde — áreas que me ensinaram a olhar para a pessoa inteira, não apenas para o sintoma.
              </p>
              <p>
                Atendo online e presencialmente mulheres que estão passando por momentos de ansiedade, baixa autoestima, esgotamento ou simplesmente se sentindo desconectadas de si mesmas. Sem julgamentos, sem pressa — no tempo de cada uma.
              </p>
            </div>

            {/* Specialties — grid, not pill row */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { label: "Terapia Cognitivo-Comportamental", abbr: "TCC" },
                { label: "Psicoterapia Clínica Infantil", abbr: "" },
                { label: "Psicologia Hospitalar", abbr: "" },
                { label: "Psicologia Escolar", abbr: "" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-2.5 py-2"
                >
                  <span
                    className="mt-1.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(216,167,91,0.2)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#D8A75B" }} />
                  </span>
                  <span className="text-sm leading-snug" style={{ color: "#8C5A4F" }}>
                    {item.label}{item.abbr ? ` (${item.abbr})` : ""}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5521997075712"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-9 text-sm font-medium group"
              style={{ color: "#B76E6A" }}
              data-testid="link-about-cta"
            >
              Quero conversar com a Juliana
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
