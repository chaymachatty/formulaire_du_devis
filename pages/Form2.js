import React, { useState } from 'react';
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
  } from '@chakra-ui/react';
  
  import { useToast } from '@chakra-ui/react';
  const Form2 = () => {
    return (
      <>
        
        <FormControl as={GridItem} colSpan={[6, 3]}>
         
          <Select
            id="country"
            name="country"
            autoComplete="country"
            placeholder="Type"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md">
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </Select>
        </FormControl>
  
        <FormControl mt="2%">
          
          <Input id="email" type="email" placeholder="Technologies" />
    
        </FormControl>
        </>
  
    );
  };
  export default Form2;