---
title: How to create a mobile menu with a nested dropdown in ChakraUI
date: '2022-06-16'
summary: 'Here is how I setup a variant background for the ChakraUI button component'
tags: ['react', 'chakraUI', 'hooks']
draft: false
---

```js
<Menu>
  <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="transparent" />
  <MenuList py={0} zIndex={3} onMouseEnter={onOpen} onMouseLeave={onClose}>
    <MenuItem onMouseEnter={onOpen} onMouseLeave={onClose} p={0}>
      <Select
        placeholder="StagePlayer Web"
        borderTop="0"
        borderLeft="0"
        borderRight="0"
        roundedBottom="0"
      >
        <option value="option1">About SP Web</option>
        <option value="option2">Contact Us</option>
      </Select>
    </MenuItem>
    <MenuItem p={0}>
      <Select
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        placeholder="My Collections"
        borderTop="0"
        borderLeft="0"
        borderRight="0"
        roundedBottom="0"
      >
        <option value="option1">New Collection</option>
        <option value="option2">View/Edit</option>
      </Select>
    </MenuItem>
    <MenuItem onMouseEnter={onOpen} onMouseLeave={onClose} p={0}>
      <Select
        placeholder="My Productions"
        borderTop="0"
        borderLeft="0"
        borderRight="0"
        roundedBottom="0"
      >
        <option value="option1">New Production</option>
        <option value="option2">Active Productions</option>
        <option value="option2">Retired Productions</option>
      </Select>
    </MenuItem>
    <MenuItem>Login/Logout</MenuItem>
    <MenuItem>Help</MenuItem>
  </MenuList>
</Menu>
```

seo: menu dropdown chakrui

docs: https://chakra-ui.com/docs/hooks/use-disclosure
source: https://www.coffeeclass.io/articles/use-disclosure-menu-chakra-ui
