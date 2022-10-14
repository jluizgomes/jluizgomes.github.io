import styled from 'styled-components'

export const AboutContent = styled.div`
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  .about-content {
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

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 150px;
  height: 150px;
  margin-top: 20px;
  border-radius: 100%;
  border: 1px solid ${props => props.theme.colors.borderBox};
  -webkit-box-shadow: 0 0 10px 0 ${props => props.theme.colors.boxShadow};
  -moz-box-shadow: 0 0 10px 0 ${props => props.theme.colors.boxShadow};
  box-shadow: 0 0 10px 0 ${props => props.theme.colors.boxShadow};
  overflow: hidden;
`
