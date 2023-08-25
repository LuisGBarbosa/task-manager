import * as C from './App.styles';
import { useState } from 'react';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';


function App() {
  //Declarando estado do tipo Item e armazenando dois objetos default
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Tarefa de teste', done: false},
    { id: 2, name: 'Segunda tarefa de teste', done: true }
  ]);

  //função pra adicionar tarefa
  const handleAddTask = (taskName: string) => { //recebe como param o nome da tarefa
    
    //declarando array e pegando todos os valores do estado list
    let newList = [...list] 

    //setando novo objeto no array com dados da tarefa
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })

    //setando nova lista no estado
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list]
    for (let i in newList){
      if(newList[i].id === id){
        newList[i].done = done; //done do parâmetro
      }
    }

    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>

        <AddArea onEnter={handleAddTask} /> {/* prop onEnter executa a função handleAddTask */}

        {/** percorrendo lista de tarefas e pra cada uma, gerando um componente passando as props */}
        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTaskChange}/>
        ))}

      </C.Area>

    </C.Container>
  )
}

export default App
