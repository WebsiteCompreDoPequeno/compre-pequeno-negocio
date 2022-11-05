import { PagesContainer } from '../../components/PagesContainer'
import * as Styled from '../../styles/quemSomos.styles'

export default function QuemSomos() {
  return (
    <PagesContainer>
      <Styled.MainContainer>
        <Styled.Title>
          <em>Quem somos</em>
        </Styled.Title>
        <Styled.ContentContainer>
          Somos uma equipe composta por 12 membros de diferentes cursos
          (Administração, TI, Recursos Humanos e Marketing) e recebemos a
          proposta da faculdade em que estudamos, a UniAcademia (antigo CES/JF),
          de criar um projeto.
        </Styled.ContentContainer>
        <Styled.ContentContainer>
          Decidimos criar o {`"Compre do Pequeno Negócio"`} com o intuito de
          divulgar conteúdos sobre a importância de consumir produtos/serviços
          dos Pequenos Negócio (de qualquer segmento) e também de ajudar as
          empresas locais com a divulgação no nosso Instagram e site para que
          ela se torne conhecida.
        </Styled.ContentContainer>
        <Styled.ContentContainer>
          Nesse momento de pós pandemia em que vivemos, precisamos apoiar
          àquelas que em fevereiro de 2021 geraram quase 70% dos empregos no
          Brasil e mais de 275 mil vagas de emprego, um valor dobrado se
          comparado às vagas oferecidas pelas grandes empresas (fonte: Agência
          Brasil, 02/04/2021), visto que muitas outras empresas fecharam.
        </Styled.ContentContainer>
        <Styled.ContentContainer>
          Para que a gente não veja mais aquela padaria, loja, hortifruti,
          mercado, entre muitos outros, fecharem, vamos ajudar! <br />{' '}
          <b>
            <em>#CompreDoPequeno</em>
          </b>{' '}
          ✨
        </Styled.ContentContainer>
      </Styled.MainContainer>
    </PagesContainer>
  )
}
