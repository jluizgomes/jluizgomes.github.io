import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import {BlogContent} from '~/assets/styles/pages/blog'
import {MainContainer} from '~/components'
import {useMounted} from '~/helpers/hooks'

const Blog: NextPage = () => {
  const isMounted = useMounted()
  return (
    <MainContainer titlePage="Jorge Gomes - My Blog">
      {!isMounted ? (
        <div>Carregando...</div>
      ) : (
        <BlogContent>
          <div className='blog-content'>
            <h3>Meu Blog</h3>
            <p>Muita calma nessas horas porque eu ainda estou trabalhando nisso...</p>
            <p>Mas só pra adiantar, aqui vou falar um pouco sobre um pouco de tudo, tecnologia, desenvolvimento de software, hard skills, soft skills... </p>
          </div>
        </BlogContent>
      )}

    </MainContainer>
  )
}

export default Blog
