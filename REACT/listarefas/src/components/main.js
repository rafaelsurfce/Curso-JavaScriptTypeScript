import React, { Component } from "react";
import './main.css';
import Form from './Form/index';
import Tarefas from './Tarefas/index';
export default class main extends Component {
  state = {            //estado do componente
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };


  componentDidUpdate(prevProps, prevState){
    const {tarefas} = this.state;             //resgatando as tarefas do estado
    if(tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  componentDidMount(){
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if(!tarefas) return;

    this.setState({tarefas});
  }

  inputMudou = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();                             //captura o envio do form
    const {tarefas, index} = this.state;                   //pega o vetor de tarefas
    let {novaTarefa} = this.state;                  //pega a tarefa salva
    novaTarefa = novaTarefa.trim();

    if(tarefas.indexOf(novaTarefa) !== -1) return;  //verifica se já tem essa tarefa

    const novasTarefas = [... tarefas];
    if(index === -1){
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else{
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1
      })
    }


  }

  handleDelete = (e, index) =>{
    const {tarefas} = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  }

  handleEdit = (e, index) =>{
    const {tarefas} = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  }

  render() {
    const { novaTarefa, tarefas,} = this.state;
    return (
      <div className="main">

        <h1>Lista de Tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          inputMudou={this.inputMudou}
          novaTarefa={novaTarefa}
          />

        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />


      </div>
    );
  }
}
