---
title: How to create a login page with ChakraUI
date: '2022-06-30'
summary: 'Here is how I setup a variant background for the ChakraUI button component'
tags: ['react', 'nextjs', 'chakraUI']
draft: false
---

```js
import { useState } from 'react'
import Image from 'next/image'
import {
  Flex,
  Heading,
  Input,
  Text,
  Button,
  InputGroup,
  Center,
  Container,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Grid,
  GridItem,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

import StagePlayerLogo from '../lib/assets/stage_player.svg'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword)

  return (
    <Flex
      height="100vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
      width="100vw"
    >
      <Container maxW="6xl" my={4}>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }}
          justifyContent={{ base: 'center' }}
        >
          <GridItem display={{ base: 'none', md: 'block' }} colSpan={{ md: 1 }} />

          <GridItem>
            <Center>
              <Image src={Logo} alt="Logo" />
            </Center>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 2, lg: 2 }}>
            <Box>
              <form>
                <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900">
                  <FormControl>
                    <InputGroup>
                      <Input
                        type="email"
                        placeholder="Email"
                        _placeholder={{ fontStyle: 'italic' }}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <InputGroup>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        _placeholder={{ fontStyle: 'italic' }}
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          h="1.75rem"
                          size="sm"
                          onClick={handleShowClick}
                          variant="transparent"
                        >
                          {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormHelperText textAlign="left">
                      <Link color="dark.500" href="#">
                        <Text as="u">Forgot password?</Text>
                      </Link>
                    </FormHelperText>
                  </FormControl>
                </Stack>
                <Flex justifyContent="flex-end" mx={4}>
                  <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme="blue"
                    rounded="md"
                  >
                    Sign in
                  </Button>
                </Flex>
              </form>
            </Box>
          </GridItem>
        </Grid>
        <Box mt={16}>
          <Center ml={{ md: 36 }} mr={{ lg: 36, xl: 16 }}>
            <Text textAlign="right" fontSize={{ base: '85%', md: '100%' }}>
              By signing in, you agree to our{' '}
              <Link color="dark.900" href="#">
                <Text as="u">Terms and Conditions</Text>
              </Link>
              <Box display={{ base: 'none', md: 'block' }} />
              and our{' '}
              <Link color="dark.500" href="#">
                <Text as="u"> End User License Agreement</Text>
              </Link>
              .
            </Text>
          </Center>
        </Box>
      </Container>
    </Flex>
  )
}
```

source: https://codesandbox.io/s/ncc3q?file=/src/App.js:522-2767
SEO: chakra ui login page
