import React, { useMemo, useState } from "react";

const TEAM_IMAGES = {
  qibao: "/qibao.jpg",
  ruohan: "/ruohan.jpg",
  yunze: "/yunze.pnp.jpg"
};

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

const Button = ({ children, variant = "primary", className = "", onClick }) => {
  const base = "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition duration-200";
  const styles =
    variant === "outline"
      ? "border border-[#14213d]/20 bg-white/40 text-[#14213d] hover:bg-white"
      : "bg-[#14213d] text-white hover:bg-[#0d172c]";

  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`rounded-[2rem] border border-[#14213d]/10 bg-white/70 shadow-sm ${className}`}>
    {children}
  </div>
);

const content = {
  en: {
    languageButton: "中文",
    nav: ["Services", "About", "Projects", "Process", "Insights", "Why Us", "Contact"],
    logoSubtitle: "Boutique Advisory · Washington, D.C.",
    logoAccent: "Minimal executive identity for international consulting",
    start: "Start a Project",
    badge: "Strategic Consulting • International Trade • Project Delivery",
    heroTitle: "Connecting Strategy, Trade, and Global Opportunities.",
    heroDesc:
"TransPac Inc. is a U.S.-based strategic consulting and international trade company helping organizations expand globally through business advisory, cross-border sourcing, procurement, supply chain coordination, and project delivery."
    heroSub:
      "We deliver practical solutions that connect strategy with execution, enabling organizations to grow through consulting, international trade, and cross-border partnerships."
    explore: "Explore Services",
    contact: "Contact Us",
    core: "Core Advantages",
    strategy: "Strategy + Execution",
    stats: [
["Washington, D.C.","Headquarters"],
["North America & Asia","Global Network"],
["Consulting + Trade","Core Services"],
["End-to-End","Project Delivery"]
]
    strengths: [
      "U.S. market insight and local information consulting",
      "Cross-border business and education expertise",
      "Bilingual communication and international strategy",
      "Media, branding, and storytelling capability",
      "Project planning from concept to execution",
      "Strategic partnership and regional market network"
    ],
    servicesLabel: "Services",
    servicesTitle: "What we consult on",
    servicesDesc:
      "Our services are designed for educational institutions, businesses, government organizations, nonprofit organizations, founders, and project teams seeking strategic support in the U.S. and international markets.",
    services: [
      {
        icon: "education",
        title: "Education & Cultural Exchange Consulting",
        desc: "We design international education programs, student exchange experiences, school partnerships, and cultural learning projects.",
        items: ["Student study tours", "School partnership programs", "International education projects", "Cultural exchange design"]
      },
      {
        icon: "business",
        title: "Market Entry & Business Consulting",
        desc: "We help organizations understand the U.S. market, develop business plans, and build practical growth strategies.",
        items: ["U.S. market research", "Business plan development", "Partner matching", "Market entry strategy"]
      },
      {
        icon: "media",
        title: "Branding & Media Strategy",
        desc: "We support brands with positioning, bilingual content, media strategy, video production, and social media growth.",
        items: ["Brand positioning", "Bilingual content", "Promotional videos", "Social media strategy"]
      },
      {
        icon: "event",
        title: "Event Planning & Project Management",
        desc: "We plan and execute forums, galas, screenings, cultural festivals, business events, and sponsorship campaigns.",
        items: ["Forums & receptions", "Cultural events", "Sponsorship decks", "Project execution"]
      },
{
  icon: "business",
  title: "International Business & Supply Chain Solutions",
  desc: "We support cross-border sourcing, supplier coordination, procurement planning, project implementation, and international business partnerships across the United States and Asia.",
  items: [
    "Supplier sourcing",
    "Procurement advisory",
    "Restaurant & hospitality projects",
    "Senior living project support"
  ]
}
],
    aboutLabel: "About TransPac",
    aboutTitle: "A consulting partner for a more connected market.",
    aboutP1:
      "Founded in 2024 in Washington, D.C., and headquartered near the White House and major international institutions, TransPac Inc. operates as an international consulting and project services company.",
    aboutP2:
      "The company combines U.S. market insight, bilingual communication capability, and international project experience to support organizations navigating growth and expansion opportunities.",
    projectsLabel: "Selected Projects",
    projectsTitle: "Representative work we can showcase.",
    projectsDesc:
      "This section highlights TransPac's representative capabilities across education exchange, media events, business consulting, market research, and branding strategy.",
    projects: [
      {
        title: "U.S.-China Student Exchange Initiative",
        desc: "Developed and coordinated a cross-cultural educational exchange program connecting U.S. students with academic institutions, cultural organizations, and immersive learning experiences in China.",
        tag: "Education Consulting"
      },
      {
        title: "International Media & Cultural Event Planning",
        desc: "Supported media-related events, cultural forums, VIP receptions, and international exchange activities through strategic planning, bilingual coordination, sponsorship structure, and project execution.",
        tag: "Events & Media"
      },
      {
        title: "U.S. Market Research & Brand Positioning",
        desc: "Provided consulting support for organizations entering the U.S. market through market analysis, business planning, localization strategy, branding direction, and partnership development.",
        tag: "Business Consulting"
      }
    ],
    insightsLabel: "Insights & Research",
    insightsTitle: "Areas where strategy, communication, and execution intersect.",
    latestInsights: "Latest Insights",
    latestInsightsTitle: "Ideas, trends, and international market perspectives.",
    latestInsightsDesc: "Professional perspectives on international education, U.S. markets, branding, and cross-border strategy.",
    readMore: "Read More",
    report: "Insight Report",
    insights: [
      ["U.S.-China Education Trends", "Analysis of educational mobility, institutional partnerships, student exchange trends, and international academic collaboration."],
      ["Global Market Intelligence", "Research and strategic insight focused on market expansion, localization strategy, consumer positioning, and business opportunities."],
      ["Media & Public Communication", "Supporting organizations with bilingual communication strategy, media positioning, digital storytelling, and public-facing content development."],
      ["U.S. Market Expansion", "Supporting organizations entering or expanding in the U.S. through research, strategic planning, and local market insights."],
      ["Educational Technology", "Developing learning systems, digital learning solutions, and training systems for schools and organizations."],
      ["Brand & Communication", "Helping brands communicate clearly through bilingual strategy, media storytelling, public relations, and digital presence."]
    ],
    processLabel: "Process",
    processTitle: "From information to strategy to execution.",
    process: [
      ["01", "Discovery", "Understand your goals, audience, market, and current challenges."],
      ["02", "Strategy", "Build a clear consulting plan, service roadmap, and communication direction."],
      ["03", "Execution", "Coordinate resources, manage projects, and deliver practical results."],
      ["04", "Growth", "Review outcomes, optimize strategy, and support long-term development."]
    ],
    leadershipLabel: "Leadership Team",
    leadershipTitle: "Experienced leaders. Global perspective.",
    leadershipDesc:
      "TransPac's leadership team combines expertise in consulting, international education, business strategy, economics, branding, and project execution across U.S. and global markets.",
    portrait: "Portrait",
    education: "Education:",
    degree: "Degree:",
    focus: "Focus Areas:",
    leaders: [
      {
        name: "Qibao Hou",
        role: "Managing Director · Business Development",
        image: TEAM_IMAGES.qibao,
        summary: "Oversees the company's strategic direction, business development initiatives, international partnerships, and major commercial opportunities.",
        education: "Columbia Business School",
        degree: "Master of Science in Marketing",
        focus: "Business consulting, market expansion, commercial strategy, international business development, localization strategy, partnership negotiation."
      },
      {
        name: "Ruohan Li",
        role: "Director of Consulting & Strategy",
        image: TEAM_IMAGES.ruohan,
        summary: "Leads consulting framework design, strategic analysis, market research, education consulting, and advisory deliverables for institutional and international projects.",
        education: "Columbia University Teachers College",
        degree: "Master of Arts in Sociology and Education, Concentration in Policy",
        focus: "Education consulting, international education planning, cross-cultural initiatives, brand strategy, program development, international communication."
      },
      {
        name: "Yunze Li",
        role: "Director of Operations & Client Services",
        image: TEAM_IMAGES.yunze,
        summary: "Manages project execution, operational coordination, client communication, financial planning support, and service delivery quality across consulting and event-based projects.",
        education: "Johns Hopkins University SAIS",
        degree: "Master of Arts in International Economics and Finance",
        focus: "International business consulting, strategic planning, financial analysis, operational management, cross-border project coordination."
      }
    ],
    networkTitle: "Extended Professional Network",
    networkDesc:
      "In addition to the leadership team, the company works with a flexible network of consultants, researchers, media producers, event specialists, and external partners based on project needs.",
    whyLabel: "Why TransPac",
    whyTitle: "Built for organizations seeking practical strategy and long-term growth.",
    whyDesc:
      "TransPac combines market research, strategic consulting, educational technology expertise, branding support, and cross-border project execution to help clients navigate complex business and international environments.",
    reasons: [
      ["U.S. Local Insight", "We understand U.S. market information, business culture, local communication habits, and practical project needs."],
      ["Bilingual Advantage", "We help clients communicate clearly across English and Chinese contexts, from strategy documents to public-facing content."],
      ["Strategy + Execution", "We do not only provide ideas. We help structure plans, coordinate resources, and move projects forward."],
      ["Cross-Sector Experience", "Our work connects education, business, media, culture, events, and international partnerships."],
      ["Washington, D.C. Presence", "Located in the political and business center of Washington, D.C., we stay connected to policy, education, and international dialogue."],
      ["Flexible Boutique Consulting", "We combine the agility of a boutique consulting firm with hands-on project coordination and personalized client support."]
    ],
    trustedLabel: "Trusted Network",
    trustedTitle: "Built around collaboration and long-term partnerships.",
    trustedDesc:
      "TransPac works across education, consulting, media, and international engagement sectors through strategic relationships and project-based collaboration.",
    partners: ["Educational Institutions", "Business Organizations", "International Programs", "Media Platforms", "Cultural Institutions", "Strategic Advisory Partners"],
    testimonialLabel: "Client Perspective",
    testimonialTitle: "Professional support designed around trust and execution.",
    testimonials: [
      ["TransPac demonstrated a strong understanding of international communication, project structure, and cross-cultural coordination throughout the collaboration.", "International Education Partner", "Education & Exchange Sector"],
      ["The team brought a professional combination of strategic thinking, U.S. market insight, and execution capability to the project.", "Business Advisory Client", "Market Expansion"],
      ["Their ability to coordinate branding, media communication, and event operations made the collaboration highly efficient and well organized.", "Cultural & Media Collaborator", "International Events"]
    ],
    ctaBadge: "Boutique Consulting · International Perspective · Strategic Execution",
    ctaTitle: "Helping organizations navigate growth, communication, and international opportunities.",
    ctaDesc:
      "From market strategy and educational technology to branding and project execution, TransPac supports clients with practical consulting and cross-cultural expertise.",
    contactLabel: "Contact",
    formTitle: "Let's build your next project together.",
    formDesc: "Tell us about your organization, project, or market question. TransPac can help you shape the strategy, build the plan, and execute the next step.",
    formName: "Name",
    formEmail: "Email",
    formCompany: "Company / Organization",
    formMessage: "Tell us briefly about your project or question.",
    serviceOptions: ["Education & Cultural Exchange", "Market Entry & Business Consulting", "Branding & Media Strategy", "Event Planning & Project Management", "Not sure yet"],
    formNote:
      "This form is currently designed as a professional consultation inquiry module. The live production version can later be connected to email systems, CRM platforms, or direct scheduling tools as the company expands.",
    footerServices: "Educational Technology · Strategic Consulting · Market Research · Branding · Cross-Border Business"
  },
  zh: {
    languageButton: "English",
    nav: ["服务", "关于", "案例", "流程", "洞察", "优势", "联系"],
    logoSubtitle: "精品咨询 · 华盛顿特区",
    logoAccent: "面向机构客户的极简高端咨询品牌识别",
    start: "开始项目",
    badge: "战略咨询 · 国际贸易 · 项目落地",
    heroTitle: "连接战略、贸易与全球机遇。",
    heroDesc:
      "TransPac Inc. 是一家总部位于美国的国际咨询与国际贸易公司，为客户提供战略咨询、跨境采购、国际贸易、供应链管理及项目落地服务，助力企业拓展北美及亚洲市场。，专注于战略咨询、教育咨询、市场调研、商业拓展、品牌战略与高端项目执行。",
    heroSub:
      "我们帮助机构建立长期增长、国际合作伙伴关系与专业市场影响力，以战略与执行推动项目落地。",
    explore: "查看服务",
    contact: "联系我们",
    core: "核心优势",
    strategy: "战略 + 执行",
    stats: [
["华盛顿特区","总部"],
["北美 · 亚洲","全球网络"],
["咨询 + 国际贸易","核心业务"],
["全流程","项目交付"]
]
    strengths: [
      "美国本土市场洞察与信息咨询能力",
      "跨境商业与国际教育项目经验",
      "中英双语沟通与国际战略能力",
      "媒体传播、品牌塑造与叙事能力",
      "从概念到落地的项目执行能力",
      "战略合作资源与区域市场网络"
    ],
    servicesLabel: "服务",
    servicesTitle: "我们提供的咨询服务",
    servicesDesc:
      "我们的服务面向教育机构、企业、非营利组织、创业团队、政府相关机构与国际项目团队，为其在美国及国际市场提供战略支持。",
    services: [
      {
        icon: "education",
        title: "教育与文化交流咨询",
        desc: "我们为学校、机构与国际项目团队设计学生访学、学校合作、文化交流与国际教育项目。",
        items: ["学生访学项目", "学校合作项目", "国际教育项目", "文化交流设计"]
      },
      {
        icon: "business",
        title: "市场进入与商业咨询",
        desc: "我们帮助机构理解美国市场、制定商业计划、完善本土化策略并建立可执行的增长路径。",
        items: ["美国市场调研", "商业计划书制定", "合作伙伴对接", "市场进入战略"]
      },
      {
        icon: "media",
        title: "品牌与媒体传播咨询",
        desc: "我们为品牌提供定位、双语内容、媒体策略、视频传播与社交媒体增长支持。",
        items: ["品牌定位", "中英文内容", "宣传视频", "社交媒体策略"]
      },
      {
        icon: "event",
        title: "活动策划与项目执行",
        desc: "我们策划并执行论坛、晚宴、展映、文化节、商务活动与赞助合作方案。",
        items: ["论坛与招待会", "文化活动", "赞助方案", "项目执行"]
      },
{
  icon: "business",
  title: "国际商务与供应链解决方案",
  desc: "我们支持跨境采购、供应商对接、采购规划、项目落地及国际商务合作，服务餐饮、养老、酒店、商业空间及相关设施项目。",
  items: [
    "供应商资源对接",
    "采购咨询",
    "餐饮与酒店项目",
    "养老项目支持"
  ]
}
],
    aboutLabel: "关于 TransPac",
    aboutTitle: "连接市场与机会的咨询伙伴。",
    aboutP1:
      "TransPac Inc. 创立于 2024 年，总部位于华盛顿特区，毗邻白宫及主要国际机构，是一家国际咨询与项目服务公司。",
    aboutP2:
      "公司结合美国本土市场洞察、中英双语沟通能力与国际项目经验，帮助客户识别增长机会并推动项目落地。",
    projectsLabel: "精选案例",
    projectsTitle: "可展示的代表性项目经验。",
    projectsDesc:
      "这里展示 TransPac 在教育交流、媒体活动、商业咨询、市场研究与品牌策划方面的代表性项目能力。",
    projects: [
      {
        title: "中美学生交流项目",
        desc: "设计并协调跨文化教育交流项目，将美国学生与中国高校、文化机构和沉浸式学习体验连接起来。",
        tag: "教育咨询"
      },
      {
        title: "国际媒体与文化活动策划",
        desc: "围绕媒体活动、文化论坛、VIP 招待会与国际交流项目，提供战略策划、双语协调、赞助结构设计与执行支持。",
        tag: "活动与媒体"
      },
      {
        title: "美国市场调研与品牌定位",
        desc: "通过市场分析、商业计划、本土化策略、品牌方向与合作伙伴拓展，支持机构进入或拓展美国市场。",
        tag: "商业咨询"
      }
    ],
    insightsLabel: "洞察与研究",
    insightsTitle: "战略、传播与国际项目交汇的核心领域。",
    latestInsights: "最新洞察",
    latestInsightsTitle: "观点、趋势与国际市场观察。",
    latestInsightsDesc: "围绕国际教育、美国市场、品牌传播与跨境战略的专业观察。",
    readMore: "阅读更多",
    report: "研究报告",
    insights: [
      ["中美教育趋势", "聚焦中美教育交流、国际合作、学生流动与全球教育趋势的分析与研究。"],
      ["全球市场洞察", "围绕市场进入、本土化战略、消费者定位与国际商业机会提供研究与战略支持。"],
      ["媒体与公共传播", "帮助机构建立双语传播、媒体定位、数字内容与国际公共沟通能力。"],
      ["美国市场拓展", "通过研究、战略规划与本土市场洞察，支持机构进入或拓展美国市场。"],
      ["教育科技", "为学校与机构开发学习系统、数字化学习方案与培训系统。"],
      ["品牌与传播", "通过双语策略、媒体叙事、公关传播与数字化呈现，帮助品牌建立清晰表达。"]
    ],
    processLabel: "流程",
    processTitle: "从信息洞察到战略制定，再到项目执行。",
    process: [
      ["01", "需求诊断", "深入了解客户目标、受众、市场环境与当前挑战。"],
      ["02", "战略规划", "制定清晰的咨询方案、服务路径与传播方向。"],
      ["03", "项目执行", "协调资源、管理项目进度，并推动实际成果落地。"],
      ["04", "长期增长", "复盘项目成果、优化策略，并支持客户长期发展。"]
    ],
    leadershipLabel: "领导团队",
    leadershipTitle: "国际视野与专业执行力并重的团队。",
    leadershipDesc:
      "TransPac 的领导团队结合咨询、国际教育、商业战略、经济金融、品牌传播与项目执行经验，服务美国及全球市场中的客户。",
    portrait: "肖像",
    education: "教育背景：",
    degree: "学位：",
    focus: "专长领域：",
    leaders: [
      {
        name: "侯淇宝",
        role: "董事总经理 · 商务发展",
        image: TEAM_IMAGES.qibao,
        summary: "负责公司战略方向、业务发展、客户拓展、国际合作伙伴关系与重要商业谈判。",
        education: "哥伦比亚商学院",
        degree: "市场营销理学硕士",
        focus: "商业咨询、市场拓展、商业战略、国际业务发展、本土化策略与合作谈判。"
      },
      {
        name: "李若涵",
        role: "咨询与战略总监",
        image: TEAM_IMAGES.ruohan,
        summary: "负责咨询服务体系设计、战略分析、市场研究、教育咨询与国际项目顾问成果交付。",
        education: "哥伦比亚大学教育学院",
        degree: "社会学与教育文学硕士，政策方向",
        focus: "教育咨询、国际教育规划、跨文化项目、品牌策略、项目开发与国际传播。"
      },
      {
        name: "李昀泽",
        role: "运营与客户服务总监",
        image: TEAM_IMAGES.yunze,
        summary: "负责项目执行、运营协调、客户沟通、财务规划支持及咨询与活动项目的交付质量管理。",
        education: "约翰霍普金斯大学高级国际研究学院",
        degree: "国际经济与金融文学硕士",
        focus: "国际商业咨询、战略规划、财务分析、运营管理与跨境项目协调。"
      }
    ],
    networkTitle: "灵活专业网络",
    networkDesc: "除核心领导团队外，公司还会根据项目需求，与咨询顾问、研究人员、媒体制作人、活动专家及外部合作伙伴组成灵活项目团队。",
    whyLabel: "为什么选择 TransPac",
    whyTitle: "为需要实际战略与长期增长的机构而设。",
    whyDesc: "TransPac 结合市场研究、战略咨询、教育科技、品牌传播与跨境项目执行能力，帮助客户应对复杂商业与国际环境。",
    reasons: [
      ["美国本土洞察", "我们理解美国市场信息、商业文化、本土沟通习惯与实际项目需求。"],
      ["双语沟通优势", "我们帮助客户在中英文语境中清晰表达，从战略文件到对外内容都保持专业一致。"],
      ["战略与执行并重", "我们不只提供想法，也帮助客户搭建方案、协调资源并推进落地。"],
      ["跨领域经验", "我们的项目连接教育、商业、媒体、文化、活动与国际合作。"],
      ["华盛顿特区区位优势", "公司位于华盛顿特区核心区域，贴近政策、教育与国际交流资源。"],
      ["精品咨询灵活性", "我们结合精品咨询公司的灵活性与实际项目管理能力，为客户提供个性化支持。"]
    ],
    trustedLabel: "合作网络",
    trustedTitle: "围绕长期合作与项目协同建立网络。",
    trustedDesc: "TransPac 横跨教育、咨询、媒体与国际交流领域，通过战略合作关系与项目制协作支持客户发展。",
    partners: ["教育机构", "商业机构", "国际项目", "媒体平台", "文化机构", "战略咨询伙伴"],
    testimonialLabel: "客户视角",
    testimonialTitle: "以信任与执行力为核心的专业支持。",
    testimonials: [
      ["TransPac 在合作过程中展现了对国际传播、项目结构与跨文化协调的深刻理解。", "国际教育合作伙伴", "教育与交流领域"],
      ["团队将战略思维、美国市场洞察与项目执行能力有效结合，为项目提供了专业支持。", "商业咨询客户", "市场拓展"],
      ["他们在品牌、媒体传播与活动执行方面的协调能力，让整个合作高效且有条理。", "文化与媒体合作方", "国际活动"]
    ],
    ctaBadge: "精品咨询 · 国际视野 · 战略执行",
    ctaTitle: "帮助机构应对增长、传播与国际机会。",
    ctaDesc: "从市场战略、教育科技到品牌传播与项目执行，TransPac 以实用咨询和跨文化经验支持客户发展。",
    contactLabel: "联系",
    formTitle: "一起推进你的下一个项目。",
    formDesc: "告诉我们你的机构、项目或市场问题。TransPac 可以帮助你梳理战略、制定计划并推进执行。",
    formName: "姓名",
    formEmail: "邮箱",
    formCompany: "公司 / 机构",
    formMessage: "请简单介绍你的项目或咨询需求。",
    serviceOptions: ["教育与文化交流", "市场进入与商业咨询", "品牌与媒体传播", "活动策划与项目执行", "暂不确定"],
    formNote: "该表单目前为前端咨询入口模块。正式上线后，可连接企业邮箱、CRM 系统或其他客户管理工具。",
    footerServices: "教育科技 · 战略咨询 · 市场调研 · 品牌传播 · 跨境商业"
  }
};

