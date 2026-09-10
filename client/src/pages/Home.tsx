import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Globe2,
  Handshake,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveRight,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  UsersRound,
  X,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Transporte dedicado",
    description: "Rotas exclusivas para uma entrega ou múltiplos pontos em uma mesma operação.",
    icon: Truck,
  },
  {
    title: "Rodoviário crítico",
    description: "Lead time urgente para coletas e entregas em qualquer região do país.",
    icon: Zap,
  },
  {
    title: "First mile & line haul",
    description: "Operações para e-commerce, marketplaces e transferências entre CDs.",
    icon: PackageCheck,
  },
  {
    title: "Rodo-aéreo integrado",
    description: "Coleta dedicada, despacho imediato e conexão com companhias aéreas parceiras.",
    icon: Globe2,
  },
  {
    title: "Cargas refrigeradas",
    description: "Controle rigoroso de temperatura para produtos sensíveis e operações especiais.",
    icon: ShieldCheck,
  },
  {
    title: "Representações & agenciamento",
    description: "Gerenciamento comercial conectando embarcadores aos grandes operadores.",
    icon: Handshake,
  },
];

const industries = [
  { label: "Automobilístico", detail: "Fluxos just-in-time" },
  { label: "Tecnologia", detail: "Equipamentos de alto valor" },
  { label: "Aeronáutico", detail: "Precisão e discrição" },
  { label: "Siderúrgico", detail: "Conexão com o aço" },
  { label: "Hospitalar", detail: "Cargas sensíveis" },
  { label: "Agronegócio", detail: "Do campo à indústria" },
  { label: "E-commerce", detail: "First mile e line haul" },
];

const fleet = [
  { value: "Leves & utilitários", copy: "Motos, Fiorinos e Vans para volumes menores e atendimento expresso." },
  { value: "Médios & pesados", copy: "3/4, Toco, Truck e Bitruck nas configurações Carga Seca, Baú e Sider." },
  { value: "Grande porte", copy: "Carretas simples e LS para volumes maiores, com flexibilidade de configuração." },
  { value: "Especializados", copy: "Refrigerados e veículos com plataforma elevatória para segmentos sensíveis." },
];

