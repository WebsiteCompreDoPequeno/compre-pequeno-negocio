/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Menu } from '../Menu'
import * as Styles from './index.styles'

interface OwnProps {
  children: JSX.Element
}

export const PagesContainer: React.FunctionComponent<OwnProps> = ({
  children
}: OwnProps) => {
  const [isInTheTop, setIsInTheTop] = useState<boolean>(true)

  const handleScroll = () => {
    if (window.scrollY < 10) {
      setIsInTheTop(true)
    } else {
      setIsInTheTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Styles.MainContainer>
      <Menu isInTheTop={isInTheTop} />
      <Styles.Content>{children}</Styles.Content>
    </Styles.MainContainer>
  )
}
