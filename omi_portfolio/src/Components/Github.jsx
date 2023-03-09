import React from 'react'
import { 
  SimpleGrid,
  Heading,
  Image,
  Box,
  Center
} from '@chakra-ui/react'

import calender from '../Images/calender.png'
import lanUsed from '../Images/lanUsed.png'
import statGrade from '../Images/statGrade.png'
import streak from '../Images/streak.png'

const Github = () => {
  return (
    <SimpleGrid columns={1} spacingX='40px' spacingY={5} bgGradient=
    'linear(to-b, green.100, green.200, yellow.100,yellow.200)' 
    padding="40px">
      <Heading fontSize="50px">Github Calender</Heading>
      <Box className='dash'>
          <Box className='hr-line' ></Box ><Box className='hr-line-orange'></Box><Box className='hr-line'></Box>
      </Box>
      <Center><Image src={calender} alt='git calender img' w='80%' h='200px'borderRadius={5}/></Center>
      
      <Center><Image src={lanUsed} alt='git calender img' w='30%' h='200px'borderRadius={5}/></Center>
      
      <SimpleGrid display={'flex'} gap={5} w='80%' m='auto'>
        <Image src={statGrade} alt='git calender img' w='50%' h='200px' borderRadius={5}/>
        <Image src={streak} alt='git calender img' w='50%' h='200px'borderRadius={5}/>
      </SimpleGrid>
      
      
    </SimpleGrid>
  )
}
export default Github
