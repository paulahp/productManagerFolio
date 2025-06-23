const portfolio = {
  settings: {
    isSplash: true,
  },

  greeting: {
    title: "Paula",
    logo_name: "PaulaPO",
    nickname: "paulahp",
    subTitle:
      "Product Owner com +3 anos de experiência em produtos financeiros, APIs e cobrança. Background em QA, foco em entregas de valor com clareza, colaboração e visão de produto.",
    resumeLink: "",
    portfolio_repository: "https://github.com/paulahp/productManagerFolio",
    githubProfile: "https://github.com/paulahp",
  },

  socialMediaLinks: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/po-paula-carolina/?locale=en_US",
      fontAwesomeIcon: "fa-linkedin-in",
      backgroundColor: "#0077B5",
    },
    {
      name: "GitHub",
      link: "https://github.com/paulahp",
      fontAwesomeIcon: "fa-github",
      backgroundColor: "#181717",
    },
  ],

  skillsSection: {
    title: "O que eu faço",
    subTitle:
      "Atuação como Product Owner em squads ágeis, com forte envolvimento em documentação, APIs e automação de processos.",
    skills: [
      "⚙️ Mapeamento e automação de processos ponta a ponta",
      "📄 Documentação funcional e técnica (API, histórias, regras)",
      "🔁 Integração entre sistemas legados e novos",
      "📊 Análise de dados com SQL e métricas de produto",
    ],
  },

  experience: {
    title: "Experiência",
    sections: [
      {
        title: "Product Owner",
        work: [
          {
            company: "Empresa XPTO",
            role: "Product Owner",
            date: "2022 - Atual",
            desc: "Responsável por geração de cobrança via Pix, APIs de antecipação de parcelas e produtos financeiros.",
            descBullets: [
              "Refinamento de histórias com regras de adimplência",
              "Integrações com sistemas legados",
              "Documentação técnica e critérios de aceite Gherkin",
            ],
          },
        ],
      },
    ],
  },

  projects: {
    data: [
      {
        id: "1",
        name: "Cobrança via Pix",
        description:
          "Produto com regras inteligentes para geração de cobranças personalizadas por canal, status de cliente e adimplência.",
        languages: ["Jira", "Confluence", "SQL", "Integrações"],
      },
      {
        id: "2",
        name: "Antecipação de Parcelas",
        description:
          "API para antecipar parcelas a vencer e regularizar inadimplências. Produto com impacto direto na receita.",
        languages: ["API", "Integração", "Produto", "SQL"],
      },
    ],
  },

  contactPageData: {
    contactSection: {
      title: "Contato",
      description:
        "Entre em contato pelo LinkedIn ou e-mail para oportunidades, networking ou só bater um papo sobre produtos!",
      email: "paulac.santos@live.com",
    },
  },
};

export default portfolio;
