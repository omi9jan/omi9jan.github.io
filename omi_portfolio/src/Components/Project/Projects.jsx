import React from 'react'
import { 
    SimpleGrid,
    Grid,
    GridItem,
    Heading,
    Text,
    Image,
    Card,
    CardBody,
    CardFooter,
    Button,
    Stack,
    Divider,
    ButtonGroup,
    Box
 } from '@chakra-ui/react'

import {Link} from 'react-router-dom'
import { GrAttachment } from "react-icons/gr";

import Bewakoofweb from '../../Images/Bewakoofweb.png'
import Amazonweb from '../../Images/Amazonweb.png'
import Nordstromweb from '../../Images/Nordstromweb.png'
import Bigbasketweb from '../../Images/Bigbasketweb.png'

const Projects = () => {
  return (
    <SimpleGrid columns={1} spacingX='40px' spacingY={2} bgGradient=
    'linear(to-b, pink.200, purple.100, purple.200,purple.300,green.100,green.100)' 
    padding="40px">
        <Heading fontSize="50px">Projects</Heading>
        <Box className='dash'marginTop="20px">
            <Box className='hr-line' ></Box ><Box className='hr-line-orange'></Box><Box className='hr-line'></Box>
        </Box>
        <Heading as='h2' size='lg'>
            My Recent Works
        </Heading>
        <Text as='h3' size='md'>
            Here are a few projects I've worked on recently.
        </Text>
        <Grid templateColumns='repeat(2, 1fr)' gap={10} justifyContent='center' m='auto'  mt='10'>
            <GridItem m='auto' >
                <Card maxW='md' box-shadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'>
                    <CardBody>
                    <Image
                        src={Bewakoofweb}
                        alt='screenshot'
                        borderRadius='md'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Bewakoof.com Clone</Heading>
                        <Text textAlign='left'>Bewakoof.com is an ecommerce website which designs manufacture and market lifestyle fashion products for both men and women. The platform offers categories such as t-shirts, shirts, sweatshirts, jackets, hoodies, joggers, jeans, kurtas, shorts, and more. </Text>
                        <Text color='black.600' fontSize='xl' textAlign='left'>
                        Techstacks :
                        </Text>
                        <Text textAlign='left'>React | Redux | JSON-Server | Chakra-UI</Text>
                    </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    <ButtonGroup spacing='32'>
                        <Link to='https://boogy-cw.vercel.app/'>
                            <Button leftIcon={<GrAttachment/>} variant='outline' colorScheme='teal'>
                                 View Project
                            </Button>
                        </Link>
                        
                        <Link to='https://github.com/devn5900/humane-governor-8062'>
                            <Button leftIcon={<GrAttachment/>} variant='outline' colorScheme='teal'>
                                 Source Code
                            </Button>
                        </Link>
                    </ButtonGroup>
                    </CardFooter>
                </Card> 
            </GridItem>     

            <GridItem m='auto' >
                <Card maxW='md' box-shadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'>
                    <CardBody>
                    <Image
                        src={Amazonweb}
                        alt='screenshot'
                        borderRadius='md'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Amazon Clone</Heading>
                        <Text textAlign='left'>Amazon is an ecommerce platform that sells many product lines, including media, apparel, baby products, electronics, beauty products, groceries, health and personal care products, kitchen items, watches, etc.</Text>
                        <Text color='black.600' fontSize='xl' textAlign='left'>
                        Techstacks :
                        </Text>
                        <Text textAlign='left'>Next JS | React | Redux | CSS | Chakra UI | Firebase | JSON-server</Text>
                    </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    <ButtonGroup spacing='32'>
                        <Link to='https://apna-mart.vercel.app/'>
                            <Button leftIcon={<GrAttachment/>} variant='outline' colorScheme='teal'>
                                View Project
                            </Button>
                        </Link>
                        <Link to='https://github.com/atuls2060/ApnaMart'>
                            <Button leftIcon={<GrAttachment/>} variant='outline' colorScheme='teal'>
                                  Source Code
                            </Button>
                        </Link>
                    </ButtonGroup>
                    </CardFooter>
                </Card>
            </GridItem>

            <GridItem m='auto' >
                <Card maxW='md' box-shadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'>
                    <CardBody>
                    <Image
                        src={Nordstromweb}
                        alt='screenshot'
                        borderRadius='md'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Nordstrom Rack Clone</Heading>
                        <Text textAlign='left'>It is ecommerce stores for shoes, accessories for men, women and children at an everyday savings of up to 70 percent off regular prices. </Text>
                        <Text color='black.600' fontSize='xl' textAlign='left'>
                        Techstacks :
                        </Text>
                        <Text textAlign='left'>HTML | CSS | JavaScript | Bootstraps</Text>
                    </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    <ButtonGroup spacing='32'>
                        <Link to='https://nordstrom-js201.netlify.app'>
                            <Button leftIcon={<GrAttachment/>} variant='outline' colorScheme='teal'>
                                View Project
                            </Button>
                        </Link>
                        <Link to='https://github.com/vishal97600/entertaining-snails-6673'>
                            <Button leftIcon={<GrAttachment/>} variant='outline' colorScheme='teal'>
                                Source Code
                            </Button>
                        </Link>
                    </ButtonGroup>
                    </CardFooter>
                </Card>
            </GridItem>
                
            <GridItem m='auto' >
                <Card maxW='md' box-shadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'>
                    <CardBody>
                    <Image
                        src={Bigbasketweb}
                        alt='screenshot'
                        borderRadius='md'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Big Basket Clone</Heading>
                        <Text textAlign='left'>
                            Bigbasket is India's leading online grocery shopping app, trusted by 10 million+ happy customers and counting! Provide free delivery on order above Rs 600.</Text>
                        <Text color='black.600' fontSize='xl' textAlign='left'>
                        Techstacks :
                        </Text>
                        <Text textAlign='left'>React | CSS | JavaScript | Chakra-UI</Text>
                    </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    <ButtonGroup spacing='32'>
                        <Link to='https://bigbasket-moving-wind2028-rct101.netlify.app'>
                            <Button leftIcon={<GrAttachment/>} variant='outline' colorScheme='teal'>
                                View Project
                            </Button>
                        </Link>
                        <Link to='https://github.com/omi9jan/moving-wind-2028'>
                            <Button leftIcon={<GrAttachment/>} variant='outline' colorScheme='teal'>
                                Source Code
                            </Button>
                        </Link>
                    </ButtonGroup>
                    </CardFooter>
                </Card>         
            </GridItem>
        </Grid> 
    </SimpleGrid>
  )
}

export default Projects






















