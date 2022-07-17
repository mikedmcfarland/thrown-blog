import { Center, Icon } from '@chakra-ui/react'
import Image from 'next/image'
import { heroIcon } from 'src/tags'

type Props = {
  image?: string
  tags: string[]
}

export default function HeroImage({ image, tags }: Props) {
  return image ? (
    <Image src={image} alt={'Post Image'} layout={'fill'} />
  ) : (
    <Center>
      {' '}
      <Icon w={'210px'} h="100%" as={heroIcon(tags)} />
    </Center>
  )
}
