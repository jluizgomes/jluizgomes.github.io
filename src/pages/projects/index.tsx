import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import {ProjectsContent} from '~/assets/styles/pages/projects'
import {MainContainer} from '~/components'
import {useMounted} from '~/helpers/hooks'

const Projects: NextPage = () => {
  const isMounted = useMounted()
  return (
    <MainContainer titlePage="Jorge Gomes - Projects">
      {!isMounted ? (
        <div>Carregando...</div>
      ) : (
        <ProjectsContent>
          <div className='projects-content'>
            <h3>Principais e antigos projetos</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </ProjectsContent>
      )}

    </MainContainer>
  )
}

export default Projects
