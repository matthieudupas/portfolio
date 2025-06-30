export interface Formation {
    title: string;
    school: string;
    date: string;
    description: string;
}

export const formations: Formation[] = [
    {
        title: "Mastère Architecture des logiciels ",
        school: "ESGI (École Supérieur de Génie Informatique) - Paris",
        date: "09/2022 - 09/2024",
        description: "Formation complète en développement web, React, Node.js, etc.",
    },
    {
        title: "Mastère 1 Cybersécurité",
        school: "ESGI (École Supérieur de Génie Informatique) - Paris",
        date: "09/2021 - 09/2022",
        description: "Connaissances en algorithmique, structures de données, Java, etc.",
    },
    {
        title: "Licence Informatique",
        school: "Université Paris‐Cité - Paris",
        date: "09/2017 - 09/2021",
        description: "Connaissances en algorithmique, structures de données, Java, etc.",
    },
    {
        title: "Baccalauréat Scientifique ",
        school: "Lycée Jean‐Baptiste Corot - Savigny-Sur-Orge",
        date: "09/2015 - 09/2017",
        description: "Connaissances en algorithmique, structures de données, Java, etc.",
    },
];