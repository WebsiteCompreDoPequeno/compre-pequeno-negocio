import { CompanyContent } from '../index.types'
import SoulLogo from '../../../../public/assets/images/soul-logo.jpeg'
import Image from 'next/image'

export const soul: CompanyContent = {
  title: 'Soul Moda íntima',
  cardImage: <Image src={SoulLogo} />,
  contents: [
    [
      {
        type: 'text',
        content: (
          <p>
            E hoje viemos aprestar a vocês a Soul Moda Íntima que está no
            mercado para entregar a sua melhor versão em forma de lingerie!{' '}
            <br />
            Ela trás muito conforto e beleza pra complementar todo o seu look.
          </p>
        )
      },
      {
        type: 'img',
        content: <Image src={SoulLogo} />
      }
    ],
    [
      {
        type: 'text',
        content: (
          <p>
            E não podemos deixar de falar que, da pra vê que em cada peça a loja
            consegue transmitir um pedacinho de sua alma e carinho fazendo com
            certeza vocês mais poderosas e goxxxxtosas 💕 <br />
            Tá esperando o que, venha conhecer?
          </p>
        )
      }
    ]
  ]
}
