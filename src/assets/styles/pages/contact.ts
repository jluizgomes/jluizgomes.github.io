import styled from 'styled-components'

export const ContactContent = styled.div`
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  .contact-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    h3 {
      color: ${props => props.theme.colors.subtitle};
    }

    p {
      margin-top: 15px;
      font-size: 1em;
      line-height: 32px;
      color: ${props => props.theme.colors.textContent};
    }
  }
`
export const IconsContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
`

export const IconsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
`
