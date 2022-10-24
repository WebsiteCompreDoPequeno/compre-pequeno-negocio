import * as Styles from './index.styles'

interface OwnProps {
  title: string
  cardImage: string
}

export const CompanyCard = ({ title, cardImage }: OwnProps) => {
  return (
    <Styles.CardContainer>
      <Styles.ImageContainer image={cardImage} />
      <Styles.TitleContainer>
        <h2>{title}</h2>
      </Styles.TitleContainer>
    </Styles.CardContainer>
  )
}
