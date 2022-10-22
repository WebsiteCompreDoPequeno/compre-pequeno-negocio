import { useRouter } from 'next/router'
import * as Styles from './index.styles'
import LogoSite from '../../../public/favicon.ico'

interface OwnProps {
  isInTheTop: boolean
}

export const Menu = ({ isInTheTop }: OwnProps) => {
  const router = useRouter()

  return (
    <Styles.MainContainerMenu isInTheTop={isInTheTop}>
      <Styles.Logo src={LogoSite} alt="Logo" width={130} height={130} />
      <Styles.SubContainerMenu>
        <Styles.OptionMenu onClick={() => router.push('/')}>
          Home
        </Styles.OptionMenu>
        <Styles.OptionMenu onClick={() => router.push('/quem-somos')}>
          Quem Somos
        </Styles.OptionMenu>
        <Styles.OptionMenu onClick={() => router.push('/contato')}>
          Contato
        </Styles.OptionMenu>
      </Styles.SubContainerMenu>
    </Styles.MainContainerMenu>
  )
}
