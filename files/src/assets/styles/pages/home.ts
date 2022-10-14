import styled from 'styled-components'

export const Home = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  .home-content {
    h3 {
      font-size: 54px;
      color: ${props => props.theme.colors.subtitle};
      margin-top: 40px;
    }

    p {
      margin-top: 24px;
      font-size: 24px;
      line-height: 32px;
      color: ${props => props.theme.colors.textContent};
    }
  }
`
