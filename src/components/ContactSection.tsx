import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F8F1EC 0%, #EAD7CF 100%)" }}
    >
      {/* Botanical decoration */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none opacity-[0.12] w-72 md:w-96 translate-x-1/4 translate-y-1/4"
        style={{ color: "#C6847B" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.2,-74.6C60.2,-64.1,66.1,-46.3,71.2,-29.4C76.3,-12.5,80.5,3.6,76.5,17.7C72.5,31.8,60.3,44.1,47,54C33.7,63.9,19.3,71.6,2.8,67.6C-13.6,63.7,-27.2,48.3,-41.8,36.1C-56.3,23.8,-71.8,14.6,-76.3,1.4C-80.8,-11.9,-74.4,-29,-62.4,-41.6C-50.5,-54.2,-33.1,-62.3,-16.9,-65.8C-0.7,-69.3,14.4,-68.3,31,-65.4C47.6,-62.6,48.2,-74.6,48.2,-74.6Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div
        className="absolute top-0 left-0 pointer-events-none opacity-[0.08] w-56 md:w-72 -translate-x-1/3 -translate-y-1/3"
        style={{ color: "#D8A75B" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M40,-66.5C51.6,-59.8,60.6,-47.3,68,-34C75.4,-20.7,81.2,-6.6,79.5,6.6C77.8,19.8,68.6,32.1,58.3,42.7C48,53.3,36.6,62.2,23.3,68.2C10,74.2,-5.2,77.3,-20.1,74.8C-35,72.3,-49.6,64.2,-60.1,52.4C-70.6,40.6,-77,25.1,-79.3,9.1C-81.6,-6.9,-79.8,-23.4,-72.1,-37.2C-64.4,-51,-50.8,-62,-36.5,-68.1C-22.2,-74.2,-7.2,-75.4,6.7,-75.8C20.6,-76.2,41.2,-75.8,40,-66.5Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left: photo */}
        <motion.div
          className="hidden lg:flex flex-shrink-0 justify-center"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative">
            <div
              className="absolute -top-3 -left-3 w-full h-full rounded-3xl"
              style={{ backgroundColor: "rgba(216,167,91,0.18)", zIndex: 0 }}
            />
            <div
              className="relative overflow-hidden rounded-3xl shadow-xl"
              style={{
                width: "240px",
                height: "300px",
                zIndex: 1,
                border: "2px solid rgba(216,167,91,0.3)",
              }}
            >
              <img
                src="/juliana-foto1.jpg"
                alt="Juliana Nascimento"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 10%" }}
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(198,132,123,0.1) 0%, transparent 60%)" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Right: CTA text */}
        <div className="text-center lg:text-left flex-1">
          <motion.p
            className="text-sm font-medium uppercase tracking-[0.22em] mb-4"
            style={{ color: "#D8A75B" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            Vamos começar
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight"
            style={{ color: "#C6847B" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
          >
            Quando você estiver<br className="hidden sm:block" /> pronta, eu estou aqui.
          </motion.h2>

          <motion.p
            className="text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            style={{ color: "#8C5A4F" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
          >
            Não precisa ter tudo resolvido na cabeça antes de chamar. Pode vir como você está — a gente começa daí.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3 }}
          >
            {/* WhatsApp button */}
            <a
              href="https://wa.me/5521997075712"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg"
              style={{
                backgroundColor: "#25D366",
                animation: "pulse-wa 2.5s ease-in-out infinite",
                transition: "background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.animationPlayState = "paused";
                el.style.backgroundColor = "#20bd5a";
                el.style.transform = "scale(1.05)";
                el.style.boxShadow = "0 12px 30px -6px rgba(37,211,102,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.animationPlayState = "running";
                el.style.backgroundColor = "#25D366";
                el.style.transform = "scale(1)";
                el.style.boxShadow = "";
              }}
              data-testid="button-whatsapp-contact"
            >
              <Phone size={22} />
              Conversar pelo WhatsApp
            </a>

            {/* Instagram link */}
            <a
              href="https://www.instagram.com/apsicologa.juliana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full font-medium border"
              style={{
                color: "#8C5A4F",
                borderColor: "rgba(140,90,79,0.25)",
                backgroundColor: "rgba(245,237,230,0.7)",
                transition: "color 0.25s ease, border-color 0.25s ease, background-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#C6847B";
                el.style.borderColor = "rgba(198,132,123,0.4)";
                el.style.backgroundColor = "rgba(245,237,230,1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#8C5A4F";
                el.style.borderColor = "rgba(140,90,79,0.25)";
                el.style.backgroundColor = "rgba(245,237,230,0.7)";
              }}
              data-testid="link-instagram-contact"
            >
              <SiInstagram size={20} />
              @apsicologa.juliana
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
