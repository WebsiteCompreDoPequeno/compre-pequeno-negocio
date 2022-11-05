import { CompanyCard } from '../components/CompanyCard'
import { PagesContainer } from '../components/PagesContainer'
import { companies } from '../services/companies'
import * as Styled from '../styles/home.styles'

export default function Home() {
  return (
    <PagesContainer>
      <>
        <Styled.Title>
          <em>Empresas Parceiras</em>
        </Styled.Title>
        <Styled.HomeContainer>
          {companies.map((company, index) => (
            <CompanyCard
              title={company.title}
              cardImage={company.cardImage}
              key={index}
            />
          ))}
        </Styled.HomeContainer>
      </>
    </PagesContainer>
  )
}
