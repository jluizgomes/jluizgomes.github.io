import React from 'react';
import Head from 'next/head'
import { Main, Container, Content } from '~/assets/styles/global'
import HeaderComponent from '../Header'
import FooterComponent from '../Footer'

interface Props {
  titlePage: string;
  children: any;
}

const MainContainer: React.FC<Props> = ({titlePage, children}) => {
  return (
    <Main>
      <Head>
        <title>{titlePage}</title>
      </Head>
      <Container>
        <HeaderComponent />
        <Content>{children}</Content>
        <FooterComponent />
      </Container>
    </Main>
  )
}

export default MainContainer
