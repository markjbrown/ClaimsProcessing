import './globals.css'
import './assets/css/tailwind.css'
import NavBar from './components/navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const menuItems = [
    {
      href: '/members',
      title: 'Members',
    },
    {
      href: '/providers',
      title: 'Providers',
    },
    {
      href: '/payers',
      title: 'Payers',
    },
  ];

  return (
    <html lang="en" data-layout-mode="light">
      <body className={inter.className}>
        <NavBar menuItems={menuItems}>
          {children}
        </NavBar>
      </body>
    </html>
  )
}