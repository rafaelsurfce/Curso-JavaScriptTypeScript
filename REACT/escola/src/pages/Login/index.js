import React from 'react';
import { Container } from '../../styles/globalStyles';
import axios from '../../services/axios';

export default function Login(){
  React.useEffect(()=>{
    async function getData() {
      const response = await axios.get();
      console.log(response.data);      
    }
    getData();
  }, []);
  return (
    <Container>
      <h1>Login</h1>
      
    </Container>
  );
}



