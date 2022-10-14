import React from 'react';
import { Header, HeaderBackground } from '~/assets/styles/global'
import LogoSVG from '~/assets/images/logo.svg'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {Menu} from '~/components'
import {MainContainer, ProfileImage} from '~/components'
interface Props {
  route?: string;
}

const HeaderComponent: React.FC<Props> = () => {
  const router = useRouter()
  return (
    <Header>
      <Link href="/">
          <a className='logoTitleLink'>
            <ProfileImage />
            <div className="titlePage">
              <h2>
                &lt;Jorge Gomes /&gt;
              </h2>
            </div>
          </a>
        </Link>
        <Menu />
    </Header>
  )
}

export default HeaderComponent
