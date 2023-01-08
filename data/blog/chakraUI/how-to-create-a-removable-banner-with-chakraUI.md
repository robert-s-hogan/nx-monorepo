---
title: How to create a removable banner with ChakraUI
date: '2022-07-03'
summary: 'Here is how to create a removable banner with ChakraUI'
tags: ['react', 'chakraUI', 'alert']
draft: false
---

## Full Solution

```js
import {
  Box,
  Text,
  Link,
  Alert,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useDisclosure,
} from '@chakra-ui/react'

const Banner = ({ ctaText, link, description }) => {
  const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: true })

  return (
    <>
      {isVisible && (
        <Alert
          status="success"
          bgColor="brand.600"
          py={0}
          position="relative"
          justifyContent="center"
        >
          <AlertDescription>
            <Text
              textAlign="center"
              fontSize={{ base: 'sm', md: 'md' }}
              color="whiteAlpha.900"
              fontWeight="semibold"
              p={{ base: 2 }}
            >
              {description}{' '}
              <Link href={link} _hover={{ color: 'brand.900' }} textDecoration="underline">
                {ctaText}
              </Link>
            </Text>
          </AlertDescription>
          <CloseButton
            position="absolute"
            color="whiteAlpha.900"
            alignSelf="flex-start"
            right={0}
            top={0}
            onClick={onClose}
            zIndex={10}
          />
        </Alert>
      )}
    </>
  )
}

export default Banner
```
