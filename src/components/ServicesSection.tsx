import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Terapia Online",
    desc: "De onde você estiver, o trabalho terapêutico é o mesmo — sério, cuidadoso e completamente confidencial.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Terapia Presencial",
    desc: "Um consultório pensado para ser um lugar de descanso. Você chega como está e vai embora um pouco mais leve.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Ansiedade e Estresse",
    desc: "Entender de onde vem a ansiedade já é metade do caminho. A outra metade a gente percorre juntas, no seu ritmo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Autoestima e Autoconhecimento",
    desc: "Quando você para de lutar contra si mesma, uma energia enorme fica disponível para a vida que você realmente quer.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" style={{ backgroundColor: "#F8F1EC" }} className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header — left-aligned for less symmetry */}
        <div className="mb-14 max-w-xl">
          <motion.p
            className="text-sm font-medium uppercase tracking-[0.22em] mb-4"
            style={{ color: "#D8A75B" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            O que ofereço
          </motion.p>
          <motion.h2
            className="font-serif text-4xl md:text-5xl leading-tight"
            style={{ color: "#C6847B" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.08 }}
          >
            Como posso te ajudar
          </motion.h2>
          <motion.p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "#8C5A4F" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 }}
          >
            Cada pessoa chega com uma história diferente. Meu trabalho é criar um espaço onde a sua possa ser ouvida de verdade.
          </motion.p>
        </div>

        {/* Cards — 2 col on tablet, 4 on desktop, each slightly varied */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative rounded-2xl p-7 flex flex-col gap-5"
              style={{
                backgroundColor: "#EAD7CF",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                willChange: "transform",
                /* Slight top padding variation for visual rhythm */
                paddingTop: i % 2 === 0 ? "28px" : "32px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-7px)";
                el.style.boxShadow = "0 18px 40px -12px rgba(140,90,79,0.18)";
                el.style.backgroundColor = "#F0E3DA";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.backgroundColor = "#EAD7CF";
              }}
              data-testid={`card-service-${i}`}
            >
              {/* Number — small, top-right */}
              <span
                className="absolute top-4 right-5 text-xs font-medium"
                style={{ color: "rgba(216,167,91,0.6)" }}
              >
                {service.num}
              </span>

              {/* Icon */}
              <div style={{ color: "#D8A75B" }} className="transition-transform duration-300 group-hover:scale-110 w-fit">
                {service.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-serif text-lg mb-2" style={{ color: "#C6847B" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8C5A4F" }}>
                  {service.desc}
                </p>
              </div>

              {/* Bottom gold line on hover */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 rounded-b-2xl group-hover:w-full"
                style={{ backgroundColor: "#D8A75B", transition: "width 0.4s ease" }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
