import { Center, Icon } from '@chakra-ui/react'
import Image from 'next/image'
import { firstIcon } from 'src/tags'

type Props = {
  image?: string
  tags: string[]
}

export default function HeroImage({ image, tags }: Props) {
  if (image) {
    return <Image src={image} alt={'Post Image'} layout={'fill'} />
  }
  const icon = firstIcon(tags)
  if (icon) {
    return (
      <Center>
        {' '}
        <Icon w={'210px'} h="100%" as={icon} />
      </Center>
    )
  }
  return <></>
}
