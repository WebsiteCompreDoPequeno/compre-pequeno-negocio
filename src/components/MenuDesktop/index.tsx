import * as Styles from './index.styles'
import LogoSite from '../../../public/favicon.ico'

export const MenuDesktop = () => {
  return (
    <Styles.MainContainerMenu>
      <Styles.Logo src={LogoSite} alt="Logo" width={130} height={130} />
      <Styles.SubContainerMenu>
        <Styles.OptionMenu>Parceiros</Styles.OptionMenu>
        <Styles.OptionMenu>Quem Somos</Styles.OptionMenu>
        <Styles.OptionMenu>Contato</Styles.OptionMenu>
      </Styles.SubContainerMenu>
    </Styles.MainContainerMenu>
  )
}
