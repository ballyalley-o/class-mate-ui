import EXERCISES from '@constants/routes/exercises'

const NAV = [
  {
    href: '/',
    key: 'home',
    label: 'Home',
    subItems: [],
  },
  {
    href: '/student',
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
    href: '/exercise',
    key: 'exercises',
    label: 'Exercises',
    subItems: [
      {
        href: '/exercise',
        key: 'exercises',
        label: 'Exercises',
      },
      {
        href: '/exercise/project',
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
