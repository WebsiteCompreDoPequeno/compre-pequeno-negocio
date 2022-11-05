import styled from 'styled-components'
import * as GlobalConstants from '../../../styles/global.constants'

export const MainContainer = styled.div`
  gap: 2rem;
  padding-bottom: 2rem;
`
export const Title = styled.h1`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${GlobalConstants.purpleBlue};
  font-size: 3rem;
`

export const LineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 25rem;
  gap: 2rem;
  flex-wrap: wrap;

  ${GlobalConstants.tabletSize} {
    height: 20rem;
  }

  ${GlobalConstants.mobileSize} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: max-content;
  }
`

export const ContentContainer = styled.div`
  height: 25rem;
  width: 25rem;
  color: ${GlobalConstants.purpleBlue};
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;

  ${GlobalConstants.tabletSize} {
    height: 100%;
    width: 20rem;
  }

  ${GlobalConstants.mobileSize} {
    width: 300px;
    height: max-content;
  }
`

export const ImageContainer = styled.div`
  height: 25rem;
  width: 25rem;
  box-shadow: 0 5px 15px black;
  border-radius: 5px;
  margin-bottom: 2rem;

  img {
    border-radius: 5px;
  }

  ${GlobalConstants.tabletSize} {
    height: 100%;
    width: 20rem;
  }

  ${GlobalConstants.mobileSize} {
    width: 300px;
    height: 300px;
  }
`
