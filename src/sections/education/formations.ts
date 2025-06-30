export interface Formation {
    title: string;
    school: string;
    date: string;
    description: string;
    url?: string;
}

export const formations: Formation[] = [
    {
        title: "Mastère Architecture des logiciels ",
        school: "ESGI (École Supérieur de Génie Informatique) - Paris",
        date: "09/2022 - 09/2024",
        description: "Ce mastère m’a permis de consolider mes compétences en développement backend avec Java et Spring, " +
            "tout en approfondissant l’architecture des applications complexes. J’y ai appliqué les principes du Clean Code, " +
            "de l’architecture hexagonale et de la séparation des responsabilités. Côté frontend, j’ai conçu des interfaces " +
            "dynamiques en React. La formation intègre également une solide base DevOps : conteneurisation avec Docker, " +
            "pipelines CI/CD et automatisation des déploiements.",
        url: "https://www.esgi.fr/",
    },
    {
        title: "Mastère 1 Cybersécurité",
        school: "ESGI (École Supérieur de Génie Informatique) - Paris",
        date: "09/2021 - 09/2022",
        description: "Durant ce mastère, j’ai renforcé mes compétences en sécurité des systèmes d’information tout en " +
            "développant une solide expertise en administration système Linux. J’ai appris à sécuriser des " +
            "environnements serveurs, à configurer des services réseau critiques (SSH, DNS, firewall, etc.) " +
            "et à automatiser la gestion des systèmes avec des outils comme Bash et Ansible. Cette année m’a " +
            "également permis d’acquérir des bases solides en cryptographie, audit et gestion des vulnérabilités.",
        url: "https://www.esgi.fr/",
    },
    {
        title: "Licence Informatique",
        school: "Université Paris‐Cité - Paris",
        date: "09/2017 - 09/2021",
        description: "Cette formation m’a permis d’acquérir des bases solides en algorithmique, programmation orientée " +
            "objet avec Java et conception de bases de données relationnelles. J’y ai développé ma logique de résolution " +
            "de problèmes, structuré des applications en Java et manipulé des bases de données avec SQL. " +
            "La licence m’a également initié aux fondements théoriques de l’informatique, essentiels à la " +
            "compréhension des systèmes complexes.",
        url: "https://u-paris.fr/"
    },
    {
        title: "Baccalauréat Scientifique ",
        school: "Lycée Jean‐Baptiste Corot - Savigny-Sur-Orge",
        date: "09/2015 - 09/2017",
        description: "",
        url: "https://lyc-corot-savigny.ac-versailles.fr/"
    },
];