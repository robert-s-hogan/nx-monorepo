---
title: How chakra ui handles Grid Column Span
date: '2022-07-08'
summary: 'Here is how I created a login page using ChakraUI to create responsive grid components'
tags: ['react', 'chakraUI', 'TailwindCSS', 'guide']
draft: false
---

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

SEO: grid span chakrui ui
Source: https://chakra-ui.com/docs/components/grid#spanning-columns
