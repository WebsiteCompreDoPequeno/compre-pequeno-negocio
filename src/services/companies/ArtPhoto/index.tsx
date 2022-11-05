import { CompanyContent } from '../index.types'
import ArtPhotoLogo from '../../../../public/assets/images/art-photo-logo.jpg'
import Image from 'next/image'

export const artPhoto: CompanyContent = {
  title: 'Art Photo',
  cardImage: <Image src={ArtPhotoLogo} />,
  contents: [
    [
      {
        type: 'text',
        content: (
          <p>
            Já pensou em presentear pessoas que você ama hoje?? <br />A Art
            Photo é uma ótima empresa e opção que além de fazer tudo com muito
            amor possui diversas opções como chaveiro, caneca, quadros
            personalizados e polaroid.
          </p>
        )
      },
      {
        type: 'img',
        content: <Image src={ArtPhotoLogo} />
      }
    ],
    [
      {
        type: 'text',
        content: (
          <p>
            Caso tenha interesse em eternizar momentos especiais e deixar com o
            coração quentinho quem você ama entre em contato pelo wpp ou insta.{' '}
            <br />E não se esqueça não deixe pra amanhar se você pode presentear
            hoje hahahah.
          </p>
        )
      }
    ]
  ]
}
