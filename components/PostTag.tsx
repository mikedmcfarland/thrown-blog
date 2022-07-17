import { Icon, Tag, TagLabel, TagLabelProps } from '@chakra-ui/react'
import { iconForTag } from 'src/tags'

interface Props {
  tag: string
}

export default function PostTag({ tag }: Props) {
  const icon = iconForTag(tag)
  const tagLabelProps: TagLabelProps = {
    color: 'brand.500',
    textTransform: 'uppercase',
    fontWeight: '800',
    fontSize: 'xs',
    letterSpacing: '1.1',
    /* display: { base: 'none', md: 'flex' }, */
  }
  return (
    <Tag key={tag}>
      <TagLabel {...tagLabelProps} display={{ base: 'none', md: 'flex' }}>
        <>
          {icon ? <Icon as={icon} /> : null}
          {tag}
        </>
      </TagLabel>
      <TagLabel display={{ base: 'flex', md: 'none' }} {...tagLabelProps}>
        {icon ? <Icon as={icon} /> : tag}
      </TagLabel>
    </Tag>
  )
}
