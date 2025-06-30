export interface Experience {
    title: string;
    company: string;
    date: string;
    description: string;
    technologies?: string[];
    url?: string;
}

export const experiences: Experience[] = [
    {
        title: "Ingénieur logiciel en alternance",
        company: "Sopra Steria",
        date: "Septembre 2023 - Septembre 2024",
        url: "https://www.soprasteria.com/fr",
        description:
            "J’ai travaillé sur l’application Chorus Pro, un outil de facturation en ligne géré par l’AIFE " +
            "(Agence pour l'Informatique Financière de l'État), qui permet aux entreprises de soumettre leurs " +
            "factures à l’administration publique, quel que soit le type ou le destinataire. Lors de mon arrivée, " +
            "les enjeux majeurs étaient le maintien en conditions opérationnelles (MCO) de l’application, la montée de " +
            "version vers Java 8, ainsi que la mise en conformité avec le référentiel RGAA (accessibilité numérique).",
        technologies: ["Java", "Spring", "SQL", "GitLab"],
    },
    {
        title: "Ingénieur cybersécurité en alternance",
        company: "CEA",
        date: "Septembre 2021 - Septembre 2023",
        url: "https://www.cea.fr/",
        description:
            "Durant deux ans au sein de l’équipe cybersécurité du CEA, j’ai été impliqué dans plusieurs projets stratégiques, " +
            "mêlant veille technologique, intégration d’outils de sécurité, collaboration inter-départements, et développement " +
            "d’application métier. Mon rôle a évolué au fil des missions, alternant entre travail en autonomie, " +
            "coordination technique, et conduite de projet.",
        technologies: ["C#", "ASP.NET Core", "SQL", "Linux"],
    },
];