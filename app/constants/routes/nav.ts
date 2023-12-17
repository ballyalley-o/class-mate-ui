import EXERCISES from '@constants/routes/exercises'

const NAV = [
  {
    href: '/',
    key: 'home',
    label: 'Home',
    subItems: [],
  },
  {
    href: '/students',
    key: 'students',
    label: 'Students',
    subItems: [],
  },
  {
    href: '/progress',
    key: 'progress',
    label: 'Progress',
    subItems: [],
  },
  {
    href: '/exercises',
    key: 'exercises',
    label: 'Exercises',
    subItems: [
      {
        href: '/exercises',
        key: 'exercises',
        label: 'Exercises',
      },
      {
        href: '/exercises/projects',
        key: 'projects',
        label: 'Projects',
      },
    ],
  },
  {
    href: '/about',
    key: 'about',
    label: 'About',
    subItems: [],
  },
  {
    href: '/admin',
    key: 'admin',
    label: 'Admin',
    subItems: [],
  },
]

export default NAV
