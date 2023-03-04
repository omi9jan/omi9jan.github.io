import React from 'react';
import Styles from "../Styles/Education.css";
import education from "../Images/education.png";
import techstack from "../Images/techstack.png";
import {
    SimpleGrid,
    Box,
    Image,
    Container,
    VStack,
    Heading,
    Flex
} from "@chakra-ui/react";

export default function Education() {
  return (
    <div className='edu-app'>
        <SimpleGrid bgGradient=
            'linear(to-b, orange.300, orange.200,orange.100,pink.100, pink.100, pink.200 )'
        >
            <Heading fontSize="50px">Education</Heading>
            <Box className='dash'marginTop="20px">
                    <Box className='hr-line' ></Box ><Box className='hr-line-orange'></Box><Box className='hr-line'></Box>
            </Box>
            <SimpleGrid columns={2} width="80%" margin='auto' height="auto">
                <Box height='auto' padding="10px" >
                    <Flex 
                    bg='green.200'
                    gap={2} 
                    textAlign='center' 
                    justifyContent='left' 
                    alignItems='center'
                    padding='10px' 
                    borderRadius={20}
                    marginBottom={3}>
                        <Box>
                            <Image src={techstack} width={20} height={20} borderRadius={50}/>
                        </Box>
                        <Box>
                            <Container maxW='md'  
                            color='grey.200' 
                            textAlign="left" 
                            fontSize={14}
                            padding="2px">
                                    Present
                            </Container>
                            <Container maxW='md'  
                            fontSize={20}
                            color='grey.100' 
                            fontWeight='bold'
                            textAlign="left" 
                            padding="2px">
                                    Full Stack Web Developer
                            </Container>
                            <Container maxW='md'  color='#262626' textAlign="left" padding="2px">
                                    Masai School Bengaluru, Karnataka
                            </Container>
                        </Box>
                    </Flex>  
                    <Flex 
                    bg='green.200'
                    gap={2} 
                    textAlign='center' 
                    justifyContent='left' 
                    alignItems='center'
                    padding='10px' 
                    borderRadius={20}
                    marginBottom={3}>
                        <Box>
                            <Image src={techstack} width={20} height={20} borderRadius={50}/>
                        </Box>
                        <Box>
                            <Container maxW='md'  
                            color='grey.200' 
                            textAlign="left" 
                            fontSize={14}
                            padding="2px">
                                2020
                            </Container>
                            <Container maxW='md'  
                            fontSize={20}
                            color='grey.100' 
                            fontWeight='bold'
                            textAlign="left" 
                            padding="2px">
                                Bachelor of Engineering
                            </Container>
                            <Container maxW='md'  color='#262626' textAlign="left" padding="2px">
                                P.R. Pote College of Engineering & Management, Amravati
                            </Container>
                        </Box>
                    </Flex>
                    <Flex 
                    bg='green.200'
                    gap={2} 
                    textAlign='center' 
                    justifyContent='left' 
                    alignItems='center'
                    padding='10px' 
                    borderRadius={20}
                    marginBottom={3}>
                        <Box>
                            <Image src={techstack} width={20} height={20} borderRadius={50}/>
                        </Box>
                        <Box>
                            <Container maxW='md'  
                            color='grey.200' 
                            textAlign="left" 
                            fontSize={14}
                            padding="2px">
                                2016
                            </Container>
                            <Container maxW='md'  
                            fontSize={20}
                            color='grey.100' 
                            fontWeight='bold'
                            textAlign="left" 
                            padding="2px">
                                Higher Secondary Certificate
                            </Container>
                            <Container maxW='md'  color='#262626' textAlign="left" padding="2px">
                                Vidya Bharti Mahavidyalaya, Amravati
                            </Container>
                        </Box>
                    </Flex>
                    <Flex 
                    bg='green.200'
                    gap={2} 
                    textAlign='center' 
                    justifyContent='left' 
                    alignItems='center'
                    padding='10px' 
                    borderRadius={20}
                    marginBottom={3}>
                        <Box>
                            <Image src={techstack} width={20} height={20} borderRadius={50}/>
                        </Box>
                        <Box>
                            <Container maxW='md'  
                            color='grey.200' 
                            textAlign="left" 
                            fontSize={14}
                            padding="2px">
                                   2014
                            </Container>
                            <Container maxW='md'  
                            fontSize={20}
                            color='grey.100' 
                            fontWeight='bold'
                            textAlign="left" 
                            padding="2px">
                                    Secondary School Certificate
                            </Container>
                            <Container maxW='md'  color='#262626' textAlign="left" padding="2px">
                            Shri Ganeshdas Rathi Vidyalaya
                            </Container>
                        </Box>
                    </Flex>     
                </Box>
                <Box 
                // border='2px solid black' 
                textAlign='center' 
                justifyContent='center' 
                alignItems='center'
                padding='10px'
               >
                    <Image src={education} 
                    textAlign='center'  
                    height={465} 
                    width={600}
                    borderRadius={40}/>
                </Box>
                
            </SimpleGrid>
        </SimpleGrid>
        
        

    </div>
  )
}
