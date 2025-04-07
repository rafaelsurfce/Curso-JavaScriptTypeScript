import React from "react";
import {Switch} from 'react-router-dom';

import MyRoute from "./MyRoute";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import Alunos from "../pages/Alunos";
import Aluno from '../pages/Aluno';
import Register from "../pages/Register";
import Fotos from "../pages/Fotos";

export default function Routes(){
  return (
      <Switch>
        <MyRoute exact path='/login' component={Login} isClosed={false} />
        <MyRoute path='/alunos' component={Alunos} isClosed />
        <MyRoute path='/aluno/:id' component={Aluno} isClosed />
        <MyRoute path='/aluno' component={Aluno} isClosed />
        <MyRoute path='/register' component={Register} isClosed={false} />
        <MyRoute path='/fotos/:id' component={Fotos} isClosed />
        <MyRoute path='*' component={Page404} />
      </Switch>
  )
}


