import { SiInstagram, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#EAD7CF" }} className="pt-14 pb-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-10 border-b" style={{ borderColor: "rgba(216,167,91,0.25)" }}>

          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-1" style={{ color: "#C6847B" }}>
              Juliana Nascimento
            </h3>
            <p className="text-sm" style={{ color: "#B08A7A" }}>Psicóloga Clínica</p>
            <div className="flex gap-3 mt-3 flex-wrap">
              <span className="text-xs px-3 py-1 rounded-full border" style={{ color: "#8C5A4F", borderColor: "rgba(216,167,91,0.4)", backgroundColor: "rgba(245,237,230,0.6)" }}>
                CRP 05/74943
              </span>
              <span className="text-xs px-3 py-1 rounded-full border" style={{ color: "#8C5A4F", borderColor: "rgba(216,167,91,0.4)", backgroundColor: "rgba(245,237,230,0.6)" }}>
                CRP-IS 13/0255
              </span>
            </div>
          </div>

          {/* Specialties */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#D8A75B" }}>Especialidades</p>
            <ul className="space-y-2 text-sm" style={{ color: "#8C5A4F" }}>
              <li>Terapia Cognitivo-Comportamental</li>
              <li>Psicoterapia Clínica Infantil</li>
              <li>Psicologia Hospitalar e da Saúde</li>
              <li>Psicologia Escolar e Educacional</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#D8A75B" }}>Contato</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5521997075712"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm group"
                style={{ color: "#8C5A4F", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#C6847B"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8C5A4F"; }}
                data-testid="link-footer-whatsapp"
              >
                <SiWhatsapp size={16} className="flex-shrink-0" />
                +55 21 99707-5712
              </a>
              <a
                href="https://www.instagram.com/apsicologa.juliana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm group"
                style={{ color: "#8C5A4F", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#C6847B"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8C5A4F"; }}
                data-testid="link-footer-instagram"
              >
                <SiInstagram size={16} className="flex-shrink-0" />
                @apsicologa.juliana
              </a>
            </div>

            {/* Social icon buttons */}
            <div className="flex gap-3 mt-5">
              {[
                { href: "https://www.instagram.com/apsicologa.juliana", Icon: SiInstagram, label: "Instagram" },
                { href: "https://wa.me/5521997075712", Icon: SiWhatsapp, label: "WhatsApp" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center border"
                  style={{
                    borderColor: "rgba(216,167,91,0.4)",
                    color: "#8C5A4F",
                    transition: "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "#D8A75B";
                    el.style.color = "white";
                    el.style.borderColor = "#D8A75B";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "transparent";
                    el.style.color = "#8C5A4F";
                    el.style.borderColor = "rgba(216,167,91,0.4)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: "#B08A7A" }}>
            © {year} Juliana Nascimento — Todos os direitos reservados
          </p>
          <p className="text-xs" style={{ color: "rgba(176,138,122,0.6)" }}>
            Psicóloga Clínica · Atendimento exclusivo para mulheres
          </p>
        </div>

      </div>
    </footer>
  );
}
