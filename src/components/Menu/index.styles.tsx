import Image from 'next/image'
import styled from 'styled-components'
import * as GlobalConstants from '../../styles/global.constants'

export const MainContainerMenu = styled.div<{ isInTheTop: boolean }>`
  position: fixed;
  width: 100vw;
  background-color: ${GlobalConstants.green};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease 0.25s;
  height: ${({ isInTheTop }) => (isInTheTop ? '14rem' : '4rem')};
  gap: 1rem;
  padding: 1rem 0 1rem 0;
  box-shadow: 0 5px 15px black;
`

export const SubContainerMenu = styled.div`
  max-width: ${GlobalConstants.maxWidthScreenDesktop};
  color: ${GlobalConstants.purpleBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${GlobalConstants.tabletSize} {
    max-width: ${GlobalConstants.maxWidthScreenTablet};
  }

  ${GlobalConstants.mobileSize} {
    padding: 0 2rem 0 2rem;
  }
`

export const OptionMenu = styled.h1`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    transition: all ease 0.25s;
    color: ${GlobalConstants.gray};
  }

  ${GlobalConstants.mobileSize} {
    font-size: 1.2rem;
  }
`
export const Logo = styled(Image)`
  border-radius: 180px;
`
