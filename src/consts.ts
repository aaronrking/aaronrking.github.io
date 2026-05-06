// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Aaron R. King';
export const SITE_DESCRIPTION = 'Aaron R. King, PhD, is a scholar-practitioner working on community conservation, participatory governance, institutional change, and environmental justice in Southern Africa.';

export const CV_URL = '/pdf/King_Aaron_CV.pdf';

export const CONTACT = {
  organization: 'Aaron R. King, PhD',
  addressLines: [
    'Geography & Environmental Science',
  ],
  emails: [
    'aaronrking@ufl.edu',
  ],
};

export type SocialIcon = 'website' | 'scholar' | 'email' | 'github' | 'linkedin' | 'bluesky' | 'researchgate';

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: 'Email',
    href: 'mailto:aaronrking@ufl.edu',
    icon: 'email',
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=DPA0MYgAAAAJ&hl=en',
    icon: 'scholar',
  },
  {
    label: 'ResearchGate',
    href: 'https://www.researchgate.net/profile/Aaron-King-5',
    icon: 'researchgate'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aaron-r-king/',
    icon: 'linkedin',
  },
  {
    label: 'Bluesky',
    href: 'https://bsky.app/profile/aaronrking.bsky.social',
    icon: 'bluesky',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/aaronrking',
    icon: 'github',
  }
];

export const FOOTER_CREDIT = {
  designerName: 'Shravan Goswami',
  designerUrl: 'https://shravangoswami.com',
  sourceLabel: 'Open Source',
  sourceUrl: 'https://github.com/shravanngoswamii/astro-scholar',
};
