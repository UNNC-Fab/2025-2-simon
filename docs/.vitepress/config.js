import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Fablab Project",
  description: "A VitePress Site",
  base: '/2025-2-simon/',
  themeConfig: {
    search: { provider: 'local' },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Course', link: '/courses/Project_Manage/Project-Manage' },
      { text: 'Homework', link: '/courses/Project_Manage/Homework/Open-Source' }
    ],
    sidebar: [
      {
        text: 'Courses',
        items: [
          {
            text: 'Project Management',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/courses/Project_Manage/Project-Manage' },
              {
                text: 'Homework',
                collapsed: true,
                items: [
                  { text: 'Open Source', link: '/courses/Project_Manage/Homework/Open-Source' },
                  { text: 'Apple Program', link: '/courses/Project_Manage/Homework/Apple-Program' }
                ]
              }
            ]
          },
          {
            text: 'Arduino',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/courses/Arduino/Arduino' },
              {
                text: 'Homework',
                collapsed: true,
                items: [
                  { text: 'Assessment', link: '/courses/Arduino/Homework/Assessment-2' },
                  { text: 'Arduino Lights', link: '/courses/Arduino/Homework/Arduino-Lights' },
                ]
              }
            ]
          },
          {
            text: 'CAD',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/courses/CAD/CAD' },
              {
                text: 'Homework',
                collapsed: true,
                items: [
                  { text: 'Assessment', link: '/courses/CAD/Homework/Assessment-3' },
                ]
              }
            ]
          },
          {
            text: '3D Printing',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/courses/3D_Printing/3D-Printing' },

            ]
          },
          {
            text: 'Laser Cutting',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/courses/Laser_Cutting/Laser-Cut' },

            ]
          },
          {
            text: 'Molding & Casting',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/courses/Molding_Casting/Molding-Casting' },

            ]
          },
          {
            text: 'Processing',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/courses/Processing/Processing' },

            ]
          },
          {
            text: 'Electric Design',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/courses/Electric Design/Electric-Design' },

            ]
          },
          {
            text: 'PCB Manufacturing',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/courses/PCB Manufacture/PCB' },

            ]
          },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/UNNC-Fab/2025-2-simon' }
    ]
  },
  head: [
    ['link', { rel: 'stylesheet', href: '/style.css' }]
  ],
})