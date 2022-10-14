import styled from 'styled-components'

export const BlogContent = styled.div`
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  .blog-content {
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
