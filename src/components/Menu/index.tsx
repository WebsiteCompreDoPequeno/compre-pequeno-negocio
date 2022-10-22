import * as Styles from './index.styles'
import LogoSite from '../../../public/favicon.ico'
import Link from 'next/link'

interface OwnProps {
  isInTheTop: boolean
}

export const Menu = ({ isInTheTop }: OwnProps) => {
  return (
    <Styles.MainContainerMenu isInTheTop={isInTheTop}>
      <Styles.Logo src={LogoSite} alt="Logo" width={130} height={130} />
      <Styles.SubContainerMenu>
        <Styles.OptionMenu>
          <Link href="/">Home</Link>
        </Styles.OptionMenu>
        <Styles.OptionMenu>
          <Link href="/quem-somos">Quem Somos</Link>
        </Styles.OptionMenu>
        <Styles.OptionMenu>
          <Link href="/contato">Contato</Link>
        </Styles.OptionMenu>
      </Styles.SubContainerMenu>
    </Styles.MainContainerMenu>
  )
}
