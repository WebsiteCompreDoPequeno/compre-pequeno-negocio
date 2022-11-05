import styled from 'styled-components'
import * as GlobalConstants from '../../styles/global.constants'

export const CardContainer = styled.div`
  display: flex column;
  background-color: ${GlobalConstants.purpleBlue};
  color: ${GlobalConstants.gray};
  border-radius: 8px;
  width: max-content;
  cursor: pointer;
  transition: all ease 0.25s;
  box-shadow: 0 5px 15px black;

  ${GlobalConstants.desktopSize} {
    :hover {
      scale: 1.1;
    }
  }
`

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;

  img {
    border-radius: 5px 5px 0 0;
  }
`

export const TitleContainer = styled.span`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