const principles = [
  { title: "Transparência e ética", text: "Acordos claros e exigências comerciais respeitadas em todas as etapas.", icon: Handshake },
  { title: "Valorização humana", text: "Cuidado com a saúde, a segurança e o bem-estar de quem faz a operação acontecer.", icon: UsersRound },
  { title: "Responsabilidade ambiental", text: "Atuação consciente para minimizar o impacto de cada movimentação logística.", icon: Sparkles },
  { title: "Compromisso e continuidade", text: "Resolver o urgente sem improviso, garantindo fluidez à cadeia de suprimentos.", icon: Clock3 },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#top" aria-label="Gardena's Logística, início">
      <img className="brand-logo" src="/manus-storage/gardenas-logo_bd75971a.png" alt="Gardena's Logística" />
    </a>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? "section-heading--light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteSent, setQuoteSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleQuoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const origin = String(data.get("origin") || "");
    const destination = String(data.get("destination") || "");
    const cargo = String(data.get("cargo") || "");
    const details = String(data.get("details") || "");
    const message = [
      "Olá, Gardena's Logística! Gostaria de solicitar uma cotação.",
      `Nome: ${name}`,
      `Empresa: ${company}`,
      `Origem: ${origin}`,
      `Destino: ${destination}`,
      `Carga / operação: ${cargo}`,
      `Detalhes: ${details}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/5519996137296?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setQuoteSent(true);
  };

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="container header-inner">
          <BrandMark compact />
          <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Navegação principal">
            <a href="#solucoes" onClick={closeMenu}>Soluções</a>
            <a href="#historia" onClick={closeMenu}>Nossa história</a>
            <a href="#capacidade" onClick={closeMenu}>Capacidade</a>
            <a href="#seguranca" onClick={closeMenu}>Segurança</a>
            <a href="#contato" className="nav-cta" onClick={closeMenu}>Falar com o time <ArrowUpRight size={15} /></a>
          </nav>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-backdrop" />
          <div className="hero-grid" />
          <div className="container hero-content">
            <div className="hero-kicker"><span className="pulse-dot" /> Transporte expresso & operações críticas</div>
            <h1 id="hero-title">Quando o prazo<br /><em>é crítico,</em> a gente resolve.</h1>
            <p className="hero-lede">Operações logísticas para quem não pode esperar. Agilidade, segurança e visibilidade em cada quilômetro.</p>
            <div className="hero-actions">
              <a className="button button--gold" href="#contato">Resolver uma operação <MoveRight size={18} /></a>
              <a className="text-link" href="#solucoes">Conhecer soluções <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-proof">
              <div className="proof-item"><strong>Nacional</strong><span>presença estratégica</span></div>
              <div className="proof-divider" />
              <div className="proof-item"><strong>24/7</strong><span>suporte consultivo</span></div>
              <div className="proof-divider" />
              <div className="proof-item"><strong>100%</strong><span>compromisso com SLA</span></div>
            </div>
          </div>
        </section>

        <section className="intro section-dark" id="solucoes">
          <div className="container intro-grid">
            <div className="intro-statement">
              <span className="section-index"><span /></span>
              <h2>Transformamos<br /><span>urgência</span> em<br />resolução operacional.</h2>
            </div>
            <div className="intro-copy">
              <p className="lead-copy">Para clientes que não podem parar, cada movimento precisa de precisão. Diagnóstico, execução e acompanhamento próximos — do primeiro contato à entrega.</p>
              <div className="copy-rule" />
              <div className="check-list">
                <div><ShieldCheck size={18} /><span>Agilidade, segurança e confiabilidade em cada solução.</span></div>
                <div><MapPin size={18} /><span>Presença dedicada em todo o território nacional.</span></div>
                <div><MessageCircle size={18} /><span>Comunicação clara e suporte consultivo de ponta a ponta.</span></div>
              </div>
              <a className="text-link text-link--gold" href="#contato">Fale com um especialista <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="services section-ink">
          <div className="container">
            <SectionHeading eyebrow="O que fazemos" title="Soluções adaptadas ao seu modal." description="Do embarque dedicado ao atendimento crítico, desenhamos a operação certa para o seu desafio." />
            <div className="service-grid">
              {services.map(({ title, description, icon: Icon }) => (
                <article className="service-card" key={title}>
                  <div className="service-top"><Icon size={22} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href="#contato" aria-label={`Saiba mais sobre ${title}`}><ArrowUpRight size={17} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="operations section-dark">
          <div className="container operations-grid">
            <div className="operations-visual">
              <img src="/manus-storage/gardenas-operations_2cdabf7d.jpg" alt="Terminal logístico iluminado ao anoitecer" />
              <div className="visual-tag"><span className="pulse-dot" /> Operação em movimento</div>
              <div className="visual-corner">G'S / 24</div>
            </div>
            <div className="operations-copy">
              <span className="section-index"><span /></span>
              <SectionHeading eyebrow="Operações críticas" title="Resolver o urgente sem improviso." description="Uma equipe treinada, processos rigorosos e o veículo exato para cada carga. Porque quando cada minuto conta, a resposta precisa ser rápida — e segura." />
              <div className="mini-stats">
                <div><strong>Diagnóstico</strong><span>preciso</span></div>
                <div><strong>Execução</strong><span>ágil</span></div>
                <div><strong>Visibilidade</strong><span>total</span></div>
              </div>
              <a className="button button--outline" href="#capacidade">Ver nossa capacidade <MoveRight size={18} /></a>
            </div>
          </div>
        </section>

        <section className="history section-cream" id="historia">
          <div className="container history-grid">
            <div className="history-intro">
              <span className="section-index section-index--dark"><span /></span>
              <SectionHeading eyebrow="Nossa história" title="Tradição familiar com rigor comercial e operacional." description="Uma trajetória construída em estrada, relações duradouras e respeito ao que é mais importante: a confiança do cliente." light />
              <div className="history-note"><span>Desde</span><strong>1960</strong><small>experiência que<br />segue em movimento</small></div>
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-dot" />
                <span className="timeline-year">Décadas de 1960 a 2000</span>
                <h3>As primeiras rotas</h3>
                <p>Origem familiar no transporte e comércio de madeira, conquistando experiência em longas distâncias no eixo SP x Norte.</p>
              </article>
              <article className="timeline-item">
                <span className="timeline-dot" />
                <span className="timeline-year">Ano de 2011</span>
                <h3>Consolidação nacional</h3>
                <p>Constituição oficial como transportador e ANTT pessoa jurídica, expandindo a atuação para múltiplos setores industriais.</p>
              </article>
              <article className="timeline-item">
                <span className="timeline-dot" />
                <span className="timeline-year">Presente momento</span>
                <h3>Estrutura ágil e moderna</h3>
                <p>Frota diversificada, transparência nas negociações e acompanhamento constante da localização de cada pedido confiado.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="fleet section-ink" id="capacidade">
          <div className="container">
            <div className="fleet-header">
              <SectionHeading eyebrow="Capacidade operacional" title="Frota diversificada para qualquer dimensão de carga." description="Do microtransporte de emergência às carretas de grande porte, dimensionamos o veículo exato para onde você precisa chegar." />
            </div>
            <div className="fleet-grid">
              {fleet.map((item) => (
                <article className="fleet-card" key={item.value}>
                  <Truck size={23} />
                  <h3>{item.value}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="industries section-dark">
          <div className="container">
            <div className="industries-top">
              <SectionHeading eyebrow="Presença estratégica" title="Onde cada minuto conta." description="Conhecimento operacional para setores que exigem precisão absoluta, discrição e continuidade." />
              <div className="industry-aside"><span>Atuação</span><strong>Brasil inteiro</strong><Globe2 size={22} /></div>
            </div>
            <div className="industry-list">
              {industries.map((industry) => (
                <a href="#contato" className="industry-row" key={industry.label}>
                  <span className="industry-label">{industry.label}</span>
                  <span className="industry-detail">{industry.detail}</span>
                  <ArrowUpRight size={17} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="security section-gold" id="seguranca">
          <div className="container security-grid">
            <div className="security-copy">
              <span className="section-index section-index--dark"><span /></span>
              <SectionHeading eyebrow="Segurança" title="Proteção para a carga. Confiança para a operação." description="Em cada movimentação, o seguro e o gerenciamento de riscos fazem parte da responsabilidade assumida com o cliente." light />
              <div className="security-points">
                <div><MessageCircle size={19} /><span><strong>Comunicação clara</strong>Reportes diários e acompanhamento próximo de ponta a ponta.</span></div>
                <div><ShieldCheck size={19} /><span><strong>Rigor operacional</strong>Cumprimento estrito de prazos e exigências comerciais.</span></div>
                <div><PackageCheck size={19} /><span><strong>Transparência total</strong>Visibilidade completa na prestação direta ou representação.</span></div>
              </div>
            </div>
            <div className="security-card">
              <ShieldCheck size={32} />
              <span>Seguro & gerenciamento de riscos</span>
              <p>Proteção alinhada ao perfil de cada operação crítica, sem atalhos e sem surpresas.</p>
              <div className="card-stamp">SLA<br /><strong>OK</strong></div>
            </div>
          </div>
        </section>

        <section className="principles section-cream">
          <div className="container">
            <SectionHeading eyebrow="Cultura organizacional" title="Missão e princípios que sustentam cada entrega." description="Mais do que transportar, queremos fazer parte das cadeias que movem negócios, pessoas e futuros." light />
            <div className="principles-grid">
              {principles.map(({ title, text, icon: Icon }) => (
                <article className="principle-card" key={title}>
                  <Icon size={21} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="contact-backdrop" />
          <div className="container contact-inner">
            <div className="contact-copy">
              <span className="eyebrow">Próximo movimento</span>
              <h2>Vamos resolver<br /><em>sua próxima</em> operação?</h2>
              <p>Fale diretamente com o nosso time comercial. A gente entende o crítico, desenha a solução e coloca a carga em movimento.</p>
              <a className="button button--gold" href="mailto:comercial@gardenaslog.com.br">Entrar em contato <ArrowUpRight size={18} /></a>
            </div>
            <div className="contact-details">
              <div className="contact-block"><span>Website</span><a href="https://www.gardenaslog.com.br" target="_blank" rel="noreferrer">gardenaslog.com.br <ArrowUpRight size={15} /></a></div>
              <div className="contact-block"><span>E-mail</span><a href="mailto:comercial@gardenaslog.com.br">comercial@gardenaslog.com.br <ArrowUpRight size={15} /></a></div>
              <div className="contact-block"><span>Fone fixo</span><a href="tel:+551939270571">(19) 3927-0571 <Phone size={15} /></a></div>
              <div className="contact-block"><span>WhatsApp</span><a href="https://wa.me/5519996137296" target="_blank" rel="noreferrer">(19) 9.9613-7296 <MessageCircle size={15} /></a></div>
              <div className="social-block"><span>Siga nas redes sociais</span><div><a href="#contato" aria-label="Instagram"><Instagram size={18} /></a><a href="#contato" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="#contato" aria-label="WhatsApp"><MessageCircle size={18} /></a></div></div>
            </div>
            <form className="quote-form" onSubmit={handleQuoteSubmit}>
              <div className="quote-form-heading"><span className="eyebrow">Cotação rápida</span><h3>Conte o que precisa mover.</h3><p>Preencha os dados e nossa equipe comercial continua a conversa pelo WhatsApp.</p></div>
              <div className="quote-fields">
                <label><span>Seu nome</span><input name="name" required placeholder="Como podemos chamar você?" /></label>
                <label><span>Empresa</span><input name="company" required placeholder="Nome da empresa" /></label>
                <label><span>Origem</span><input name="origin" required placeholder="Cidade / estado" /></label>
                <label><span>Destino</span><input name="destination" required placeholder="Cidade / estado" /></label>
                <label className="quote-field--full"><span>Carga ou tipo de operação</span><input name="cargo" required placeholder="Ex.: carga crítica, refrigerada, dedicada..." /></label>
                <label className="quote-field--full"><span>Detalhes adicionais</span><textarea name="details" rows={3} placeholder="Prazo, volume, peso ou qualquer informação importante." /></label>
              </div>
              <button className="button button--gold quote-submit" type="submit"><MessageCircle size={18} /> {quoteSent ? "WhatsApp aberto — falar com o time" : "Solicitar cotação pelo WhatsApp"}</button>
              <a className="quote-email" href="mailto:comercial@gardenaslog.com.br?subject=Solicitação%20de%20cotação">Prefere e-mail? Enviar solicitação para comercial@gardenaslog.com.br <Mail size={14} /></a>
            </form>
          </div>
        </section>
      </main>

      <a className="whatsapp-float" href="https://wa.me/5519996137296" target="_blank" rel="noreferrer" aria-label="Falar com a Gardena's Logística pelo WhatsApp">
        <img src="/manus-storage/whatsapp-icon_36119052.webp" alt="WhatsApp" />
        <span>Fale conosco</span>
      </a>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Gardena's Logística. Transporte expresso & operações críticas.</span>
          <a href="#top" aria-label="Voltar ao topo"><ChevronDown size={17} className="back-top-icon" /></a>
        </div>
      </footer>
    </div>
  );
}
