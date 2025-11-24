import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Fablab Project",
  description: "A VitePress Site",
  base: '/2025-2-simon/',
  themeConfig: {
    search :{provider: 'local'},
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
          { text: 'CAD', link: '/CAD' },
          { text: '3D Printing', link: '/3D-Printing' },
        ]
      },
        {
        text: 'Homework',
        items: [
          { text: 'Open Source', link: '/Open-Source' },
          { text: 'Progamming Sowftware Apple', link: '/Apple-Program' },
          { text: 'Arduino Light', link: '/Arduino-Lights' },
          { text: 'Arduino Assessment', link: '/Assessment-2' },
          { text: 'CAD Assessment', link: '/Assessment-3' },
        ]
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
