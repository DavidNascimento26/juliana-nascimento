import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Você entra em contato",
    desc: "Manda uma mensagem no WhatsApp quando se sentir pronta. Pode ser curta — um \"olá\" já é o suficiente.",
    cta: "Enviar mensagem",
    href: "https://wa.me/5521997075712",
  },
  {
    num: "02",
    title: "A gente se conhece",
    desc: "Agendamos um horário que funcione pra você. Na primeira conversa, você conta um pouco sobre o que está vivendo.",
    cta: null,
    href: null,
  },
  {
    num: "03",
    title: "Começa a sua jornada",
    desc: "A partir daí, construímos juntas um processo no seu ritmo — sem pressa, com escuta real e muito cuidado.",
    cta: null,
    href: null,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="processo" style={{ backgroundColor: "#F5EDE6" }} className="py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <motion.p
            className="text-sm font-medium uppercase tracking-[0.22em] mb-4"
            style={{ color: "#D8A75B" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            Como funciona
          </motion.p>
          <motion.h2
            className="font-serif text-4xl md:text-5xl"
            style={{ color: "#C6847B" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.08 }}
          >
            Três passos simples
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex-1 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Connecting line between steps on desktop */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-[22px] left-1/2 right-0 h-px"
                  style={{
                    backgroundImage: "repeating-linear-gradient(to right, rgba(216,167,91,0.4) 0, rgba(216,167,91,0.4) 6px, transparent 6px, transparent 14px)",
                    zIndex: 0,
                  }}
                />
              )}

              <div className="relative z-10 pr-0 md:pr-10">
                {/* Number circle */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-6 font-serif font-semibold text-base"
                  style={{
                    backgroundColor: "rgba(216,167,91,0.15)",
                    color: "#D8A75B",
                    border: "1.5px solid rgba(216,167,91,0.4)",
                  }}
                >
                  {step.num}
                </div>

                <h3 className="font-serif text-xl mb-3" style={{ color: "#C6847B" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#8C5A4F" }}>
                  {step.desc}
                </p>

                {step.cta && step.href && (
                  <a
                    href={step.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium group"
                    style={{ color: "#B76E6A" }}
                    data-testid="link-how-cta"
                  >
                    {step.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="transition-transform duration-200 group-hover:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}

                {/* Vertical connector on mobile */}
                {i < steps.length - 1 && (
                  <div
                    className="md:hidden w-px h-10 mt-4 ml-5"
                    style={{
                      backgroundImage: "repeating-linear-gradient(to bottom, rgba(216,167,91,0.4) 0, rgba(216,167,91,0.4) 5px, transparent 5px, transparent 10px)",
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
