import { CompanyContent } from '../index.types'
import MimosDeAmorLogo from '../../../../public/assets/images/mimos-de-amor-logo.jpeg'
import Image from 'next/image'

export const mimosDeAmor: CompanyContent = {
  title: 'Mimos de Amor',
  cardImage: 'mimosDeAmorLogo',
  contents: [
    [
      {
        type: 'text',
        content: (
          <p>
            Uma loja que personaliza todo o enxoval de seu bebê entre outras
            peças personalizadas também !! ❤️
          </p>
        )
      },
      {
        type: 'img',
        content: <Image src={MimosDeAmorLogo} />
      }
    ],
    [
      {
        type: 'text',
        content: (
          <p>
            {' '}
            Já pensou em ter peças importantes com sua cara e do seu jeitinho? A
            mimos de amor pode lhe proporcionar isso.
          </p>
        )
      },
      {
        type: 'text',
        content: <p>O que tá esperando? Faça já uma visitinha ✨</p>
      }
    ]
  ]
}
