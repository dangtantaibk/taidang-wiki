export let siteMetadata = {
  siteUrl: 'https://www.taidang.wiki',
  siteRepo: 'https://github.com/dangtantaibk/taidang.wiki',
  siteLogo: '/static/images/logo.jpg',
  image: '/static/images/logo.jpg',
  socialBanner: '/static/images/logo.jpg',
  email: 'dangtantaibk@gmail.com',
  github: 'https://github.com/dangtantaibk',
  x: 'https://x.com',
  facebook: 'https://facebook.com/dangtantai1810',
  youtube: 'https://www.youtube.com',
  linkedin: 'https://www.linkedin.com/in/dang-tan-tai/',
  locale: 'en-US',
  analyticsURL: '',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false, // true | false
    umamiWebsiteId: '',
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'dangtantaibk',
    linkedin: 'dang-tan-tai/',
    x: '',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
