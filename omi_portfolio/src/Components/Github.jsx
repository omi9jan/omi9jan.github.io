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

const Github = () => {
  return (
    <SimpleGrid columns={1} spacingX='40px' spacingY={2} bgGradient=
    'linear(to-b, pink.200, purple.100, purple.200,purple.300)' 
    padding="40px">
      <Heading fontSize="50px">Github Calender</Heading>
      <Box className='dash'marginTop="20px">
          <Box className='hr-line' ></Box ><Box className='hr-line-orange'></Box><Box className='hr-line'></Box>
      </Box>
    </SimpleGrid>
  )
}
export default Github
