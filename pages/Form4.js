import React, { useState } from 'react';
import { Text } from '@chakra-ui/react';
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
  const Form4 = () => {
    return (
      <>
        
        <SimpleGrid columns={1} spacing={6}>
            <Box
            display={"flex"}
            mx={"10%"}
           >
            <FormControl mt={"5%"}>
          
          <FormLabel
            fontSize={"20px"}
            mt={"10%"}
            fontWeight={"bold"}
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Puissance de la pompe:
          </FormLabel>
          
        </FormControl>
        <Box
        borderWidth="1px"
        rounded="lg"
        shadow=" 0px 1px 1px rgba(0, 0, 0, 0.25)"
        background="rgba(255, 249, 238, 0.18)"
        borderRadius="20px"
        border="1px solid #09A79D"
        maxWidth={500}
        p={6}
        m="10px auto"
        mt="2%"
        as="form"
  
        >
     <FormControl display={"flex"} >
          <Text  
            mr={"40%"}> 3HP</Text>
          <input  type="radio" id="choix1"/>
       </FormControl>
        
       <FormControl display={"flex"} >
          <Text 
          mt={"10%"} mr={"40%"}> 4HP</Text>
          <input  type="radio" id="choix1"/>
       </FormControl>

       <FormControl display={"flex"}>
          <Text 
          mt={"10%"} mr={"15%"}> 5.5HP</Text>
          <input  type="radio" id="choix1"/>
       </FormControl>
       <FormControl display={"flex"}>
          <Text 
          mt={"10%"} mr={"15%"}> 7.5HP</Text>
          <input  type="radio" id="choix1"/>
       </FormControl>
       <FormControl display={"flex"}>
          <Text 
          mt={"10%"} mr={"20%"}> 10HP</Text>
          <input  type="radio" id="choix1"/>
       </FormControl>
       <FormControl display={"flex"}>
          <Text 
          mt={"10%"} mr={"20%"}> 15HP</Text>
          <input  type="radio" id="choix1"/>
       </FormControl>
       <FormControl display={"flex"}>
          <Text 
          mt={"10%"} mr={"20%"}> 20HP</Text>
          <input  type="radio" id="choix1"/>
       </FormControl>
       <FormControl display={"flex"}>
          <Text 
          mt={"10%"} mr={"20%"}> 25HP</Text>
          <input  type="radio" id="choix1"/>
       </FormControl>

        </Box>
            
            </Box>
            <Box
            display={"flex"}
            mx={"10%"}
           >
            <FormControl mt={"5%"}>
          
          <FormLabel
            fontSize={"20px"}
            mt={"10%"}
            fontWeight={"bold"}
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
           Facture Electricité:
          </FormLabel>
          
        </FormControl>
        <Box
        borderWidth="1px"
        rounded="lg"
        shadow=" 0px 1px 1px rgba(0, 0, 0, 0.25)"
        background="rgba(255, 249, 238, 0.18)"
        borderRadius="20px"
        border="1px solid #09A79D"
        maxWidth={500}
        p={6}
        m="10px auto"
        mt="2%"
        as="form"
  
        >
     <FormControl display={"flex"} >
          <Text  
            mr={"40%"}> 100Dt</Text>
          <input  type="radio" id="choix1"/>
       </FormControl>
        
       <FormControl display={"flex"} >
          <Text 
          mt={"10%"} mr={"40%"}> 150Dt</Text>
          <input  type="radio" id="choix1"/>
       </FormControl>

       <FormControl display={"flex"}>
          <Text 
          mt={"10%"} mr={"15%"}> 200Dt</Text>
          <input  type="radio" id="choix1"/>
       </FormControl>
       <FormControl display={"flex"}>
          <Text 
          mt={"10%"} mr={"15%"}> plus 200Dt</Text>
          <input  type="radio" id="choix1"/>
       </FormControl>
       
        </Box>
            
            </Box>
           
   
           
   
    
            </SimpleGrid>
      </>
    );
  };
  export default Form4;