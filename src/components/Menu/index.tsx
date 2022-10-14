import React from 'react';
import { Header } from '~/assets/styles/global'
import Logo from '~/assets/images/logo.svg'
import Link from 'next/link'
import {useRouter} from 'next/router'

interface Props {
  route?: string;
}

const Menu: React.FC<Props> = () => {
  const router = useRouter()

  return (
    <div className="menu">
        {/* <Link href="/"><a className={router.pathname === '/' ? 'active' : ''}>Home</a></Link> */}
        <Link href="/"><a className={router.pathname === '/' ? 'active' : ''}>About Me</a></Link>
        <Link href="/projects"><a className={router.pathname === '/projects' ? 'active' : ''}>Projects</a></Link>
        <Link href="/blog"><a className={router.pathname === '/blog' ? 'active' : ''}>Blog</a></Link>
        <Link href="/contact"><a className={router.pathname === '/contact' ? 'active' : ''}>Contact</a></Link>
      </div>
  )
}

export default Menu
