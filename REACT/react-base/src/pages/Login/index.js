import React from 'react';
import { toast } from 'react-toastify';
import { func } from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/globalStyles';
import axios from '../../services/axios';
import * as exempleActions from '../../store/modules/example/actions';

function Login(){
  const dispacth = useDispatch();

  function handleclick(e){
    e.preventDefault();

    dispacth(exempleActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <h1>Login</h1>
      <button type='button' onClick={handleclick}>Enviar</button>
    </Container>
  );
}


export default Login;