const Portrait = ({ person, labels, index }) => {
  const imagePosition = ["center 18%", "center 12%", "center 8%"]; 

  return (
    <div className="rounded-[2rem] border border-[#14213d]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 overflow-hidden rounded-[1.75rem] border border-[#14213d]/10 bg-[#1d3b73] shadow-sm">
        <img
          src={person.image}
          alt={person.name}
          className="h-[420px] w-full object-cover scale-[1.04]"
          style={{ objectPosition: imagePosition[index] || "center top" }}
          onError={(event) => {
            event.currentTarget.style.display = "none";
            const fallback = event.currentTarget.nextElementSibling;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <div className="hidden h-[420px] w-full items-center justify-center bg-gradient-to-br from-[#14213d] to-[#31558e] text-center text-white">
          <div>
            <div className="text-4xl font-semibold tracking-wide">{person.name.slice(0, 2)}</div>
            <div className="mt-3 text-xs uppercase tracking-[0.25em] text-white/55">{labels.portrait}</div>
          </div>
        </div>
      </div>
      <div className="text-2xl font-semibold">{person.name}</div>
      <div className="mt-2 text-sm uppercase tracking-[0.18em] text-[#d6a94f]">{person.role}</div>
      <div className="mt-5 text-sm leading-7 text-[#14213d]/70">{person.summary}</div>
      <div className="mt-6 space-y-3 border-t border-[#14213d]/10 pt-5 text-sm text-[#14213d]/65">
        <div><span className="font-semibold text-[#14213d]">{labels.education}</span> {person.education}</div>
        <div><span className="font-semibold text-[#14213d]">{labels.degree}</span> {person.degree}</div>
        <div><span className="font-semibold text-[#14213d]">{labels.focus}</span> {person.focus}</div>
      </div>
    </div>
  );
};

export default function TranspacWebsite() {
  const [lang, setLang] = useState("en");
  const t = content[lang];
  const isZh = lang === "zh";

  const tests = useMemo(() => {
    console.assert(content.en.services.length === 5, "Expected four English services");
    console.assert(content.zh.services.length === 5, "Expected four Chinese services");
    console.assert(content.en.leaders.length === 3, "Expected three English leaders");
    console.assert(content.zh.leaders.length === 3, "Expected three Chinese leaders");
    console.assert(Object.values(TEAM_IMAGES).every((path) => typeof path === "string" && path.startsWith("/")), "Team image paths must be public-root paths");
    return true;
  }, []);

  const currentLogo = {
    wordmark: "TRANSPAC",
    style: "from-[#1f3767] via-[#14213d] to-[#0c1426]"
  };

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#14213d]">
      {tests && null}
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
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[#14213d] shadow-lg">
              <div className={`absolute inset-0 bg-gradient-to-br ${currentLogo.style}`} />
              <div className="relative text-sm font-semibold tracking-[0.18em] text-[#d6b36a]">TP</div>
            </div>
            <div>
              <div className="text-xl font-semibold uppercase tracking-[0.28em] text-[#14213d]">{currentLogo.wordmark}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.30em] text-[#14213d]/55">{t.logoSubtitle}</div>
              <div className="mt-1 text-[9px] tracking-[0.18em] text-[#14213d]/35">{t.logoAccent}</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#14213d]/70 md:flex">
            <button
              onClick={() => setLang(isZh ? "en" : "zh")}
              className="rounded-full border border-[#14213d]/10 bg-white px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#14213d] shadow-sm transition hover:bg-[#14213d] hover:text-white"
            >
              {t.languageButton}
            </button>
            {t.nav.map((item, index) => {
              const hrefs = ["#services", "#about", "#projects", "#process", "#insights", "#why", "#contact"];
              return <a key={item} href={hrefs[index]} className="hover:text-[#14213d]">{item}</a>;
            })}
          </nav>
          <Button className="hidden md:inline-flex">{t.start}</Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-24 md:py-32">
          <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-[#d6b36a]/25 blur-3xl animate-float-slow" />
          <div className="absolute bottom-[-160px] right-[-100px] h-96 w-96 rounded-full bg-[#14213d]/10 blur-3xl animate-glow-pulse" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#14213d]/15 bg-white/50 px-4 py-2 text-sm text-[#14213d]/70 shadow-sm">
                <Icon type="spark" size={16} /> {t.badge}
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">{t.heroTitle}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#14213d]/70">{t.heroDesc}</p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#14213d]/60">{t.heroSub}</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {t.stats.map(([number, label]) => (
                  <div key={`${number}-${label}`} className="rounded-2xl border border-[#14213d]/10 bg-white/50 p-5 backdrop-blur-sm">
                    <div className="text-xl font-semibold text-[#14213d]">{number}</div>
                    <div className="mt-1 text-sm text-[#14213d]/60">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button>{t.explore} <Icon type="arrow" className="ml-2" size={18} /></Button>
                <Button variant="outline">{t.contact}</Button>
              </div>
            </div>

            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-[#14213d] via-[#1c3158] to-[#243f73] text-white shadow-2xl animate-fade-up">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#d6b36a,_transparent_40%)]" />
              <div className="relative p-8 md:p-10">
                <div className="mb-10 flex items-center justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-[0.28em] text-white/70">{t.core}</div>
                    <div className="mt-2 text-2xl font-semibold text-white">{t.strategy}</div>
                  </div>
                  <Icon type="globe" className="text-[#d6b36a]" size={34} />
                </div>
                <div className="space-y-5">
                  {t.strengths.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-white/90 backdrop-blur-sm">
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
            <SectionIntro label={t.servicesLabel} title={t.servicesTitle} desc={t.servicesDesc} />
            <div className="grid gap-6 md:grid-cols-2">
              {t.services.map((service) => (
                <Card key={service.title} className="transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#14213d] text-white">
                      <Icon type={service.icon} size={26} />
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-4 leading-7 text-[#14213d]/65">{service.desc}</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.items.map((item) => (
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
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6a94f]">{t.aboutLabel}</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{t.aboutTitle}</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-[#14213d]/70">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionIntro label={t.projectsLabel} title={t.projectsTitle} desc={t.projectsDesc} />
            <div className="grid gap-6 md:grid-cols-3">
              {t.projects.map((project) => (
                <Card key={project.title} className="overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="h-36 bg-gradient-to-br from-[#14213d] via-[#24365f] to-[#d6b36a]" />
                  <div className="p-7">
                    <div className="mb-4 inline-flex rounded-full bg-[#14213d]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#14213d]/65">{project.tag}</div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-[#14213d]/65">{project.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="bg-[#14213d] px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6b36a]">{t.insightsLabel}</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{t.insightsTitle}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {t.insights.map(([title, desc]) => (
                <div key={title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:bg-white/10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6b36a] text-[#14213d]">
                    <Icon type="spark" size={20} />
                  </div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-white/45 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionIntro label={t.processLabel} title={t.processTitle} />
            <div className="grid gap-5 md:grid-cols-4">
              {t.process.map(([num, title, desc]) => (
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
            <SectionIntro label={t.leadershipLabel} title={t.leadershipTitle} desc={t.leadershipDesc} />
            <div className="grid gap-6 lg:grid-cols-3">
              {t.leaders.map((person, index) => (
                <Portrait key={person.name} person={person} labels={t} index={index} />
              ))}
            </div>
            <div className="mt-10 rounded-[2rem] border border-[#14213d]/10 bg-[#14213d] p-8 text-white shadow-xl">
              <div className="text-lg font-semibold">{t.networkTitle}</div>
              <p className="mt-4 max-w-5xl text-base leading-8 text-white/75">{t.networkDesc}</p>
            </div>
          </div>
        </section>

        <section id="why" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6a94f]">{t.whyLabel}</div>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{t.whyTitle}</h2>
                <p className="mt-5 text-lg leading-8 text-[#14213d]/65">{t.whyDesc}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {t.reasons.map(([title, desc]) => (
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
            <SectionIntro label={t.latestInsights} title={t.latestInsightsTitle} desc={t.latestInsightsDesc} />
            <div className="grid gap-6 md:grid-cols-3">
              {t.insights.map(([title, desc]) => (
                <div key={`latest-${title}`} className="rounded-[2rem] border border-[#14213d]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-6 inline-flex rounded-full bg-[#14213d]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#14213d]/60">{t.report}</div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#14213d]/65">{desc}</p>
                  <button className="mt-8 inline-flex items-center text-sm font-semibold text-[#14213d] transition hover:text-[#d6a94f]">
                    {t.readMore}
                    <Icon type="arrow" className="ml-2" size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6a94f]">{t.trustedLabel}</div>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{t.trustedTitle}</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#14213d]/60">{t.trustedDesc}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.partners.map((partner) => (
                <div key={partner} className="flex h-28 items-center justify-center rounded-[2rem] border border-[#14213d]/10 bg-white/70 text-center text-sm font-medium text-[#14213d]/55 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionIntro label={t.testimonialLabel} title={t.testimonialTitle} />
            <div className="grid gap-6 md:grid-cols-3">
              {t.testimonials.map(([quote, author, role]) => (
                <div key={author} className="rounded-[2rem] border border-[#14213d]/10 bg-[#f8f5ef] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-6 text-5xl leading-none text-[#d6a94f]">“</div>
                  <p className="text-base leading-8 text-[#14213d]/70">{quote}</p>
                  <div className="mt-8 border-t border-[#14213d]/10 pt-5">
                    <div className="font-semibold text-[#14213d]">{author}</div>
                    <div className="mt-1 text-sm text-[#14213d]/50">{role}</div>
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
              <Icon type="spark" size={15} /> {t.ctaBadge}
            </div>
            <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">{t.ctaTitle}</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">{t.ctaDesc}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button className="bg-[#d6b36a] text-[#14213d] hover:bg-[#caa85f]">{t.contact}</Button>
              <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">{t.explore}</Button>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-24 pt-10">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#14213d] p-8 text-white shadow-2xl md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6b36a]">{t.contactLabel}</div>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{t.formTitle}</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">{t.formDesc}</p>
              </div>
              <div className="rounded-[2rem] bg-white/10 p-7 text-white">
                <div className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none" placeholder={t.formName} />
                    <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none" placeholder={t.formEmail} />
                  </div>
                  <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none" placeholder={t.formCompany} />
                  <select className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none">
                    {t.serviceOptions.map((option) => (
                      <option key={option} className="text-[#14213d]">{option}</option>
                    ))}
                  </select>
                  <textarea className="min-h-28 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none" placeholder={t.formMessage} />
                  <div className="space-y-3 text-sm text-white/70">
                    <div className="flex items-center gap-3"><Icon type="mail" className="text-[#d6b36a]" size={18} /> contact@transpacintl.com</div>
                    <div className="flex items-center gap-3"><Icon type="location" className="text-[#d6b36a]" size={18} /> 1775 Pennsylvania Ave NW. Suite 225, Washington, DC 20006</div>
                    <div className="flex items-center gap-3"><span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#d6b36a] text-[10px] font-bold text-[#14213d]">☎</span> 805-284-7275</div>
                  </div>
                  <button className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#d6b36a] px-7 py-3 text-sm font-semibold text-[#14213d] transition hover:bg-[#c9a14d]">
                    {t.contact} <Icon type="arrow" className="ml-2" size={18} />
                  </button>
                  <p className="text-xs leading-5 text-white/45">{t.formNote}</p>
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
          <div>{t.footerServices}</div>
        </div>
      </footer>
    </div>
  );
}

const SectionIntro = ({ label, title, desc }) => (
  <div className="mb-12 max-w-3xl">
    <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6a94f]">{label}</div>
    <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
    {desc ? <p className="mt-5 text-lg leading-8 text-[#14213d]/65">{desc}</p> : null}
  </div>
);

