import React, { useState } from "react";

const Icon = ({ type = "globe", className = "", size = 22 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className
  };

  const icons = {
    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    education: (
      <svg {...common}>
        <path d="M22 10 12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
      </svg>
    ),
    business: (
      <svg {...common}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 13h18" />
      </svg>
    ),
    media: (
      <svg {...common}>
        <path d="M4 15V9a2 2 0 0 1 2-2h3l6-3v16l-6-3H6a2 2 0 0 1-2-2z" />
        <path d="M19 9a4 4 0 0 1 0 6" />
      </svg>
    ),
    event: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M3 10h18" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" />
        <path d="m8 12 3 3 5-6" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
    location: (
      <svg {...common}>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    spark: (
      <svg {...common}>
        <path d="M12 2 14.6 8.4 21 11l-6.4 2.6L12 20l-2.6-6.4L3 11l6.4-2.6L12 2z" />
      </svg>
    )
  };

  return icons[type] || icons.globe;
};

const services = [
  {
    icon: "education",
    title: "Education & Cultural Exchange Consulting",
    cn: "教育与文化交流咨询",
    desc: "We design international education programs, student exchange experiences, school partnerships, and cultural learning projects.",
    items: ["Student study tours", "School partnership programs", "International education projects", "Cultural exchange design"]
  },
  {
    icon: "business",
    title: "Market Entry & Business Consulting",
    cn: "市场进入与商业咨询",
    desc: "We help organizations understand the U.S. market, develop business plans, and build practical growth strategies.",
    items: ["U.S. market research", "Business plan development", "Partner matching", "Market entry strategy"]
  },
  {
    icon: "media",
    title: "Branding & Media Strategy",
    cn: "品牌与媒体传播咨询",
    desc: "We support brands with positioning, bilingual content, media strategy, video production, and social media growth.",
    items: ["Brand positioning", "Bilingual content", "Promotional videos", "Social media strategy"]
  },
  {
    icon: "event",
    title: "Event Planning & Project Management",
    cn: "活动策划与项目执行",
    desc: "We plan and execute forums, galas, screenings, cultural festivals, business events, and sponsorship campaigns.",
    items: ["Forums & receptions", "Cultural events", "Sponsorship decks", "Project execution"]
  }
];

const strengths = [
  "U.S. market insight and local information consulting",
  "Cross-border business and education expertise",
  "Bilingual communication and international strategy",
  "Media, branding, and storytelling capability",
  "Project planning from concept to execution",
  "Strategic partnership and regional market network"
];

const process = [
  ["01", "Discovery", "Understand your goals, audience, market, and current challenges."],
  ["02", "Strategy", "Build a clear consulting plan, service roadmap, and communication direction."],
  ["03", "Execution", "Coordinate resources, manage projects, and deliver practical results."],
  ["04", "Growth", "Review outcomes, optimize strategy, and support long-term development."]
];

const projects = [
  {
    title: "U.S.–China Student Exchange Initiative",
    cn: "中美学生交流项目",
    desc: "Developed and coordinated a cross-cultural educational exchange program connecting U.S. students with academic institutions, cultural organizations, and immersive learning experiences in China.",
    tag: "Education Consulting"
  },
  {
    title: "International Media & Cultural Event Planning",
    cn: "国际媒体与文化活动策划",
    desc: "Supported media-related events, cultural forums, VIP receptions, and international exchange activities through strategic planning, bilingual coordination, sponsorship structure, and project execution.",
    tag: "Events & Media"
  },
  {
    title: "U.S. Market Research & Brand Positioning",
    cn: "美国市场调研与品牌定位",
    desc: "Provided consulting support for organizations entering the U.S. market through market analysis, business planning, localization strategy, branding direction, and partnership development.",
    tag: "Business Consulting"
  }
];

const reasons = [
  ["U.S. Local Insight", "We understand U.S. market information, business culture, local communication habits, and practical project needs."],
  ["Bilingual Advantage", "We help clients communicate clearly across English and Chinese contexts, from strategy documents to public-facing content."],
  ["Strategy + Execution", "We do not only provide ideas. We help structure plans, coordinate resources, and move projects forward."],
  ["Cross-Sector Experience", "Our work connects education, business, media, culture, events, and international partnerships."],
  ["Washington, D.C. Presence", "Located in the political and business center of Washington, D.C., we stay connected to policy, education, and international dialogue."],
  ["Flexible Boutique Consulting", "We combine the agility of a boutique consulting firm with hands-on project coordination and personalized client support."]
];

const insights = [
  {
    title: "U.S.–China Education Trends",
    desc: "Analysis of educational mobility, institutional partnerships, student exchange trends, and international academic collaboration between the United States and China.",
    zhTitle: "中美教育趋势",
    zhDesc: "聚焦中美教育交流、国际合作、学生流动与全球教育趋势的分析与研究。"
  },
  {
    title: "Global Market Intelligence",
    desc: "Research and strategic insight focused on market expansion, localization strategy, consumer positioning, and cross-border business opportunities.",
    zhTitle: "全球市场洞察",
    zhDesc: "围绕市场进入、本土化战略、消费者定位与国际商业机会提供研究与战略支持。"
  },
  {
    title: "Media & Public Communication",
    desc: "Supporting organizations with bilingual communication strategy, media positioning, digital storytelling, and public-facing content development.",
    zhTitle: "媒体与公共传播",
    zhDesc: "帮助机构建立双语传播、媒体定位、数字内容与国际公共沟通能力。"
  },
  {
    title: "U.S. Market Expansion",
    desc: "Supporting organizations entering or expanding in the U.S. through research, strategic planning, and local market insights."
  },
  {
    title: "Educational Technology",
    desc: "Developing LMS, digital learning solutions, and training systems for schools and organizations adapting to modern learning environments."
  },
  {
    title: "Brand & Communication",
    desc: "Helping brands communicate clearly through bilingual strategy, media storytelling, public relations, and digital presence."
  }
];

const logoOptions = [
  {
    id: "orbital",
    mark: "◌",
    wordmark: "TRANSPAC",
    subtitle: "Global Strategy · Cross-Border Advisory",
    accent: "Inspired by international flow, connectivity, and trans-Pacific movement",
    style: "from-[#10213d] via-[#1f4d8b] to-[#6ea8ff]",
    design: "orbital"
  },
  {
    id: "gateway",
    mark: "⊡",
    wordmark: "TRANSPAC",
    subtitle: "International Consulting & Market Intelligence",
    accent: "A gateway between markets, institutions, and global opportunities",
    style: "from-[#14213d] via-[#274c77] to-[#d6b36a]",
    design: "gateway"
  },
  {
    id: "wave",
    mark: "≈",
    wordmark: "TRANSPAC",
    subtitle: "Global Expansion · Strategic Execution",
    accent: "Pacific-inspired movement, adaptability, and international reach",
    style: "from-[#0f172a] via-[#173b6b] to-[#4f83cc]",
    design: "wave"
  },
  {
    id: "classic",
    mark: "TP",
    wordmark: "TRANSPAC",
    subtitle: "Boutique Advisory · Washington, D.C.",
    accent: "Minimal executive identity for institutional consulting",
    style: "from-[#1f3767] via-[#14213d] to-[#0c1426]",
    design: "classic"
  }
];

const stats = [
  ["Washington, D.C.", "Headquarters"],
  ["U.S. & Global", "Project Scope"],
  ["Education + Consulting", "Core Sectors"],
  ["Bilingual", "English & Chinese Services"]
];

const testimonials = [
  {
    quote: "TransPac demonstrated a strong understanding of international communication, project structure, and cross-cultural coordination throughout the collaboration.",
    author: "International Education Partner",
    role: "Education & Exchange Sector"
  },
  {
    quote: "The team brought a professional combination of strategic thinking, U.S. market insight, and execution capability to the project.",
    author: "Business Advisory Client",
    role: "Market Expansion"
  },
  {
    quote: "Their ability to coordinate branding, media communication, and event operations made the collaboration highly efficient and well organized.",
    author: "Cultural & Media Collaborator",
    role: "International Events"
  }
];

const partners = [
  "Educational Institutions",
  "Business Organizations",
  "International Programs",
  "Media Platforms",
  "Cultural Institutions",
  "Strategic Advisory Partners"
];

const leaders = [
  {
    name: "Qibao Hou",
    role: "Managing Director · Business Development",
    image: "data:image/jpeg;base64,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",
    summary: "Oversees the company’s strategic direction, business development initiatives, international partnerships, and major commercial opportunities.",
    education: "Columbia Business School",
    degree: "Master of Science in Marketing",
    focus: "Business consulting, market expansion, commercial strategy, international business development, localization strategy, partnership negotiation."
  },
  {
    name: "Ruohan Li",
    role: "Director of Consulting & Strategy",
    image: "data:image/jpeg;base64,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",
    summary: "Leads consulting framework design, strategic analysis, market research, education consulting, and advisory deliverables for institutional and international projects.",
    education: "Columbia University Teachers College",
    degree: "Master of Arts in Sociology and Education, Concentration in Policy",
    focus: "Education consulting, international education planning, cross-cultural initiatives, brand strategy, program development, international communication."
  },
  {
    name: "Yunze Li",
    role: "Director of Operations & Client Services",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCAoICAoJCAgJCAgICQgICAgICAgICQgICAkJCQkJCQkJCg0KCwsKCgkKDg0IDQwMDAwNDhIQDQ4RDgsJGiExIDEiJSsBCwsLDw4PHBERHTMoIyg7MTEzMTE5MTMxMzMzMTMxMzExMTMxMzMxMzExMzEzMTMxMTExMzMxMTExMTExMTExMTExMf/AABEIAwICWAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA5EAACAQIEAwYEBgIDAQAAAAAAAQIDEQQFEiExBkETIlFhcYGRFDKhscEjQkJS0fAzYnKS4SRT/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAQEAAwEBAQEBAAAAAAAAAQIRITESMUFBE1Fx/9oADAMBAAIRAxEAPwD8QgiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGYAAAAAAAAAAjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMQAAAAAAAAAABGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAACMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZAAAAAAAAAAAACMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMQAAAAAAAAAAAGYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMQAAAAAAAAAAACIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZgAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMAAAAAAAAAAAAzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADzQAAAAAAAAAAAAAAAAAAAAGYAAAAAAAAAAAAzAAAAAAAAAAAAAAAAAAAAAAAAAAABb0QdVxeRi6NPlyKVRWnGt7Z8s9VmAAAAAAAAAAAAAAZAAAAAAAAAAAADMAAAAAAAAAAAAAAAAAAAAB0+0/xJY6z2dXqs5qS3+W99fM5GgAAAAAAAAAAAAAAAAAZgAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAFt/P7tO+pPmpR35pV+L+Zp+RzPGAAAAAAAAAAAAAAAAAAATAAAAAAAAAAAAARkAAAAAAAAAAAAAAAHpb6dfN0+dJa1c4XVZWWSvJt+zH1gAAAAAAAAAAAAAAAAAADIwAAAAAAAAAAAIwAAAAAAAAAAAAAAt43qqV3bNWnZsLGnZ1qTnGynN+W7PJ2twAAAAAAAAAAAAAAAAAAAAyAAAAAAAAAAAGYAAAAAAAAAAAGfSx0+n1utJzSbz8VmAAAAAAAAAAAAAAAAAAAAAAAAADMAAAAAAAAAYIAAAAAAAAAAAAALeOGrtW7dWoxlGnJc7b6/f9Rh7QAAAAAAAAAAAAAAAAAAAAAAAAAMQAAAAAAAAAAAQAAAAAAAAAAAAHY1j0bV9S6rOqU6UozhJ3nd6fUzAAAAAAAAAAAAAAAAAAAAAAAAAAAADGAAAAAAAAAAAARkAAAAAAAAAAW1bqbaR6bWrSpKk6MVONr78m+S8OX1nY6AAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAyAAAAAAAAAD21HqfW6pVqTqUacnJ/Z2e1rJ6d9mOAAAAAAAAAAAAAAAAAAAAAAAAAAAACMMAAAAAAAAAAAAGMAAAAANfQfTtF0e0+qVKlGKm/DfZ5sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxAAAAAAAAAAAAERAAAAADp6nrFvUXRbVaqTqVZxTV3u9K2uujYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMQAAAAAAAAAACMAAAAAO3hrVqV1K1bUoUoxSSd1t/9vneozAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGYAAAAAAAAAAAACNQAAAD3VNV1+5qaWojXr1KUpSjjJ3W3v8AjbXp2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAZAAAAHpba3TtWqSqdWpQpKUnfK0vY5mcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGQAAAAAAAAAABGAAABdntb9N0e1U6k+qb8s7vL+eM8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZgAAAAAAAAAAjAAAdXWfTbR6bRqNSpUnKjKTfZP8AZ8zPqfQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMAAAAAAAAAIwAABx9U1XVLPp1tTqU6sZSTbZ3W0vH19vtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAAAAAAZgAB7WZ6x1etVqVKjJwU7a+2+etAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMAAAAAAABGQAAAB1tW1+6jaVapOq1Kk6sfV96Wl/wAzs7u6eHIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMAAAAAAAAAYAAAABouqXbV0WlN1KcZQpUm7+QWn4+R0+2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgAAAAAAACI4AAABraRrO1PT6dWpVqVOUlOM8nm3u/wB5kgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGQAAAAAAGYAADd1a2l1DStWoyjJKUZRivZ72tfXh2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIwAAAAAAAIgAAds9W0Vp6XaTqVYnKNSjGKL7L8z5vyM+zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGQAAAAAAIwAAR19a1e4j6fbpVKlTc5SlH2b+f8seyswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMAAAAAAjEADX1L0nVbW7S6dWnGNJ0YRj7Sfv4chmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIwAAAAMQAAc7TtG7K6ZWo0p0YUpycYOW5yT8jP0wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjAAAAGYAAE9n0Z6l7G1GlTUoRkkm/KN9mAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMAAAAGYAAF2Oo6xvVXU6dSoQqjFSjKzbl6eMrp2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARkAAAAAZAAAtT1a0a9Ht1nVq0YpVJJPw2cWHrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjAAAAGIAAO1i6juttKx6pZrUp0pQlGnJrKz1/wBngzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgAAAAjEAB2Oq6bZdTr1GlSlSclOLbZ8mns2xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZAAAABGAAG7pGp7HbXLqFSlSpqVYySd7T2+g4MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMAAAAGMAALdNVdX03RqlKlOk4pKjHGTb8U8GgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzAAAAAGjrgADS0e0vhbVGlSlUlGSSbydnnqAAAAAAAGYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAa+zH02AAAAGho1XWN9TpVKlKMkcZJ+N9GPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjS38QAAADQ0bUNfV6NKlKpOSXE7rvn2vndAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADaHJwAAAAVs+rW6fbqNSjSlSjKEnJt9ndYzzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGxK5OAAE93S9Pvq+oUp0akpQ3sksr7MfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGzo2oc5gADfbV9O7WtTqUqUac4qT8k3+aZ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHYx9T5ZgAA0dG07d9OtVqUqkpVqUlzvljxNIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAAAAAAAAc/VtZuOqsWpUpUpRjGEl7LZnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGYAAAAAP/aafU+z5rM1pyfq1Ypcq5J+2ZiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMMAABr6U9tPYwKcJwpv2YX7LxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZgAB86aX5oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARM4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAABGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==",
    summary: "Manages project execution, operational coordination, client communication, financial planning support, and service delivery quality across consulting and event-based projects.",
    education: "Johns Hopkins University SAIS",
    degree: "Master of Arts in International Economics and Finance",
    focus: "International business consulting, strategic planning, financial analysis, operational management, cross-border project coordination."
  }
];

const Button = ({ children, variant = "primary", className = "", onClick }) => {
  const base = "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition duration-200";
  const styles =
    variant === "outline"
      ? "border border-[#14213d]/20 bg-white/40 text-[#14213d] hover:bg-white"
      : "bg-[#14213d] text-white hover:bg-[#0d172c]";

  return <button onClick={onClick} className={`${base} ${styles} ${className}`}>{children}</button>;
};

const Card = ({ children, className = "" }) => (
  <div className={`rounded-[2rem] border border-[#14213d]/10 bg-white/70 shadow-sm ${className}`}>{children}</div>
);

const Portrait = ({ person, index, isZh = false }) => (
  <div className="rounded-[2rem] border border-[#14213d]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
    <div className="mb-6 overflow-hidden rounded-[1.75rem] border border-[#14213d]/10 bg-[#1d3b73] shadow-sm">
      <img
        src={person.image}
        alt={person.name}
        className={`h-[340px] w-full object-cover ${index === 2 ? "object-top" : "object-center"}`}
        onError={(event) => {
          event.currentTarget.style.display = "none";
          const fallback = event.currentTarget.nextElementSibling;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div className="hidden h-[340px] w-full items-center justify-center bg-gradient-to-br from-[#14213d] to-[#31558e] text-center text-white">
        <div>
          <div className="text-4xl font-semibold tracking-wide">{person.name.split(" ").map((part) => part[0]).join("")}</div>
          <div className="mt-3 text-xs uppercase tracking-[0.25em] text-white/55">{isZh ? "肖像" : "Portrait"}</div>
        </div>
      </div>
    </div>
    <div className="flex items-start gap-4">
      
      <div>
        <div className="text-2xl font-semibold">{person.name}</div>
        <div className="mt-2 text-sm uppercase tracking-[0.18em] text-[#d6a94f]">{person.role}</div>
      </div>
    </div>
    <div className="mt-5 text-sm leading-7 text-[#14213d]/70">{person.summary}</div>
    <div className="mt-6 space-y-3 border-t border-[#14213d]/10 pt-5 text-sm text-[#14213d]/65">
      <div><span className="font-semibold text-[#14213d]">{isZh ? "教育背景：" : "Education:"}</span> {person.education}</div>
      <div><span className="font-semibold text-[#14213d]">{isZh ? "学位：" : "Degree:"}</span> {person.degree}</div>
      <div><span className="font-semibold text-[#14213d]">{isZh ? "专长领域：" : "Focus Areas:"}</span> {person.focus}</div>
    </div>
  </div>
);

const selfTests = () => {
  console.assert(services.length === 4, "Expected four service sections");
  console.assert(
    services.every((service) => service.title && service.cn && service.items.length === 4),
    "Each service should have a title, Chinese subtitle, and four items"
  );
  console.assert(process.length === 4, "Expected four process steps");
  console.assert(projects.length === 3, "Expected three selected project cards");
  console.assert(reasons.length >= 4, "Expected at least four why Transpac reasons");
  console.assert(insights.length >= 3, "Expected at least three insight cards");
  console.assert(stats.length === 4, "Expected four company stats");
  console.assert(testimonials.length === 3, "Expected three testimonials");
  console.assert(partners.length === 6, "Expected six partner placeholders");
  console.assert(leaders.length === 3, "Expected three leadership profiles");
  console.assert(leaders.every((leader) => leader.name && leader.role && leader.image), "Each leader should include name, role, and image path");
  console.assert(!leaders.some((leader) => String(leader.name).includes("undefined")), "Leader names should be static and not depend on component state");
  console.assert(strengths.length >= 5, "Expected at least five strengths");
  console.assert(typeof Icon({ type: "unknown" }) === "object", "Unknown icon should safely fall back to globe");
};

selfTests();

export default function TranspacWebsite() {
  const [lang, setLang] = useState("en");
  const [activeLogo] = useState(3);
  const isZh = lang === "zh";

  const text = {
    nav: isZh
      ? ["服务", "关于", "案例", "流程", "优势", "联系"]
      : ["Services", "About", "Projects", "Process", "Why Us", "Contact"],
    newsTitle: isZh ? "最新洞察" : "Latest Insights",
    newsDesc: isZh
      ? "围绕国际教育、美国市场、品牌传播与跨境战略的专业观察。"
      : "Professional perspectives on international education, U.S. markets, branding, and cross-border strategy.",
    start: isZh ? "开始项目" : "Start a Project",
    badge: isZh ? "中英双语 · 美国与全球机会战略咨询" : "EN / 中文 · Strategic Consulting for U.S. & Global Opportunities",
    heroTitle: isZh
      ? "以现代咨询连接战略、教育与国际机会。"
      : "Connecting strategy, education, and international opportunity through modern consulting.",
    heroDesc: isZh
      ? "TransPac Inc. 是一家总部位于华盛顿特区的国际咨询公司，专注于战略咨询、教育咨询、市场调研、商业拓展、品牌战略与高端项目执行，服务美国及全球市场中的机构、企业与品牌。"
      : "TransPac Inc. is a Washington, D.C.-based international consulting firm focused on strategic advisory, education consulting, market research, business expansion, branding strategy, and high-level project execution. The firm supports organizations, institutions, and brands navigating opportunities across the United States and global markets.",
    heroSub: isZh
      ? "TransPac Inc. 总部位于华盛顿特区，专注于商业咨询、教育咨询、国际项目、品牌战略与高端活动执行，致力于帮助机构、企业与国际合作项目建立长期增长与国际影响力。"
      : "TransPac Inc. is headquartered in Washington, D.C. and helps organizations build long-term growth, international partnerships, and professional market presence through strategy and execution.",
    explore: isZh ? "查看服务" : "Explore Services",
    contact: isZh ? "联系我们" : "Contact Us",
    book: isZh ? "预约咨询" : "Book a Consultation",
    core: isZh ? "核心优势" : "Core Advantages",
    strategy: isZh ? "战略 + 执行" : "Strategy + Execution",
    servicesTitle: isZh ? "我们提供的咨询服务" : "What we consult on",
    servicesDesc: isZh
      ? "我们的服务面向教育机构、企业、非营利组织、创业团队、政府相关机构与国际项目团队，为其在美国及国际市场提供战略支持。"
      : "Our services are designed for educational institutions, businesses, government organizations, nonprofit organizations, founders, and project teams seeking strategic support in the U.S. and international markets.",
    aboutTitle: isZh ? "连接市场与机会的咨询伙伴。" : "A consulting partner for a more connected market.",
    aboutP1: isZh
      ? "TransPac Inc. 创立于 2024 年，总部位于华盛顿特区，毗邻白宫及主要国际机构。公司专注于教育科技、战略咨询、市场调研、品牌传播与跨境合作，结合美国本土市场洞察、中英双语沟通能力与国际项目经验，帮助客户识别并实现增长机会。"
      : "Founded in 2024 in Washington, D.C., and headquartered near the White House and major international institutions, TransPac Inc. operates as an international consulting and project services company with expertise in educational technology, strategic consulting, market research, branding, and cross-border cooperation. The company combines U.S. market insight, bilingual communication capability, and international project experience to support organizations navigating growth and expansion opportunities.",
    aboutP2: isZh
      ? "TransPac Inc. 服务教育机构、企业、非营利组织与国际合作伙伴，提供商业战略、学习管理系统（LMS）、市场拓展、品牌建设与项目执行等定制化解决方案。"
      : "TransPac Inc. works with educational institutions, corporations, nonprofit organizations, and international partners to develop customized solutions in business strategy, learning management systems (LMS), market expansion, branding, and project execution. The company emphasizes flexibility, regional market expertise, and practical implementation support.",
    formTitle: isZh ? "一起推进你的下一个项目。" : "Let’s build your next project together.",
    formDesc: isZh
      ? "告诉我们你的机构、项目或市场问题。TransPac 可以帮助你梳理战略、制定计划并推进执行。"
      : "Tell us about your organization, project, or market question. TransPac can help you shape the strategy, build the plan, and execute the next step.",
    sectionServices: isZh ? "服务" : "Services",
    sectionAbout: isZh ? "关于 TransPac" : "About TransPac",
    sectionProjects: isZh ? "精选案例" : "Selected Projects",
    projectsTitle: isZh ? "可展示的代表性项目经验。" : "Representative work we can showcase.",
    projectsDesc: isZh
      ? "这里展示 TransPac 在教育交流、媒体活动、商业咨询、市场研究与品牌策划方面的代表性项目能力。"
      : "This section highlights TransPac’s representative capabilities across education exchange, media events, business consulting, market research, and branding strategy.",
    processLabel: isZh ? "流程" : "Process",
    processTitle: isZh ? "从信息洞察到战略制定，再到项目执行。" : "From information to strategy to execution.",
    leadershipLabel: isZh ? "领导团队" : "Leadership Team",
    leadershipTitle: isZh ? "国际视野与专业执行力并重的团队。" : "Experienced leaders. Global perspective.",
    leadershipDesc: isZh
      ? "TransPac 的领导团队结合咨询、国际教育、商业战略、经济金融、品牌传播与项目执行经验，服务美国及全球市场中的客户。"
      : "TransPac’s leadership team combines expertise in consulting, international education, business strategy, economics, branding, and project execution across U.S. and global markets.",
    networkTitle: isZh ? "灵活专业网络" : "Extended Professional Network",
    networkDesc: isZh
      ? "除核心领导团队外，公司还会根据项目需求，与咨询顾问、研究人员、媒体制作人、活动专家及外部合作伙伴组成灵活项目团队。"
      : "In addition to the leadership team, the company works with a flexible network of consultants, researchers, media producers, event specialists, and external partners based on project needs.",
    whyLabel: isZh ? "为什么选择 TransPac" : "Why TransPac",
    whyTitle: isZh ? "为需要实际战略与长期增长的机构而设。" : "Built for organizations seeking practical strategy and long-term growth.",
    whyDesc: isZh
      ? "TransPac 结合市场研究、战略咨询、教育科技、品牌传播与跨境项目执行能力，帮助客户应对复杂商业与国际环境。"
      : "TransPac combines market research, strategic consulting, educational technology expertise, branding support, and cross-border project execution to help clients navigate complex business and international environments.",
    trustedLabel: isZh ? "合作网络" : "Trusted Network",
    trustedTitle: isZh ? "围绕长期合作与项目协同建立网络。" : "Built around collaboration and long-term partnerships.",
    trustedDesc: isZh
      ? "TransPac 横跨教育、咨询、媒体与国际交流领域，通过战略合作关系与项目制协作支持客户发展。"
      : "TransPac works across education, consulting, media, and international engagement sectors through strategic relationships and project-based collaboration.",
    testimonialLabel: isZh ? "客户视角" : "Client Perspective",
    testimonialTitle: isZh ? "以信任与执行力为核心的专业支持。" : "Professional support designed around trust and execution.",
    ctaBadge: isZh ? "精品咨询 · 国际视野 · 战略执行" : "Boutique Consulting · International Perspective · Strategic Execution",
    ctaTitle: isZh ? "帮助机构应对增长、传播与国际机会。" : "Helping organizations navigate growth, communication, and international opportunities.",
    ctaDesc: isZh
      ? "从市场战略、教育科技到品牌传播与项目执行，TransPac 以实用咨询和跨文化经验支持客户发展。"
      : "From market strategy and educational technology to branding and project execution, TransPac supports clients with practical consulting and cross-cultural expertise.",
    formLabel: isZh ? "联系" : "Contact",
    formName: isZh ? "姓名" : "Name",
    formEmail: isZh ? "邮箱" : "Email",
    formCompany: isZh ? "公司 / 机构" : "Company / Organization",
    formMessage: isZh ? "请简单介绍你的项目或咨询需求。" : "Tell us briefly about your project or question.",
    formNote: isZh
      ? "该表单目前为前端咨询入口模块。正式上线后，可连接企业邮箱、CRM系统或其他客户管理工具。"
      : "This form is currently designed as a professional consultation inquiry module. The live production version can later be connected to email systems, CRM platforms, or direct scheduling tools as the company expands.",
    exploreServices: isZh ? "查看服务" : "Explore Our Services",
    footerServices: isZh
      ? "教育科技 · 战略咨询 · 市场调研 · 品牌传播 · 跨境商业"
      : "Educational Technology · Strategic Consulting · Market Research · Branding · Cross-Border Business"
  };

  const statsDisplay = isZh
    ? [["华盛顿特区", "公司总部"], ["美国与全球", "项目范围"], ["教育 + 咨询", "核心领域"], ["双语服务", "英文与中文"]]
    : stats;

  const currentLogo = logoOptions[activeLogo];
  const currentLogoSubtitle = isZh ? "精品咨询 · 华盛顿特区" : currentLogo.subtitle;
  const currentLogoAccent = isZh ? "面向机构客户的极简高端咨询品牌识别" : currentLogo.accent;

  const strengthItems = isZh
    ? [
        "美国本土市场洞察与信息咨询能力",
        "跨境商业与国际教育项目经验",
        "中英双语沟通与国际战略能力",
        "媒体传播、品牌塑造与叙事能力",
        "从概念到落地的项目执行能力",
        "战略合作资源与区域市场网络"
      ]
    : strengths;

  const serviceItems = services.map((service, index) => {
    const zhItems = [
      ["学生访学项目", "学校合作项目", "国际教育项目", "文化交流设计"],
      ["美国市场调研", "商业计划书制定", "合作伙伴对接", "市场进入战略"],
      ["品牌定位", "中英文内容", "宣传视频", "社交媒体策略"],
      ["论坛与招待会", "文化活动", "赞助方案", "项目执行"]
    ];
    const zhDesc = [
      "我们为学校、机构与国际项目团队设计学生访学、学校合作、文化交流与国际教育项目。",
      "我们帮助机构理解美国市场、制定商业计划、完善本土化策略并建立可执行的增长路径。",
      "我们为品牌提供定位、双语内容、媒体策略、视频传播与社交媒体增长支持。",
      "我们策划并执行论坛、晚宴、展映、文化节、商务活动与赞助合作方案。"
    ];
    return {
      ...service,
      displayTitle: isZh ? service.cn : service.title,
      displaySubtitle: "",
      displayDesc: isZh ? zhDesc[index] : service.desc,
      displayItems: isZh ? zhItems[index] : service.items
    };
  });

  const projectItems = projects.map((project, index) => {
    const zhDesc = [
      "设计并协调跨文化教育交流项目，将美国学生与中国高校、文化机构和沉浸式学习体验连接起来。",
      "围绕媒体活动、文化论坛、VIP招待会与国际交流项目，提供战略策划、双语协调、赞助结构设计与执行支持。",
      "通过市场分析、商业计划、本土化策略、品牌方向与合作伙伴拓展，支持机构进入或拓展美国市场。"
    ];
    const zhTags = ["教育咨询", "活动与媒体", "商业咨询"];
    return {
      ...project,
      displayTitle: isZh ? project.cn : project.title,
      displaySubtitle: "",
      displayDesc: isZh ? zhDesc[index] : project.desc,
      displayTag: isZh ? zhTags[index] : project.tag
    };
  });

  const processItems = process.map(([num, title, desc], index) => {
    const zhTitles = ["需求诊断", "战略规划", "项目执行", "长期增长"];
    const zhDescs = [
      "深入了解客户目标、受众、市场环境与当前挑战。",
      "制定清晰的咨询方案、服务路径与传播方向。",
      "协调资源、管理项目进度，并推动实际成果落地。",
      "复盘项目成果、优化策略，并支持客户长期发展。"
    ];
    return [num, isZh ? zhTitles[index] : title, isZh ? zhDescs[index] : desc];
  });

  const insightItems = insights.map((item, index) => {
    const zhTitles = ["中美教育趋势", "全球市场洞察", "媒体与公共传播", "美国市场拓展", "教育科技", "品牌与传播"];
    const zhDescs = [
      "聚焦中美教育交流、国际合作、学生流动与全球教育趋势的分析与研究。",
      "围绕市场进入、本土化战略、消费者定位与国际商业机会提供研究与战略支持。",
      "帮助机构建立双语传播、媒体定位、数字内容与国际公共沟通能力。",
      "通过研究、战略规划与本土市场洞察，支持机构进入或拓展美国市场。",
      "为学校与机构开发学习管理系统、数字化学习方案与培训系统。",
      "通过双语策略、媒体叙事、公关传播与数字化呈现，帮助品牌建立清晰表达。"
    ];
    return {
      ...item,
      displayTitle: isZh ? zhTitles[index] : item.title,
      displayDesc: isZh ? zhDescs[index] : item.desc
    };
  });

  const reasonItems = reasons.map(([title, desc], index) => {
    const zhTitles = ["美国本土洞察", "双语沟通优势", "战略与执行并重", "跨领域经验", "华盛顿特区区位优势", "精品咨询灵活性"];
    const zhDescs = [
      "我们理解美国市场信息、商业文化、本土沟通习惯与实际项目需求。",
      "我们帮助客户在中英文语境中清晰表达，从战略文件到对外内容都保持专业一致。",
      "我们不只提供想法，也帮助客户搭建方案、协调资源并推进落地。",
      "我们的项目连接教育、商业、媒体、文化、活动与国际合作。",
      "公司位于华盛顿特区核心区域，贴近政策、教育与国际交流资源。",
      "我们结合精品咨询公司的灵活性与实际项目管理能力，为客户提供个性化支持。"
    ];
    return [isZh ? zhTitles[index] : title, isZh ? zhDescs[index] : desc];
  });

  const partnerItems = isZh
    ? ["教育机构", "商业机构", "国际项目", "媒体平台", "文化机构", "战略咨询伙伴"]
    : partners;

  const testimonialItems = testimonials.map((item, index) => {
    const zhQuotes = [
      "TransPac 在合作过程中展现了对国际传播、项目结构与跨文化协调的深刻理解。",
      "团队将战略思维、美国市场洞察与项目执行能力有效结合，为项目提供了专业支持。",
      "他们在品牌、媒体传播与活动执行方面的协调能力，让整个合作高效且有条理。"
    ];
    const zhAuthors = ["国际教育合作伙伴", "商业咨询客户", "文化与媒体合作方"];
    const zhRoles = ["教育与交流领域", "市场拓展", "国际活动"];
    return {
      quote: isZh ? zhQuotes[index] : item.quote,
      author: isZh ? zhAuthors[index] : item.author,
      role: isZh ? zhRoles[index] : item.role
    };
  });

  const leaderItems = leaders.map((leader, index) => {
    const zhRoles = ["董事总经理 · 商务发展", "咨询与战略总监", "运营与客户服务总监"];
    const zhSummaries = [
      "负责公司战略方向、业务发展、客户拓展、国际合作伙伴关系与重要商业谈判。",
      "负责咨询服务体系设计、战略分析、市场研究、教育咨询与国际项目顾问成果交付。",
      "负责项目执行、运营协调、客户沟通、财务规划支持及咨询与活动项目的交付质量管理。"
    ];
    const zhEducation = ["哥伦比亚商学院", "哥伦比亚大学教育学院", "约翰霍普金斯大学高级国际研究学院"];
    const zhDegree = ["市场营销理学硕士", "社会学与教育文学硕士，政策方向", "国际经济与金融文学硕士"];
    const zhFocus = [
      "商业咨询、市场拓展、商业战略、国际业务发展、本土化策略与合作谈判。",
      "教育咨询、国际教育规划、跨文化项目、品牌策略、项目开发与国际传播。",
      "国际商业咨询、战略规划、财务分析、运营管理与跨境项目协调。"
    ];
    const zhNames = ["侯淇宝", "李若涵", "李昀泽"];
    return {
      ...leader,
      name: isZh ? zhNames[index] : leader.name,
      role: isZh ? zhRoles[index] : leader.role,
      summary: isZh ? zhSummaries[index] : leader.summary,
      education: isZh ? zhEducation[index] : leader.education,
      degree: isZh ? zhDegree[index] : leader.degree,
      focus: isZh ? zhFocus[index] : leader.focus
    };
  });

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#14213d]">
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatSlow { 0%, 100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-18px) scale(1.03); } }
        @keyframes glowPulse { 0%, 100% { opacity: .35; } 50% { opacity: .75; } }
        .animate-fade-up { animation: fadeUp .8s ease both; }
        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .animate-glow-pulse { animation: glowPulse 5s ease-in-out infinite; }
      `}</style>
      <header className="sticky top-0 z-50 border-b border-[#14213d]/10 bg-[#f7f4ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[#14213d] shadow-lg`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${currentLogo.style}`} />

              {currentLogo.design === "orbital" && (
                <>
                  <div className="absolute h-8 w-8 rounded-full border border-white/30" />
                  <div className="absolute h-4 w-4 rounded-full bg-[#d6b36a]" />
                  <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-white" />
                </>
              )}

              {currentLogo.design === "gateway" && (
                <>
                  <div className="absolute inset-2 rounded-lg border border-white/20" />
                  <div className="relative text-sm font-semibold tracking-[0.18em] text-[#d6b36a]">
                    T
                  </div>
                </>
              )}

              {currentLogo.design === "wave" && (
                <div className="relative text-lg font-light tracking-[0.2em] text-[#d6b36a]">
                  ≈
                </div>
              )}

              {currentLogo.design === "classic" && (
                <div className="relative text-sm font-semibold tracking-[0.18em] text-[#d6b36a]">
                  TP
                </div>
              )}
            </div>
            <div>
              <div className="text-xl font-semibold tracking-[0.28em] uppercase text-[#14213d]">
                {currentLogo.wordmark}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.30em] text-[#14213d]/55">
                {currentLogoSubtitle}
              </div>
              <div className="mt-1 text-[9px] tracking-[0.18em] text-[#14213d]/35">
                {currentLogoAccent}
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#14213d]/70 md:flex">
            <button onClick={() => setLang(isZh ? "en" : "zh")} className="rounded-full border border-[#14213d]/10 bg-white px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#14213d] shadow-sm transition hover:bg-[#14213d] hover:text-white">
              {isZh ? "English" : "中文"}
            </button>
            <a href="#services" className="hover:text-[#14213d]">{text.nav[0]}</a>
            <a href="#about" className="hover:text-[#14213d]">{text.nav[1]}</a>
            <a href="#projects" className="hover:text-[#14213d]">{text.nav[2]}</a>
            <a href="#process" className="hover:text-[#14213d]">{text.nav[3]}</a>
            <a href="#insights" className="hover:text-[#14213d]">{isZh ? "洞察" : "Insights"}</a>
            <a href="#why" className="hover:text-[#14213d]">{text.nav[4]}</a>
            <a href="#contact" className="hover:text-[#14213d]">{text.nav[5]}</a>
          </nav>
          <Button className="hidden md:inline-flex">{text.start}</Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-24 md:py-32">
          <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-[#d6b36a]/25 blur-3xl animate-float-slow" />
          <div className="absolute bottom-[-160px] right-[-100px] h-96 w-96 rounded-full bg-[#14213d]/10 blur-3xl animate-glow-pulse" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#14213d]/15 bg-white/50 px-4 py-2 text-sm text-[#14213d]/70 shadow-sm">
                <Icon type="spark" size={16} /> {text.badge}
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                {text.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#14213d]/70">
                {text.heroDesc}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#14213d]/60">
                {text.heroSub}
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {statsDisplay.map(([number, label]) => (
                  <div key={number} className="rounded-2xl border border-[#14213d]/10 bg-white/50 p-5 backdrop-blur-sm">
                    <div className="text-xl font-semibold text-[#14213d]">{number}</div>
                    <div className="mt-1 text-sm text-[#14213d]/60">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button>
                  {text.explore} <Icon type="arrow" className="ml-2" size={18} />
                </Button>
                <Button variant="outline">{text.contact}</Button>
              </div>
            </div>
            <Card className="border-0 bg-gradient-to-br from-[#14213d] via-[#1c3158] to-[#243f73] text-white shadow-2xl animate-fade-up overflow-hidden relative">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#d6b36a,_transparent_40%)]" />
              <div className="relative p-8 md:p-10">
                <div className="mb-10 flex items-center justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-[0.28em] text-white/70">{text.core}</div>
                    <div className="mt-2 text-2xl font-semibold text-white">{text.strategy}</div>
                  </div>
                  <Icon type="globe" className="text-[#d6b36a]" size={34} />
                </div>
                <div className="space-y-5">
                  {strengthItems.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/8 p-4 text-sm leading-6 text-white/90 backdrop-blur-sm">
                      <Icon type="check" className="mt-0.5 shrink-0 text-[#d6b36a]" size={18} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="services" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6a94f]">{text.sectionServices}</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{text.servicesTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-[#14213d]/65">
                {text.servicesDesc}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {serviceItems.map((service) => (
                <Card key={service.title} className="transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#14213d] text-white">
                      <Icon type={service.icon} size={26} />
                    </div>
                    <h3 className="text-2xl font-semibold">{service.displayTitle}</h3>
                    {service.displaySubtitle && (
                      <div className="mt-1 text-base font-medium text-[#d6a94f]">
                        {service.displaySubtitle}
                      </div>
                    )}
                    <p className="mt-4 leading-7 text-[#14213d]/65">{service.displayDesc}</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.displayItems.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-[#14213d]/70">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#d6a94f]" /> {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white/55 px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6a94f]">{text.sectionAbout}</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{text.aboutTitle}</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-[#14213d]/70">
              <p>{text.aboutP1}</p>
              <p>{text.aboutP2}</p>
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6a94f]">{text.sectionProjects}</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{text.projectsTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-[#14213d]/65">
                {text.projectsDesc}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {projectItems.map((project) => (
                <Card key={project.title} className="overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="h-36 bg-gradient-to-br from-[#14213d] via-[#24365f] to-[#d6b36a]" />
                  <div className="p-7">
                    <div className="mb-4 inline-flex rounded-full bg-[#14213d]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#14213d]/65">
                      {project.displayTag}
                    </div>
                    <h3 className="text-xl font-semibold">{project.displayTitle}</h3>
                    {project.displaySubtitle && (
                      <div className="mt-1 text-sm font-medium text-[#d6a94f]">
                        {project.displaySubtitle}
                      </div>
                    )}
                    <p className="mt-4 text-sm leading-6 text-[#14213d]/65">{project.displayDesc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="bg-[#14213d] px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6b36a]">
                {isZh ? "洞察与研究" : "Insights & Research"}
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                {isZh ? "战略、传播与国际项目交汇的核心领域。" : "Areas where strategy, communication, and execution intersect."}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {insightItems.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:bg-white/10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6b36a] text-[#14213d]">
                    <Icon type="spark" size={20} />
                  </div>
                  <h3 className="text-2xl font-semibold">
                    {item.displayTitle}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {item.displayDesc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-white/45 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6a94f]">{text.processLabel}</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{text.processTitle}</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              {processItems.map(([num, title, desc]) => (
                <Card key={num}>
                  <div className="p-7">
                    <div className="text-3xl font-semibold text-[#d6a94f]">{num}</div>
                    <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#14213d]/65">{desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#14213d]/5 bg-white/60 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d6a94f]">{text.leadershipLabel}</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{text.leadershipTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-[#14213d]/65">
                {text.leadershipDesc}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {leaderItems.map((person, index) => (
                <Portrait key={person.name} person={person} index={index} isZh={isZh} />
              ))}
            </div>
            <div className="mt-10 rounded-[2rem] border border-[#14213d]/10 bg-[#14213d] p-8 text-white shadow-xl">
              <div className="text-lg font-semibold">{text.networkTitle}</div>
              <p className="mt-4 max-w-5xl text-base leading-8 text-white/75">
                {text.networkDesc}
              </p>
            </div>
          </div>
        </section>

        <section id="why" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6a94f]">{text.whyLabel}</div>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{text.whyTitle}</h2>
                <p className="mt-5 text-lg leading-8 text-[#14213d]/65">
                  {text.whyDesc}
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {reasonItems.map(([title, desc]) => (
                  <Card key={title}>
                    <div className="p-7">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#14213d] text-white">
                        <Icon type="check" size={19} />
                      </div>
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#14213d]/65">{desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#14213d]/5 bg-[#faf7f2] px-6 py-20">
          <div className="mx-auto mb-16 max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6a94f]">
                {text.newsTitle}
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                {isZh ? "观点、趋势与国际市场观察。" : "Ideas, trends, and international market perspectives."}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#14213d]/65">
                {text.newsDesc}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {insightItems.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-[#14213d]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-6 inline-flex rounded-full bg-[#14213d]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#14213d]/60">
                    {isZh ? "研究报告" : "Insight Report"}
                  </div>
                  <h3 className="text-2xl font-semibold">
                    {item.displayTitle}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#14213d]/65">
                    {item.displayDesc}
                  </p>
                  <button className="mt-8 inline-flex items-center text-sm font-semibold text-[#14213d] transition hover:text-[#d6a94f]">
                    {isZh ? "阅读更多" : "Read More"}
                    <Icon type="arrow" className="ml-2" size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6a94f]">{text.trustedLabel}</div>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{text.trustedTitle}</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#14213d]/60">
                {text.trustedDesc}
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {partnerItems.map((partner) => (
                <div key={partner} className="flex h-28 items-center justify-center rounded-[2rem] border border-[#14213d]/10 bg-white/70 text-center text-sm font-medium text-[#14213d]/55 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6a94f]">{text.testimonialLabel}</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{text.testimonialTitle}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonialItems.map((item) => (
                <div key={item.author} className="rounded-[2rem] border border-[#14213d]/10 bg-[#f8f5ef] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-6 text-5xl leading-none text-[#d6a94f]">“</div>
                  <p className="text-base leading-8 text-[#14213d]/70">{item.quote}</p>
                  <div className="mt-8 border-t border-[#14213d]/10 pt-5">
                    <div className="font-semibold text-[#14213d]">{item.author}</div>
                    <div className="mt-1 text-sm text-[#14213d]/50">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#14213d] px-6 py-24 text-white">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#d6b36a]/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 backdrop-blur-sm">
              <Icon type="spark" size={15} /> {text.ctaBadge}
            </div>
            <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
              {text.ctaTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              {text.ctaDesc}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button className="bg-[#d6b36a] text-[#14213d] hover:bg-[#caa85f]">{text.contact}</Button>
              <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">{text.exploreServices}</Button>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-24 pt-10">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#14213d] p-8 text-white shadow-2xl md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6b36a]">{text.formLabel}</div>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{text.formTitle}</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  {text.formDesc}
                </p>
              </div>
              <div className="rounded-[2rem] bg-white/10 p-7 text-white">
                <div className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none" placeholder={text.formName} />
                    <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none" placeholder={text.formEmail} />
                  </div>
                  <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none" placeholder={text.formCompany} />
                  <select className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none">
                    <option className="text-[#14213d]">{isZh ? "教育与文化交流" : "Education & Cultural Exchange"}</option>
                    <option className="text-[#14213d]">{isZh ? "市场进入与商业咨询" : "Market Entry & Business Consulting"}</option>
                    <option className="text-[#14213d]">{isZh ? "品牌与媒体传播" : "Branding & Media Strategy"}</option>
                    <option className="text-[#14213d]">{isZh ? "活动策划与项目执行" : "Event Planning & Project Management"}</option>
                    <option className="text-[#14213d]">{isZh ? "暂不确定" : "Not sure yet"}</option>
                  </select>
                  <textarea className="min-h-28 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none" placeholder={text.formMessage} />
                  <div className="space-y-3 text-sm text-white/70">
                    <div className="flex items-center gap-3">
                      <Icon type="mail" className="text-[#d6b36a]" size={18} />
                      contact@transpacintl.com
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon type="location" className="text-[#d6b36a]" size={18} />
                      1775 Pennsylvania Ave NW. Suite 225, Washington, DC 20006
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#d6b36a] text-[10px] font-bold text-[#14213d]">☎</span>
                      805-284-7275
                    </div>
                  </div>
                  <button className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#d6b36a] px-7 py-3 text-sm font-semibold text-[#14213d] transition hover:bg-[#c9a14d]">
                    {text.contact} <Icon type="arrow" className="ml-2" size={18} />
                  </button>
                  <p className="text-xs leading-5 text-white/45">
                    {text.formNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#14213d]/10 bg-[#f8f5ef] px-6 py-10 text-sm text-[#14213d]/55">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <div>
            <div className="font-semibold tracking-[0.18em] text-[#14213d]">TRANSPAC INC.</div>
            <div className="mt-2">© 2024 TransPac Inc. All rights reserved.</div>
            <div className="mt-2">1775 Pennsylvania Ave NW. Suite 225 · Washington, DC 20006</div>
            <div className="mt-1">contact@transpacintl.com · 805-284-7275</div>
          </div>
          <div>{text.footerServices}</div>
        </div>
      </footer>
    </div>
  );
}
