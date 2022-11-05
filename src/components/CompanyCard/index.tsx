import { useRouter } from 'next/router'
import * as Styles from './index.styles'

interface OwnProps {
  title: string
  cardImage: JSX.Element
}

export const CompanyCard = ({ title, cardImage }: OwnProps) => {
  const router = useRouter()
  return (
    <Styles.CardContainer
      onClick={() =>
        router.push(`/empresas-parceiras/${title.split(' ').join('')}`)
      }
    >
      <Styles.ImageContainer>{cardImage}</Styles.ImageContainer>
      <Styles.TitleContainer>
        <h2>{title}</h2>
      </Styles.TitleContainer>
    </Styles.CardContainer>
  )
}
