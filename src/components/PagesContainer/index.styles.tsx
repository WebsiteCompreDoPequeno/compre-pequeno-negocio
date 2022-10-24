import styled from 'styled-components'
import * as GlobalConstants from '../../styles/global.constants'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Content = styled.div<{ isInTheTop: boolean }>`
  width: 100%;
  max-width: ${GlobalConstants.maxWidthScreenDesktop};
  margin-top: ${({ isInTheTop }) => (isInTheTop ? '14rem' : '8rem')};

  ${GlobalConstants.tabletSize} {
    max-width: ${GlobalConstants.maxWidthScreenTablet};
  }

  ${GlobalConstants.mobileSize} {
    padding: 0 2rem 0 2rem;
  }
`
