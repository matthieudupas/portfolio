import type {TFunction} from 'i18next';

export interface NavItem {
    title: string;
    url: string;
    icon: string;
}

export const getNavItems = (t: TFunction): NavItem[] => [
    {
        title: t('navbar.home'),
        url: '#hero',
        icon: 'fa-solid fa-house-user',
    },
    {
        title: t('navbar.about'),
        url: '#about',
        icon: 'fa-solid fa-user',
    },
    {
        title: t('navbar.projects'),
        url: '#projects',
        icon: 'fa-solid fa-laptop-code',
    },
    {
        title: t('navbar.experience'),
        url: '#experience',
        icon: 'fa-solid fa-briefcase',
    },
    {
        title: t('navbar.education'),
        url: '#education',
        icon: 'fa-solid fa-graduation-cap',
    },
    {
        title: t('navbar.contact'),
        url: '#contact',
        icon: 'fa-solid fa-envelope',
    },
];