import styled from 'styled-components'
import * as GlobalConstants from '../styles/global.constants'

export const HomeContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  ${GlobalConstants.mobileSize} {
    justify-content: center;
  }
`

export const Title = styled.h1`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${GlobalConstants.purpleBlue};
  font-size: 3rem;
`
