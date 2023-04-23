---
title: How to improve performance NextJS background images
date: '2022-09-28'
summary: 'Here is how I improved my web app performance using NextJS, ChakraUI and Image(NextJS)'
tags: ['react', 'chakraUI', 'nextJS', 'performance']
draft: false
---

```js
<Box position="relative">
  <Image
    src={BgImage}
    alt="hero"
    layout="fill"
    objectFit="cover"
    objectPosition="center"
  />

  <Flex
    height="50vh"
    direction="column"
    alignItems="center"
    justifyContent="center"
    width="100vw"
  >
    <Container maxW={{ base: '4xl', xl: '7xl' }} my={4}>
      <VStack spacing={4}>
        <Box
          position="relative"
          width={{ base: '200px', md: '250px' }}
          height={{ base: '136px', md: '171px' }}
          mt={8}
        >
          <Center>
            <Image layout="fill" src={Logo} alt="StagePlayer Logo" priority />
          </Center>
        </Box>
        <Text fontSize={{ base: '2rem' }} color="brand.100" text>
          Your source for professional-quality digital backdrops
        </Text>
        <Text fontSize={{ base: '1rem' }} color="whiteAlpha.900" text>
          Placeholder text.
        </Text>
      </VStack>
    </Container>
  </Flex>
  <MainCards />
</Box>
```

source: https://uharston.medium.com/next-js-image-optimization-on-background-images-65de18ea03f5
