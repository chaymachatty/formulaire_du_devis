import Image from 'next/image';
import Form from './Form';
import Form2 from './Form2';
import Form1 from './Form1';

import img from '../Images/ecosyst.png';
import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';
function HomePage(){
    
return <div>
    
   
    <Image
      src={img}
      alt="Logo"
      width="20px"
      height="80px"
    />
     
    <Form/>
</div>
}
export default HomePage;