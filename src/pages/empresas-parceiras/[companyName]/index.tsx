import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { PagesContainer } from '../../../components/PagesContainer'
import { companies } from '../../../services/companies'
import * as Styled from '../../../styles/companies.styles'

interface IParams extends ParsedUrlQuery {
  companyName: string
}

interface OwnProps {
  companyName?: string
}

export const getStaticPaths = async () => {
  const paths = companies.map((company) => ({
    params: {
      companyName: company.title.split(' ').join('')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { companyName } = context.params as IParams

  return {
    props: {
      companyName
    }
  }
}

export default function Company({ companyName }: OwnProps) {
  const content = companies.find(
    (company) => company.title.split(' ').join('') === companyName
  )
  return (
    <PagesContainer>
      <>
        <Styled.Title>
          <em>{content?.title}</em>
        </Styled.Title>
        <Styled.MainContainer>
          {content?.contents.map((line, i) => (
            <Styled.LineContainer key={i}>
              {line.map((ct, i) =>
                ct.type === 'text' ? (
                  <Styled.ContentContainer key={i}>
                    {ct.content}
                  </Styled.ContentContainer>
                ) : (
                  <Styled.ImageContainer key={i}>
                    {ct.content}
                  </Styled.ImageContainer>
                )
              )}
            </Styled.LineContainer>
          ))}
        </Styled.MainContainer>
      </>
    </PagesContainer>
  )
}
