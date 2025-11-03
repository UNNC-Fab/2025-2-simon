import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Fablab Project",
  description: "A VitePress Site",
  base: '/2025-2-simon/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Course', link: '/Project-Manage' },
      { text: 'Homework', link: '/Open-Source' }
    ],

    sidebar: [
      {
        text: 'Course',
        items: [
          { text: 'Project Manage', link: '/Project-Manage' },
          { text: 'Arduino', link: '/Arduino' },
        ]
      },
        {
        text: 'Homework',
        items: [
          { text: 'Open Source', link: '/Open-Source' },
          { text: 'Progamming Sowftware Apple', link: '/Apple-Program' },
          { text: 'Arduino Light', link: '/Arduino-Lights' },
        ]
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
