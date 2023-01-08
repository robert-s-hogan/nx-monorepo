---
title: How does chakra ui handle tailwind media queries (React)
date: '2022-06-24'
summary: 'Here is how I handled ChakraUI to create responsive sizes on ChakraUI components'
tags: ['react', 'chakraUI', 'TailwindCSS', 'guide']
draft: false
---

Here is the official ChakraUI link detailing what I am going to go over: (link)[https://chakra-ui.com/getting-started/comparison#responsive-styles-]

There are two ways to create call the ChakraUI API:

```js
Array syntax: <Img w={[16, 32, 48]} src="...">
```

```js
Object syntax: <Img w={{ base: 16, md: 32, lg: 48 }} src="..." />
```

## Other Examples

```js
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
              <Input type="email" placeholder="Email" _placeholder={{ fontStyle: 'italic' }} />
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
                <Button h="1.75rem" size="sm" onClick={handleShowClick} variant="transparent">
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
          <Button borderRadius={0} type="submit" variant="solid" colorScheme="blue" rounded="md">
            Sign in
          </Button>
        </Flex>
      </form>
    </Box>
  </GridItem>
</Grid>
```

```js
<Grid
  h="100vh"
  bg="yellow.100"
  templateColumns={{ base: '1fr', lg: '4em 3fr 2fr 4em' }}
  templateRows={{ base: '2fr 2fr 1fr 1.5fr 0.5fr', lg: '1fr 3fr 2fr 0.5fr' }}
>
  Content
</Grid>
```

SEO: grid template columsn responsive chakraui
source: https://github.com/chakra-ui/chakra-ui/discussions/2781#discussioncomment-206491
