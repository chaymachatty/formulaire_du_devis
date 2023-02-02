import React, { useState } from 'react';
import styles from '../styles/input.module.css';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Title1 from './headings/title1';
import Title2 from './headings/title2';
import Title4 from './headings/title4';

import {
  Progress,
  Box,
  ButtonGroup,
  Button,
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
import Title3 from './headings/title3';
<Form1/>;
<Form2/>;
<Form3/>;
<Form4/>


export default function multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
       {step === 1 ?  <Title1 /> : step === 2 ? <Title2 /> : step === 3 ?<Title3 /> : <Title4/>}
        <Progress
          hasStripe
          value={progress}
          mt="2%"
          mb="5%"
         mx="35%"
          width={"30%"}
          isAnimated></Progress>
  
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
        background="rgba(255, 249, 238, 0.18)"
        borderRadius="40px"
        border="3px solid #09A79D"
        maxWidth={500}
        p={6}
        m="10px auto"
        mt="5%"
        as="form"
        >
    
      
         
        {step === 1 ?  <Form1 /> : step === 2 ? <Form2 /> : step=== 3 ? <Form3 /> : <Form4/>}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 25);
                }}
                isDisabled={step === 1}
                backgroundColor="#FAAE12"
                borderRadius={"50px"}
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 4}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 4) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 25);
                  }
                }}
               backgroundColor="#FAAE12"
                borderRadius={"50px"}
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 4 ? (
              <Button
                w="7rem"
                backgroundColor={"#FAAE12"}
                borderRadius={"50px"}
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}>
                Valider
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}