import Image from 'next/image'
import ArtPhotoLogo from '../../../public/assets/images/art-photo-logo.jpg'
import MimosDeAmorLogo from '../../../public/assets/images/mimos-de-amor-logo.jpeg'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ImagesMap: any = {
  mimosDeAmorLogo: <Image src={MimosDeAmorLogo} />,
  artPhotoLogo: <Image src={ArtPhotoLogo} />
}
