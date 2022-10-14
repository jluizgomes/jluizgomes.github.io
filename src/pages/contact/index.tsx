import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import {ContactContent, IconsContainer, IconsContent} from '~/assets/styles/pages/contact'
import {MainContainer, Icons} from '~/components'
import {useMounted} from '~/helpers/hooks'

const Contact: NextPage = () => {
  const isMounted = useMounted()
  return (
    <MainContainer titlePage="Jorge Gomes - Contact me">
      {!isMounted ? (
        <div>Carregando...</div>
      ) : (
        <ContactContent>
          <div className='contact-content'>
            <h3>Você pode me achar em...</h3>
            <IconsContainer>
              <Icons name="linkedin" />
              <Icons name="github" />
              <Icons name="twitter" />
            </IconsContainer>
          </div>
        </ContactContent>
      )}

    </MainContainer>
  )
}

export default Contact
