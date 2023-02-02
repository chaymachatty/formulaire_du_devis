import React, { useState } from 'react';
import styles from '../styles/input.module.css';
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
  
const Form1 = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
      <>
    
          <FormControl mr="5%">
            <Input className={styles.inputForm}  id="nom" placeholder="nom" />
          </FormControl>
  
          <FormControl mt="2%">
            <Input  id="prenom" placeholder="prenom" />
          </FormControl>

          <FormControl mt="2%">
            <Input id="tel" placeholder="tel" />
          </FormControl>
          <FormControl as={GridItem} colSpan={[6, 3]} mt="2%">
         
         <Select
           id="localisation"
           name="localisation"
           autoComplete="country"
           placeholder="localisation"
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
            <Input id="fonction" placeholder="fonction" />
          </FormControl>
          
          <FormControl mt="2%">
            <Input type="number" id="age" placeholder="age" />
          </FormControl>
       
  
       
      </>
    );
  };
export default Form1;  