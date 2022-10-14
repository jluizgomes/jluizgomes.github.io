import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.charlestonGreen};
    color: ${props => props.theme.colors.text};
    font: 400 16px Montserrat, sans-serif;
  }
`;

export const Main = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1003px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.cultured};
  border: 1px solid ${props => props.theme.colors.borderBox};
  -webkit-box-shadow: 0 0 10px 0 ${props => props.theme.colors.boxShadow};
  -moz-box-shadow: 0 0 10px 0 ${props => props.theme.colors.boxShadow};
  box-shadow: 0 0 10px 0 ${props => props.theme.colors.boxShadow};
  border-radius: 5px;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1003px;
  height: auto;
  min-height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`

export const HeaderBackground = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 300px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: url(${props => props.theme.header.backgroundImage});
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  opacity: 0.3;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid ${props => props.theme.colors.gainsboro};
  padding: 10px;

  .header-content {
    position: fixed;
    z-index: 1;
  }

  a.logoTitleLink {
    display: flex;
    align-self: center;
    align-items: center;
    flex-direction: column;
  }

  .titlePage {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    h2 {
      color: ${props => props.theme.colors.logoTitle};
    }
  }

  .menu {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      font-weight: normal;
      font-size: .9em;
      text-decoration: none;
      margin: 0 1em;
      padding: 0.5em .8em;
      color: ${props => props.theme.colors.cadetBlueCrayola};

      &.active {
        color: ${props => props.theme.colors.gunmetal};
        font-weight: 600;
      }
    }
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 45px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-top: 1px solid ${props => props.theme.colors.gainsboro};
  padding: 10px;

  .footer-container {
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      font-weight: normal;
      font-size: .8em;
      color: ${props => props.theme.colors.slateGray};
      margin: 0;
      padding: 0;
    }
  }
`
