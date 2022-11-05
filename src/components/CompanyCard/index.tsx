import { useRouter } from 'next/router'
import { ImagesMap } from '../../services/companies/ImagesMap'
import * as Styles from './index.styles'

interface OwnProps {
  title: string
  cardImage: string
}

export const CompanyCard = ({ title, cardImage }: OwnProps) => {
  const router = useRouter()
  return (
    <Styles.CardContainer
      onClick={() => router.push(`/companies/${title.split(' ').join('')}`)}
    >
      <Styles.ImageContainer>{ImagesMap[cardImage]}</Styles.ImageContainer>
      <Styles.TitleContainer>
        <h2>{title}</h2>
      </Styles.TitleContainer>
    </Styles.CardContainer>
  )
}
