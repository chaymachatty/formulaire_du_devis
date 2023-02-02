import Image from 'next/image';
import React, { useState } from 'react';
import img from '../Images/panneau.png';
import img1 from '../Images/1.png';
import img2 from'../Images/2.png';
import orientation from '../Images/orientation.png';
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
  
const Form3 = () => {
    return (
      <>
        
        <SimpleGrid columns={1} spacing={6}>
            <Box
            display={"flex"}
            mx={"10%"}
           >
            <FormControl mt={"10%"}>
          
          <FormLabel
            fontSize="sm"
            fontWeight={"bold"}
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Emplacement :
          </FormLabel>
          
        </FormControl>

            <Image
      src={img}
      alt="Logo"
     
    />
    <input type="radio" id="emplacement1"/>
    <Image
      src={img1}
      alt="Logo"
    />
    <input type="radio" id="emplacement1"/>
   
            </Box>
  <Box
  width={"350px"}
  height={"0.59px"}
  border={"1px solid #09A79D"} 
  ml={"10%"}
  >
    </Box>       

      

            <Box
           
            mx={"10%"}
           >
            <FormControl mb={"5%"}>
          
          <FormLabel
            fontSize="sm"
            fontWeight={"bold"}
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Dimensions: 
          </FormLabel>
          
        </FormControl>
        <Box display={"flex"}>
       
          <Image
         src={img2}
         width={60}
         length={40}/>
         <FormControl mt={"5%"} ml={"30%"}>
            <Input borderRadius={"50px"} 
            border="1px solid #09A79D"
            id="Hauteur" placeholder="Hauteur"
            width={'80%'} />
          </FormControl>
        </Box>
        <FormControl mt={"3%"} ml={"48%"} >
            <Input borderRadius={"50px"} 
            border="1px solid #09A79D"
            id="largeur" placeholder="Largeur"
            width={'42%'} />
          </FormControl>
            </Box>
            <Box
            display={"flex"}
            mx={"10%"}
           >
             <Box
  width={"500px"}
  height={"0.59px"}
  border={"1px solid #09A79D"} 
 
  >
    </Box>  
         
   
            </Box>
            <Box
           
           mx={"10%"}
          >
           <FormControl mb={"5%"}>
         
         <FormLabel
           fontSize="sm"
           fontWeight={"bold"}
           color="gray.700"
           _dark={{
             color: 'gray.50',
           }}>
           Orientations: 
         </FormLabel>
         
       </FormControl>
       <Box display={"flex"}>
      
         <Image
        src={orientation}
        width={60}
        length={40}/>
       <FormControl as={GridItem} colSpan={[6, 3]}>
         
         <Select
           id="orientation"
           name="orientation"
           autoComplete="orientation"
           placeholder="Orientation"
           borderRadius={"50px"} 
           border="1px solid #09A79D"
           shadow="sm"
           width={"50%"}
           length={"70%"}
           ml={"38%"}
          >
           <option>Sud-Ouest</option>
           <option>Sud</option>
           <option>Sud-Est</option>
         </Select>
       </FormControl>
 
       </Box>
       
           </Box>  
        
        </SimpleGrid>
      </>
    );
  };
  export default Form3;