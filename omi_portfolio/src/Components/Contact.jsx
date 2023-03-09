import React from 'react'
import { 
  SimpleGrid,
  Heading,
  Image,
  Box,
  Center,
  Text

} from '@chakra-ui/react'
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";


const Contact = () => {
  return (
    <SimpleGrid columns={1} spacingX='40px' spacingY={10} bgGradient=
    'linear(to-b, yellow.200, teal.100, teal.200,teal.300)' 
    padding="40px">
      <Heading fontSize="50px">Contact</Heading>
      <Box className='dash'>
          <Box className='hr-line' ></Box ><Box className='hr-line-orange'></Box><Box className='hr-line'></Box>
      </Box>
      <Center>
        <Box 
        // border='2px solid black'
         w='80%' h='300px'>
          <Text as='b' fontSize={'2xl'}>Get In Touch</Text>
          <Box display={'flex'} gap='10' w='4%' h='50px' m='auto' 
          // border='2px solid black'
          >
            <Center>
            <GoMarkGithub/>
              {/* <Image src='' alt='linkdin logo'/> */}
            <SiLinkedin/>
              {/* <Image src='' alt='github logo'/> */}
            </Center>
          </Box>
          <Text as='b' fontSize={'2xl'}>Connect me via phone:</Text>
          <Text>+91 8208979210</Text>
          <Text as='b' fontSize={'2xl'}>or Email:</Text>
          <Text>omikhupse09@gmail.com</Text>
        </Box>
      </Center>
      <Text>Designed By: Omkareshwari Khupse</Text>
    </SimpleGrid>
  )
}

export default Contact