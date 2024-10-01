export default {
  title: 'Mandar Tribe Documentation',
  description: 'A documentation site covering the language, history, and culture of the Mandar tribe.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Grammar', link: '/grammar/introduction' },
      { text: 'History', link: '/history/introduction' },
      { text: 'Dictionary', link: '/dictionary/introduction' },
    ],
    sidebar: {
      '/grammar/': [
        { text: 'Introduction to Grammar', link: '/grammar/introduction' },
        // Add more grammar pages here
      ],
      '/history/': [
        { text: 'Mandar Historical Events', link: '/history/introduction' },
        // Add more history pages here
      ],
      '/dictionary/': [
        { text: 'Dictionary Search', link: '/dictionary/introduction' },
      ],
    },
  },
}
