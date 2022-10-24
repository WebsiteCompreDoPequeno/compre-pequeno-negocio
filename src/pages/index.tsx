import { CompanyCard } from '../components/CompanyCard'
import { PagesContainer } from '../components/PagesContainer'
import { companies } from '../services/companies'
import { HomeContainer } from './home/indes.styles'

export default function Home() {
  return (
    <PagesContainer>
      <HomeContainer>
        {companies.map((company, index) => (
          <CompanyCard
            title={company.title}
            cardImage={company.cardImage}
            key={index}
          />
        ))}
      </HomeContainer>
    </PagesContainer>
  )
}
