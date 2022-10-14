import type { NextPage } from 'next'
import {AboutContent} from '~/assets/styles/pages/about'
import {MainContainer} from '~/components'
import {useMounted} from '~/helpers/hooks'

const Home: NextPage = () => {
  const isMounted = useMounted()
  return (
    <MainContainer titlePage="Jorge Gomes - About me">
      {!isMounted ? (
        <div>Carregando...</div>
      ) : (
        <AboutContent>
          <div className="about-content">
            <h3>Olá! 🤘🤓</h3>
            <p>Meu nome é Jorge Gomes, de São Paulo, Brasil 🇧🇷. Trabalho como Desenvolvedor de Software desde 2004, e atualmente sou Desenvolvedor de Software no GPA, trabalho principalmente com aplicativos mobile. Sou apaixonado por aprender tudo sobre tecnologia, psicologia e filosofia, juntando todo esse conhecimento e aplicando no dia a dia. No meu tempo livre gosto de ler livros (📚), assistir filmes e séries (🍿), assistir esportes (⚽ 🏀 🏈 ⚾) (gosto de jogar futebol também como goleiro 😁🧤), ouvir música (🎵), escrever contos de terror (✍️), tocar violino (🎻), jogar videogame e assistir animes e desenhos animados com minha filha.</p>
            <br />
            <br />
            <h3>Hi there! 🤘🤓</h3>
            <p>My name is Jorge Gomes, from Sao Paulo, Brazil 🇧🇷. I've been working as Software Developer since 2004, and currently I'm Software Developer at GPA, working maily with mobile applications. I'm passionate about learning everything about technology, psychology, and philosophy, putting all this knowledge together, and apply day by day. In my free time I like to read books (📚), watch movies and series (🍿), to watch sports (⚽ 🏀 🏈 ⚾) (I like to play soccer too as goalkeeper 😁🧤), listen to music (🎵), write horror tales (✍️), play my violin (🎻), play video game and watch animes and cartoons with my daughter.</p>
          </div>
        </AboutContent>
      )}

    </MainContainer>
  )
}

export default Home
