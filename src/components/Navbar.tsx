import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handler = (e: MouseEvent) => {
      const nav = document.getElementById("main-nav");
      if (nav && !nav.contains(e.target as Node)) setIsMobileMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isMobileMenuOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback((id: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, isMobileMenuOpen ? 300 : 0);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Sobre", id: "sobre" },
    { label: "Formação", id: "formacao" },
    { label: "Serviços", id: "servicos" },
    { label: "Como Funciona", id: "processo" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <nav
      id="main-nav"
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-400"
      style={{
        backgroundColor: isScrolled ? "#F8F1EC" : "transparent",
        boxShadow: isScrolled ? "0 1px 20px rgba(140,90,79,0.08)" : "none",
        padding: isScrolled ? "14px 24px" : "22px 24px",
        transition: "background-color 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ paddingLeft: "clamp(0px, 3vw, 24px)", paddingRight: "clamp(0px, 3vw, 24px)" }}>

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-xl md:text-2xl select-none"
          style={{ color: "#C6847B", background: "none", border: "none", cursor: "pointer" }}
          data-testid="link-logo"
        >
          Juliana Nascimento
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative text-sm font-medium group"
              style={{ color: "#8C5A4F", background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}
              data-testid={`link-${link.id}`}
            >
              {link.label}
              {/* Underline animation */}
              <span
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full"
                style={{ backgroundColor: "#C6847B", transition: "width 0.25s ease" }}
              />
            </button>
          ))}
          <a
            href="https://wa.me/5521997075712"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white px-5 py-2.5 rounded-full shadow-sm"
            style={{
              backgroundColor: "#B76E6A",
              transition: "background-color 0.25s ease, transform 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#C6847B";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#B76E6A";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
            data-testid="button-agendar-nav"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: "#C6847B" }}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 md:hidden flex flex-col"
        style={{
          top: "64px",
          backgroundColor: "#F8F1EC",
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 30,
          padding: "40px 32px",
          gap: "0",
        }}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left w-full py-4 border-b font-serif text-2xl"
              style={{
                color: "#C6847B",
                borderColor: "rgba(216,167,91,0.15)",
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(216,167,91,0.15)",
                cursor: "pointer",
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                transition: `opacity 0.3s ease ${i * 0.05 + 0.1}s, transform 0.3s ease ${i * 0.05 + 0.1}s`,
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <a
          href="https://wa.me/5521997075712"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 text-center text-white rounded-full py-4 text-lg font-medium shadow-md"
          style={{
            backgroundColor: "#B76E6A",
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.3s ease 0.35s, transform 0.3s ease 0.35s",
          }}
        >
          Agendar Consulta
        </a>
        <div className="mt-8 text-center">
          <p className="text-xs" style={{ color: "#B08A7A" }}>CRP 05/74943 · CRP-IS 13/0255</p>
        </div>
      </div>
    </nav>
  );
}
