import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa'

import { Container } from '../../styles/globalStyles';
import { AlunoContainer, ProfilePicture } from './style';
import axios from '../../services/axios';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);


  React.useEffect(() => {
    async function getData(params) {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }
    getData();
  }, []);


  return (
    <Container>
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map(aluno => {
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (<img src={aluno.Fotos[0].url} alt={`Aluno: ${aluno.nome} ${aluno.sobrenome}`} />) : (<FaUserCircle size={36} />)}
            </ProfilePicture>
            <span>{`${aluno.nome} ${aluno.sobrenome}` }</span>
            <span>{aluno.email}</span>
            <Link to={`/aluno/:${aluno.id}`}><FaEdit size={16}/></Link>
            <Link to={`/aluno/:${aluno.id}`}><FaWindowClose size={16}/></Link>
          </div>
        })}
      </AlunoContainer>
    </Container>
  );
}



