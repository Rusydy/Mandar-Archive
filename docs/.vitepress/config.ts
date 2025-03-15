import { defineConfig } from 'vitepress'

export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Mandar Tribe Documentation',
      description: 'A documentation site covering the language, history, and culture of the Mandar tribe.',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Grammar', link: '/grammar/introduction' },
          { text: 'History', link: '/history/introduction' },
          { text: 'Dictionary', link: '/dictionary/introduction' },
          { text: 'Literature', link: '/literature/introduction' },
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
          '/literature/': [
            { text: 'Introduction to Literature', link: '/literature/introduction' },
            // Add more literature pages here
          ],
        },
      }
    },
    in: {
      label: 'Indonesia',
      lang: 'id',
      title: 'Dokumentasi Suku Mandar',
      description: 'Sebuah situs dokumentasi yang mencakup bahasa, sejarah, dan budaya suku Mandar.',
      themeConfig: {
        nav: [
          { text: 'Beranda', link: '/in/' },
          { text: 'Tata Bahasa', link: '/in/grammar/introduction' },
          { text: 'Sejarah', link: '/in/history/introduction' },
          { text: 'Kamus', link: '/in/dictionary/introduction' },
        ],
        sidebar: {
          '/in/grammar/': [
            { text: 'Pengantar Tata Bahasa', link: '/in/grammar/introduction' },
            // Add more grammar pages here
          ],
          '/in/history/': [
            { text: 'Peristiwa Sejarah Mandar', link: '/in/history/introduction' },
            // Add more history pages here
          ],
          '/in/dictionary/': [
            { text: 'Pencarian Kamus', link: '/in/dictionary/introduction' },
          ],
        },
      }
    }
  }
})