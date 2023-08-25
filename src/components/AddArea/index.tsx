import * as C from './styles';
import { useState, KeyboardEvent } from 'react';

//declarando tipo da tarefa TaskProps
type TaskProps = {
    onEnter: (taskName: string) => void //recebe uma função que recebe o nome da tarefa como parâmetro e não retorna nada
}

//recebdno uma prop do tipo TaskProps
export const AddArea = ({ onEnter }: TaskProps) => {
    //declarando estado pra armazenar o texto do input
    const [ inputText, setInputText ] = useState('');

    //Função que recebe um evento de teclado
    const handleKeyUp = (event: KeyboardEvent) => {
        //se a tecla for enter e o input não extiver vazio, chama a prop passando o estado que armazenou o texto e setando o estado inputText como vazio pra limpar o input
        if(event.code === 'Enter' && inputText !== '') {
            onEnter(inputText)
            setInputText('')
        }
    }

    return (
        <C.Container>
            <div className='image'>➕</div>
            <input 
                type="text" 
                placeholder="Adicione uma tarefa"
                value={inputText} //o valor do input é o valor do estado
                onChange={e => setInputText(e.target.value)} //seta o texto do input no estado
                onKeyUp={handleKeyUp} //chama função 
            />
        </C.Container>
    )
}