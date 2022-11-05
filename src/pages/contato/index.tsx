import { PagesContainer } from '../../components/PagesContainer'
import * as Styled from '../../styles/quemSomos.styles'

export default function Contato() {
  return (
    <PagesContainer>
      <Styled.MainContainer>
        <Styled.Title>
          <em>Contato</em>
        </Styled.Title>
        <Styled.ContentContainer>
          E-mail: projetointegrador2122@gmail.com
        </Styled.ContentContainer>
        <Styled.ContentContainer>
          Instagram:{' '}
          <a
            href="https://www.instagram.com/compredopequenojf_/"
            target="_blank"
            rel="noreferrer noopener"
          >
            @compredopequenojf_
          </a>
        </Styled.ContentContainer>
      </Styled.MainContainer>
    </PagesContainer>
  )
}
