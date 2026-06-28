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
    nav: ["Services", "Industries", "Trade", "Projects", "Process", "Insights", "Why Us", "Contact"],
    logoSubtitle: "Strategic Consulting • International Trade • Washington, D.C.",
    logoAccent: "Minimal executive identity for international consulting",
    start: "Start a Project",
    badge: "Strategic Consulting • International Trade • Project Delivery",
    heroTitle: "Connecting Strategy, Trade, and Global Opportunities.",
    heroDesc:
      "TransPac Inc. is a U.S.-based strategic consulting and international trade company helping organizations expand globally through business advisory, international trade, global sourcing, procurement management, supply chain coordination, and project delivery.",
heroSub:
      "We transform strategy into execution by combining consulting expertise, international trade capabilities, and end-to-end project management to support sustainable global growth.",
    explore: "Explore Services",
    contact: "Contact Us",
    core: "Core Advantages",
    strategy: "Strategy + Execution",
    stats: [
["Washington, D.C.","Headquarters"],
["North America & Asia","Global Network"],
["Consulting + Trade","Core Services"],
["End-to-End","Project Delivery"]
],
    strengths: [
      "U.S. market insight and local information consulting",
      "Cross-border business and education expertise",
      "Bilingual communication and international strategy",
      "Media, branding, and storytelling capability",
      "Project planning from concept to execution",
      "Strategic partnership and regional market network"
    ],
    servicesLabel: "Services",
    servicesTitle: "Integrated consulting, trade, and project services",
    servicesDesc:
      "TransPac supports clients across strategy, international trade, procurement, commercial development, education, and branding. Our work connects planning with execution so organizations can expand, source, build, and grow across North America and Asia.",
    services: [
      {
        icon: "business",
        title: "Strategy & Business Advisory",
        desc: "We help organizations evaluate markets, design growth strategies, identify partners, and structure practical expansion plans.",
        items: ["Market entry strategy", "Business development", "Partner matching", "Feasibility research"]
      },
      {
        icon: "globe",
        title: "International Trade",
        desc: "We support global product sourcing, commercial sales, OEM/ODM manufacturing, import and export coordination, and trade documentation.",
        items: ["Global sourcing", "OEM / ODM", "Commercial sales", "Trade documentation"]
      },
      {
        icon: "business",
        title: "Procurement & Supply Chain",
        desc: "We coordinate suppliers, procurement planning, logistics support, shipping options, vendor communication, and delivery execution.",
        items: ["Supplier verification", "Procurement planning", "DDP / FOB logistics", "Delivery coordination"]
      },
      {
        icon: "event",
        title: "Commercial Development",
        desc: "We support commercial projects including restaurants, hospitality, senior living, retail, office spaces, equipment procurement, and FF&E planning.",
        items: ["Restaurant projects", "Hospitality spaces", "Senior living facilities", "Commercial equipment"]
      },
      {
        icon: "education",
        title: "Education & Cultural Exchange",
        desc: "We design international education programs, student exchange experiences, institutional partnerships, and cultural learning projects.",
        items: ["Student study tours", "School partnerships", "International programs", "Cultural exchange"]
      },
      {
        icon: "media",
        title: "Branding & Media Strategy",
        desc: "We support brands with positioning, bilingual content, media strategy, video production, public communication, and digital growth.",
        items: ["Brand positioning", "Bilingual content", "Promotional videos", "Public communication"]
      }
    ],
    industriesLabel: "Industries",
    industriesTitle: "Industries we serve",
    industriesDesc:
      "Our cross-border consulting, trade, and project delivery model can support clients across multiple sectors without being limited to a single product category or project type.",
    industries: [
      ["Healthcare", "Healthcare-adjacent projects, facility support, and non-medical operational equipment coordination."],
      ["Senior Living", "Senior living, assisted living, adult day care, FF&E planning, and project implementation support."],
      ["Hospitality", "Hotels, restaurants, guest-facing spaces, commercial furniture, and equipment procurement."],
      ["Commercial Real Estate", "Commercial interiors, office projects, retail spaces, renovation coordination, and procurement planning."],
      ["Manufacturing", "Supplier sourcing, OEM/ODM coordination, commercial procurement, and factory communication."],
      ["Recreation & Sports", "Recreation facilities, sports venues, commercial equipment, and destination-based project support."],
      ["Education", "School partnerships, study tours, international programs, and education-related project planning."],
      ["Media & Entertainment", "Brand storytelling, bilingual communication, cultural events, and media strategy."],
      ["Consumer Products", "Product sourcing, private label development, trade documentation, and delivery coordination."]
    ],

    tradeLabel: "International Trade",
    tradeTitle: "Trade solutions from sourcing to delivery.",
    tradeDesc:
      "TransPac supports practical international trade execution for commercial buyers, project owners, and organizations sourcing products across borders.",
    tradeCapabilities: [
      ["Global Sourcing", "Identify manufacturers, product vendors, and commercial suppliers across Asia and relevant global markets."],
      ["OEM / ODM", "Support customized product development, private label coordination, specification communication, and supplier follow-up."],
      ["Commercial Procurement", "Coordinate pricing, product information, purchase documentation, and supplier communication."],
      ["Logistics Coordination", "Support shipping planning, DDP/FOB communication, documentation organization, and delivery tracking."]
    ],
    networkLabel: "Global Network",
    networkTitle: "Connecting North America and Asia.",
    networkDesc:
      "With a Washington, D.C. presence and cross-border business relationships, TransPac helps clients coordinate opportunities across the United States, China, Hong Kong, and broader international markets.",
    network: ["Washington, D.C.", "United States", "China", "Hong Kong", "Asia", "Global Partners"],
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
        title: "Cross-Border Trade & Equipment Supply",
        desc: "Supported international commercial procurement, supplier coordination, logistics planning, and delivery execution for commercial equipment and project-based product needs.",
        tag: "International Trade"
      },
      {
        title: "Senior Living Development Support",
        desc: "Provided planning, supplier sourcing, FF&E procurement support, and implementation coordination for senior living and care-related facility development.",
        tag: "Senior Living"
      },
      {
        title: "Commercial Development & Procurement",
        desc: "Assisted commercial clients with project planning, vendor matching, restaurant and hospitality equipment sourcing, and cross-border procurement coordination.",
        tag: "Commercial Projects"
      },
      {
        title: "U.S. Market Entry & Business Strategy",
        desc: "Supported organizations entering the U.S. market through market research, business planning, localization strategy, branding direction, and partnership development.",
        tag: "Business Advisory"
      },
      {
        title: "International Education & Cultural Exchange",
        desc: "Developed cross-cultural educational programs, institutional partnership concepts, study tour structures, and international learning experiences.",
        tag: "Education"
      },
      {
        title: "Branding, Media & Public Communication",
        desc: "Supported organizations with bilingual communication, media positioning, brand storytelling, event planning, and public-facing content development.",
        tag: "Branding & Media"
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
    tradeProcessLabel: "Trade Process",
    tradeProcessTitle: "From sourcing to delivery.",
    tradeProcess: [
      ["01", "Inquiry", "Understand product needs, quantity, destination, timeline, and budget."],
      ["02", "Supplier Matching", "Identify qualified suppliers and manufacturing partners."],
      ["03", "Quotation", "Coordinate pricing, product specifications, and commercial terms."],
      ["04", "Production", "Support production communication and order timeline tracking."],
      ["05", "Inspection", "Coordinate quality review, samples, and pre-shipment checks when applicable."],
      ["06", "Shipping", "Support logistics planning, DDP/FOB coordination, and documentation."],
      ["07", "Delivery", "Track shipment progress and coordinate final destination delivery."],
      ["08", "After-sales", "Support communication, issue tracking, and ongoing project follow-up."]
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
        role: "Director of Cross-Border Trade & Finance",
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
    whyTitle: "Built for cross-border growth, trade, and execution.",
    whyDesc:
      "TransPac combines U.S.-based business insight, international trade capability, supplier coordination, bilingual communication, and hands-on project delivery to support clients from strategy through execution.",
    reasons: [
      ["U.S.-Based Company", "Headquartered in Washington, D.C., we support clients with U.S. market perspective and local business communication."],
      ["Cross-Border Expertise", "We help clients navigate business, education, media, procurement, and trade opportunities across North America and Asia."],
      ["International Trade Capability", "We support product sourcing, procurement, commercial transactions, import/export coordination, and supplier communication."],
      ["Global Supplier Network", "We help identify and coordinate manufacturers, vendors, product suppliers, and commercial partners across relevant markets."],
      ["End-to-End Project Delivery", "From strategy and sourcing to logistics and implementation, we help move projects from concept to execution."],
      ["Long-Term Partnership", "We work as a boutique partner with flexible support, professional documentation, and practical execution capability."]
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
    ctaBadge: "Strategic Consulting · International Trade · Project Delivery",
    ctaTitle: "Helping organizations expand, source, trade, and execute across borders.",
    ctaDesc:
      "From strategy and sourcing to procurement, logistics, branding, and implementation, TransPac supports clients with practical cross-border solutions.",
    contactLabel: "Contact",
    formTitle: "Let's build your next project together.",
    formDesc: "Tell us about your organization, trade inquiry, procurement need, or project plan. TransPac can help you shape the strategy, source the right partners, and execute the next step.",
    formName: "Name",
    formEmail: "Email",
    formCompany: "Company / Organization",
    formMessage: "Tell us briefly about your project or question.",
    serviceOptions: ["Strategy & Business Advisory", "International Trade", "Procurement & Supply Chain", "Commercial Development", "Education & Cultural Exchange", "Branding & Media", "Not sure yet"],
    formNote:
      "This form is currently designed as a professional consultation inquiry module. The live production version can later be connected to email systems, CRM platforms, or direct scheduling tools as the company expands.",
    footerServices: "Strategic Consulting · International Trade · Procurement · Project Delivery · Branding"
  },
  zh: {
    languageButton: "English",
    nav: ["服务", "行业", "贸易", "案例", "流程", "洞察", "优势", "联系"],
    logoSubtitle: "战略咨询 · 国际贸易 · 华盛顿特区",
    logoAccent: "面向机构客户的极简高端咨询品牌识别",
    start: "开始项目",
    badge: "战略咨询 · 国际贸易 · 项目落地",
    heroTitle: "连接战略、贸易与全球机遇。",
    heroDesc:
      "TransPac Inc. 是一家总部位于美国的国际咨询与国际贸易公司，为客户提供战略咨询、国际贸易、跨境采购、供应链管理及项目落地服务，助力企业拓展北美及亚洲市场。",
    heroSub:
      "我们将战略转化为执行，结合咨询能力、国际贸易资源与项目管理经验，支持客户实现可持续的全球化增长。",
    explore: "查看服务",
    contact: "联系我们",
    core: "核心优势",
    strategy: "战略 + 执行",
    stats: [
["华盛顿特区","总部"],
["北美 · 亚洲","全球网络"],
["咨询 + 国际贸易","核心业务"],
["全流程","项目交付"]
],
    strengths: [
      "美国本土市场洞察与信息咨询能力",
      "跨境商业与国际教育项目经验",
      "中英双语沟通与国际战略能力",
      "媒体传播、品牌塑造与叙事能力",
      "从概念到落地的项目执行能力",
      "战略合作资源与区域市场网络"
    ],
    servicesLabel: "服务",
    servicesTitle: "咨询、贸易与项目落地一体化服务",
    servicesDesc:
      "TransPac 为客户提供战略咨询、国际贸易、跨境采购、商业项目开发、教育交流与品牌传播服务。我们将战略规划与实际执行结合，帮助客户拓展北美与亚洲市场。",
    services: [
      {
        icon: "business",
        title: "战略与商业咨询",
        desc: "我们帮助机构评估市场、制定增长战略、寻找合作伙伴，并搭建可执行的跨境发展方案。",
        items: ["市场进入战略", "商务拓展", "合作伙伴对接", "可行性研究"]
      },
      {
        icon: "globe",
        title: "国际贸易",
        desc: "我们支持全球产品采购、商业销售、OEM/ODM 定制生产、进出口协调及国际贸易文件支持。",
        items: ["全球采购", "OEM / ODM", "商业销售", "贸易文件"]
      },
      {
        icon: "business",
        title: "采购与供应链管理",
        desc: "我们协助客户进行供应商管理、采购规划、国际物流、运输方式协调、供应商沟通及交付执行。",
        items: ["供应商审核", "采购规划", "DDP / FOB 物流", "交付协调"]
      },
      {
        icon: "event",
        title: "商业项目开发",
        desc: "我们支持餐饮、酒店、养老、零售、办公及商业空间项目，并提供设备采购、家具配置与 FF&E 规划支持。",
        items: ["餐饮项目", "酒店空间", "养老设施", "商业设备"]
      },
      {
        icon: "education",
        title: "教育与文化交流",
        desc: "我们为学校、机构与国际项目团队设计学生访学、学校合作、文化交流与国际教育项目。",
        items: ["学生访学", "学校合作", "国际项目", "文化交流"]
      },
      {
        icon: "media",
        title: "品牌与媒体传播",
        desc: "我们为品牌提供定位、双语内容、媒体策略、视频传播、公共沟通与数字化增长支持。",
        items: ["品牌定位", "中英文内容", "宣传视频", "公共传播"]
      }
    ],
    industriesLabel: "服务行业",
    industriesTitle: "我们服务的行业",
    industriesDesc:
      "TransPac 的跨境咨询、国际贸易与项目落地模式可服务多个行业，不局限于单一产品或单一项目类型。",
    industries: [
      ["医疗健康", "医疗健康相关项目、设施支持及非医疗运营设备协调。"],
      ["养老产业", "养老社区、辅助生活、日间照护、FF&E 规划及项目落地支持。"],
      ["酒店餐饮", "酒店、餐饮、客户空间、商业家具及设备采购。"],
      ["商业地产", "商业室内空间、办公项目、零售空间、装修协调与采购规划。"],
      ["制造业", "供应商寻源、OEM/ODM 协调、商业采购及工厂沟通。"],
      ["体育休闲", "休闲设施、体育场景、商业设备及目的地项目支持。"],
      ["教育", "学校合作、学生访学、国际项目及教育相关项目规划。"],
      ["媒体娱乐", "品牌叙事、双语传播、文化活动与媒体策略。"],
      ["消费品", "产品采购、自有品牌开发、贸易文件及交付协调。"]
    ],

    tradeLabel: "国际贸易",
    tradeTitle: "从供应商寻源到最终交付的贸易解决方案。",
    tradeDesc:
      "TransPac 为商业采购方、项目业主及跨境产品采购客户提供实用型国际贸易执行支持。",
    tradeCapabilities: [
      ["全球采购", "在亚洲及相关国际市场识别制造商、产品供应商及商业合作资源。"],
      ["OEM / ODM", "支持定制产品开发、自有品牌协调、规格沟通与供应商跟进。"],
      ["商业采购", "协调价格、产品信息、采购文件及供应商沟通。"],
      ["物流协调", "支持运输规划、DDP/FOB 沟通、贸易文件整理及交付跟踪。"]
    ],
    networkLabel: "全球网络",
    networkTitle: "连接北美与亚洲。",
    networkDesc:
      "TransPac 立足华盛顿特区，并依托跨境商业资源，帮助客户协调美国、中国、香港及更广泛国际市场中的合作机会。",
    network: ["华盛顿特区", "美国", "中国", "香港", "亚洲", "全球合作伙伴"],
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
        title: "跨境贸易与商业设备供应",
        desc: "围绕商业设备及项目型产品需求，提供国际采购、供应商协调、物流规划与交付执行支持。",
        tag: "国际贸易"
      },
      {
        title: "养老产业项目开发支持",
        desc: "为养老及护理相关设施项目提供项目规划、供应商寻源、FF&E 采购支持及落地协调服务。",
        tag: "养老产业"
      },
      {
        title: "商业项目开发与采购",
        desc: "协助商业客户进行项目规划、供应商匹配、餐饮及酒店设备采购与跨境供应链协调。",
        tag: "商业项目"
      },
      {
        title: "美国市场进入与商业战略",
        desc: "通过市场研究、商业计划、本土化策略、品牌方向与合作伙伴拓展，支持机构进入或拓展美国市场。",
        tag: "商业咨询"
      },
      {
        title: "国际教育与文化交流",
        desc: "设计跨文化教育项目、机构合作方案、学生访学结构及国际化学习体验。",
        tag: "教育交流"
      },
      {
        title: "品牌、媒体与公共传播",
        desc: "为机构提供双语传播、媒体定位、品牌叙事、活动策划及对外内容支持。",
        tag: "品牌媒体"
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
    tradeProcessLabel: "贸易流程",
    tradeProcessTitle: "从采购寻源到最终交付。",
    tradeProcess: [
      ["01", "需求确认", "明确产品类别、数量、目的地、时间安排与预算。"],
      ["02", "供应商匹配", "筛选合格供应商、工厂及生产合作伙伴。"],
      ["03", "报价协调", "协调价格、产品规格及商业条款。"],
      ["04", "生产跟进", "支持生产沟通与订单进度跟踪。"],
      ["05", "验货支持", "在适用情况下协调样品、质量审核及出货前检查。"],
      ["06", "运输安排", "支持物流规划、DDP/FOB 协调及文件准备。"],
      ["07", "交付协调", "跟踪运输进度并协调最终目的地交付。"],
      ["08", "售后支持", "支持沟通协调、问题跟进及后续项目服务。"]
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
        role: "跨境贸易与金融总监",
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
    whyTitle: "为跨境增长、国际贸易与项目执行而设。",
    whyDesc: "TransPac 结合美国本土商业洞察、国际贸易能力、供应商协调、中英双语沟通与实际项目交付能力，支持客户从战略规划走向执行落地。",
    reasons: [
      ["美国本土公司", "总部位于华盛顿特区，能够为客户提供美国市场视角与本地商业沟通支持。"],
      ["跨境业务经验", "我们帮助客户连接北美与亚洲的商业、教育、媒体、采购及贸易机会。"],
      ["国际贸易能力", "我们支持产品采购、商业交易、进出口协调、贸易文件及供应商沟通。"],
      ["全球供应链资源", "我们协助识别并协调制造商、供应商、产品资源及商业合作伙伴。"],
      ["全流程项目交付", "从战略、采购到物流与项目实施，帮助客户将想法推进到实际落地。"],
      ["长期合作伙伴", "我们以精品咨询公司的灵活性，提供专业文件、持续沟通与实操型项目支持。"]
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
    ctaBadge: "战略咨询 · 国际贸易 · 项目落地",
    ctaTitle: "帮助机构完成跨境增长、采购、贸易与项目执行。",
    ctaDesc: "从战略规划、供应商寻源到采购、物流、品牌传播与项目实施，TransPac 为客户提供实用的跨境解决方案。",
    contactLabel: "联系",
    formTitle: "准备拓展国际市场？",
    formDesc: "告诉我们你的机构、贸易需求、采购计划或项目方向。TransPac 可以帮助你梳理战略、匹配资源并推进下一步执行。",
    formName: "姓名",
    formEmail: "邮箱",
    formCompany: "公司 / 机构",
    formMessage: "请简单介绍你的项目或咨询需求。",
    serviceOptions: ["战略与商业咨询", "国际贸易", "采购与供应链管理", "商业项目开发", "教育与文化交流", "品牌与媒体传播", "暂不确定"],
    formNote: "该表单目前为前端咨询入口模块。正式上线后，可连接企业邮箱、CRM 系统或其他客户管理工具。",
    footerServices: "战略咨询 · 国际贸易 · 跨境采购 · 项目落地 · 品牌传播"
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
    console.assert(content.en.services.length === 6, "Expected six English services");
    console.assert(content.zh.services.length === 6, "Expected six Chinese services");
    console.assert(content.en.leaders.length === 3, "Expected three English leaders");
    console.assert(content.en.industries.length === 9, "Expected nine English industries");
    console.assert(content.zh.industries.length === 9, "Expected nine Chinese industries");
    console.assert(content.en.tradeProcess.length === 8, "Expected eight English trade process steps");
    console.assert(content.zh.tradeProcess.length === 8, "Expected eight Chinese trade process steps");
    console.assert(content.en.tradeCapabilities.length === 4, "Expected four English trade capabilities");
    console.assert(content.zh.tradeCapabilities.length === 4, "Expected four Chinese trade capabilities");
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
              const hrefs = ["#services", "#industries", "#trade", "#projects", "#process", "#insights", "#why", "#contact"];
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

        <section id="industries" className="bg-[#14213d] px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6b36a]">{t.industriesLabel}</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{t.industriesTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-white/70">{t.industriesDesc}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.industries.map(([title, desc]) => (
                <div key={title} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d6b36a] text-[#14213d]">
                    <Icon type="business" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="trade" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6a94f]">{t.tradeLabel}</div>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{t.tradeTitle}</h2>
                <p className="mt-5 text-lg leading-8 text-[#14213d]/65">{t.tradeDesc}</p>
                <div className="mt-8 rounded-[2rem] bg-[#14213d] p-7 text-white shadow-xl">
                  <div className="text-sm uppercase tracking-[0.24em] text-[#d6b36a]">{t.networkLabel}</div>
                  <h3 className="mt-3 text-2xl font-semibold">{t.networkTitle}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{t.networkDesc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {t.network.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white/75">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {t.tradeCapabilities.map(([title, desc]) => (
                  <Card key={title} className="transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="p-7">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14213d] text-white">
                        <Icon type="globe" size={21} />
                      </div>
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#14213d]/65">{desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
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

            <div className="mt-14 rounded-[2.25rem] bg-[#14213d] p-8 text-white shadow-xl md:p-10">
              <div className="mb-8">
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6b36a]">{t.tradeProcessLabel}</div>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{t.tradeProcessTitle}</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                {t.tradeProcess.map(([num, title, desc]) => (
                  <div key={`trade-${num}`} className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
                    <div className="text-sm font-semibold text-[#d6b36a]">{num}</div>
                    <h4 className="mt-3 text-lg font-semibold">{title}</h4>
                    <p className="mt-2 text-xs leading-6 text-white/65">{desc}</p>
                  </div>
                ))}
              </div>
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
