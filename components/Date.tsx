import { Stack, Text, StackProps } from '@chakra-ui/react'
import { FaCalendarAlt } from 'react-icons/fa'

interface Props extends StackProps {
  date: string
}

export default function Date({ date, ...stackProps }: Props) {
  return (
    <Stack direction={'row'} spacing={4} align={'center'} {...stackProps}>
      <FaCalendarAlt />
      <Stack direction={'column'} spacing={0} fontSize={'sm'}>
        <Text color={'gray.500'}>{date}</Text>
      </Stack>
    </Stack>
  )
}
