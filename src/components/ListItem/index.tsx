import * as C from './styles';
import { Item } from '../../types/Item';

//tipagem do item do array de tarefas
type ItemProps = {
    item: Item;
    onChange: (id: number, done: boolean) => void
}

//receb props do tipo ItemProps sendo passadas pela tag do componente no arquivo app
export const ListItem = ({item, onChange}: ItemProps) => {

    return(
        <C.Container done={item.done}>
            {/** checkbox */}
            <input 
                type="checkbox" 
                //{/** marcado passar valor booleano */}
                checked={item.done} 
                onChange={e => onChange(item.id, e.target.checked)} //quando marcado, passa o id e o valor boolano do checkbox
            />
            <label>{item.name}</label> {/* nome da tarefa */}
        </C.Container>
    )
}