export interface Mission {
    title: string
    objective: string;
    actions: string[];
    context?: string;
    result?: string;
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    date: string;
    description: string;
    technologies?: string[];
    url?: string;
    missions?: Mission[];
}

export const experiences: Experience[] = [
    {
        id: 2,
        title: "Ingénieur logiciel en alternance",
        company: "Sopra Steria",
        date: "09/2023 - 09/2024",
        url: "https://www.soprasteria.com/fr",
        description:
            "J’ai travaillé sur l’application Chorus Pro, un outil de facturation en ligne géré par l’AIFE " +
            "(Agence pour l'Informatique Financière de l'État), qui permet aux entreprises de soumettre leurs " +
            "factures à l’administration publique, quel que soit le type ou le destinataire. Lors de mon arrivée, " +
            "les enjeux majeurs étaient le maintien en conditions opérationnelles (MCO) de l’application, la montée de " +
            "version vers Java 8, ainsi que la mise en conformité avec le référentiel RGAA (accessibilité numérique).",
        technologies: ["Java", "Spring", "SQL", "GitLab"],
        missions: []
    },
    {
        id: 1,
        title: "Ingénieur cybersécurité en alternance",
        company: "CEA",
        date: "09/2021 - 09/2023",
        url: "https://www.cea.fr/",
        description:
            "Durant deux ans au sein de l’équipe cybersécurité du CEA, j’ai été impliqué dans plusieurs projets stratégiques, " +
            "mêlant veille technologique, intégration d’outils de sécurité, collaboration inter-départements, et développement " +
            "d’application métier. Mon rôle a évolué au fil des missions, alternant entre travail en autonomie, " +
            "coordination technique, et conduite de projet.",
        technologies: ["C#", "ASP.NET Core", "SQL", "Linux"],
        missions: [
            {
                title: "Analyse de marché des outils de veille en vulnérabilités",
                objective: "Identifier des solutions de surveillance des vulnérabilités adaptées aux besoins internes.",
                actions: [
                    "Benchmark complet des outils du marché (fonctionnalités, compatibilité, coûts).",
                    "Preuve de concept (PoC) de Patrowlhears : déploiement, configuration, évaluation.",
                    "Rédaction d’un rapport stratégique d’aide à la décision."
                ],
                context: "Mission réalisée de manière autonome, de la phase de veille jusqu’à la restitution finale.",
                result: "L’outil a été retenu comme solution de référence dans le cadre du projet."
            },
            {
                title: "Mise en place d’un SIEM avec Splunk",
                objective: "Mettre en œuvre une solution centralisée de gestion des journaux pour améliorer la détection d’incidents.",
                actions: [
                    "Déploiement de Splunk dans l’environnement de test.",
                    "Configuration des sources de données, tableaux de bord, alertes et index.",
                    "Participation aux démonstrations techniques de l’entreprise Splunk pour monter en compétence.",
                    "Collaboration avec plusieurs départements pour l’intégration des sources et des cas d’usage."
                ],
                context: "(en collaboration inter-départements)",
                result: "PoC validé comme base pour le déploiement futur dans le SI global."
            },
            {
                title: "Développement d’une application de gestion budgétaire",
                objective: "Automatiser et fiabiliser le traitement des demandes budgétaires internes.",
                actions: [
                    "Développement en ASP.NET Core / C#, avec interface en Bootstrap, gestion BDD SQL.",
                    "Mise en place de l’intégration continue via Azure DevOps.",
                    "Organisation de réunions avec les utilisateurs finaux pour recueillir les besoins.",
                    "Animation de réunions journalières avec l’équipe projet."
                ],
                context: "(en binôme avec un alternant + un prestataire)",
                result: "Livraison d’une première version fonctionnelle, aujourd’hui utilisée en interne."
            }
        ]
    },
];